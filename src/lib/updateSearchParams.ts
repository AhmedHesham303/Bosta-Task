import type { SetURLSearchParams } from "react-router";

export function updateSearchParam(
  setSearchParams: SetURLSearchParams,
  key: string,
  value: string,
) {
  setSearchParams((prev) => {
    const next = new URLSearchParams(prev);
    if (value) {
      next.set(key, value);
    } else {
      next.delete(key);
    }
    next.set("page", "1");
    return next;
  });
}
