import { dishes } from "../../mockData/Dishes";
import '../../styles/SignatureDish.scss'
import "../../App.scss";
import DishCard from "../Dishes/DishCard";
const SignatureDish: React.FC = () => {
  return (
    <div className="signature-container">
      <h2>SIGNATURE DISH OF:</h2>
      <div className="dishCard-container">
        {dishes.map((dish) => {
          return <DishCard {...dish} key={dish.name}/>;
        })}
      </div>
    </div>
  );
};
export default SignatureDish;
