import React, { useContext, useState } from "react";
import OrderItem from "../components/OrderItem";
import AppContext from "../context/AppContext";
import "../styles/MyOrder.scss";
import close from "../assets/icons/icon_close.png";
import { Link, NavLink } from "react-router-dom";

const MyOrder = () => {
  const { state } = useContext(AppContext);

  const subTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const total = state.cart.reduce(reducer, 0);

    return total;
  }

  return (
    <aside className="MyOrder drawer open-right">
      <div className="title-container">
        <img className="btn-close" src={close} alt="close" />
        <p className="title">My order</p>
      </div>
      <div className="relative">
        <div className="my-order-content">
          {state.cart.length > 0 ? (
            state.cart.map((product) => (
              <OrderItem product={product} key={`orderItem-${product.id}`} />
            ))
          ) : (
            <div>Your cart is currently empty.</div>
          )}
        </div>
      </div>
      <div className="checkout-order-bottom">
        <div className="order">
          <p>
            <span>Subtotal</span>
          </p>
          <p>$ {subTotal().toFixed(2)}</p>
        </div>
        {/* <span className="title-bottom">
          Shipping, taxes, and discounts calculated at checkout.
        </span> */}
        {/* <input type="submit" value="Check out" className="primary-button btn-cheackout" /> */}
        {/* <button className="primary-button"><NavLink to="/checkout">Check out</NavLink></button> */}
        {/* <NavLink className="primary-button" to="/checkout">Check out</NavLink> */}
        <NavLink className="primary-button_" to="/checkout">Check out</NavLink>
      </div>
    </aside>
  );
};

export default MyOrder;
