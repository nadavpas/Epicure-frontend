import { ils, lineIcon, spicy, vegan, vegetarian } from "../../assets/Icons";
import "../../styles/DishCard.scss";
import "../../App.scss";
import { ExtraType } from "../../utils/enum";
interface DishCardProps {
  name: string;
  extra: ExtraType;
  info: string;
  price: number;
  image: string;
}
const DishCard: React.FC<DishCardProps> = ({
  name,
  extra,
  info,
  price,
  image,
}) => {
  const extra_info = {
    spicy: spicy,
    vegan: vegan,
    vegetarian: vegetarian,
  };
  const RenderPrice = () => {
    return (
      <div className="price">
        <img src={lineIcon} alt="open-line" />
        <img src={ils} alt="ils" className="ils" />
        <span className="body-text"> {price} </span>
        <img src={lineIcon} alt="closing-line" />
      </div>
    );
  };

  return (
    <div className="dish-card">
      <img src={image} alt="seed" />
      <div className="dish">
        <span className="h3"> {name} </span>
        <img src={extra_info[extra]} alt="flavour" />
        <div className="dish-info">
          <span className="body-text info-box">{info}</span>
          {RenderPrice()}
        </div>
      </div>
    </div>
  );
};
export default DishCard;
