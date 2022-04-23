import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import "../styles/OrderItem.scss";
import close from "../assets/icons/icon_close.png";
// import iconAddToCart from "../assets/icons/bt_add_to_cart.svg";
import close1 from "../assets/icons/icon_close1.png";
// import ProductItem from "../components/ProductItem";

const OrderItem = ({ product }) => {
  const { addToCart, removeFromCart } = useContext(AppContext);

  const handleRemove = (item) => {
    removeFromCart(item);
    // console.log("click");
  };



  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
  };

  return (
    <>
      <div className="OrderItem appear-animation appear-dealy">
        <figure>
          {/* <img src={product.images[0]} alt={product.title} /> */}
          <img src={product.image} alt={product.title} />
        </figure>
        <p>{truncate(product.title, 30)}</p>
        <p>$ {product.price}</p>
        <img src={close1} alt="close" onClick={() => handleRemove(product)} />

        {/* {!icon ? (
						<img src={close1} alt="close" onClick={() => handleRemove(product)} />
        ) : (
					<figure onClick={() => handleRemove(product)}>
            <img id="icon" src={iconAddToCart} alt="" />
          </figure>
        )}

        {icon && <ProductItem />} */}
      </div>
    </>
  );
};

export default OrderItem;
