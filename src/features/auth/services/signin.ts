import type { User } from "@/@types/User";

export const signin = async (data: User) => {
  const res = await fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to signin");
  }
  return res.json();
};
