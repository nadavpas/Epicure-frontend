import RestaurantCard from "./RestaurantCard";
import "../styles/Populer.scss";
import {restaurants} from '../mockData/Restaurants'
function Popular() {
  return (
    <div className="popular-restaurants">
      <h2>POPULAR RESTAURANT IN EPICURE:</h2>
      <div className="card-container">
        {restaurants.map((rest) => {
          return (
              <RestaurantCard
                key={rest.restaurant}
                restaurant={rest.restaurant}
                chef={rest.chef}
                rating={rest.rating}
              />
          );
        })}
      </div>
      <button>All Restaurants</button>
    </div>
  );
}
export default Popular;
