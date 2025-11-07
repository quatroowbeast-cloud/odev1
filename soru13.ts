// Soru 13: CreateGetters<T>
export type CreateGetters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K]
};

// Demo
type T13 = { id: number; name: string };
type T13Getters = CreateGetters<T13>;
const obj13: T13Getters = {
  getId: () => 1,
  getName: () => "Ada"
};
console.log("Soru13:", obj13.getId(), obj13.getName());
