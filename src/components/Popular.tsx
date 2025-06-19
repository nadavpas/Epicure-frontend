import RestaurantCard from "./RestaurantCard";
import "../styles/Populer.scss";
import Rating from "./Rating";
function Popular() {
  const cards_arr = [
    { restaurant: "Claro", chef: " Ran Shmueli",rating:5 },
    { restaurant: "Capara Mio", chef: "Nadav",rating:3 },
    { restaurant: "M25", chef: "Sapir",rating:4 },
  ];
  return (
    <div className="popular-restaurants">
      <h2>POPULAR RESTAURANT IN EPICURE:</h2>
      <div className="card-container">
        {cards_arr.map((card) => {
          return (
              <RestaurantCard
                key={card.restaurant}
                restaurant={card.restaurant}
                chef={card.chef}
                rating={card.rating}
              />
          );
        })}
      </div>
      <button>All Restaurants</button>
    </div>
  );
}
export default Popular;
