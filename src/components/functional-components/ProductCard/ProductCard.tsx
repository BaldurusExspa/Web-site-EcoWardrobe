import { useNavigate } from "react-router-dom"
// styles
import "./ProductCard.css"

type TCard = {
  id: string;
  productImage: string;
  productName: string;
  productCompound: string;
  productPrice: number;
  onClick?: string
}

export const ProductCard: React.FC<TCard> = ({
  onClick,
  id,
  productImage,
  productName = 'Тестовое имя товара',
  productCompound = 'Тестовый состав товара',
  productPrice = '9999',
}) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${onClick}`)
  }

  return (
   <div className="product-card" id={id} onClick={handleClick}>
    <img className="product-card__image" src={productImage} alt="Clothes image" />
    <div className="product-card__info">
      <p className="info__name">{productName}</p>
      <p className="info__compound">Состав товара: {productCompound}</p>
      <p className="info__price">{productPrice} ₽</p>
    </div>
   </div> 
  )
}