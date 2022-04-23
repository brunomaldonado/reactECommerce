import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import "../styles/ProductItem.scss";
import iconAddToCart from "../assets/icons/bt_add_to_cart.svg";
import iconAddedToCart from "../assets/icons/bt_added_to_cart.svg";

import { MdStar } from "react-icons/md";
import { BsFillCartPlusFill } from "react-icons/bs";
import { BsCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const MAX_RATING = 5;
const MIN_RATING = 1;

const ProductItem = ({ product }) => {
  const { addToCart, removeFromCart } = useContext(AppContext);
  const [addedToCart, setAddedToCart] = useState(false);
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const handleAdd = (item) => {
    // console.log("click add cart");
    addToCart(item);
    setAddedToCart(true);
  };

  const handleRemove = (item) => {
    removeFromCart(item);
    setAddedToCart(false);
  };

  function truncate(str, n) {
    return str?.length > n ? str?.substr(0, n - 1) + " ..." : str;
  }

  // console.log(product)

  return (
    <div className="ProductItem">
      {/* <Link to={`/product/${product.id}`}> */}
      <img src={product.image} alt="" />
      {/* </Link> */}
      <div className="product-info">
        <div>
          <p>{product.title}</p>
          <span style={{ color: "orange" }}>
            {Array(rating)
              .fill()
              .map((_, i) => (
                <MdStar key={i} />
              ))}
          </span>
          <p>$ {product.price}</p>
          <p>{product.category}</p>
        </div>
        {!addedToCart ? (
          <figure onClick={() => handleAdd(product)}>
            <img id="icon" src={iconAddToCart} alt="" />
          </figure>
        ) : (
          <figure onClick={() => handleRemove(product)}>
            <img id="icon" src={iconAddedToCart} alt="" disabled />
          </figure>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
