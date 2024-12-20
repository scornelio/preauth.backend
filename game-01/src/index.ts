import { findSubset } from "./core/findSubset";
import { validateInput } from "./helpers/findSubsetValidation";
import { logFn, errorFn } from "./utils/logger";

const M: number[] = [2, 5, 8, 14, 0];
const N: number = 10;

try {
    
  const result = findSubset(M, N);

  if (result) {
    logFn(`Subset found: ${result}`);
  } else {
    logFn("No subset found that sums to the target.");
  }
} catch (error) {
    errorFn(error);
}
