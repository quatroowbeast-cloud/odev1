// Soru 14: DeepReadonly<T>
export type Primitive = string | number | boolean | bigint | symbol | null | undefined;
export type DeepReadonly<T> =
  T extends Primitive | Function ? T :
  T extends Array<infer U> ? ReadonlyArray<DeepReadonly<U>> :
  { readonly [K in keyof T]: DeepReadonly<T[K]> };

// Demo
type T14 = { a: { b: number[] }, f: () => void };
const t14: DeepReadonly<T14> = { a: { b: [1, 2, 3] }, f: () => {} };
// t14.a = {} // hata olmalı (readonly)
console.log("Soru14:", Array.isArray(t14.a.b), typeof t14.f);
