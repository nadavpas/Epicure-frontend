import logo from "../assets/logo.svg";
import bag from "../assets/bag.svg";
import search from "../assets/search.svg";
import user from "../assets/user.svg";
import "../styles/Header.scss";
function Header() {
  return (
    <header>
      <div className="left-section">
        <div className="logo-section">
          <img src={logo} alt="logo-icon" />
          <span className="logo-text">EPICURE</span>
        </div>
        <nav>
          <button>Restaurants</button>
          <button>Chefs</button>
        </nav>
      </div>
      <div className="right-section">
        <img src={search} alt="search-icon" />
        <img src={user} alt="user-icon" />
        <img src={bag} alt="bag-icon" />
      </div>
    </header>
  );
}
export default Header;
