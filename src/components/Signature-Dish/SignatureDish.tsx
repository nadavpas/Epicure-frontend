import { dishes } from "../../mockData/Dishes"
import '../../App.scss'
import DishCard from "../Dishes/DishCard"
const SignatureDish:React.FC = () => {
    return(
        <div className="signature-container">
            <h2>SIGNATURE DISH OF:</h2>\
            <div className="dishCard-container">
                
            </div>

            <DishCard {...dishes[0]}/>
        </div>
    )
}
export default SignatureDish