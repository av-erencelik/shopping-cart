import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

export default function CartItem(props) {
  function handleClickIncrement() {
    props.handleIncrement(props.item);
  }
  function handleClickDecrement() {
    props.handleDecrement(props.item);
  }
  return (
    <div className="cart-item">
      <img src={props.item.img} alt="cartitem" className="cart-item-img"></img>
      <div className="specs">
        <h4 className="cart-item-title">{props.item.name}</h4>
        <h4 className="cart-item-price">${props.item.price}</h4>
        <div className="quantity">
          <span>
            <AiOutlineMinus
              className="quantity-icon"
              onClick={handleClickDecrement}
            ></AiOutlineMinus>
          </span>
          <span>{props.item.quantity}</span>
          <span>
            <AiOutlinePlus
              className="quantity-icon"
              onClick={handleClickIncrement}
            ></AiOutlinePlus>
          </span>
        </div>
      </div>
    </div>
  );
}
