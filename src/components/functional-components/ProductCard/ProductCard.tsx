// Modules
import { useNavigate, useParams } from "react-router-dom";
// styles
import "./ProductCard.css";

type TCard = {
  id: string;
  image: string;
  name: string;
  compound: string;
  current_price: number;
  onClick?: (_: any) => void;
};

export const ProductCard: React.FC<TCard> = ({
  onClick,
  id,
  image,
  name = "Тестовое имя товара",
  compound = "Тестовый состав товара",
  current_price = "9999",
}) => {
  const handleClick = () => {
    onClick?.({id});
  };

  return (
    <div className="product-card" id={id} onClick={handleClick}>
      <img
        className="product-card__image"
        src={`http://localhost:3307/images/${image}`}
        alt="Clothes image"
      />
      <div className="product-card__info">
        <p className="info__name">{name}</p>
        <p className="info__compound">Состав товара: {compound}</p>
        <p className="info__price">{current_price} ₽</p>
      </div>
    </div>
  );
};
