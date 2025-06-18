import claro from "../assets/claro.svg";
import "../styles/RestaurantCard.scss";
import Rating from "./Rating";
interface RestaurantProps {
  chef: string;
  restaurant: string;
  // image: string
}
function RestaurantCard({ chef, restaurant }: RestaurantProps) {
  return (
    <div className="container">
      <img src={claro} alt="dish" />
      <div className="info">
        <h3>{restaurant}</h3>
        <h4>{chef}</h4>
        <Rating rating={3}/>
      </div>
    </div>
  );
}
export default RestaurantCard;
