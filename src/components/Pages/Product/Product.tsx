// Modules
import { Link } from "react-router-dom";
// Components
import { formatPrice } from "../../.formatPrice/formatPrice";
import { Header } from "../../Header/Header";
import { Footer } from "../../Footer/Footer";
import { Button } from "../../functional-components/Button/Button";
// Styles
import "./Product.css";

export const Product = () => {
  const productImage = "/CardsImages/Brown-jumper-1.JPG";
  const productName = "Название товара";
  const productCompound = "90% конопля, 10% органический хлопок";
  const productPrice = 5244;
  const productDescription =
    "Данный товар был произведен в Китае из лучших материалов и тд. Данный товар был произведен в Китае из лучших материалов и тд. Данный товар был произведен в Китае из лучших материалов и тд. Данный товар был произведен в Китае из лучших материалов и тд. Данный товар был произведен в Китае из лучших материалов и тд. Данный товар был произведен в Китае из лучших материалов и тд. ";

  // Объект размеров одежды на TypeScript
  interface ProductDimensions {
    S: boolean;
    M: boolean;
    L: boolean;
    XL: boolean;
    XXL: boolean;
    [index: string]: boolean;
  }

  const productDimensions: ProductDimensions = {
    S: true,
    M: true,
    L: true,
    XL: false,
    XXL: false,
  };

  const dimensionsKeys = Object.keys(productDimensions);

  return (
    <>
      <Header />
      <section className="section">
        <div className="content product-content">
          <div className="content__image-container">
            <div className="image-container__addition-images"></div>
            <img
              className="image-container__main-image"
              src={productImage}
              alt="Clothes image"
            />
          </div>
          <div className="content__information-container">
            <label className="information-container__header">
              {productName}
            </label>
            <span className="information-container__compound">
              {`Состав: ${productCompound}`}
            </span>
            <span className="information-container__price">
              {formatPrice(productPrice)}
            </span>
            <div className="information-container__dimensions">
              <div className="information-container__dimensions-header">
                <label className="information-container__dimensions-naming">
                  Размеры
                </label>
                <span className="dimensions-list">
                  <img
                    className="dimensions-list__image"
                    src="./Dimensions-table/Ruler.png"
                    alt=""
                  />
                  <Link
                    className="dimensions-list__table"
                    to={"/dimenions-table"}
                  >
                    Таблица размеров
                  </Link>
                </span>
              </div>
              <div className="information-container__dimensions-container">
                <Button
                  className={`dimensions-container__button dimension-${productDimensions[dimensionsKeys[0]]}`}
                >
                  {dimensionsKeys[0]}
                </Button>
                <Button
                  className={`dimensions-container__button dimension-${productDimensions[dimensionsKeys[1]]}`}
                >
                  {dimensionsKeys[1]}
                </Button>
                <Button
                  className={`dimensions-container__button dimension-${productDimensions[dimensionsKeys[2]]}`}
                >
                  {dimensionsKeys[2]}
                </Button>
                <Button
                  className={`dimensions-container__button dimension-${productDimensions[dimensionsKeys[3]]}`}
                >
                  {dimensionsKeys[3]}
                </Button>
                <Button
                  className={`dimensions-container__button dimension-${productDimensions[dimensionsKeys[4]]}`}
                >
                  {dimensionsKeys[4]}
                </Button>
              </div>
              <div className="information-container__buttons">
                <Button className="buttons__btn-add">Добавить в корзину</Button>
                <Button className="buttons__btn-favorite">
                  Отметить как избранное
                </Button>
              </div>
              <div className="information-container__description-container">
                <label className="description-container__header">
                  Описание товара
                </label>
                <span className="description-container__text">
                  {productDescription}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
