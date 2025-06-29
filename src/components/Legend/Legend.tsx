import "../../styles/Legend.scss";
import IconCard from "./IconCard";
const Legend: React.FC = () => {
  const icons = ["spicy", "vegan", "vegetarian"];
  return (
    <div className="legend-container">
      <h2>THE MEANING OF OUR ICONS:</h2>
      <div className="iconCards">
        {icons.map((icon,i) => {
          return <IconCard name={icon as "spicy" | "vegan" | "vegetarian"} key={i} />;
        })}
      </div>
    </div>
  );
};
export default Legend;
