// Soru 20: ParseRouteParams<T>
// /users/:id/:postId  -> { id: string; postId: string }
type SegmentToParam<S extends string> = S extends `:${infer Name}` ? { [K in Name]: string } : {};
export type ParseRouteParams<S extends string> =
  S extends `${infer Head}/${infer Tail}`
    ? SegmentToParam<Head> & ParseRouteParams<Tail>
    : SegmentToParam<S>;

// Demo (yalnız tip seviyesinde kontrol):
type P20 = ParseRouteParams<"/users/:id/:postId">; // { id: string; postId: string }
const p20: P20 = { id: "1", postId: "99" };
console.log("Soru20:", p20);
