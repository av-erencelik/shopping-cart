import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

export default function Products(props) {
  const [isIdSpecified, setIsIdSpecified] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(props.products);
  const { id } = useParams();
  const handleFiltering = (e) => {
    let temp = props.products.filter(
      (product) => product.type === e.target.dataset.value
    );
    temp.length > 0
      ? setFilteredProducts(temp)
      : setFilteredProducts(props.products);
  };
  useEffect(() => {
    if (id !== undefined) {
      setIsIdSpecified(true);
    }
  });
  return (
    <div className="products-container">
      <div className="toolbar"></div>
      <main className="products-main">
        <aside className="categories">
          <h3 className="category-title">Categories</h3>
          <ul className="category-list">
            <li
              className="category"
              onClick={handleFiltering}
              data-value={"all"}
            >
              All
            </li>
            <li
              className="category"
              onClick={handleFiltering}
              data-value={"box"}
            >
              Boxs
            </li>
            <li
              className="category"
              data-value={"tablet"}
              onClick={handleFiltering}
            >
              Tablets
            </li>
            <li
              className="category"
              data-value={"cake"}
              onClick={handleFiltering}
            >
              Cakes
            </li>
            <li
              className="category"
              data-value={"christmas"}
              onClick={handleFiltering}
            >
              Christmas
            </li>
          </ul>
        </aside>
        <div className="container">
          <div className="products">
            {isIdSpecified
              ? filteredProducts.map((product) => {
                  if (product.id == id) {
                    return (
                      <Product
                        product={product}
                        key={product.id}
                        addingItemToCart={props.addingItemToCart}
                        isOneProduct={isIdSpecified}
                      ></Product>
                    );
                  }
                })
              : filteredProducts.map((product) => {
                  return (
                    <Product
                      product={product}
                      key={product.id}
                      addingItemToCart={props.addingItemToCart}
                      isOneProduct={isIdSpecified}
                    ></Product>
                  );
                })}
          </div>
        </div>
      </main>
    </div>
  );
}
