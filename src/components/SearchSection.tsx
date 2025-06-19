import { useState } from "react";
import { searchIcon } from "../assets/icons";
import '../styles/SearchSection.scss'
function SearchSection() {
  const [showSearch, setShowSearch] = useState(false);
  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
  };
  return (
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
  );
}
export default SearchSection;
