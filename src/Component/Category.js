import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
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
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 5,
      },
    },
  ],
};

export default function CategorySlider() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (label) => {
    setSelectedCategory(label);
  };

  const renderContent = () => {
    switch (selectedCategory) {
      case "All":
        return;
      case "Electronics":
        return;
      case "Beauty":
        return;
      case "Decor":
        return;
      case "Kids":
        return;
      default:
        return;
    }
  };

  return (
    <div className="">
      <div
        className="category-slider-wrapper"
        style={{
          paddingLeft: "0px",
          backgroundColor: "lightgreen",
          marginLeft: "0px",
        }}
      >
        {/* <Slider {...settings}>
          {categories.map((item, idx) => (
            <div key={idx} onClick={() => handleCategoryClick(item.label)}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "pointer",
                  color: selectedCategory === item.label ? "#00a400" : "#333",
                }}
              >
                {item.icon}
                <small style={{ fontSize: "11px" }}>{item.label}</small>
              </div>
            </div>
          ))}
        </Slider> */}

        <Slider {...settings}>
          {categories.map(({ icon, label }, idx) =>
            label === "All" ? (
              <div key={idx} onClick={() => handleCategoryClick(label)}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    cursor: "pointer",
                    color: selectedCategory === label ? "#00a400" : "#333",
                  }}
                >
                  {icon}
                  <small style={{ fontSize: 11 }}>{label}</small>
                </div>
              </div>
            ) : (
              <Link
                key={idx}
                to={`/category/${label.toLowerCase()}`}
                style={{ textDecoration: "none ", color: "#333" }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    color: selectedCategory === label ? "#00a400" : "#333",
                  }}
                >
                  {icon}
                  <small style={{ fontSize: 11 }}>{label}</small>
                </div>
              </Link>
            )
          )}
        </Slider>
      </div>

      <div className="mt-3">{renderContent()}</div>
    </div>
  );
}
