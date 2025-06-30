import RestaurantCard from "../RestaurantSection/RestaurantCard";
import "../../styles/Populer.scss";
import '../../App.scss'
import { restaurants } from "../../mockData/Restaurants";
import { more } from "../../assets/Icons";
const Popular: React.FC = () => {
  const RenderMoreButton = () => {
    return (
      <div className="all-restaurants">
        <button>
          <img src={more} alt="more icon" />
          All Restaurants
        </button>
      </div>
    );
  };
  return (
    <div className="popular-restaurants">
      <span className="h2">POPULAR RESTAURANTS IN EPICURE:</span>
      <div className="card-container">
        {restaurants.map((rest) => {
          return (
            <RestaurantCard
              key={rest.restaurant}
              restaurant={rest.restaurant}
              chef={rest.chef}
              rating={rest.rating}
              image={rest.image}
            />
          );
        })}
      </div>
      {RenderMoreButton()}
    </div>
  );
};
export default Popular;
