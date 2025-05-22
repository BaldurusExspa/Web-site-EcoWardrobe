import { Header } from "../../Header/Header";
import { Breadcrumbs } from "../../functional-components/Breadcrumbs/Breadcrumbs";
import { Dropdown } from "../../functional-components/Dropdown/Dropdown";
import "./Catalog.css";

export const Catalog = () => {
  return (
    <>
      <Header />
      <section className="catalog-section">
        <div className="content">
          <Breadcrumbs />
          <div className="content__header">
            <p className="header__category-name">Название категории товаров</p>
            <p id="cardsCounter" className="header__counter">{`[10]`}</p>
          </div>
          <div className="content__main">
            <Dropdown
              items={["XS", "S", "M", "L", "XL"]}
              itemsLinks={["#", "#", "#", "#", "#"]}
            >
              Размер
            </Dropdown>
            <Dropdown
              items={["Черный", "Голубой", "Бежевый"]}
              itemsLinks={["#", "#", "#"]}
            >
              Цвет
            </Dropdown>
            <Dropdown
              items={["Бамбук", "Конопля", "Лён", "Органический хлопок"]}
              itemsLinks={["#", "#", "#", "#"]}
            >
              Состав
            </Dropdown>
          </div>
        </div>
      </section>
    </>
  );
};
