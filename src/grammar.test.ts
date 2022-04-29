import { performance } from 'perf_hooks';
import Parser, { SyntaxNode } from 'tree-sitter';
import orxePaths from './orxe-paths';

interface BaseTestResult {
  expected: string[];
  matched: string[];
  missing?: string[];
  unexpected?: string[];
  parsed?: string;
}

type TestResult =
  & BaseTestResult
  & ({ missing: string[] } | { unexpected: string[] });

interface TestResults {
  details: Array<[string, TestResult]>;
  missing: number;
  unexpected: number;
  failed: number;
  passed: number;
  expressionsWithErrors: number;
  errorNodes: number;
  passingExpressionsWithErrors: string[];
}

const collectErrors = (node: Parser.SyntaxNode): Parser.SyntaxNode[] => {
  let errors: Parser.SyntaxNode[] = [];

  if (node.hasError() && node.type.match(/^[A-Z]/)) {
    errors.push(node);
  }

  errors.push(...node.children.flatMap(collectErrors));

  return errors;
};

(async () => {
  const bindings = 'node';
  const xPath = require(`../bindings/${bindings}`);

  const pathExpressionsQuery = new Parser.Query(xPath, /* clj */`
    (path_expr path: (_) @path.field)
    (path_expr (step_expr node_test: (_))) @path.node_test
    (path_expr (step_expr axis_movement: (_))) @path.axis_mopvement
    (path_expr (step_expr (context_item_expr))) @path.named
    (context_item_expr) @path.not_named
    ((path_expr) @path.root (#match? @path.root "^[/.]"))
    (id_function_call) @path.id
  `);

  let results: TestResults | null = null;

  let times: Record<string, number> = {};

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

  const parser = new Parser();

  parser.setLanguage(xPath);

  for (const [ expression, paths ] of Object.entries(orxePaths)) {
    const start = performance.now();

    const { rootNode } = parser.parse(expression);

    parsed++;

    let matchedPathNodes: Parser.SyntaxNode[] = [];

    try {
      matchedPathNodes = pathExpressionsQuery.captures(rootNode)
        .reduce<SyntaxNode[]>((acc, { name: _name, node }) => {
          const previousNodeIndex = acc.length - 1;
          const previousNode = acc[previousNodeIndex];
          const overlapsPreviousNode = node.startIndex <= (previousNode?.endIndex ?? -1);

          if (!overlapsPreviousNode) {
            acc.push(node);
          }

          return acc;
        }, []);
    }
    catch (error) {
      results.failed++;
    }

    const matchedPaths = new Set(matchedPathNodes.reduce<string[]>((acc, node) => {
      const { text } = node;

      if (/^\s+$/.test(text)) {
        return acc;
      } else {
        acc.push(text.trim());
      }

      return acc;
    }, []));

    const expectedPaths = new Set(paths);

    let missing: string[] = [];
    let unexpected: string[] = [];

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
      let result: BaseTestResult = {
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
      results.details.unshift([expression, result as TestResult]);
      // break;
    } else {
      results.passed++;
    }

    times[expression] = performance.now() - start;
  }


  if (results != null) {
    const [slowest] = Object.entries(times).sort(([,a], [,b]) => b - a);

    const finalResults = {
      ...results,
      slowestResult: [slowest[0], `${slowest[1].toFixed(2)} ms`],
    };

    console.log('results', JSON.stringify(finalResults, null, 2));

    if (results.failed > 0 || results.passingExpressionsWithErrors) {
      process.exit(1);
    }
  }
})();
