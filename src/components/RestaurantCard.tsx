import claro from '../assets/claro.svg'
function RestaurantCard() {
  return <div className="container">
    <img src={ claro } alt="dish" />
    <div className='info'>
      <h3>Restaurant's name</h3>
      <h4>Chef name</h4>
      <h5> Rating</h5>
    </div>
  </div>;
}
export default RestaurantCard;
