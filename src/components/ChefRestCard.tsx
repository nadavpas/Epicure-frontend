import { dish } from "../assets/icons"
import '../styles/ChefRestCard.scss'
interface ChefRestCardProps{
    name:string,
}
function ChefRestCard({name}:ChefRestCardProps){
    return(
        <div className="chef-rest-container">
            <img src={dish} alt="dish" />
            <div className="text-container">
                <h3>{name}</h3>
            </div>
        </div>
    )
}
export default ChefRestCard