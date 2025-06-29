import "../../styles/ShoppingCart.scss";
import "../../assets/Icons";
import '../../App.scss'
import { emptyBag } from "../../assets/Icons";
const ShopingCart: React.FC = () => {
  return (
    <div className="shopping-cart-container">
      <div>
        <img src={emptyBag} alt="empty-bag" />
      </div>
      <div className="button">
        <button className="button-text">ORDER HISTORY</button>
      </div>
    </div>
  );
};
export default ShopingCart;
