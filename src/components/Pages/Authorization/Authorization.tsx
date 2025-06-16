// Modules
import { FormEvent, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// Components
import { login } from '../../../api/auth'
import { useAuth } from "../../../api/authContext";
import { InputForm } from "../../functional-components/InputForm/InputForm";
import { Button } from "../../functional-components/Button/Button";
// Styles
import "./Authorization.css";

export const Authorization = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const { login } = useAuth();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await login(email, password);
      navigate("/profile");
    } catch (error) {
      console.error("Ошибка входа:", error);
    }
  };

  return (
    <div className="authorization-section">
      <form onSubmit={handleSubmit} className="user-form">
        <div className="user-form__input-group">
          <InputForm
            inputType="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className_input="user-form__input"
          >
            Почта
          </InputForm>
          <InputForm
            inputType="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className_input="user-form__input"
          >
            Пароль
          </InputForm>
        </div>
        <Button type="submit" className="user-form__button">
          Войти
        </Button>
        <Link className="user-form__change" to="/registration">
          Зарегистрироваться
        </Link>
      </form>
    </div>
  );
};
