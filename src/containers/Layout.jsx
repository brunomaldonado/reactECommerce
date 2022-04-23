import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import "../styles/Layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Header />
			<Banner />
      {children}
    </div>
  );
};

export default Layout;
