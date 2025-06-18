
import { userIcon,searchIcon,bagIcon,logoIcon } from "../assets/icons";
import { useState } from "react";
import "../styles/Header.scss";

function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
  };
  return (
    <header>
      <div className="left-section">
        <div className="logo-section">
          <img src={logoIcon} alt="logo-icon" />
          <span className="logo-text">EPICURE</span>
        </div>
        <nav>
          <button>Restaurants</button>
          <button>Chefs</button>
        </nav>
      </div>
      <div className="right-section">
        <div className="search-section">
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
        <img src={userIcon} alt="user-icon" />
        <img src={bagIcon} alt="bag-icon" />
      </div>
    </header>
  );
}
export default Header;
