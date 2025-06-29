import "../../styles/ShoppingCart.scss";
import "../../assets/Icons";
import '../../App.scss'
import { bagIcon } from "../../assets/Icons";
const ShopingCart: React.FC = () => {
  const RenderEmptyBag = () => {
    return(
      <div className="empty-bag-container">
        <img src={bagIcon} alt="empty-bag" />
        <span>
          YOUR BAG IS EMPTY
        </span>
      </div>
    )
  }
  return (
    <div className="shopping-cart-container">
      {RenderEmptyBag()}
      <div className="button">
        <button className="button-text">ORDER HISTORY</button>
      </div>
    </div>
  );
};
export default ShopingCart;
