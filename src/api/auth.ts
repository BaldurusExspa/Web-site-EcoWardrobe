import { api } from "./config";

export const login = async (email: string, password: string) => {
  try {
    const response = await api.post("/auth/login/", { email, password });
    localStorage.setItem("token", response.data.token);
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    throw new Error("Ошибка авторизации");
  }
};

export const register = async (email: string, password: string) => {
  try {
    const response = await api.post("/users/token", { email, password });
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    throw new Error("Ошибка регистрации");
  }
};

export const logoutUser = async () => {
  try {
    await api.post("/auth/logout");
    localStorage.removeItem("token");
    window.location.href = "/login";
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }
};
