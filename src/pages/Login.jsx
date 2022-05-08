import React, { useRef } from "react";
import "../styles/Login.scss";
import logo from "../assets/logos/logo_yard_sale.svg";
import shop from "../assets/img/shop.png"
import { NavLink } from "react-router-dom";

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (e) => {
		// e.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(data);
  };

  return (
    <div className="Login ">
      <div className="bg_image"><img className="shop" src={shop} alt="shop" /></div>
      <div className="Login-container">
        <img src={logo} alt="logo" className="logo_" />
        <form action="/" className="form" ref={form}>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="text"
            name="email"
            placeholder="platzi@example.com"
            className="input-login input-email"
          />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="*********"
            className="input-login input-password"
          />
          <button
            className="primary-button login-button"
            onClick={handleSubmit}
          >
            Log in
          </button>
          <NavLink to="/password-recovery">Forgot my password</NavLink>
        </form>
        <button className="secondary-button signup-button"><NavLink to="/signup">Sign up</NavLink></button>
      </div>
    </div>
  );
};

export default Login;
