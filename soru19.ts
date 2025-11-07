// Soru 19: Flatten<T>
export type Flatten<T> = T extends readonly (infer U)[] ? U : T;

// Demo
type A19 = Flatten<number[]>; // number
type B19 = Flatten<string>;   // string
const _a19: A19 = 123;
const _b19: B19 = "ok";
console.log("Soru19:", _a19, _b19);
