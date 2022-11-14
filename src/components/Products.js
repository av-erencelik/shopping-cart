import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

const productsState = [
  {
    name: "x",
    id: 1,
  },
  {
    name: "y",
    id: 2,
  },
];

export default function Products() {
  const [products, setProducts] = useState(productsState);
  const [isIdSpecified, setIsIdSpecified] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    if (id !== undefined) {
      setIsIdSpecified(true);
    }
  });
  return (
    <>
      <h1>PRODUCTS</h1>
      {isIdSpecified
        ? null
        : products.map((product) => {
            return <Product product={product}></Product>;
          })}
      {products.map((product) => {
        if (product.id == id) {
          return <Product product={product}></Product>;
        }
      })}
    </>
  );
}
