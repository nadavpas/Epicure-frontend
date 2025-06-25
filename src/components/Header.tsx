import "../styles/Header.scss";
import LogoSection from "./LogoSection";
import NavButtons from "./NavButtons";
import SearchSection from "./SearchSection";
import ShoppingcartToggle from "./ShoppingcartToggle";
import UserToggle from "./UserToggle";
const Header: React.FC = () => {
  return (
    <header>
      <div className="left-section">
        <LogoSection />
        <NavButtons />
      </div>
      <div className="right-section">
        <SearchSection />
        <UserToggle />
        <ShoppingcartToggle />
      </div>
    </header>
  );
};
export default Header;
