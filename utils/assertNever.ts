/**
 * @see https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#union-exhaustiveness-checking
 */
export const assertNever = (x: never): never => {
  throw new Error(`(assertNever) Unexpected object: ${JSON.stringify(x)}`);
};
