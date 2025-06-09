// Modules
import { useState, useEffect } from "react";
import { api } from "../../../api/config";
// Components
import { Header } from "../../Header/Header";
import { renderComponentsWithCommonProps } from "../../functional-components/renderComponent/renderComponent";
import { ProductCard } from "../../functional-components/ProductCard/ProductCard";
// import { AutoBreadcrumbs } from "../../functional-components/Breadcrumbs/AutoBreadcrumbs";
import { Dropdown } from "../../functional-components/Dropdown/Dropdown";
import { Footer } from "../../Footer/Footer";
// Styles
import "./Catalog.css";

export const Catalog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/catalog").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <>
      <Header />
      <section className="section">
        <div className="content catalog-content">
          {/* <AutoBreadcrumbs /> */}
          <div className="content__header">
            <p className="header__category-name">Название категории товаров</p>
            <p id="cardsCounter" className="header__counter">{`[10]`}</p>
          </div>
          <div className="main">
            <div className="main__filter">
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
            <div className="main__catalog">
              {renderComponentsWithCommonProps({
                items: data,
                Component: ProductCard,
                // commonProps: {
                //   productImage: products[0].productImage,
                //   productName: products[0].productName,
                //   productCompound: products[0].productCompound,
                //   productPrice: products[0].productPrice,
                //   onClick: "/catalog",
                // },
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
