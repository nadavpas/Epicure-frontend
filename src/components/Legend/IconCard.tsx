import { spicy, vegan, vegetarian } from "../../assets/Icons/legend";
import "../../styles/IconCard.scss";
import type { ExtraType } from "../../utils/enum";
interface IconCardProps {
  name: ExtraType;
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
