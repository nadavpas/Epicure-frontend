import "../../styles/RestaurantCard.scss";
import Rating from "../shared/Rating";
interface RestaurantProps {
  chef: string;
  restaurant: string;
  key: string;
  rating: number;
  image: string;
}
function RestaurantCard({ chef, restaurant, rating, image }: RestaurantProps) {
  return (
    <div className="container">
      <img src={image} alt="dish" />
      <div className="info">
        <h3 className="h3">{restaurant}</h3>
        <h4 className="body-text">{chef}</h4>
        <Rating rating={rating} />
      </div>
    </div>
  );
}
export default RestaurantCard;
