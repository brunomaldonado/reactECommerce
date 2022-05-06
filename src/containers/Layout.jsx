import React from "react";
// import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import "../styles/Layout.scss";


const Layout = ({ children }) => {
  const images = ["photo_one.jpeg", "photo_two.jpeg", "photo_tree.jpeg", "photo_five.jpeg"];
  return (
    <div className="Layout">
      <Header />
			{/* <Banner /> */}
      <div className="carousel contentr">
        <Carousel images={images} autoPlay={true}/>
      </div>
      {children}
    </div>
  );
};

export default Layout;
