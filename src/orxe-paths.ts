export default {
  '/xpath/expression': [
    '/xpath/expression'
  ],
  'concat("Evaluates to: ", /xpath/expression)': [
    '/xpath/expression'
  ],
  './author': [
    './author'
  ],
  author: [
    'author'
  ],
  'first.name': [
    'first.name'
  ],
  '/bookstore': [
    '/bookstore'
  ],
  '//author': [
    '//author'
  ],
  'author/first-name': [
    'author/first-name'
  ],
  'bookstore//title': [
    'bookstore//title'
  ],
  'bookstore/*/title': [
    'bookstore/*/title'
  ],
  'bookstore//book/excerpt//emph': [
    'bookstore//book/excerpt//emph'
  ],
  './/title': [
    './/title'
  ],
  'book/*/last-name': [
    'book/*/last-name'
  ],
  '@style': [
    '@style'
  ],
  'price/@exchange': [
    'price/@exchange'
  ],
  'price/@exchange/total': [
    'price/@exchange/total'
  ],
  'book/@style': [
    'book/@style'
  ],
  './first-name': [
    './first-name'
  ],
  'first-name': [
    'first-name'
  ],
  'my:book': [
    'my:book'
  ],
  '../../some-path': [
    '../../some-path'
  ],
  '*/*': [
    '*/*'
  ],
  '@*': [
    '@*'
  ],
  '@my:*': [
    '@my:*'
  ],
  'my:*': [
    'my:*'
  ],
  '/simple/xpath/to/node = 1': [
    '/simple/xpath/to/node'
  ],
  '/simple/xpath/to/node != 1': [
    '/simple/xpath/to/node'
  ],
  '/simple/xpath/to/node < 1': [
    '/simple/xpath/to/node'
  ],
  '/simple/xpath/to/node > 1': [
    '/simple/xpath/to/node'
  ],
  '/simple/xpath/to/node <= 1': [
    '/simple/xpath/to/node'
  ],
  '/simple/xpath/to/node >= 1': [
    '/simple/xpath/to/node'
  ],
  '/simple/xpath/to/node = "1"': [
    '/simple/xpath/to/node'
  ],
  '/simple/xpath/to/node != "1"': [
    '/simple/xpath/to/node'
  ],
  'if(selected(/model/instance[1]/pregnancy/group_lmp/lmp_method, \'date\'), /model/instance[1]/pregnancy/group_lmp/lmp_date, \'testing\')': [
    '/model/instance[1]/pregnancy/group_lmp/lmp_method',
    '/model/instance[1]/pregnancy/group_lmp/lmp_date'
  ],
  'if(selected(/model/instance[1]/pregnancy/group_lmp/lmp_method, \'date\'), /model/instance[1]/pregnancy/group_lmp/lmp_date, concat(\'testing\', \'1\', \'2\', \'3\', \'...\'))': [
    '/model/instance[1]/pregnancy/group_lmp/lmp_method',
    '/model/instance[1]/pregnancy/group_lmp/lmp_date'
  ],
  'if(selected(/model/instance[1]/pregnancy/group_lmp/lmp_method, \'date\'), /model/instance[1]/pregnancy/group_lmp/lmp_date, date-time(0))': [
    '/model/instance[1]/pregnancy/group_lmp/lmp_method',
    '/model/instance[1]/pregnancy/group_lmp/lmp_date'
  ],
  'if(selected(/model/instance[1]/pregnancy/group_lmp/lmp_method, \'date\'), /model/instance[1]/pregnancy/group_lmp/lmp_date, date-time(decimal-date-time(today() - 60)))': [
    '/model/instance[1]/pregnancy/group_lmp/lmp_method',
    '/model/instance[1]/pregnancy/group_lmp/lmp_date'
  ],
  'if(selected(/model/instance[1]/pregnancy/group_lmp/lmp_method ,\'date\'), /model/instance[1]/pregnancy/group_lmp/lmp_date ,date-time(decimal-date-time(today()- 60 )))': [
    '/model/instance[1]/pregnancy/group_lmp/lmp_method',
    '/model/instance[1]/pregnancy/group_lmp/lmp_date'
  ],
  'if(/something, \'A\', \'B\' )': [
    '/something'
  ],
  'if(/something  != \'\', \'A\', \'B\' )': [
    '/something'
  ],
  'if (/something, \'A\', \'B\' )': [
    '/something'
  ],
  'if (/something  != \'\', \'A\', \'B\' )': [
    '/something'
  ],
  'not(selected(../dob_method,\'approx\'))': [
    '../dob_method'
  ],
  'not(not(selected(../dob_method,\'approx\')))': [
    '../dob_method'
  ],
  'selected(../dob_method,\'approx\')': [
    '../dob_method'
  ],
  '.': [
    '.'
  ],
  '.>1': [
    '.'
  ],
  '.> 1': [
    '.'
  ],
  '. >1': [
    '.'
  ],
  '. > 1': [
    '.'
  ],
  '.>=1': [
    '.'
  ],
  '.>= 1': [
    '.'
  ],
  '. >=1': [
    '.'
  ],
  '. >= 1': [
    '.'
  ],
  '.<1': [
    '.'
  ],
  '.< 1': [
    '.'
  ],
  '. <1': [
    '.'
  ],
  '. < 1': [
    '.'
  ],
  '.<=1': [
    '.'
  ],
  '.<= 1': [
    '.'
  ],
  '. <=1': [
    '.'
  ],
  '. <= 1': [
    '.'
  ],
  '../some-path=\'some-value\'': [
    '../some-path'
  ],
  '../some-path="some-value"': [
    '../some-path'
  ],
  '../some-path= \'some-value\'': [
    '../some-path'
  ],
  '../some-path =\'some-value\'': [
    '../some-path'
  ],
  '../some-path = \'some-value\'': [
    '../some-path'
  ],
  '\'some-value\'=../some-path': [
    '../some-path'
  ],
  '"some-value"=../some-path': [
    '../some-path'
  ],
  '\'some-value\'= ../some-path': [
    '../some-path'
  ],
  '\'some-value\' =../some-path': [
    '../some-path'
  ],
  '\'some-value\' = ../some-path': [
    '../some-path'
  ],
  '/simple/xpath/to/node < today() + 1': [
    '/simple/xpath/to/node'
  ],
  '/simple/xpath/to/node > today() + 1': [
    '/simple/xpath/to/node'
  ],
  '/simple/xpath/to/node > today() - 1': [
    '/simple/xpath/to/node'
  ],
  '/simple/xpath/to/node < today() - 1': [
    '/simple/xpath/to/node'
  ],
  '/simple/xpath/to/node < (today() + 1)': [
    '/simple/xpath/to/node'
  ],
  '/simple/xpath/to/node > (today() + 1)': [
    '/simple/xpath/to/node'
  ],
  '/simple/xpath/to/node > (today() - 1)': [
    '/simple/xpath/to/node'
  ],
  '/simple/xpath/to/node < (today() - 1)': [
    '/simple/xpath/to/node'
  ],
  '/data/a!= /data/b': [
    '/data/a',
    '/data/b'
  ],
  '/data/a!=/data/b': [
    '/data/a',
    '/data/b'
  ],
  '/data/a!= "1"': [
    '/data/a'
  ],
  '/data/a!="1"': [
    '/data/a'
  ],
  '"1" != /data/a': [
    '/data/a'
  ],
  '"1"!= /data/a': [
    '/data/a'
  ],
  '"1"!=/data/a': [
    '/data/a'
  ],
  '/data/a<= /data/b': [
    '/data/a',
    '/data/b'
  ],
  '/data/a<=/data/b': [
    '/data/a',
    '/data/b'
  ],
  '/data/a<= "1"': [
    '/data/a'
  ],
  '/data/a<="1"': [
    '/data/a'
  ],
  '"1" <= /data/a': [
    '/data/a'
  ],
  '"1"<= /data/a': [
    '/data/a'
  ],
  '"1"<=/data/a': [
    '/data/a'
  ],
  '/data/a>= /data/b': [
    '/data/a',
    '/data/b'
  ],
  '/data/a>=/data/b': [
    '/data/a',
    '/data/b'
  ],
  '/data/a>= "1"': [
    '/data/a'
  ],
  '/data/a>="1"': [
    '/data/a'
  ],
  '"1" >= /data/a': [
    '/data/a'
  ],
  '"1">= /data/a': [
    '/data/a'
  ],
  '"1">=/data/a': [
    '/data/a'
  ],
  '/data/number + 1': [
    '/data/number'
  ],
  '/data/number+1': [
    '/data/number'
  ],
  '../number + 1': [
    '../number'
  ],
  '../number+1': [
    '../number'
  ],
  'boolean(/xhtml:html)': [
    '/xhtml:html'
  ],
  'boolean(/asdf)': [
    '/asdf'
  ],
  'boolean(//xhtml:article)': [
    '//xhtml:article'
  ],
  '-10 = *': [
    '*'
  ],
  '-10 != *': [
    '*'
  ],
  '4 = *': [
    '*'
  ],
  '4 != *': [
    '*'
  ],
  '4.3 = *': [
    '*'
  ],
  '4.3 != *': [
    '*'
  ],
  'true() = *': [
    '*'
  ],
  'true() != *': [
    '*'
  ],
  'false() = *': [
    '*'
  ],
  'false() != *': [
    '*'
  ],
  '0 = *': [
    '*'
  ],
  '0 != *': [
    '*'
  ],
  '\'aaa\' = *': [
    '*'
  ],
  '\'aaa\' != *': [
    '*'
  ],
  '\'bb\' = *': [
    '*'
  ],
  '\'bb\' != *': [
    '*'
  ],
  '\'\' = *': [
    '*'
  ],
  '\'\' != *': [
    '*'
  ],
  '-10 < *': [
    '*'
  ],
  '-10 <= *': [
    '*'
  ],
  '-10 > *': [
    '*'
  ],
  '-10 >= *': [
    '*'
  ],
  '10 < *': [
    '*'
  ],
  '10 <= *': [
    '*'
  ],
  '10 > *': [
    '*'
  ],
  '10 >= *': [
    '*'
  ],
  '5 < *': [
    '*'
  ],
  '5 <= *': [
    '*'
  ],
  '5 > *': [
    '*'
  ],
  '5 >= *': [
    '*'
  ],
  '2 < *': [
    '*'
  ],
  '2 <= *': [
    '*'
  ],
  '2 > *': [
    '*'
  ],
  '2 >= *': [
    '*'
  ],
  'true() < *': [
    '*'
  ],
  'true() <= *': [
    '*'
  ],
  'true() > *': [
    '*'
  ],
  'true() >= *': [
    '*'
  ],
  'false() < *': [
    '*'
  ],
  'false() <= *': [
    '*'
  ],
  'false() > *': [
    '*'
  ],
  'false() >= *': [
    '*'
  ],
  '\'4\' < *': [
    '*'
  ],
  '\'4\' <= *': [
    '*'
  ],
  '\'4\' > *': [
    '*'
  ],
  '\'4\' >= *': [
    '*'
  ],
  '* < -10': [
    '*'
  ],
  '* <= -10': [
    '*'
  ],
  '* > -10': [
    '*'
  ],
  '* >= -10': [
    '*'
  ],
  '* < 10': [
    '*'
  ],
  '* <= 10': [
    '*'
  ],
  '* > 10': [
    '*'
  ],
  '* >= 10': [
    '*'
  ],
  '* < 5': [
    '*'
  ],
  '* <= 5': [
    '*'
  ],
  '* > 5': [
    '*'
  ],
  '* >= 5': [
    '*'
  ],
  '* < 2': [
    '*'
  ],
  '* <= 2': [
    '*'
  ],
  '* > 2': [
    '*'
  ],
  '* >= 2': [
    '*'
  ],
  '* < true()': [
    '*'
  ],
  '* <= true()': [
    '*'
  ],
  '* > true()': [
    '*'
  ],
  '* >= true()': [
    '*'
  ],
  '* < false()': [
    '*'
  ],
  '* <= false()': [
    '*'
  ],
  '* > false()': [
    '*'
  ],
  '* >= false()': [
    '*'
  ],
  '* < \'4\'': [
    '*'
  ],
  '* <= \'4\'': [
    '*'
  ],
  '* > \'4\'': [
    '*'
  ],
  '* >= \'4\'': [
    '*'
  ],
  '* < \'aaa\'': [
    '*'
  ],
  '* <= \'aaa\'': [
    '*'
  ],
  '* > \'aaa\'': [
    '*'
  ],
  '* >= \'aaa\'': [
    '*'
  ],
  '\'aaa\' < *': [
    '*'
  ],
  '\'aaa\' <= *': [
    '*'
  ],
  '\'aaa\' > *': [
    '*'
  ],
  '\'aaa\' >= *': [
    '*'
  ],
  '0 < *': [
    '*'
  ],
  '0 <= *': [
    '*'
  ],
  '0 > *': [
    '*'
  ],
  '0 >= *': [
    '*'
  ],
  '\'\' < *': [
    '*'
  ],
  '\'\' <= *': [
    '*'
  ],
  '\'\' > *': [
    '*'
  ],
  '\'\' >= *': [
    '*'
  ],
  '* < 0': [
    '*'
  ],
  '* <= 0': [
    '*'
  ],
  '* > 0': [
    '*'
  ],
  '* >= 0': [
    '*'
  ],
  '* < \'\'': [
    '*'
  ],
  '* <= \'\'': [
    '*'
  ],
  '* > \'\'': [
    '*'
  ],
  '* >= \'\'': [
    '*'
  ],
  '* = -10': [
    '*'
  ],
  '* = 4': [
    '*'
  ],
  '* = 4.3': [
    '*'
  ],
  '* = 0': [
    '*'
  ],
  '* = true()': [
    '*'
  ],
  '* = false()': [
    '*'
  ],
  '* = \'aaa\'': [
    '*'
  ],
  '* = \'bb\'': [
    '*'
  ],
  '* = \'\'': [
    '*'
  ],
  '* != -10': [
    '*'
  ],
  '* != 4': [
    '*'
  ],
  '* != 4.3': [
    '*'
  ],
  '* != 0': [
    '*'
  ],
  '* != true()': [
    '*'
  ],
  '* != false()': [
    '*'
  ],
  '* != \'aaa\'': [
    '*'
  ],
  '* != \'bb\'': [
    '*'
  ],
  '* != \'\'': [
    '*'
  ],
  'id(\'ComparisonOperatorCaseNodesetNegative5to5\')/* < id(\'ComparisonOperatorCaseNodesetEmpty\')/*': [
    'id(\'ComparisonOperatorCaseNodesetNegative5to5\')/*',
    'id(\'ComparisonOperatorCaseNodesetEmpty\')/*'
  ],
  'id (\'ComparisonOperatorCaseNodesetNegative5to5\')/* < id( \'ComparisonOperatorCaseNodesetEmpty\')/*': [
    'id (\'ComparisonOperatorCaseNodesetNegative5to5\')/*',
    'id( \'ComparisonOperatorCaseNodesetEmpty\')/*'
  ],
  'id ( \'ComparisonOperatorCaseNodesetNegative5to5\' )/* < id( \'ComparisonOperatorCaseNodesetEmpty\' )/*': [
    'id ( \'ComparisonOperatorCaseNodesetNegative5to5\' )/*',
    'id( \'ComparisonOperatorCaseNodesetEmpty\' )/*'
  ],
  'id(\'ComparisonOperatorCaseNodesetNegative5to5\')/* <= id(\'ComparisonOperatorCaseNodesetEmpty\')/*': [
    'id(\'ComparisonOperatorCaseNodesetNegative5to5\')/*',
    'id(\'ComparisonOperatorCaseNodesetEmpty\')/*'
  ],
  'id(\'ComparisonOperatorCaseNodesetNegative5to5\')/* > id(\'ComparisonOperatorCaseNodesetEmpty\')/*': [
    'id(\'ComparisonOperatorCaseNodesetNegative5to5\')/*',
    'id(\'ComparisonOperatorCaseNodesetEmpty\')/*'
  ],
  'id(\'ComparisonOperatorCaseNodesetNegative5to5\')/* >= id(\'ComparisonOperatorCaseNodesetEmpty\')/*': [
    'id(\'ComparisonOperatorCaseNodesetNegative5to5\')/*',
    'id(\'ComparisonOperatorCaseNodesetEmpty\')/*'
  ],
  'id(\'ComparisonOperatorCaseNodesetNegative5to5\')/* < id(\'ComparisonOperatorCaseNodeset4to8\')/*': [
    'id(\'ComparisonOperatorCaseNodesetNegative5to5\')/*',
    'id(\'ComparisonOperatorCaseNodeset4to8\')/*'
  ],
  'id(\'ComparisonOperatorCaseNodesetNegative5to5\')/* <= id(\'ComparisonOperatorCaseNodeset4to8\')/*': [
    'id(\'ComparisonOperatorCaseNodesetNegative5to5\')/*',
    'id(\'ComparisonOperatorCaseNodeset4to8\')/*'
  ],
  'id(\'ComparisonOperatorCaseNodesetNegative5to5\')/* > id(\'ComparisonOperatorCaseNodeset4to8\')/*': [
    'id(\'ComparisonOperatorCaseNodesetNegative5to5\')/*',
    'id(\'ComparisonOperatorCaseNodeset4to8\')/*'
  ],
  'id(\'ComparisonOperatorCaseNodesetNegative5to5\')/* >= id(\'ComparisonOperatorCaseNodeset4to8\')/*': [
    'id(\'ComparisonOperatorCaseNodesetNegative5to5\')/*',
    'id(\'ComparisonOperatorCaseNodeset4to8\')/*'
  ],
  'id(\'ComparisonOperatorCaseNodesetNegative5to5\')/* < id(\'ComparisonOperatorCaseNodeset6to10\')/*': [
    'id(\'ComparisonOperatorCaseNodesetNegative5to5\')/*',
    'id(\'ComparisonOperatorCaseNodeset6to10\')/*'
  ],
  'id(\'ComparisonOperatorCaseNodesetNegative5to5\')/* <= id(\'ComparisonOperatorCaseNodeset6to10\')/*': [
    'id(\'ComparisonOperatorCaseNodesetNegative5to5\')/*',
    'id(\'ComparisonOperatorCaseNodeset6to10\')/*'
  ],
  'id(\'ComparisonOperatorCaseNodesetNegative5to5\')/* > id(\'ComparisonOperatorCaseNodeset6to10\')/*': [
    'id(\'ComparisonOperatorCaseNodesetNegative5to5\')/*',
    'id(\'ComparisonOperatorCaseNodeset6to10\')/*'
  ],
  'id(\'ComparisonOperatorCaseNodesetNegative5to5\')/* >= id(\'ComparisonOperatorCaseNodeset6to10\')/*': [
    'id(\'ComparisonOperatorCaseNodesetNegative5to5\')/*',
    'id(\'ComparisonOperatorCaseNodeset6to10\')/*'
  ],
  '/thedata/nodeA': [
    '/thedata/nodeA'
  ],
  '/thedata/nodeB': [
    '/thedata/nodeB'
  ],
  '/thedata/nodeC': [
    '/thedata/nodeC'
  ],
  '/model/instance[1]/*//*[@template] | /model/instance[1]/*//*[@jr:template]': [
    '/model/instance[1]/*//*[@template]',
    '/model/instance[1]/*//*[@jr:template]'
  ],
  'attribute::*': [
    'attribute::*'
  ],
  'child::*': [
    'child::*'
  ],
  'ancestor-or-self::*': [
    'ancestor-or-self::*'
  ],
  'attribute::attrib3': [
    'attribute::attrib3'
  ],
  'child::html': [
    'child::html'
  ],
  'child::xhtml:html': [
    'child::xhtml:html'
  ],
  'ancestor::xhtml:div': [
    'ancestor::xhtml:div'
  ],
  'ancestor::div': [
    'ancestor::div'
  ],
  'id(.)': [
    'id(.)'
  ],
  'id(child::*)': [
    'id(child::*)'
  ],
  'local-name(/htmlnot)': [
    '/htmlnot'
  ],
  'namespace-uri(/htmlnot)': [
    '/htmlnot'
  ],
  'name(/htmlnot)': [
    '/htmlnot'
  ],
  'last()': [],
  'last()-last()+1': [],
  'position()=last()': [],
  'position()=2': [],
  'position()=-1': [],
  'count(xhtml:p)': [
    'xhtml:p'
  ],
  '1 + count(xhtml:p)': [
    'xhtml:p'
  ],
  'count(p)': [
    'p'
  ],
  '1 + count(p)': [
    'p'
  ],
  'count(//nonexisting)': [
    '//nonexisting'
  ],
  '1 + count(//nonexisting)': [
    '//nonexisting'
  ],
  'number(*)': [
    '*'
  ],
  'sum(self::*)': [
    'self::*'
  ],
  'sum(*)': [
    '*'
  ],
  '/': [
    '/'
  ],
  '/html': [
    '/html'
  ],
  '/xhtml:html': [
    '/xhtml:html'
  ],
  '/htmlnot': [
    '/htmlnot'
  ],
  '/xhtml:html/xhtml:body': [
    '/xhtml:html/xhtml:body'
  ],
  html: [
    'html'
  ],
  'xhtml:html': [
    'xhtml:html'
  ],
  'xhtml:html/xhtml:body': [
    'xhtml:html/xhtml:body'
  ],
  'child::*/attribute::*': [
    'child::*/attribute::*'
  ],
  'ancestor-or-self::* /ancestor-or-self::*': [
    'ancestor-or-self::*',
    '/ancestor-or-self::*'
  ],
  '/ancestor-or-self::* ancestor-or-self::*': [
    'ancestor-or-self::*',
    '/ancestor-or-self::*'
  ],
  'string(namespace-uri(/*))': [
    '/*'
  ],
  'translate( ., "abc", "ABC")': [
    '.'
  ],
  'string(/htmlnot)': [
    '/htmlnot'
  ],
  'id(\'nss25\')/namespace::*': [
    'id(\'nss25\')/namespace::*'
  ],
  'id(\'nss25\')/namespace::* | id(\'nss25\')/attribute::*': [
    'id(\'nss25\')/namespace::*',
    'id(\'nss25\')/attribute::*'
  ],
  'id(\'nss40\')/namespace::*': [
    'id(\'nss40\')/namespace::*'
  ],
  'id(\'nss40\')/namespace::* | id(\'nss40\')/namespace::*': [
    'id(\'nss40\')/namespace::*',
    'id(\'nss40\')/namespace::*'
  ],
  'id(\'nss40\')/namespace::* | id(\'nss25\')/attribute::* | id(\'nss25\')': [
    'id(\'nss40\')/namespace::*',
    'id(\'nss25\')/attribute::*',
    'id(\'nss25\')'
  ],
  '/div/div/div/div/div|id(\'eee20\')': [
    '/div/div/div/div/div',
    'id(\'eee20\')'
  ],
  'id(\'eee40\')/attribute::*': [
    'id(\'eee40\')/attribute::*'
  ],
  '/div': [
    '/div'
  ],
  '1or1': [],
  'area(./*)': [
    './*'
  ],
  'distance(./*)': [
    './*'
  ],
  'area(.)': [
    '.'
  ],
  'distance(.)': [
    '.'
  ],
  'checklist(2, 2, * )': [
    '*'
  ],
  'coalesce(/simple/xpath/to/node, "whatever")': [
    '/simple/xpath/to/node'
  ],
  'coalesce("", /simple/xpath/to/node)': [
    '/simple/xpath/to/node'
  ],
  'coalesce(/simple/empty, /simple/xpath/to/node)': [
    '/simple/empty',
    '/simple/xpath/to/node'
  ],
  'coalesce(/simple/xpath/to/node, "SECOND")': [
    '/simple/xpath/to/node'
  ],
  'coalesce(self::*, \'ab\')': [
    'self::*'
  ],
  'coalesce(self::*, \'cd\')': [
    'self::*'
  ],
  'concat(/simple/xpath/to/node, /simple/xpath/to/node)': [
    '/simple/xpath/to/node',
    '/simple/xpath/to/node'
  ],
  'concat(/simple/xpath/to/node, "manteau")': [
    '/simple/xpath/to/node'
  ],
  'concat(*, \'a\')': [
    '*'
  ],
  'concat(*)': [
    '*'
  ],
  '@id="FunctionCountNonEmpty"': [
    '@id'
  ],
  '@id="NoExist"': [
    '@id'
  ],
  '. < date(\'2012-07-24\')': [
    '.'
  ],
  '. < date-time(\'2012-07-24\')': [
    '.'
  ],
  '@id=\'FunctionDateCase2\'': [
    '@id'
  ],
  '@id=\'FunctionDateCase3\'': [
    '@id'
  ],
  '. = date(\'2012-07-24\') - 1': [
    '.'
  ],
  '. = date-time(\'2012-07-24\') - 1': [
    '.'
  ],
  '. > date(\'2012-07-24\') - 2': [
    '.'
  ],
  '. > date-time(\'2012-07-24\') - 2': [
    '.'
  ],
  '. < date(\'2012-07-25\') - 1': [
    '.'
  ],
  '. < date-time(\'2012-07-25\') - 1': [
    '.'
  ],
  '@id=\'FunctionDate\'': [
    '@id'
  ],
  '@id=\'FunctionDateCase4\'': [
    '@id'
  ],
  'decimal-time( /data/a )': [
    '/data/a'
  ],
  'ends-with( /data/a, "cab")': [
    '/data/a'
  ],
  'format-date(.,  "%Y/%n | %y/%m | %b" )': [
    '.'
  ],
  'format-date-time(.,  "%Y/%n | %y/%m | %b" )': [
    '.'
  ],
  'format-date(., "%Y/%n | %y/%m | %b" )': [
    '.'
  ],
  'format-date-time(., "%Y/%n | %y/%m | %b" )': [
    '.'
  ],
  'format-date(., "%M | %S | %3")': [
    '.'
  ],
  'format-date-time(., "%M | %S | %3")': [
    '.'
  ],
  'if(/unreal, "exists", "does not exist")': [
    '/unreal'
  ],
  'if(. != "0" and /div/div[@id="FunctionCheckListCaseEmpty"] != "", "yes", "no")': [
    '.',
    '/div/div[@id="FunctionCheckListCaseEmpty"]'
  ],
  '@id="FunctionCheckListCaseEmpty"': [
    '@id'
  ],
  '@id="FunctionChecklistCaseNo"': [
    '@id'
  ],
  'if(. = "0" or /div/div[@id="FunctionCheckListCaseEmpty"] != "", "yes", "no")': [
    '.',
    '/div/div[@id="FunctionCheckListCaseEmpty"]'
  ],
  'if( /model/instance[1]/data/page-welcome/GRP_ELIG/AGE_IC ="1" and /model/instance[1]/data/page-welcome/GRP_ELIG/INC_TEMP ="1" and /model/instance[1]/data/page-welcome/GRP_ELIG/NO_SEV_ILLNESS ="1" and /model/instance[1]/data/page-welcome/GRP_ELIG/FU_POSSIBLE ="1" and /model/instance[1]/data/page-welcome/GRP_ELIG/SAMPLE_COL_POSSIBLE ="1" and /model/instance[1]/data/page-welcome/GRP_ELIG/PROVIDE_INFORM_CONSENT ="1" and /model/instance[1]/data/page-welcome/GRP_ELIG/FEVER_RESP ="1", "Eligible", if( /model/instance[1]/data/page-welcome/GRP_ELIG/AGE_IC ="0" or /model/instance[1]/data/page-welcome/GRP_ELIG/INC_TEMP ="0" or /model/instance[1]/data/page-welcome/GRP_ELIG/NO_SEV_ILLNESS ="0" or /model/instance[1]/data/page-welcome/GRP_ELIG/FU_POSSIBLE ="0" or /model/instance[1]/data/page-welcome/GRP_ELIG/SAMPLE_COL_POSSIBLE ="0" or /model/instance[1]/data/page-welcome/GRP_ELIG/PROVIDE_INFORM_CONSENT ="0" or /model/instance[1]/data/page-welcome/GRP_ELIG/FEVER_RESP ="0", "Not-Eligible", "nothing"))': [
    '/model/instance[1]/data/page-welcome/GRP_ELIG/AGE_IC',
    '/model/instance[1]/data/page-welcome/GRP_ELIG/AGE_IC',
    '/model/instance[1]/data/page-welcome/GRP_ELIG/AGE_IC',
    '/model/instance[1]/data/page-welcome/GRP_ELIG/INC_TEMP',
    '/model/instance[1]/data/page-welcome/GRP_ELIG/NO_SEV_ILLNESS',
    '/model/instance[1]/data/page-welcome/GRP_ELIG/FU_POSSIBLE',
    '/model/instance[1]/data/page-welcome/GRP_ELIG/SAMPLE_COL_POSSIBLE',
    '/model/instance[1]/data/page-welcome/GRP_ELIG/PROVIDE_INFORM_CONSENT',
    '/model/instance[1]/data/page-welcome/GRP_ELIG/FEVER_RESP'
  ],
  'if( /data/a ="1" and /data/b ="1", "Eligible", if( /data/a ="0" or /data/b ="0", "Not-Eligible", "nothing"))': [
    '/data/a',
    '/data/b'
  ],
  'if( /data/a ="1" and /data/c ="1", "Eligible", if( /data/a ="0" or /data/b ="0", "Not-Eligible", "nothing"))': [
    '/data/a',
    '/data/c',
    '/data/b'
  ],
  'if( /data/c ="1" and /data/b ="1", "Eligible", if( /data/a ="0" or /data/b ="0", "Not-Eligible", "nothing"))': [
    '/data/c',
    '/data/b',
    '/data/a'
  ],
  'if( /data/a ="1" and /data/b ="1", "Eligible", if( /data/a ="0" or /data/d ="0", "Not-Eligible", "nothing"))': [
    '/data/a',
    '/data/b',
    '/data/d'
  ],
  'if( /data/a ="1" and /data/b ="1", "Eligible", if( /data/d ="0" or /data/b ="0", "Not-Eligible", "nothing"))': [
    '/data/a',
    '/data/b',
    '/data/d'
  ],
  'count( if(true(), //b, //a ))': [
    '//b',
    '//a'
  ],
  'count ( if(true(), //b, //a ))': [
    '//b',
    '//a'
  ],
  'some-fn ( if(true(), //b, //a ))': [
    '//b',
    '//a'
  ],
  'int(/simple/xpath/to/node)': [
    '/simple/xpath/to/node'
  ],
  'join(" :: ", //item)': [
    '//item'
  ],
  'join(", ", //item)': [
    '//item'
  ],
  'join(", ", /root/*)': [
    '/root/*'
  ],
  'join(", ", *)': [
    '*'
  ],
  'max(//nonexisting)': [
    '//nonexisting'
  ],
  'max(/simple)': [
    '/simple'
  ],
  'max(/simple/xpath/to/node)': [
    '/simple/xpath/to/node'
  ],
  'max(/root/item)': [
    '/root/item'
  ],
  'max(self::*)': [
    'self::*'
  ],
  'max(*)': [
    '*'
  ],
  'min(//nonexisting)': [
    '//nonexisting'
  ],
  'min(/simple)': [
    '/simple'
  ],
  'min(/simple/xpath/to/node)': [
    '/simple/xpath/to/node'
  ],
  'min(/root/item)': [
    '/root/item'
  ],
  'min(self::*)': [
    'self::*'
  ],
  'min(*)': [
    '*'
  ],
  'not(/cities)': [
    '/cities'
  ],
  'not(not(/cities))': [
    '/cities'
  ],
  'not(/countries)': [
    '/countries'
  ],
  'not(not(/countries))': [
    '/countries'
  ],
  'once(. * 10)': [
    '.'
  ],
  'position(..)': [
    '..'
  ],
  'position(.)': [
    '.'
  ],
  'position(../..)': [
    '../..'
  ],
  'pow(/simple/xpath/to/node, 0)': [
    '/simple/xpath/to/node'
  ],
  'pow(/simple/xpath/to/node, 3)': [
    '/simple/xpath/to/node'
  ],
  'pow(/simple/xpath/to/node, 2)': [
    '/simple/xpath/to/node'
  ],
  '@id="FunctionRandomize"': [
    '@id'
  ],
  '@id="testFunctionNodeset2"': [
    '@id'
  ],
  '@id="crop_list"': [
    '@id'
  ],
  'regex(/simple/xpath/to/node, "[0-9]{3}")': [
    '/simple/xpath/to/node'
  ],
  'selected(/simple/xpath/to/node, "one")': [
    '/simple/xpath/to/node'
  ],
  'selected(/simple/xpath/to/node, "two")': [
    '/simple/xpath/to/node'
  ],
  'selected(/simple/xpath/to/node, "three")': [
    '/simple/xpath/to/node'
  ],
  'selected(/simple/xpath/to/node, "on")': [
    '/simple/xpath/to/node'
  ],
  'selected(/simple/xpath/to/node, "ne")': [
    '/simple/xpath/to/node'
  ],
  'selected(/simple/xpath/to/node, "four")': [
    '/simple/xpath/to/node'
  ],
  '/simple/xpath/to/node': [
    '/simple/xpath/to/node'
  ],
  'substr(/simple/xpath/to/node, 5)': [
    '/simple/xpath/to/node'
  ],
  'substr(/simple/xpath/to/node, 2, 4)': [
    '/simple/xpath/to/node'
  ],
  'sum(/root/item)': [
    '/root/item'
  ],
  'sin(/numbers/minusone)': [
    '/numbers/minusone'
  ],
  'sin(/numbers/minuspointfive)': [
    '/numbers/minuspointfive'
  ],
  'sin(/numbers/zero)': [
    '/numbers/zero'
  ],
  'sin(/numbers/pointfive)': [
    '/numbers/pointfive'
  ],
  'sin(/numbers/one)': [
    '/numbers/one'
  ],
  'sin(/numbers/nan)': [
    '/numbers/nan'
  ],
  'sin(/numbers/missing)': [
    '/numbers/missing'
  ],
  'cos(/numbers/minusone)': [
    '/numbers/minusone'
  ],
  'cos(/numbers/minuspointfive)': [
    '/numbers/minuspointfive'
  ],
  'cos(/numbers/zero)': [
    '/numbers/zero'
  ],
  'cos(/numbers/pointfive)': [
    '/numbers/pointfive'
  ],
  'cos(/numbers/one)': [
    '/numbers/one'
  ],
  'cos(/numbers/nan)': [
    '/numbers/nan'
  ],
  'cos(/numbers/missing)': [
    '/numbers/missing'
  ],
  'tan(/numbers/minuspointfive)': [
    '/numbers/minuspointfive'
  ],
  'tan(/numbers/zero)': [
    '/numbers/zero'
  ],
  'tan(/numbers/pointfive)': [
    '/numbers/pointfive'
  ],
  'tan(/numbers/nan)': [
    '/numbers/nan'
  ],
  'tan(/numbers/missing)': [
    '/numbers/missing'
  ],
  'asin(/numbers/minusone)': [
    '/numbers/minusone'
  ],
  'asin(/numbers/minuspointfive)': [
    '/numbers/minuspointfive'
  ],
  'asin(/numbers/zero)': [
    '/numbers/zero'
  ],
  'asin(/numbers/pointfive)': [
    '/numbers/pointfive'
  ],
  'asin(/numbers/one)': [
    '/numbers/one'
  ],
  'asin(/numbers/nan)': [
    '/numbers/nan'
  ],
  'asin(/numbers/missing)': [
    '/numbers/missing'
  ],
  'acos(/numbers/minusone)': [
    '/numbers/minusone'
  ],
  'acos(/numbers/minuspointfive)': [
    '/numbers/minuspointfive'
  ],
  'acos(/numbers/zero)': [
    '/numbers/zero'
  ],
  'acos(/numbers/pointfive)': [
    '/numbers/pointfive'
  ],
  'acos(/numbers/one)': [
    '/numbers/one'
  ],
  'acos(/numbers/nan)': [
    '/numbers/nan'
  ],
  'acos(/numbers/missing)': [
    '/numbers/missing'
  ],
  'atan(/numbers/minusone)': [
    '/numbers/minusone'
  ],
  'atan(/numbers/minuspointfive)': [
    '/numbers/minuspointfive'
  ],
  'atan(/numbers/zero)': [
    '/numbers/zero'
  ],
  'atan(/numbers/pointfive)': [
    '/numbers/pointfive'
  ],
  'atan(/numbers/one)': [
    '/numbers/one'
  ],
  'atan(/numbers/nan)': [
    '/numbers/nan'
  ],
  'atan(/numbers/missing)': [
    '/numbers/missing'
  ],
  'log(/numbers/minusone)': [
    '/numbers/minusone'
  ],
  'log(/numbers/minuspointfive)': [
    '/numbers/minuspointfive'
  ],
  'log(/numbers/zero)': [
    '/numbers/zero'
  ],
  'log(/numbers/pointfive)': [
    '/numbers/pointfive'
  ],
  'log(/numbers/one)': [
    '/numbers/one'
  ],
  'log(/numbers/nan)': [
    '/numbers/nan'
  ],
  'log(/numbers/missing)': [
    '/numbers/missing'
  ],
  'log10(/numbers/minusone)': [
    '/numbers/minusone'
  ],
  'log10(/numbers/minuspointfive)': [
    '/numbers/minuspointfive'
  ],
  'log10(/numbers/zero)': [
    '/numbers/zero'
  ],
  'log10(/numbers/pointfive)': [
    '/numbers/pointfive'
  ],
  'log10(/numbers/one)': [
    '/numbers/one'
  ],
  'log10(/numbers/nan)': [
    '/numbers/nan'
  ],
  'log10(/numbers/missing)': [
    '/numbers/missing'
  ],
  'exp(/numbers/minusone)': [
    '/numbers/minusone'
  ],
  'exp(/numbers/minuspointfive)': [
    '/numbers/minuspointfive'
  ],
  'exp(/numbers/zero)': [
    '/numbers/zero'
  ],
  'exp(/numbers/pointfive)': [
    '/numbers/pointfive'
  ],
  'exp(/numbers/one)': [
    '/numbers/one'
  ],
  'exp(/numbers/nan)': [
    '/numbers/nan'
  ],
  'exp(/numbers/missing)': [
    '/numbers/missing'
  ],
  'exp10(/numbers/minusone)': [
    '/numbers/minusone'
  ],
  'exp10(/numbers/minuspointfive)': [
    '/numbers/minuspointfive'
  ],
  'exp10(/numbers/zero)': [
    '/numbers/zero'
  ],
  'exp10(/numbers/pointfive)': [
    '/numbers/pointfive'
  ],
  'exp10(/numbers/one)': [
    '/numbers/one'
  ],
  'exp10(/numbers/nan)': [
    '/numbers/nan'
  ],
  'exp10(/numbers/missing)': [
    '/numbers/missing'
  ],
  'sqrt(/numbers/minusone)': [
    '/numbers/minusone'
  ],
  'sqrt(/numbers/minuspointfive)': [
    '/numbers/minuspointfive'
  ],
  'sqrt(/numbers/zero)': [
    '/numbers/zero'
  ],
  'sqrt(/numbers/pointfive)': [
    '/numbers/pointfive'
  ],
  'sqrt(/numbers/one)': [
    '/numbers/one'
  ],
  'sqrt(/numbers/nan)': [
    '/numbers/nan'
  ],
  'sqrt(/numbers/missing)': [
    '/numbers/missing'
  ],
  'uuid(/numbers/one)': [
    '/numbers/one'
  ],
  'uuid(/numbers/two)': [
    '/numbers/two'
  ],
  'uuid(/numbers/six)': [
    '/numbers/six'
  ],
  'uuid(/numbers/ninetynine)': [
    '/numbers/ninetynine'
  ],
  'weighted-checklist(5, 5, self::* ,5)': [
    'self::*'
  ],
  'weighted-checklist(9, 9, /thedata/somenodes/*, /thedata/someweights/*)': [
    '/thedata/somenodes/*',
    '/thedata/someweights/*'
  ],
  'weighted-checklist(8, 8, /thedata/somenodes/*, /thedata/someweights/*)': [
    '/thedata/somenodes/*',
    '/thedata/someweights/*'
  ],
  'weighted-checklist(10, 10, /thedata/somenodes/*, /thedata/someweights/*)': [
    '/thedata/somenodes/*',
    '/thedata/someweights/*'
  ],
  '@id="cities"': [
    '@id'
  ],
  '/data/a[selected("a b", "a")]': [
    '/data/a[selected("a b", "a")]'
  ],
  '../name/first = string-length(../name/last)': [
    '../name/first',
    '../name/last'
  ],
  '@id="3"': [
    '@id'
  ],
  '/data/c[@id="3"] and /data/a[@id="1"]': [
    '/data/c[@id="3"]',
    '/data/a[@id="1"]'
  ],
  '@id="1"': [
    '@id'
  ],
  '@id="2"': [
    '@id'
  ],
  '@id="4"': [
    '@id'
  ],
  '/data/item/a/number': [
    '/data/item/a/number'
  ],
  '/data/item/a/number/@OpenClinica:this': [
    '/data/item/a/number/@OpenClinica:this'
  ],
  '@OpenClinica:this="three"': [
    '@OpenClinica:this'
  ],
  '../number[@OpenClinica:this="three"]': [
    '../number[@OpenClinica:this="three"]'
  ],
  '@enk:that=\'something\'': [
    '@enk:that'
  ],
  '@id=\'d\'': [
    '@id'
  ],
  '../number[@OpenClinica:this=\'three\']': [
    '../number[@OpenClinica:this=\'three\']'
  ],
  '@OpenClinica:this=\'three\'': [
    '@OpenClinica:this'
  ],
  '@enk:that="something"': [
    '@enk:that'
  ],
  '/data/item/number/@this': [
    '/data/item/number/@this'
  ],
  '@this="four"': [
    '@this'
  ],
  './@this="four"': [
    './@this'
  ],
  'string-length(./@this) = 1': [
    './@this'
  ],
  'string-length(./@this) < pi()': [
    './@this'
  ],
  'string-length(./number)=1': [
    './number'
  ],
  'string-length(./number) = 1': [
    './number'
  ],
  '(./number div 3.14) > 1.9': [
    './number'
  ],
  'tan(./number) > 1': [
    './number'
  ],
  'tan(./number) <= 1': [
    './number'
  ],
  '(./number div pi()) >  1.9': [
    './number'
  ],
  '(./number div pi()) <= 1.9': [
    './number'
  ],
  "if ( /data/consented/deceased_CRVS/info_on_deceased/ageInYears != 'NaN' and string-length( /data/consented/deceased_CRVS/info_on_deceased/ageInYears ) < 0, int( /data/consented/deceased_CRVS/info_on_deceased/ageInYears  * 12 +  /data/consented/deceased_CRVS/info_on_deceased/ageInMonths ), if ( /data/consented/deceased_CRVS/info_on_deceased/age_child_unit  = 'months', /data/consented/deceased_CRVS/info_on_deceased/age_child_months , int( /data/consented/deceased_CRVS/info_on_deceased/age_child_years  * 12)))": [
    '/data/consented/deceased_CRVS/info_on_deceased/ageInYears',
    '/data/consented/deceased_CRVS/info_on_deceased/ageInMonths',
    '/data/consented/deceased_CRVS/info_on_deceased/age_child_unit',
    '/data/consented/deceased_CRVS/info_on_deceased/age_child_months',
    '/data/consented/deceased_CRVS/info_on_deceased/age_child_years',
  ],

  "if ( /data/consented/deceased_CRVS/info_on_deceased/age_child_unit  = 'months', /data/consented/deceased_CRVS/info_on_deceased/age_child_months , int( /data/consented/deceased_CRVS/info_on_deceased/age_child_years  * 12))": [
    '/data/consented/deceased_CRVS/info_on_deceased/age_child_unit',
    '/data/consented/deceased_CRVS/info_on_deceased/age_child_months',
    '/data/consented/deceased_CRVS/info_on_deceased/age_child_years',
  ],
  "int( /data/consented/deceased_CRVS/info_on_deceased/age_child_years  * 12)": [
    '/data/consented/deceased_CRVS/info_on_deceased/age_child_years',
  ],
}
