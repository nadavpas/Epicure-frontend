import RestaurantCard from "./RestaurantCard";
import "../styles/Populer.scss";
function Popular() {
  const cards_arr = [
    { restaurant: "Claro", chef: " Ran Shmueli" },
    { restaurant: "Capara Mio", chef: "Nadav" },
    { restaurant: "M25", chef: "Sapir" },
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
              />
          );
        })}
      </div>
      <button>All Restaurants</button>
    </div>
  );
}
export default Popular;
