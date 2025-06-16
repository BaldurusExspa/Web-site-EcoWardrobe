// Modules
import { Link } from "react-router-dom";
// Components
import { useAuth } from "../../api/authContext";
import { Logo } from "./Logo";
import { InputForm } from "../functional-components/InputForm/InputForm";
import { Button } from "../functional-components/Button/Button";
// Styles
import "./Header.css";
import Border from "../../assets/Border/Border-icon.png";
import BorderPart from "../../assets/Border/Border-icon-part.png";
import Favorites from "../../assets/Favorites/Favorite-icon.png";
import ShopingBag from "../../assets/Shopping-bag/Shopping-bag-icon.png";
import Profile from "../../assets/Profile/Profile-icon.png";

export const Header = () => {
  // const { user, isAuthenticated, logout } = useAuth();

  const searchbarClassName = "searchbar";

  return (
    <header className="header">
      <div className="navigation-block">
        <Link to="/catalog">
          <Logo />
        </Link>
        <nav>
          <ul className="navigation-block__categories">
            <li>
              <Link to="/catalog">
                <Button type="button" className="category category-new">
                  Новинки
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/catalog">
                <Button type="button" className="category">
                  Мужчинам
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/catalog">
                <Button type="button" className="category">
                  Женщинам
                </Button>
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
            // src="Border/Border-icon.png"
            src={Border}
            alt=""
          />
          <img
            className={searchbarClassName + "__custom-additional-border"}
            // src="Border/Border-icon-part.png"
            src={BorderPart}
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
                    // src="Favorites/Favorite-icon.png"
                    src={Favorites}
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
                    // src="Shopping-bag/Shopping-bag-icon.png"
                    src={ShopingBag}
                    alt="Shopping bag"
                  />
                </Button>
              </Link>
            </li>
            <li>
                <Link to="/profile">
                  <Button type="button" className="category">
                    <img
                      className="category__image-profile"
                      // src="Profile/Profile-icon.png"
                      src={Profile}
                      alt="Profile"
                    />
                  </Button>
                </Link>
              </li>
            {/* {isAuthenticated ? (
              <li>
                <Link to="/profile">
                  <Button type="button" className="category">
                    <img
                      className="category__image-profile"
                      // src="Profile/Profile-icon.png"
                      src={Profile}
                      alt="Profile"
                    />
                  </Button>
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/auth"></Link>
                </li>
                <li></li>
              </>
            )} */}
          </ul>
        </nav>
      </div>
    </header>
  );
};
