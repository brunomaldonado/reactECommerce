import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import OrderItem from "../components/OrderItem";
import Menu from "../components/Menu";
import logo from "../assets/logos/logo_yard_sale.svg";
import "../styles/Checkout.scss";

const Checkout = () => {
  const { state } = useContext(AppContext);

  const subTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const total = state.cart.reduce(reducer, 0);

    return total;
  };

  return (
    <div className="wrap">
      {/* <div className="main-checkout">
        <div className="main-header">
          <img src={logo} alt="logo" className="nav-logo" />
          <div className="dynamic-checkout">
            <h2 className="dynamic-checkout__title">Express checkout</h2>
            <div className="dynamic-checkout__content">
              <button className="primary-button">shopPay</button>
              <button className="primary-button">PayPal</button>
              <button className="primary-button">Google Pay</button>
            </div>
          </div>
        </div>
        <div className="main-content"></div>
        <div className="main-footer"></div>
      </div> */}
      <div className="Checkout">
      <div className="Checkout-container">
        <h1 className="title">My order</h1>
        <div className="Checkout-content">
          <div className="order">
            <p>
              <span>03.25.21</span>
              <span>6 articles</span>
            </p>
            <p>$ {subTotal().toFixed(2)}</p>
          </div>
        </div>
        {state.cart.length > 0 ? (
          state.cart.map((product) => (
            <OrderItem product={product} key={`orderItem-${product.id}`} />
          ))
        ) : (
          <div>Your cart is currently empty.</div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Checkout;
