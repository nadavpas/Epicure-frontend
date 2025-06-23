import "../styles/Legend.scss";
import IconCard from "./IconCard";
function Legend() {
  const icons = ["spicy", "vegan", "vegetarian"];
  return (
    <div className="legend-container">
      <h2>THE MEANING OF OUR ICONS:</h2>
      <div className="iconCards">
        {icons.map((icon) => {
          return <IconCard name={icon as "spicy" | "vegan" | "vegetarian"} />;
        })}
      </div>
    </div>
  );
}
export default Legend;
