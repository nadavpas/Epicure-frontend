import { searchIcon } from "../assets/icons";
function HeroSearch() {
  return (
    <div className="search-section">
      <img src={searchIcon} alt="SearchIcon" />
      <input type="text" placeholder="Search for restaurant cuisine,chef" />
    </div>
  );
}
export default HeroSearch;
