import "../styles/Hero.scss";

import { searchIcon } from "../assets/icons";

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
          <h3 className="text">
            Epicure works with the top chef restaurants in Tel Aviv
          </h3>
        </div>
        {RenderHeroSearch()}
      </div>
    </div>
  );
};
export default Hero;
