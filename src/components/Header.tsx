import { useState } from "react";
import { bag, logo, search, user } from "../assets/icon";
import "../styles/Header.scss";
const Header: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);
  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
  };
  const SearchSection =()=> {
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
          src={search}
          alt="search-icon"
          className="search-icon"
          onClick={toggleSearch}
        />
      </div>
    );
  }
  const RenderLogoSection = () => {
    return (
      <div className="logo-section">
        <img src={logo} alt="logo-icon" />
        <span>EPICURE</span>
      </div>
    );
  }
  const RenderNavButtons = () => {
    return (
      <nav className="navbar">
        <button>Restaurants</button>
        <button>Chefs</button>
      </nav>
    );
  }
  const UserToggle = () => {
    return <img src={user} alt="user-icon" />;
  }
  const ShoppingcartToggle = () => {
    return <img src={bag} alt="bag-icon" />;
  }
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
