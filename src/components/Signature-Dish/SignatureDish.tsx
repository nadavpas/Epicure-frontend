import { dishes } from "../../mockData/Dishes"
import DishCard from "../Dishes/DishCard"
const SignatureDish:React.FC = () => {
    return(
        <div className="signature-container">
            <h2>SIGNATURE DISH OF:</h2>
            
            <DishCard {...dishes[0]}/>
        </div>
    )
}
export default SignatureDish