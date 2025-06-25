import "../styles/Hero.scss";
import HeroSearch from "./HeroSearch";
function Hero() {
  return (
    <div className="hero-total-container">
      <div className="hero-container">
        <h3 className="text">
          Epicure works with the top chef restaurants in Tel Aviv
        </h3>
        <HeroSearch />
      </div>
    </div>
  );
}
export default Hero;
