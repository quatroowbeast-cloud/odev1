// Soru 11: UnwrapPromise<T>
export type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

// Demo
type A11 = UnwrapPromise<Promise<number>>; // number
type B11 = UnwrapPromise<string>;          // string
const _check11: A11 = 123;
const _check11b: B11 = "ok";
console.log("Soru11:", typeof _check11, typeof _check11b);
