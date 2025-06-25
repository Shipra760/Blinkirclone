import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SlickElectronic() {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 480) {
        setSlidesToShow(2);
      } else if (width <= 768) {
        setSlidesToShow(3);
      } else if (width <= 992) {
        setSlidesToShow(4);
      } else {
        setSlidesToShow(5);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const items = [
    {
      img: "/elec5.jpeg",
      label: "Featured",
      title: "Vacuum Cleaners",
    },
    {
      img: "/elec4.jpeg",
      label: "Brand ",
      title: "Portronics",
    },
    {
      img: "/elec6.jpeg",
      label: "Featured",
      title: "Remotes",
    },
    {
      img: "/elec2.jpeg",
      label: "Featured",
      title: "Smart Watches",
    },
    {
      img: "/elec1.jpeg",
      label: "Hot Pick",
      title: "Hair Dryers",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 4,
    arrows: true,
  };

  return (
    <div className="container p-3">
      <h5 className="fw-bold " style={{fontSize:"15px"}}>Featured this week</h5>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="px-2">
            <div
              style={{
                border: "2px solid #1E90FF",
                borderRadius: "16px",
                overflow: "hidden",
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: 100,
                // width:"40px",
                position: "relative",
              }}
            >
              {/* Label (Top Center) */}
              <div
                style={{
                  position: "absolute",
                  // top: 10,
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "white",
                  padding: "2px 10px",
                  borderRadius: "10px",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#c1121f",
                }}
              >
                {item.label}
              </div>

              {/* Title */}
              <div
                style={{
                  position: "absolute",
                  bottom: 2,
                  left: 0,
                  right: 0,
                  textAlign: "center",
                  backgroundColor:"white",
                  color: "black",
                  // fontWeight: "bold",
                  fontSize: "10px",
                  textShadow: "1px 1px 3px rgba(0,0,0,0.6)",
                }}
              >
                {item.title}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
