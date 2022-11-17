import React from "react";
import Modal from "react-modal";
import { BsFillCartFill } from "react-icons/bs";
import CartItem from "./CartItem";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.550)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

export default function ModalCart(props) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div className="modal-button-container">
        <BsFillCartFill
          onClick={openModal}
          className="cartIcon"
        ></BsFillCartFill>
        <div className="cart-quantity">{props.cart.length}</div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        closeTimeoutMS={1000}
        className="modal-cart"
      >
        <div className="cart-container">
          <>
            {props.cart.map((item) => {
              return (
                <CartItem
                  item={item}
                  key={item.name}
                  handleIncrement={props.handleIncrement}
                  handleDecrement={props.handleDecrement}
                ></CartItem>
              );
            })}
          </>
          <div className="cart-buttons">
            <div className="total-container">
              <h4 className="total-title">Total:</h4>
              <span className="total">
                $
                {props.cart.reduce(
                  (accum, item) => accum + item.price * item.quantity,
                  0
                )}
              </span>
            </div>
            <button className="checkout">Checkout</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
