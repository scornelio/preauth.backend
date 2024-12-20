import { findSubset } from "../src/core/findSubset";
import { arraysAreEqual } from "../src/helpers/findSubsetValidation";
import { errorFn, logFn } from "../src/utils/logger";

function testFindSubset() {
  const tests = [
    { M: [2, 5, 8, 14, 0], N: 10, expected: [2, 8] },
    { M: [1, 2, 3, 4, 5], N: 5, expected: [1, 4] },
    { M: [1, 2, 3, 4, 5], N: 10, expected: null },
    { M: [], N: 10, expected: null },
    { M: [1, 1, 1, 1, 1], N: 2, expected: [1, 1] },
    { M: [-1, -2, -3, -4, -5], N: -5, expected: [-1, -4] },
  ];

  tests.forEach((test, index) => {
    try {
      const result = findSubset(test.M, test.N);
      logFn(`Result for Test ${index + 1}: ${JSON.stringify(result)}`);

      const isSuccess =
        (Array.isArray(result) && arraysAreEqual(result, test.expected)) ||
        result === test.expected;

      logFn(`Test ${index + 1}: ${isSuccess ? "Passed" : "Failed"}`);
    } catch (error) {
      errorFn(error);
    }
  });
}

testFindSubset();
