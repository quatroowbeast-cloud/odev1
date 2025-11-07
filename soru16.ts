// Soru 16: Branded Types (UserID, PostID)
export type Brand<T, U extends string> = T & { readonly __brand: U };
export type UserID = Brand<string, "UserID">;
export type PostID = Brand<string, "PostID">;

// Demo
const userId: UserID = "u_123" as UserID;
const postId: PostID = "p_999" as PostID;
// Aşağıdaki atamalar derleme zamanı HATA olmalıdır:
// const wrong: UserID = postId;
// const wrong2: PostID = userId;
console.log("Soru16:", userId, postId);
