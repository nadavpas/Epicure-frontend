import dish from "../assets/icon/dish.svg";
import { ils, line, spicy, vegan, vegetarian } from "../assets/icon";
import "../styles/DishCard.scss";
function DishCard() {
  const extra_info = {
    spicy: { spicy },
    vegan: { vegan },
    " vegetarian": { vegetarian },
  };
  return (
    <div className="dish-card">
      <img src={dish} alt="seed" />
      <div className="dish">
        <h1>Dish name</h1>
        <img src={spicy} alt="flavour" />
        <div className="dish-info">
          <span className="body-text info-box">
            Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic
            Chili Brown Coconut
          </span>
          <div className="price">
            <img src={line} alt="open-line" />
            <img src={ils} alt="ils" className="ils" />
            <span className="body-text"> 98 </span>
            <img src={line} alt="closing-line" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default DishCard;
