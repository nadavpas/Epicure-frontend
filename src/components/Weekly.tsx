import ChefCard from "./ChefCard";
import "../styles/Weekly.scss";
import ChefRestCard from "./ChefRestCard";
function Weekly() {
  const restaurants = ["Onza", "Kitchan Market", "Mashya"];
  return (
    <div className="weekly-container">
      <h3>CHEF OF THE WEEK:</h3>
      <div className="weekly-chef">
        <div className="chef-info">
          <ChefCard name="Eyal Shani" />
          <span className="article-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
            nisi eligendi ut totam mollitia quis, atque adipisci reiciendis
            rerum aliquam distinctio, veritatis laboriosam et, rem amet saepe
            modi sed laudantium.
          </span>
        </div>
        <h3>Yossi's Restaurants</h3>
        <div className="weekly-rest-cards">
          {restaurants.map((restaurant) => {
            return <ChefRestCard name={restaurant} />;
          })}
        </div>
      </div>
    </div>
  );
}
export default Weekly;
