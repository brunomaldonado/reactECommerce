import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import "../styles/Carousel.scss";
import { FcNext } from "react-icons/fc";
import {FcPrevious} from "react-icons/fc"

const CarouselImg = styled.img`
  width: 100%;
  max-height: 75vh;
  opacity: 0;
  object-fit: contain;
  transition: 1s;
  &.loaded {
    opacity: 1;
  }
`;

const Carousel = () => {
  // function Carousel(props: Props){
  const images = ["photo_six.png", "photo_ten.png", "five.png"];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [loaded, setLoaded] = useState(false);

  const selectedNewImage = (index, images, next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next
        ? selectedIndex < images.length - 1
        : selectedIndex > 0;
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
        ? selectedIndex - 1
        : images.length - 1;
      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 500);
  };

  const previous = () => {
    selectedNewImage(selectedIndex, images, false);
    // const condition = selectedIndex > 0;
    // const nextIndex = condition ? selectedIndex - 1 : images.length - 1;
    // setSelectedImage(images[nextIndex]);
    // setSelectedIndex(nextIndex);
  };

  const next = () => {
    selectedNewImage(selectedIndex, images);
    // const condition = selectedIndex < images.length;
    // const nextIndex = condition ? selectedIndex + 1 : 0;
    // setSelectedImage(images[nextIndex]);
    // setSelectedIndex(nextIndex);
  };

  const autoPlayRef = useRef();

  useEffect(() => {
    autoPlayRef.selectedIndex = next;
  });

  useEffect(() => {
    const run = () => {
      autoPlayRef.selectedIndex();
    };
    const interval = setInterval(run, 10000);
  }, []);

  return (
    <div className="banner-carousel main">
      <CarouselImg
        src={require(`../assets/img/${selectedImage}`)}
        alt="Shop"
        className={loaded ? "loaded" : ""}
        onLoad={() => setLoaded(true)}
      />
      <div className="carousel-buttons">
        <button className="left" onClick={previous}>
          <FcPrevious/>
        </button>
        <button className="right" onClick={next}>
        <FcNext/>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
