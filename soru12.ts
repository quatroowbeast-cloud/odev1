// Soru 12: GetReturnType<T> (ReturnType benzeri)
export type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

// Demo
function foo12(a: number) { return a.toString(); }
type R12 = GetReturnType<typeof foo12>; // string
const _check12: R12 = "hello";
console.log("Soru12:", _check12);
