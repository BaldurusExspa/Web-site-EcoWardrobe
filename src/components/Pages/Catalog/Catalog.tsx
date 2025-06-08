// Modules
// Components
import { Header } from "../../Header/Header";
import { renderComponentsWithCommonProps } from "../../functional-components/renderComponent/renderComponent";
import { ProductCard } from "../../functional-components/ProductCard/ProductCard";
import { AutoBreadcrumbs } from "../../functional-components/Breadcrumbs/AutoBreadcrumbs";
import { Dropdown } from "../../functional-components/Dropdown/Dropdown";
import { Footer } from "../../Footer/Footer";
// Styles
import "./Catalog.css";

export const Catalog = () => {
  interface Product {
    id: string;
    productImage: string;
    productName: string;
    productCompound: string;
    productPrice: number;
    onClick?: string;
  }

  const products: Product[] = [
    {
      id: "1",
      productImage: "/CardsImages/Brown-jumper-1.JPG",
      productName: "Кофточка",
      productCompound: "Смартфоны",
      productPrice: 9999,
      onClick: "/product",
    },
    {
      id: "2",
      productImage: "/CardsImages/Brown-jumper-5.JPG",
      productName: "Свитшот",
      productCompound: "Ноутбуки",
      productPrice: 7894,
      onClick: "/product",
    },
    {
      id: "3",
      productImage: "/CardsImages/Brown-jumper-3.JPG",
      productName: "Худи",
      productCompound: "Аксессуары",
      productPrice: 5734,
      onClick: "/product",
    },
    {
      id: "4",
      productImage: "/CardsImages/Brown-jumper-1.JPG",
      productName: "Худи",
      productCompound: "Аксессуары",
      productPrice: 5734,
      onClick: "/product",
    },
  ];

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
                items: products,
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
