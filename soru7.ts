// Soru 7: Partial ile Güncelleme ve Readonly döndürme
type User7 = {
  id: number;
  name: string;
  email: string;
  active: boolean;
};

export function updateUser(user: User7, updates: Partial<User7>): Readonly<User7> {
  const updated = { ...user, ...updates };
  return Object.freeze(updated);
}

// Demo
const u7: User7 = { id: 1, name: "Ada", email: "a@b.com", active: true };
const u7b = updateUser(u7, { active: false });
console.log("Soru7:", u7b);
