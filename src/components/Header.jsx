import React, { useState, useContext, useRef } from "react";
import logo from "../assets/logos/logo_yard_sale.svg";
import shoppingCart from "../assets/icons/icon_shopping_cart.svg";
import Menu from "./Menu";
import AppContext from "../context/AppContext";
import MyOrder from "../containers/MyOrder";
import close from "../assets/icons/icon_close.png";
import { Link, NavLink } from "react-router-dom";
import {
  Container,
  LogoContainer,
  MenuToggle,
  NavMenuItem,
  NavMenuItemLink,
  NavMenuLeft,
  NavMenuRight,
  Wrapper,
  ButtonCart,
  CircleCount,
  ButtonClose,
  BtnClose,
} from "./NavbarElements";

const Header = () => {
  const [toggle, setToggle] = useState(false); //show Menu
  const [toggleOrders, setToggleOrders] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false); //shoiw menu items

  const { state } = useContext(AppContext);

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

  const showMenu = () => {
    setHamburgerOpen(true);
  };

  const closeMenu = () => {
    setHamburgerOpen(false);
  };

  return (
    <Container>
      <LogoContainer>
        <Link to=""><img src={logo} alt="" /></Link>
      </LogoContainer>
      <Wrapper open={hamburgerOpen}>
        <NavMenuLeft>
          <NavMenuItem>
            <NavMenuItemLink>All</NavMenuItemLink>
            <NavMenuItemLink>Men Clothing</NavMenuItemLink>
            <NavMenuItemLink>Women Clothing</NavMenuItemLink>
            <NavMenuItemLink>Electronics</NavMenuItemLink>
            <NavMenuItemLink>Jawelery</NavMenuItemLink>
            <NavMenuItemLink>Others</NavMenuItemLink>
          </NavMenuItem>
        </NavMenuLeft>
        <NavMenuRight>
          <NavMenuItem onClick={handleToggle} style>
            <p>
              brunomaldonado@... <span name="name" id=""></span>
            </p>
            <Link to="/login">Sing out</Link>
          </NavMenuItem>
          {toggle && <Menu />}
          {toggleOrders && <MyOrder />}
        </NavMenuRight>
      </Wrapper>

      {!hamburgerOpen ? (
        // <MenuToggle onClick={() => setHamburgerOpen(!hamburgerOpen)}>
        <MenuToggle onClick={showMenu}>
          <span className="br-1"></span>
          <span className="br-2"></span>
          <span className="br-3"></span>
        </MenuToggle>
      ) : (
        <ButtonClose alt="" onClick={closeMenu}>
          <img src={close} alt={"x"} />
        </ButtonClose>
      )}

      {!toggleOrders ? (
        <ButtonCart onClick={showBanner}>
          <img src={shoppingCart} alt={"x"} onClick={showBanner} />
          {state.cart.length > 0 ? (
            <CircleCount>{state.cart.length}</CircleCount>
          ) : null}
        </ButtonCart>
      ) : (
        <BtnClose alt="" onClick={closeBanner}>
          <img src={close} alt={"x"} />
        </BtnClose>
      )}
    </Container>
  );
};

export default Header;
