import React from "react";
import "../styles/SendEmail.scss";
import logo from "../assets/logos/logo_yard_sale.svg";
import email from "../assets/icons/email.svg";
import { NavLink } from "react-router-dom";

const SendEmail = () => {
  return (
    <div className="SendEmail">
      <div className="form-container">
        {/* <img src={logo} alt="logo" className="logo" /> */}
        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">
          Please check your inbox for instructions on how to reset the password
        </p>
        <div className="email-image">
          <img src={email} alt="email" />
        </div>
        <button className="primary-button login-button"><NavLink to="/login">Login</NavLink></button>
        <p className="resend">
          <span>Didn't receive the email?</span>
          <NavLink to="/">Resend</NavLink>
        </p>
      </div>
    </div>
  );
};

export default SendEmail;
