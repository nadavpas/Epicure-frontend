import { useState } from "react";
import { bagIcon, logoIcon, searchIcon, userIcon } from "../../assets/Icons";
import "../../styles/Header.scss";
import ShopingCart from "../ShopingCart/ShopingCart";
const Header: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
  };
  const toggleShowCart = () => {
    setShowCart((prev) => !prev);
  };
  const SearchSection = () => {
    return (
      <div className="search">
        {showSearch && (
          <input
            className="search-box"
            type="text"
            placeholder="|Search for restaurant, cuisine, chef"
          />
        )}
        <img
          src={searchIcon}
          alt="search-icon"
          className="search-icon"
          onClick={toggleSearch}
        />
      </div>
    );
  };
  const RenderLogoSection = () => {
    return (
      <div className="logo-section">
        <img src={logoIcon} alt="logo-icon" />
        <span className="h1">EPICURE</span>
      </div>
    );
  };
  const RenderNavButtons = () => {
    return (
      <nav className="navbar">
        <button>Restaurants</button>
        <button>Chefs</button>
      </nav>
    );
  };
  const UserToggle = () => {
    return <img src={userIcon} alt="user-icon" />;
  };
  const ShoppingcartToggle = () => {
    return (
      <div className="shoping-cart">
        <img src={bagIcon} alt="bag-icon" onClick={toggleShowCart} />
        {showCart && <ShopingCart />}
      </div>
    );
  };
  return (
    <header>
      <div className="left-section">
        {RenderLogoSection()}
        {RenderNavButtons()}
      </div>
      <div className="right-section">
        {SearchSection()}
        {UserToggle()}
        {ShoppingcartToggle()}
      </div>
    </header>
  );
};
export default Header;
