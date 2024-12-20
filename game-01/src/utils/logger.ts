export function logFn(message: string): void {
    console.log(`[LOG]: ${message}`);
  }

export  function errorFn(error: unknown): void {
    if (error instanceof Error) {
      console.error("[ERROR]:", error.message);
    } else {
      console.error("Unknown error:", error);
    }
  }