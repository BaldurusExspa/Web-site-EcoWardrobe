import { InputForm } from "../../functional-components/InputForm/InputForm";
import { Button } from "../../functional-components/Button/Button";
import "./Authorization.css";
import { FormEvent, useState } from "react";
import { login } from "../../../api/auth";
import { useNavigate } from "react-router-dom";

export const Authorization = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const user = await login(email, password);
      navigate("/catalog"); // Перенаправление после успешной авторизации
    } catch (error) {
      console.error("Ошибка входа:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputForm
        inputType="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="email-input"
      >
        Email
      </InputForm>
      <InputForm
        inputType="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="pass-input"
      >
        Password
      </InputForm>
      <Button type="submit" className="auth-button">
        Войти
      </Button>
    </form>
  );
};
