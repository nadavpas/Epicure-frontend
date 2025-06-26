import dish from "../../assets/icon/dish.svg";
import { ils, line, spicy, vegan, vegetarian } from "../../assets/icon";
import "../../styles/DishCard.scss";
interface DishCardProps {
  name: string;
  extra: "spicy" | "vegan" | "vegetarian";
  info: string;
  price: number;
}
function DishCard({ name, extra, info, price }: DishCardProps) {
  const extra_info = {
    spicy: spicy,
    vegan: vegan,
    vegetarian: vegetarian,
  };
  return (
    <div className="dish-card">
      <img src={dish} alt="seed" />
      <div className="dish">
        <h1>{name}</h1>
        <img src={extra_info[extra]} alt="flavour" />
        <div className="dish-info">
          <span className="body-text info-box">{info}</span>
          <div className="price">
            <img src={line} alt="open-line" />
            <img src={ils} alt="ils" className="ils" />
            <span className="body-text"> {price} </span>
            <img src={line} alt="closing-line" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default DishCard;
