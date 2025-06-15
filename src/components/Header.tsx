import logo from "../assets/logo.svg"
import bag from "../assets/bag.svg"
import search from "../assets/search.svg"
import user from "../assets/user.svg"
function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        className="logo-section"
        style={{ display: "flex", alignItems: "center" }}
      >
        <img
          src={ logo }
          alt="logo-icon"
        />
        <span className="logo-text">EPICURE</span>
      </div>
      <nav>
        <button>Restaurants</button>
        <button>Chefs</button>
      </nav>
      <div className="right-section">
        <img src={ bag } alt="bag-icon" />
        <img src={ user } alt="user-icon" />
        <img src={ search } alt="search-icon" />
      </div>
    </header>
  );
}
export default Header;
