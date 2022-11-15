import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Product(props) {
  const navigate = useNavigate();
  const navigateProductPage = () => {
    navigate(`/products/${props.product.id}`);
  };
  const [price, setPrice] = useState(props.product.price);
  const [selectedValue, setSelectedValue] = useState(8);
  const handleSelect = (e) => {
    setSelectedValue(e.target.value);
  };
  const handleAddToCart = () => {
    console.log(props.addingItemToCart);
    if (props.product.type === "box") {
      props.addingItemToCart(price, props.product);
    } else {
      props.addingItemToCart(props.product.price, props.product);
    }
  };
  useEffect(() => {
    if (selectedValue == 8) {
      setPrice(props.product.price[0]);
    } else if (selectedValue == 16) {
      setPrice(props.product.price[1]);
    } else if (selectedValue == 24) {
      setPrice(props.product.price[2]);
    }
  }, [selectedValue]);
  return (
    <>
      {!props.isOneProduct ? (
        <div className="product">
          <img src={props.product.img} alt="product" className="image"></img>
          <h1 className="product-title" onClick={navigateProductPage}>
            {props.product.name}
          </h1>

          {props.product.type === "box" ? (
            <>
              <h1 className="product-title">${price}</h1>
              <select
                className="box-size"
                name="box-size"
                id="box-size"
                onChange={handleSelect}
                defaultValue="8"
              >
                <option value="8">8</option>
                <option value="16">16</option>
                <option value="24">24</option>
              </select>
              <button className="add-cart" onClick={handleAddToCart}>
                Add To Cart
              </button>
            </>
          ) : (
            <>
              <h1 className="product-title">${props.product.price}</h1>
              <button className="add-cart-100" onClick={handleAddToCart}>
                Add To Cart
              </button>
            </>
          )}
        </div>
      ) : (
        <div className="product-only">
          <div className="product-only-container">
            <img
              src={props.product.img}
              alt="product"
              className="image-only"
            ></img>
            <h1 className="product-title-only" onClick={navigateProductPage}>
              {props.product.name}
            </h1>

            {props.product.type === "box" ? (
              <>
                <h1 className="product-title-only">${price}</h1>
                <select
                  className="box-size-only"
                  name="box-size"
                  id="box-size"
                  onChange={handleSelect}
                  defaultValue="8"
                >
                  <option value="8">8</option>
                  <option value="16">16</option>
                  <option value="24">24</option>
                </select>
                <button className="add-cart-only" onClick={handleAddToCart}>
                  Add To Cart
                </button>
              </>
            ) : (
              <>
                <h1 className="product-title-only">${props.product.price}</h1>
                <button className="add-cart-100-only" onClick={handleAddToCart}>
                  Add To Cart
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
