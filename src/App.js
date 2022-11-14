import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Example from "./components/Modal";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/products" element={<Products></Products>}>
          <Route path=":id" element={<Products></Products>}></Route>
        </Route>
      </Routes>
      <Example></Example>
    </>
  );
}

export default App;
