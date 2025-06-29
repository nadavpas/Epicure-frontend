import "../../styles/Legend.scss";
import '../../App.scss'
import { ExtraType } from "../../utils/enum";
import IconCard from "./IconCard";
const Legend: React.FC = () => {
  return (
    <div className="legend-container">
      <h2 className="h2">THE MEANING OF OUR ICONS:</h2>
      <div className="iconCards">
        {Object.values(ExtraType).map((icon,i) => {
          return <IconCard name={icon} key={i} />;
        })}
      </div>
    </div>
  );
};
export default Legend;
