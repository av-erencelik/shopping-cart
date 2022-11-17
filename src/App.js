import { motion } from "framer-motion";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import { productsState } from "./components/ProductsState";
import "./styles/main.scss";

function App() {
  const [products, setProducts] = useState(productsState);
  const [cart, setCart] = useState([]);
  function addingItemToCart(price, item) {
    let cartItem = { ...item };
    cartItem.quantity = 1;
    cartItem.price = price;
    let tempCart = cart.filter((cartItem) => cartItem.id === item.id);
    if (tempCart.length > 0) {
      handleIncrement(cartItem);
      return;
    }
    setCart([...cart, cartItem]);
  }
  function handleIncrement(cartItem) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === cartItem.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }
  function handleDecrement(cartItem) {
    if (cartItem.quantity === 1) {
      setCart((prev) => prev.filter((item) => item.id !== cartItem.id));
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.id === cartItem.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }
  return (
    <>
      <Header
        cart={cart}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      ></Header>
      <Routes>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              exit={{ opacity: 0 }}
            >
              <Home></Home>
            </motion.div>
          }
        ></Route>
        <Route
          path="/products"
          element={
            <Products
              products={products}
              addingItemToCart={addingItemToCart}
            ></Products>
          }
        >
          <Route
            path=":id"
            element={<Products products={products}></Products>}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
