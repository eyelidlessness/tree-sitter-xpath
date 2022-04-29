"use strict";
/// <reference types="tree-sitter-cli/dsl" />
const UNICODE_LETTER = /\p{L}/, UNICODE_DIGIT = /\d/, NAME_START_CHAR = choice(UNICODE_LETTER, '_'), NAME_CHAR = choice(NAME_START_CHAR, '-', '.', UNICODE_DIGIT), INTEGER = repeat1(UNICODE_DIGIT), DECIMAL = seq(repeat(UNICODE_DIGIT), token.immediate('.'), repeat1(token.immediate(UNICODE_DIGIT)));
const commaSep1 = (rule) => {
    return prec.left(seq(rule, repeat(seq(token.immediate(/\s*,\s*/), rule))));
};
const commaSep = (rule) => {
    return optional(commaSep1(rule));
};
const xpathGrammar = grammar({
    name: 'xpath',
    extras: ($) => [$._whitespace_extra, $.comment],
    conflicts: ($) => [
        [$._expr, $.step_expr],
        [$.kw, $.name_test],
        [$._infix_operator, $.identifier],
        [$.wildcard, $._infix_operator],
    ],
    inline: ($) => ([
        $.unary_expr,
        $.wildcard,
        $.infix_expression,
        $.forward_axis,
        $.reverse_axis,
        $._infix_operator,
        $._comparison_word,
    ]),
    rules: {
        query: ($) => alias($._expr, 'query'),
        _expr: ($) => prec.left(seq(choice($.function_call, $.infix_expression, $.path_expr, $._primary_expr, $.unary_expr, $.comment))),
        /** Currently only use in tests */
        comment: ($) => prec.left(seq(/\n?\(:/, repeat(alias(((/([^:()]|[:][^)]|[(][^:]|[^:][)]|[)][:])+/)), $.comment_content)), ':)')),
        _primary_expr: ($) => prec.left(23, choice($._literal, $.var_ref, $.id_function_call, $.function_call, $.parenthesized_expr, $.context_item_expr, $.unary_lookup)),
        _literal: ($) => choice($.string_literal, $._numeric_literal),
        string_literal: ($) => choice(seq('"', repeat(choice($.predefined_entity_ref, $.char_ref, $.escape_quote, /[^"&]/)), '"'), seq("'", repeat(choice($.predefined_entity_ref, $.char_ref, $.escape_apos, /[^'&]/)), "'")),
        _numeric_literal: ($) => choice($.integer_literal, $.decimal_literal),
        var_ref: ($) => seq('$', $._EQName),
        context_item_expr: ($) => prec.left(seq('.', optional($.path_expr))),
        // Higher precedence than arbirtrary function calls, because it produces a nodeset
        // TODO: other nodeset-returning functions specified in ODK; those as well as this likely
        // should be handled in the lookup query.
        id_function_call: ($) => prec.left(138, seq(token('id'), /\s*\(\s*/, $._expr, /\s*\)\s*/)),
        function_call: ($) => prec(137, seq(field('name', prec.left(10, seq($._EQName, token.immediate(/\s*\(\s*/)))), optional(field('args', prec.left(137, seq(commaSep($._argument))))), /\s*\)\s*/)),
        parenthesized_expr: ($) => prec(133, seq(token('('), optional($._expr), token(')'))),
        _postfix_expr: ($) => repeat1(choice($.predicate, $.postfix_lookup)),
        predicate: ($) => prec(20, seq('[', field('filter', $._expr), ']')),
        // 3.2.2 Dynamic Function Calls
        arg_list: ($) => prec(200, seq(token('('), commaSep($._argument), token(')'))),
        _argument: ($) => prec.left(19, field('argument', choice($.function_call, $._expr, '?'))),
        // 3.3 Path Expressions
        // https://docs.oracle.com/cd/E13190_01/liquiddata/docs81/xquery/query.html
        path_expr: ($) => prec.left(19, field('path', choice(seq(token('/'), optional($._relative_path_expr)), //parse-note-leading-lone-slash
        seq(token('//'), $._relative_path_expr), // must have relative_path_expr
        $._relative_path_expr))),
        _relative_path_expr: ($) => prec.left(109, field('step', seq($.step_expr, optional(repeat1(seq(choice(token.immediate('/'), token.immediate('//')), $.step_expr)))))),
        step_expr: ($) => prec.left(choice(seq($._primary_expr, optional($._postfix_expr)), $._axis_step)),
        _axis_step: ($) => prec.left(seq($._step, repeat($.predicate))),
        _step: ($) => prec.left(choice(seq(field('axis_movement', choice($.forward_axis, $.reverse_axis, optional($.abbrev_foward))), field('node_test', $._node_test)), $.abbrev_reverse)),
        abbrev_foward: (_$) => '@',
        abbrev_reverse: (_$) => '..',
        forward_axis: (_$) => prec.left(seq(choice('child', 'descendant', 'attribute', 'namespace', 'self', 'descendant-or-self', 'following-sibling', 'following'), token.immediate('::'))),
        reverse_axis: (_$) => prec.left(seq(choice('parent', 'ancestor', 'preceding-sibling', 'preceding', 'ancestor-or-self'), token.immediate('::'))),
        _node_test: ($) => prec.left(23, choice(alias($._be_kind, $.name_test), // in this context allow any kind keywords
        $.name_test, $._kind_test)),
        _be_kind: ($) => choice(field('unprefixed', $._kind_list), seq(field('prefix', $.identifier), token.immediate(':'), field('local_part', $._kind_list)), seq(field('prefix', $._kind_list), token.immediate(':'), field('local_part', $.identifier)), seq(field('prefix', $._kind_list), token.immediate(':'), field('local_part', $._kind_list))),
        _kind_list: ($) => prec.left(alias(choice('document-node', 'element', 'schema-element', 'attribute', 'schema-attribute', 'comment', 'namespace', 'namespace-node', 'text', 'node'), $.identifier)),
        infix_expression: ($) => prec.left(24, seq(field('lhs', $._expr), prec.left(24, repeat1(seq(field('operator', seq(repeat(prec.left(2, $._whitespace)), $._infix_operator, repeat(prec.left($._whitespace)))), field('rhs', $._expr)))))),
        unary_expr: ($) => prec.right(17, seq(choice('+', '-'), $._expr)),
        _infix_operator: ($) => choice(prec.left(22, /\s*\|\s*/), prec.left(21, seq($._comparison_word)), prec.left(20, /\s*([!<>]?=|<<?|>>?)\s*/), prec.left(19, seq(choice(token.immediate(/\s+\*\s+/), token.immediate(/\s+div\s+/), token.immediate(/\s+idiv\s+/), token.immediate(/\s+mod\s+/)))), prec.left(18, choice(token(/\s*\+\s*/), token(/\s*-\s*/))), prec.left(' ')),
        _comparison_word: () => prec.left(210, choice(token.immediate(' and '), token.immediate(' or '), token.immediate(' eq '), token.immediate(' ne '), token.immediate(' lt '), token.immediate(' le '), token.immediate(' gt '), token.immediate(' ge '), token.immediate(' is '), token.immediate('and'), token.immediate('or'), token.immediate('eq'), token.immediate('ne'), token.immediate('lt'), token.immediate('le'), token.immediate('gt'), token.immediate('ge'), token.immediate('is'))),
        _whitespace_extra: ($) => alias($._whitespace, '_whitespace_extra'),
        _whitespace: () => /\s/,
        single_type: ($) => prec.left(seq($._EQName, optional('?'))),
        char_ref: (_$) => choice(seq('&#', repeat1(/[0-9]/), ';'), seq('&#x', repeat1(/[0-9a-fA-F]/), ';')),
        escape_curly: (_$) => choice('{{', '}}'),
        predefined_entity_ref: (_$) => seq('&', choice('lt', 'gt', 'amp', 'quot', 'apos'), ';'),
        escape_apos: (_$) => "''",
        escape_quote: (_$) => '""',
        // TODO this is not correct  string content is external in other tree sitters
        char_group: (_$) => token(prec.left(repeat1(/[^`\]]/))),
        interpolation: ($) => seq('`{', commaSep($._expr), '}`'),
        postfix_lookup: ($) => prec.left(20, seq('?', $._key_specifier)),
        unary_lookup: ($) => prec.left(21, seq('?', $._key_specifier)),
        _key_specifier: ($) => choice($.NCName, $.lookup_digit, $.parenthesized_expr, prec.left(alias(token.immediate('*'), $.wildcard)), alias(token('*'), $.wildcard)),
        lookup_digit: (_$) => repeat1(/\d/),
        // 3.14 Conditional Expressions
        if_expr: ($) => prec(2, seq('if', field('if_test', seq(token('('), $._expr, token(')'))), 'then', field('if_consequence', $._expr), 'else', field('if_alternative', $._expr))),
        _kind_test: ($) => field('kind_test', choice($.document_test, $.element_test, $.attribute_test, $.schema_element_test, $.schema_attribute_test, $.pi_test, $.any_kind_test, $.comment_test, $.namespace_node_test, $.text_test)),
        any_kind_test: (_$) => seq('node', '(', ')'),
        text_test: (_$) => seq('text', '(', ')'),
        comment_test: (_$) => seq('comment', '(', ')'),
        namespace_node_test: (_$) => seq('namespace-node', '(', ')'),
        document_test: ($) => seq('document-node', '(', optional(choice($.element_test, $.schema_element_test)), ')'),
        // wildcard - element() same as element(*)
        element_test: ($) => seq('element', field('type_params', seq('(', optional($.element_test_params), ')'))),
        element_test_params: ($) => seq(field('param', choice(alias('*', $.wildcard), $._EQName)), optional(seq(',', field('param', $._EQName)))),
        // same as element but no nilled test as attributes don't have children
        attribute_test: ($) => seq('attribute', '(', optional(seq($._attrib_name_or_wildcard, optional(seq(',', field('type_name', $._EQName))))), ')'),
        _attrib_name_or_wildcard: ($) => choice(field('attribute_name', $._EQName), alias('*', $.wildcard)),
        schema_element_test: ($) => seq('schema-element', '(', field('element_name', $._EQName), ')'),
        schema_attribute_test: ($) => seq('schema-attribute', '(', field('attribute_name', $._EQName), ')'),
        pi_test: ($) => seq('processing-instruction', seq('(', optional(field('param', choice($.NCName, $.string_literal))), ')')),
        name_test: ($) => prec.left(field('name_test', choice($._EQName, $.wildcard))),
        wildcard: ($) => prec.left(choice('*', seq($.NCName, ':*'), seq('*:', $.NCName))),
        integer_literal: (_$) => token(INTEGER),
        decimal_literal: (_$) => token(DECIMAL),
        _EQName: ($) => choice(seq(field('ns_builtin', alias($.ns_builtin, $.identifier)), token.immediate(':'), field('local_part', $.identifier)), $._QName),
        _QName: ($) => choice(field('unprefixed', $.identifier), seq(field('prefix', $.identifier), token.immediate(':'), field('local_part', $.identifier))),
        ns_builtin: (_$) => choice('xml', 'xs', 'xsi', 'fn', 'map', 'array', 'math', 'err', 'output', 'local'),
        kw: (_$) => token(choice('ancestor', 'ancestor-or-self', 'and', 'array', 'as', 'ascending', 'at', 'attribute', 'base-uri', 'boundary-space', 'by', 'case', 'cast', 'castable', 'catch', 'child', 'collation', 'comment', 'construction', 'context', 'copy-namespaces', 'count', 'decimal-format', 'decimal-separator', 'declare', 'default', 'descendant', 'descendant-or-self', 'descending', 'digit', 'div', 'document', 'document-node', 'element', 'else', 'empty', 'empty-sequence', 'encoding', 'end', 'eq', 'every', 'except', 'exponent-separator', 'external', 'following', 'following-sibling', 'for', 'function', 'ge', 'greatest', 'group', 'grouping-separator', 'gt', 'idiv', 'if', 'import', 'in', 'infinity', 'inherit', 'instance', 'intersect', 'is', 'item', 'lax', 'le', 'least', 'let', 'lt', 'map', 'minus-sign', 'mod', 'module', 'namespace', 'namespace-node', 'ne', 'next', 'no-inherit', 'no-preserve', 'node', 'of', 'only', 'option', 'or', 'order', 'ordered', 'ordering', 'parent', 'pattern-separator', 'per-mille', 'percent', 'preceding', 'preceding-sibling', 'preserve', 'previous', 'processing-instruction', 'return', 'satisfies', 'schema', 'schema-attribute', 'schema-element', 'self', 'sliding', 'some', 'stable', 'start', 'strict', 'strip', 'switch', 'text', 'then', 'to', 'treat', 'try', 'tumbling', 'type', 'typeswitch', 'union', 'unordered', 'validate', 'variable', 'version', 'when', 'where', 'window', 'xquery', 'zero-digit')),
        NCName: ($) => $.identifier,
        reserved: (_$) => choice('array', 'attribute', 'comment', 'document-node', 'element', 'empty-sequence', 'function', 
        // 'if',
        'item', 'map', 'namespace', 'namespace-node', 'node', 'processing-instruction', 'schema-attribute', 'schema-element', 'switch', 'text', 'typeswitch'),
        identifier: (_$) => token(seq(NAME_START_CHAR, repeat(token.immediate(NAME_CHAR)))),
    },
});
module.exports = xpathGrammar;
//# sourceMappingURL=grammar.js.map