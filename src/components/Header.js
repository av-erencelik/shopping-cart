import { NavLink } from "react-router-dom";
import logo from "../img/logo.png";
import ModalCart from "./Modal";

export default function Header() {
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
              to="/about"
              className="link"
              style={({ isActive }) => {
                return isActive
                  ? { color: "#d7c0ae", backgroundColor: "#562b08" }
                  : {};
              }}
            >
              About
            </NavLink>
          </li>
          <ModalCart></ModalCart>
        </ul>
      </nav>
    </header>
  );
}
