const tokenStorage = "token";

export const getToken = () => localStorage.getItem(tokenStorage);

export const setToken = (token: string | number) =>
  localStorage.setItem(tokenStorage, token.toString());

export const deleteToken = () => localStorage.removeItem(tokenStorage);
