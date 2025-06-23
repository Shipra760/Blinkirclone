import React, { useState } from "react";
import Slider from "react-slick";
import { Link, useLocation } from "react-router-dom";
import { GiShoppingBag, GiLipstick, GiBabyBottle } from "react-icons/gi";
import { MdHeadphones } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const categories = [
  { icon: <GiShoppingBag size={20} />, label: "All" },
  { icon: <MdHeadphones size={20} />, label: "Electronics" },
  { icon: <GiLipstick size={20} />, label: "Beauty" },
  { icon: <FaRegLightbulb size={20} />, label: "Decor" },
  { icon: <GiBabyBottle size={20} />, label: "Kids" },
];

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 768,
      settings: { slidesToShow: 4, slidesToScroll: 4 },
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 4, slidesToScroll: 4 },
    },
  ],
};

export default function Category() {
  const location = useLocation();
  const currentCategory = location.pathname.split("/").pop();

  return (
    <div style={{ backgroundColor: "lightyellow", paddingLeft: 0 , height:"50px"}}>
      <Slider {...settings}>
        {categories.map(({ icon, label }, idx) => (
          <Link
            key={idx}
            to={`/category/${label.toLowerCase()}`}
            className="category-link"
            style={{
              textDecoration: "none",
              color: currentCategory === label.toLowerCase() ? "#00a400" : "#333",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop:"7px" }}>
              {icon}
              <small style={{ fontSize: "11px" }}>{label}</small>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
}
