import dish from '../assets/icon/dish.svg'
import spicy from '../assets/icon/spicy.svg'
import '../styles/DishCard.scss'
function DishCard(){
    return(
        <div className="dish-card">
            <img src={dish} alt="seed" />
            <div className="dish-info">
                <h1>Dish name</h1>
                <img src={spicy} alt="flavour" />
                <h3>explanation</h3>
                <h5>price</h5>
            </div>
        </div>
    )
}
export default DishCard