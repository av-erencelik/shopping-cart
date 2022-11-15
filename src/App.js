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
    setCart((prevState) => ({
      ...prevState,
      cartItem,
    }));
    console.log(cart);
  }
  return (
    <>
      <Header></Header>
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
