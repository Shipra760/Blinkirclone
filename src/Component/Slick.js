import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Slick() {
  const [slidesToShow, setSlidesToShow] = useState(6);
  const [imageSize, setImageSize] = useState(160);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 480) {
        setSlidesToShow(3);
        setImageSize(100);
      } else if (width <= 576) {
        setSlidesToShow(3);
        setImageSize(110);
      } else if (width <= 768) {
        setSlidesToShow(4);
        setImageSize(130);
      } else if (width <= 992) {
        setSlidesToShow(5);
        setImageSize(145);
      } else {
        setSlidesToShow(6);
        setImageSize(160); // ✅ Fixed value for desktop
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const items = [
    { img: "/maggie.jpeg" },
    { img: "/loreal.jpeg" },
    { img: "/protein.jpeg" },
    { img: "/meat.jpeg" },
    { img: "/shoefix.jpeg" },
    { img: "/vacation.jpeg" },
    { img: "/watch.jpeg" },
    { img: "/jew.jpeg" },
    { img: "/ice.jpeg" },
    { img: "/namkin.jpeg" },
    { img: "/biscuit.jpeg" },
    { img: "/loreal.jpeg" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 5,
    arrows: true,
  };

  return (
    <div className="container mt-4 ">
      <h4 className="fw-bold mt-1 ms-1" style={{ fontSize: "15px" }}>
        Featured this week
      </h4>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="px-2">
            <div
              style={{
                height: `${imageSize}px`,
                width: `${imageSize}px`,
                margin: "auto",
                backgroundColor: "#fff",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 0 12px rgba(0,0,0,0.1)",
                border: "1px solid blue",
              }}
            >
              <img
                src={item.img}
                alt={`Item ${index + 1}`}
                className="img-fluid"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
