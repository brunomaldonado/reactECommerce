import React from "react";
import "../styles/Menu.scss";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="Menu">
      <ul>
        <li>
          <NavLink to="/orders" className="title">
            My orders
          </NavLink>
        </li>
        <li>
          <NavLink to="/account">My account</NavLink>
        </li>
        <li>
          <NavLink to="/login">Sing out</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
