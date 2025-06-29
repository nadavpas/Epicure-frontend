import ChefCard from "./ChefCard";
import "../../styles/Weekly.scss";
import '../../App.scss'
import ChefRestCard from "./ChefRestCard";
import { restaurants } from "../../mockData/Restaurants";
function Weekly() {
  return (
    <div className="weekly-container">
      <h3 className="h3">CHEF OF THE WEEK:</h3>
      <div className="weekly-chef">
        <div className="chef-info">
          <ChefCard name="Eyal Shani" />
          <span className="article-text">
            Chef Yossi Shitrit has been living and breathing his culinary dreams
            for more than two decades, including running the kitchen in his
            first restaurant, the fondly-remembered Violet, located in Moshav
            Udim. Shitrit's creativity and culinary acumen born of long
            experience are expressed in the every detail of each and every dish.
          </span>
        </div>
        <h3 className="h3">Yossi's Restaurants</h3>
        <div className="weekly-rest-cards">
          {restaurants.map((restaurant) => {
            return <ChefRestCard name={restaurant.restaurant} image={restaurant.image} key={restaurant.restaurant}/>;
          })}
        </div>
      </div>
    </div>
  );
}
export default Weekly;
