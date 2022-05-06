import React, { useState, useContext, useRef } from "react";
import "../styles/Header.scss";
import logo from "../assets/logos/logo_yard_sale.svg";
import shoppingCart from "../assets/icons/icon_shopping_cart.svg";
import Menu from "../components/Menu";
import AppContext from "../context/AppContext";
import MyOrder from "../containers/MyOrder";
// import menu from "../assets/icons/icon_menu.svg";
import close from "../assets/icons/icon_close.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false); //show Menu
  const [toggleOrders, setToggleOrders] = useState(false);
  const [navBarOpen, setNavbarOpen] = useState(false); //shoiw menu items
  const [loading, setLoading] = useState(false);

  const { state } = useContext(AppContext);
  const navRef = useRef();

  // show Menu actions
  const handleToggle = () => {
    setToggle(!toggle);
    // console.log("click")
  };

  const showBanner = () => {
    setToggleOrders(true);
  };

  const closeBanner = () => {
    setToggleOrders(false);
  };

  const openNav = () => {
    // console.log("open bar menu");
    setNavbarOpen(true);
    navRef.current.style.display = "block";
  };
  const closeNav = () => {
    // console.log("close bar menu");
    setNavbarOpen(false);
    navRef.current.style.display = "none";
  };

  // const truncate = (str, n) => {
  //   return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
  // };

  const filterProduct = (category) => {
    const updatedProduct = product.filter((x) => x.category === category)
    setFilter(updatedProduct)
  }

  return (
    <header className="main">
      <img src={logo} alt="logo" className="nav-logo" />
      <nav ref={navRef}>
        <div className="navbar-left">
          <ul>
            <li>
              <a href="/" onClick={() => setFilter(product)}>All</a>
            </li>
            <li>
              <a href="/" onClick={() => filterProduct("men's clothing")}>Men Clothing</a>
            </li>
            <li>
              <a href="/" onClick={() => filterProduct("women's clothing")}>Women Clothing</a>
            </li>
            <li>
              <a href="/" onClick={() => filterProduct("electronics")}>Electronics</a>
            </li>
            <li>
              <a href="/" onClick={() => filterProduct("jawelery")}>Jawelery</a>
            </li>
            <li>
              <a href="/" onClick={() => filterProduct("others")}>Others</a>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <ul>
            <li className="navbar-email" onClick={handleToggle}>
              <p>
                brunomaldonado@... <span name="name" id=""></span>
              </p>
              <NavLink to="/login" >Sing out</NavLink>
            </li>
          </ul>
        </div>
      {toggle && <Menu />}
      </nav>
      <div className="navbar-right">
        {!navBarOpen ? (
          <button className="navbar-toggle" type="button" onClick={openNav}>
            <span className="br-1"></span>
            <span className="br-2"></span>
            <span className="br-3"></span>
          </button>
        ) : (
          <div className="btn-close"><img className="btn-close" src={close} alt="" onClick={closeNav} /></div>
        )}

        <ul>
          {!toggleOrders ? (
            <li className="navbar-shopping-cart" onClick={showBanner}>
              <img src={shoppingCart} alt="shopping cart" />
              {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
            </li>
          ) : (
            <div className="btn-close"><img className="btn-close" src={close} alt="" onClick={closeBanner} /></div>
          )}
        </ul>
        {/* {toggle && <Menu />} */}
        {toggleOrders && <MyOrder />}
      </div>
    </header>
  );
};

export default Header;
