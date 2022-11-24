import { NavLink } from "react-router-dom";
import logo from "../img/logo.png";
import ModalCart from "./Modal";

export default function Header(props) {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="logo"></img>
      <nav className="navigation">
        <ul>
          <li>
            <NavLink
              to="/"
              className="link"
              style={({ isActive }) => {
                return isActive
                  ? { color: "#d7c0ae", backgroundColor: "#562b08" }
                  : {};
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="link"
              style={({ isActive }) => {
                return isActive
                  ? { color: "#d7c0ae", backgroundColor: "#562b08" }
                  : {};
              }}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/auth"
              className="link"
              style={({ isActive }) => {
                return isActive
                  ? { color: "#d7c0ae", backgroundColor: "#562b08" }
                  : {};
              }}
            >
              Login/Sign-up
            </NavLink>
          </li>
          <ModalCart
            cart={props.cart}
            handleIncrement={props.handleIncrement}
            handleDecrement={props.handleDecrement}
          ></ModalCart>
        </ul>
      </nav>
    </header>
  );
}
