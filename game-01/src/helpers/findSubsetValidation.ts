export function validateInput(numbers: unknown, target: unknown): void {
  if (
    !Array.isArray(numbers) ||
    numbers.some((num) => typeof num !== "number")
  ) {
    throw new Error("Input must be an array of numbers.");
  }
  if (typeof target !== "number") {
    throw new Error("Target must be a number.");
  }
}

export function arraysAreEqual(
  arr1: any[] | null,
  arr2: any[] | null
): boolean {
  if (arr1 === arr2) return true;
  if (!arr1 || !arr2) return false;
  if (arr1.length !== arr2.length) return false;

  return arr1.every((value, index) => value === arr2[index]);
}
