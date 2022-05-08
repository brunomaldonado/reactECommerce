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
      <h2 className="title-container">
        My order
      </h2>
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
          <span>Subtotal</span>
          <span>$ {subTotal().toFixed(2)}</span>
        </div>
        <span className="title-bottom">
          Shipping, taxes, and discounts calculated at checkout.
        </span>
        <button className="primary-button"><Link to="/checkout">Check out</Link></button>
      </div>
    </aside>
  );
};

export default MyOrder;
