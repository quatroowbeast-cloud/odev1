// Soru 5: Fonksiyon Overloading
type User = { id: number; name: string };
const users: User[] = [
  { id: 1, name: "Ada" },
  { id: 2, name: "Ali" },
  { id: 3, name: "Ada" },
];

export function search(id: number): User | undefined;
export function search(name: string): User[];
export function search(query: number | string): User | User[] | undefined {
  if (typeof query === "number") {
    return users.find(u => u.id === query);
  } else {
    return users.filter(u => u.name === query);
  }
}

// Demo
console.log("Soru5:", search(2), search("Ada"));
