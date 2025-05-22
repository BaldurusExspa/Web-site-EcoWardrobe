import LogoHeader from "/Logo.png";

export const Logo = () => {
 return (
    <div className="navigation-block__logotype">
        <img className="logo" src={LogoHeader} alt="" />
        <span className="logo__text">ЭкоГардероб</span>
    </div>
 )
}