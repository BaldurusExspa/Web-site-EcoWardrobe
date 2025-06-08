// Modules
// Components
import { Header } from "../../.Header/Header";
import { Footer } from "../../.Footer/Footer";
import { renderComponentsWithCommonProps } from "../../functional-components/renderComponent/renderComponent";
import { AutoBreadcrumbs } from "../../functional-components/Breadcrumbs/AutoBreadcrumbs";
import { OrderCard } from "../../functional-components/OrderCard/OrderCard";
import { InputForm } from "../../functional-components/InputForm/InputForm";
import { Button } from "../../functional-components/Button/Button";
// Styles
import "./Profile.css";

export const Profile = () => {
  interface Order {
    id: string;
    imageCard: string;
    status: boolean;
    name: string;
    price: number;
  }

  const orders: Order[] = [
    {
      id: "MX-1",
      imageCard: "/CardsImages/Brown-jumper-1.JPG",
      status: false,
      name: "Коричневый джемпер",
      price: 129365,
    },
    {
      id: "MX-2",
      imageCard: "/CardsImages/Brown-jumper-3.JPG",
      status: true,
      name: "Коричневый джемпер",
      price: 105409,
    },
  ];

  return (
    <>
      <Header />
      <section className="section">
        <div className="content">
          {/* <AutoBreadcrumbs /> */}
          <div className="profile-card">
            <label className="profile-card__header" htmlFor="">
              Настройки профиля
            </label>
            <div className="profile-card__settings">
              <div className="row">
                <InputForm
                inputType="text"
                className_input="settings-input"
                className_label="settings-label"
                placeholder="Иванов Иван Иванович"
              >
                Имя
              </InputForm>
              <InputForm
                inputType="text"
                className_input="settings-input"
                className_label="settings-label"
                placeholder="+ 7 888 999-66-55"
              >
                Телефон
              </InputForm>
              </div>
              <div className="row">
                <InputForm
                inputType="text"
                className_input="settings-input"
                className_label="settings-label"
                placeholder="example@gmail.com"
              >
                Почта
              </InputForm>
              <InputForm
                inputType="text"
                className_input="settings-input"
                className_label="settings-label"
                placeholder="******"
              >
                Пароль
              </InputForm>
              </div>
              <div className="settings__edit-btn">
                <Button className="edit-btn">Редактировать</Button>
              </div>
            </div>
            <div className="proile-section__active_orders">
              <label className="active_orders__header" htmlFor="">Активные заказы</label>
              <div className="active_orders__orders-list">
                {renderComponentsWithCommonProps({
                  items: orders,
                  Component: OrderCard,
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
