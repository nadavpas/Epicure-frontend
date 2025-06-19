import claro from "../assets/claro.svg";
import "../styles/RestaurantCard.scss";
import Rating from "./Rating";
interface RestaurantProps {
  chef: string;
  restaurant: string;
  key: string;
  rating:number
  // image: string
}
function RestaurantCard({ chef, restaurant,rating }: RestaurantProps) {
  return (
    <div className="container">
      <img src={claro} alt="dish" />
      <div className="info">
        <h3>{restaurant}</h3>
        <h4>{chef}</h4>
        <Rating rating={rating}/>
      </div>
    </div>
  );
}
export default RestaurantCard;
