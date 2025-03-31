import LogoHeader from "../../../public/Logo.png";

export const Logo = () => {
 return (
    <div className="header__logotype">
        <img className="logo" src={LogoHeader} alt="" />
        <span className="logo__text">ЭкоГардероб</span>
    </div>
 )
}