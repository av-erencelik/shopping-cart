import { motion } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import "./styles/main.scss";

function App() {
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
        <Route path="/products" element={<Products></Products>}>
          <Route path=":id" element={<Products></Products>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
