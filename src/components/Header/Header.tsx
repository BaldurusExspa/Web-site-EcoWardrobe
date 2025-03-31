import { Logo } from "./Logo";
import { NavigationHeader } from "./NavigationHeader";
import "./Header.css"

export const Header = () => {
    return (
        <header className="header">
            <Logo />
            <NavigationHeader />
        </header>
    )
};