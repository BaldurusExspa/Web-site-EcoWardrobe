// modules imports
import { api } from "../../../api/config";
import { FormEvent, useState } from "react";
import { login } from "../../../api/auth";
import { useNavigate, Link } from "react-router-dom";
// components imports
import { InputForm } from "../../functional-components/InputForm/InputForm";
import { Button } from "../../functional-components/Button/Button";
// styles import
import "./Authorization.css";

export const Authorization = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // async function getTokenAfterRegistration() {
  //   try {
  //     const response = await api.post("/authorization");

  //     if (response.data.success) {
  //       localStorage.setItem("token", response.data.token);
  //       return response.data.token;
  //     }
  //   } catch (error) {
  //     console.error("Ошибка:", error);
  //     throw error;
  //   }
  // }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const user = await login(email, password);
      // getTokenAfterRegistration()
      //   .then((token) => {
      //     console.log("Полученный токен:", token);
      //   })
      //   .catch((error) => {
      //     console.error("Произошла ошибка:", error);
      //   });
      navigate("/catalog");
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
