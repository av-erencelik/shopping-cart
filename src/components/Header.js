import { NavLink } from "react-router-dom";
import logo from "../img/logo.png";
import ModalCart from "./Modal";
import authContext from "./store/auth-context";
import { useContext } from "react";
export default function Header(props) {
  const authCtx = useContext(authContext);
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
                return isActive ? { color: "#d7c0ae", backgroundColor: "#562b08" } : {};
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
                return isActive ? { color: "#d7c0ae", backgroundColor: "#562b08" } : {};
              }}
            >
              Products
            </NavLink>
          </li>
          {!authCtx.isLoggedIn && (
            <li>
              <NavLink
                to="/auth"
                className="link"
                style={({ isActive }) => {
                  return isActive ? { color: "#d7c0ae", backgroundColor: "#562b08" } : {};
                }}
              >
                Login/Sign-up
              </NavLink>
            </li>
          )}
          {authCtx.isLoggedIn && (
            <>
              <li>
                <NavLink
                  to="/profile"
                  className="link"
                  style={({ isActive }) => {
                    return isActive ? { color: "#d7c0ae", backgroundColor: "#562b08" } : {};
                  }}
                >
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink onClick={authCtx.logout} className="link">
                  Logout
                </NavLink>
              </li>
            </>
          )}
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
