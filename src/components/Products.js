import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import { BsSortDown } from "react-icons/bs";

export default function Products(props) {
  const [isIdSpecified, setIsIdSpecified] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    if (id !== undefined) {
      setIsIdSpecified(true);
    }
  });
  return (
    <div className="products-container">
      <div className="toolbar">
        <button className="sort-button">
          Sort <BsSortDown className="sort-icon"></BsSortDown>
        </button>
      </div>
      <main className="products-main">
        <aside className="categories">
          <h3 className="category-title">Categories</h3>
          <ul className="category-list">
            <li className="category">Boxs</li>
            <li className="category">Tablets</li>
            <li className="category">Cakes</li>
            <li className="category">Christmas</li>
          </ul>
        </aside>
        <div className="container">
          <div className="products">
            {isIdSpecified
              ? props.products.map((product) => {
                  if (product.id == id) {
                    return (
                      <Product
                        product={product}
                        key={product.id}
                        addingItemToCart={props.addingItemToCart}
                      ></Product>
                    );
                  }
                })
              : props.products.map((product) => {
                  return (
                    <Product
                      product={product}
                      key={product.id}
                      addingItemToCart={props.addingItemToCart}
                    ></Product>
                  );
                })}
          </div>
        </div>
      </main>
    </div>
  );
}
