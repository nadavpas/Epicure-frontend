import { spicy, vegan, vegetarian } from "../../assets/Icons/legend";
import "../../styles/IconCard.scss";
interface IconCardProps {
  name: "spicy" | "vegan" | "vegetarian";
}
function IconCard({ name }: IconCardProps) {
  const icons = {
    spicy: spicy,
    vegetarian: vegetarian,
    vegan: vegan,
  };
  return (
    <div className="iconcard-container">
      <img src={icons[name]} alt="icon" />
      <span className="icon-label">{name}</span>
    </div>
  );
}
export default IconCard;
