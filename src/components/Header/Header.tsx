import { Logo } from "./Logo";
import { NavigationHeader } from "./NavigationHeader";
import { InputForm } from "../functional-components/InputForm/InputForm";
import "./Header.css"

export const Header = () => {
  let searchbarClassName = "searchbar"

  return (
    <header className="header">
      <div className="navigation-block">
        <Logo />
        <NavigationHeader />
      </div>
      <div className="information-block">
        <InputForm inputType="text" className={searchbarClassName} placeholder="поиск">
          <img className={searchbarClassName + "__custom-border"} src="/Border-small/Frame.png" alt="" />
          <img className={searchbarClassName + "__custom-additional-border"} src="/Border-small/Input-border-part.png" alt="" />
        </InputForm>
        <div className="profile-navigation">
          
        </div>
      </div>
    </header>
  )
};