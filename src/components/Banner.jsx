import React, { useEffect, useState, useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../styles/Banner.scss";

const Banner = () => {

  return (
    <div className="container-carousel">
      <div className="banner-slider">
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={5000}
        >
          <div>
            <img
              src="https://i.pinimg.com/originals/f4/db/71/f4db71aa5c15246e609ed2e1069e676f.jpg"
              alt=""
              style={{
                objectFit: "contain",
              }}
            />
          </div>
          {/* <div><img src="https://comprasporinternet.uy/wp-content/uploads/2017/10/vestimenta-mujer.png" alt="" /></div> */}
          <div>
            <img src="https://c0.wallpaperflare.com/preview/301/821/67/adult-beautiful-beauty-close-up.jpg" />
          </div>
          <div>
            <img src="https://c1.wallpaperflare.com/preview/110/135/779/portrait-woman-girl-blond.jpg" />
          </div>
          <div>
            <img src="https://c1.wallpaperflare.com/preview/644/271/614/shopping-clothes-fashion-retail.jpg" />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1483181957632-8bda974cbc91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://img.freepik.com/free-photo/fashion-portrait-closeup-young-elegant-woman-black-short-dress-sitting-armchair-isolated-studio-shot-foot_115086-264.jpg?w=740"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2017/08/06/17/58/people-2594681_960_720.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://i.pinimg.com/originals/f4/db/71/f4db71aa5c15246e609ed2e1069e676f.jpg"
              alt=""
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
