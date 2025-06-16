import search from '../assets/search.svg'
import '../styles/Hero.scss'
function Hero(){
    return(
        <div className="container">
            <h3 className='text'> Epicure works with the top chef restaurants in Tel Aviv</h3>
            <div className="search-section" >
                <img src={search} alt="" />
                <input type="text" placeholder='Search for restaurant cuisine,chef' />
            </div>
        </div>
    )
}
export default Hero