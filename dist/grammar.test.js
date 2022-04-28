"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const perf_hooks_1 = require("perf_hooks");
const tree_sitter_1 = __importDefault(require("tree-sitter"));
const orxe_paths_1 = __importDefault(require("./orxe-paths"));
const collectErrors = (node) => {
    let errors = [];
    if (node.hasError() && node.type.match(/^[A-Z]/)) {
        errors.push(node);
    }
    errors.push(...node.children.flatMap(collectErrors));
    return errors;
};
(async () => {
    const bindings = 'node';
    const xPath = require(`../bindings/${bindings}`);
    const pathExpressionsQuery = new tree_sitter_1.default.Query(xPath, /* clj */ `
    (path_expr path: (_) @path.field)
    (path_expr (step_expr node_test: (_))) @path.node_test
    (path_expr (step_expr axis_movement: (_))) @path.axis_mopvement
    (path_expr (step_expr (context_item_expr))) @path.named
    (context_item_expr) @path.not_named
    ((path_expr) @path.root (#match? @path.root "^[/.]"))
    (id_function_call) @path.id
  `);
    let results = null;
    let times = {};
    times = {};
    results = {
        details: [],
        missing: 0,
        unexpected: 0,
        failed: 0,
        passed: 0,
        expressionsWithErrors: 0,
        errorNodes: 0,
        passingExpressionsWithErrors: [],
    };
    let parsed = 0;
    const parser = new tree_sitter_1.default();
    parser.setLanguage(xPath);
    for (const [expression, paths] of Object.entries(orxe_paths_1.default)) {
        const start = perf_hooks_1.performance.now();
        const { rootNode } = parser.parse(expression);
        parsed++;
        let matchedPathNodes = [];
        try {
            matchedPathNodes = pathExpressionsQuery.captures(rootNode)
                .reduce((acc, { name: _name, node }) => {
                var _a;
                const previousNodeIndex = acc.length - 1;
                const previousNode = acc[previousNodeIndex];
                const overlapsPreviousNode = node.startIndex <= ((_a = previousNode === null || previousNode === void 0 ? void 0 : previousNode.endIndex) !== null && _a !== void 0 ? _a : -1);
                if (!overlapsPreviousNode) {
                    acc.push(node);
                }
                return acc;
            }, []);
        }
        catch (error) {
            results.failed++;
        }
        const matchedPaths = new Set(matchedPathNodes.reduce((acc, node) => {
            const { text } = node;
            if (/^\s+$/.test(text)) {
                return acc;
            }
            else {
                acc.push(text.trim());
            }
            return acc;
        }, []));
        const expectedPaths = new Set(paths);
        let missing = [];
        let unexpected = [];
        for (const path of expectedPaths.values()) {
            if (!matchedPaths.has(path)) {
                missing.push(path);
            }
        }
        for (const path of matchedPaths.values()) {
            if (!expectedPaths.has(path)) {
                unexpected.push(path);
            }
        }
        const missingLength = missing.length;
        const unexpectedLength = unexpected.length;
        const errorNodes = collectErrors(rootNode);
        const errorNodesCount = errorNodes.length;
        const isPassing = missingLength === 0 && unexpectedLength === 0;
        if (errorNodesCount > 0) {
            results.expressionsWithErrors += 1;
            results.errorNodes += errorNodesCount;
            if (isPassing) {
                results.passingExpressionsWithErrors.push(expression, String(rootNode), ...errorNodes.map((node) => node.text));
            }
        }
        if (!isPassing) {
            let result = {
                expected: Array.from(expectedPaths),
                matched: Array.from(matchedPaths),
            };
            results.missing += missingLength;
            results.unexpected += unexpectedLength;
            results.failed++;
            if (missingLength > 0) {
                result.missing = missing;
            }
            if (unexpectedLength > 0) {
                result.unexpected = unexpected;
            }
            result.parsed = String(rootNode);
            results.details.unshift([expression, result]);
            // break;
        }
        else {
            results.passed++;
        }
        times[expression] = perf_hooks_1.performance.now() - start;
    }
    if (results != null) {
        const [slowest] = Object.entries(times).sort(([, a], [, b]) => b - a);
        const finalResults = {
            ...results,
            slowestResult: [slowest[0], `${slowest[1].toFixed(2)} ms`],
        };
        console.log('results', JSON.stringify(finalResults, null, 2));
    }
})();
//# sourceMappingURL=grammar.test.js.map