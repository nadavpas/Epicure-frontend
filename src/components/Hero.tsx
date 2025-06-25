import "../styles/Hero.scss";
import '../App.scss'
import { searchIcon } from "../assets/Icons";

const Hero:React.FC = () => {
  const RenderHeroSearch = () => {
    return (
      <div className="search-section">
        <img src={searchIcon} alt="SearchIcon" />
        <input type="text" placeholder="Search for restaurant cuisine,chef" />
      </div>
    );
  };
  return (
    <div className="hero-total-container">
      <div className="hero-container">
        <div className="hero-text">
          <h1>
            Epicure works with the top chef restaurants in Tel Aviv
          </h1>
        </div>
        {RenderHeroSearch()}
      </div>
    </div>
  );
};
export default Hero;
