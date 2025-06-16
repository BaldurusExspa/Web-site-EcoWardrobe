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
import { useNavigate } from "react-router-dom";

export const Catalog = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const handleProductClick = (product: any) => {
    navigate(`/products/${product.id}`)
  } 
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
            <p
              id="cardsCounter"
              className="header__counter"
            >{`[${data.length}]`}</p>
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
              {data.map((product: any) => (
                <ProductCard {...product} onClick={handleProductClick} />
              ))}
              {/* {renderComponentsWithCommonProps({
                items: data,
                Component: ProductCard,
                // commonProps: {
                //   productImage: products[0].productImage,
                //   productName: products[0].productName,
                //   productCompound: products[0].productCompound,
                //   productPrice: products[0].productPrice,
                //   onClick: "/catalog",
                // },
              })} */}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
