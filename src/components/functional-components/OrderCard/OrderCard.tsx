// Components
import { formatPrice } from '../../.formatPrice/formatPrice'
// Styles
import "./OrderCard.css"

type TOrderCard = {
  id: string;
  imageCard: string;
  status: boolean;
  name: string;
  price: number;
};

export const OrderCard: React.FC<TOrderCard> = ({
  id = String(Date.now()),
  imageCard = "",
  status = false,
  name = "Черное эко-худи",
  price,
}) => {
  return (
    <div className="order-card">
      <div className="order-card__header">
        <p>{id}</p>
        <p
          className={`order-card__status ${status ? "received" : "in-progress"}`}
        >
          {status ? <>Получено</> : <>Не получено</>}
        </p>
      </div>
      <div className="order-card__underline"></div>
      <div className="order-card__information-block">
        <div className="information-block__naming">
          <img
            className="information-block__image"
            src={imageCard}
            alt="Clothes image"
          />
          <p>{name}</p>
        </div>
        <p>{`Цена: ${formatPrice(price)}`}</p>
      </div>
    </div>
  );
};
