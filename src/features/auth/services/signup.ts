import type { User } from "@/@types/User";

export const signup = async (data: User) => {
  const res = await fetch("https://fakestoreapi.com/auth/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to signup");
  }
  return res.json();
};
