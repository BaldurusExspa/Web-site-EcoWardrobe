// Modules
import { Link } from "react-router-dom";
// Components
import { Button } from "../functional-components/Button/Button";
// Styles
import "./Footer.css";
import FooterBush from "/Footer/Footer-stylized.png";

export const Footer = () => {
  return (
    <footer className="main-footer">
      <img
        className="main-footer__image"
        src={FooterBush}
        alt="The green bush image"
      />
      <div className="navigation-block">
        <nav>
          <ul className="navigation-block__content">
            <li>
              <Link to="/catalog">
                <Button type="button" className="footer-navigate">О нас</Button>
              </Link>
            </li>
            <li>
              <Link to="/catalog">
                <Button type="button" className="footer-navigate">Контакты</Button>
              </Link>
            </li>
            <li>
              <Link to="/catalog">
                <Button type="button" className="footer-navigate">Обратная связь</Button>
              </Link>
            </li>
            <li>
              <Link to="/catalog">
                <Button type="button" className="footer-navigate">Политика конфиденциальности</Button>
              </Link>
            </li>
            {/* <li>
              <Link to="/catalog">
                <Button type="button" className="footer-navigate">Настройка Cookie</Button>
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
      <div className="main-footer__copyright">©ecowardrobe 2025</div>
    </footer>
  );
};
