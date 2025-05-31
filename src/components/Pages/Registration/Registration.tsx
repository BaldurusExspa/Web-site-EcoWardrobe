// modules imports
import { api } from "../../../api/config";
import { FormEvent, useState } from "react";
import { register } from "../../../api/auth";
import { useNavigate } from "react-router-dom";
// components imports
import { InputForm } from "../../functional-components/InputForm/InputForm";
import { Button } from "../../functional-components/Button/Button";
// styles import
// import "./Registration.css";

export const Registration = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [mobilePhone, setMobilePhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const user = await register(name, mobilePhone, email, password);
      navigate("/catalog"); // Перенаправление после успешной регистрации
    } catch (error) {
      console.error("Ошибка входа:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputForm
        inputType="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="name-input"
      >
        Name
      </InputForm>
      <InputForm
        inputType="number"
        value={mobilePhone}
        onChange={(e) => setMobilePhone(e.target.value)}
        className="phone-input"
      >
        Mobile phone
      </InputForm>
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
        Зарегистрироваться
      </Button>
    </form>
  );
};
