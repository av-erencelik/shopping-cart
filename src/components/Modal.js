import React from "react";
import Modal from "react-modal";
import { BsFillCartFill } from "react-icons/bs";
const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.550)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

export default function ModalCart() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <BsFillCartFill onClick={openModal} className="cartIcon"></BsFillCartFill>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        closeTimeoutMS={1000}
        className="modal-cart"
      ></Modal>
    </div>
  );
}
