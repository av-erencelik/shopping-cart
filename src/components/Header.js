import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import ModalCart from "./Modal";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="logo"></img>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="link">
              Products
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <ModalCart></ModalCart>
        </ul>
      </nav>
    </header>
  );
}
