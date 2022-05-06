import React from "react";
import "../styles/Menu.scss";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="Menu">
      <ul>
        <li>
          <Link to="/orders" className="title">
            My orders
          </Link>
        </li>
        <li>
          <a href="/account">My account</a>
        </li>
        <li>
          <a href="/login">Sing out</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
