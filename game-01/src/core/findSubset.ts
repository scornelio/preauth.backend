import { validateInput } from "../helpers/findSubsetValidation";
import { NumberPair } from "../types/findSubsetTypes";

export function findSubset(M: number[], N: number): NumberPair | null {
  validateInput(M, N);

  const seen = new Set<number>();

  for (const num of M) {
    const complement = N - num;

    if (seen.has(complement)) {
      return [complement, num];
    }
    
    seen.add(num);
  }
  return null;
}