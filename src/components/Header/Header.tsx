import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { InputForm } from "../functional-components/InputForm/InputForm";
import { Button } from "../functional-components/Button/Button";
import "./Header.css";

export const Header = () => {
  const searchbarClassName = "searchbar";

  return (
    <header className="header">
      <div className="navigation-block">
        <Logo />
        <nav>
          <ul className="navigation-block__categories">
            <li>
              <Link to="/catalog">
                <Button type="button" className="category category-new">Новинки</Button>
              </Link>
            </li>
            <li>
              <Link to="/catalog">
                <Button type="button" className="category">Мужчинам</Button>
              </Link>
            </li>
            <li>
              <Link to="/catalog">
                <Button type="button" className="category">Женщинам</Button>
              </Link>
            </li>
            <li>
              <Link to="/catalog">
                <Button type="button" className="category">Детям</Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="information-block">
        <InputForm
          inputType="text"
          className_input={searchbarClassName + "__input"}
          placeholder="поиск"
          maxlenght={30}
        >
          <img
            className={searchbarClassName + "__custom-border"}
            src="Border/Border-icon.png"
            alt=""
          />
          <img
            className={searchbarClassName + "__custom-additional-border"}
            src="Border/Border-icon-part.png"
            alt=""
          />
        </InputForm>
        <nav>
          <ul className="information-block__categories">
            <li>
              <Link to="/catalog">
                <Button type="button" className="category">
                  <img
                    className="category__image-favorites"
                    src="Favorites/Favorite-icon.png"
                    alt="Favorite products"
                  />
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/catalog">
                <Button type="button" className="category">
                  <img
                    className="category__image-bag"
                    src="Shopping-bag/Shopping-bag-icon.png"
                    alt="Shopping bag"
                  />
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/catalog">
                <Button type="button" className="category">
                  <img
                    className="category__image-profile"
                    src="Profile/Profile-icon.png"
                    alt="Profile"
                  />
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
