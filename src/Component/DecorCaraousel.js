import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const trendingItems = [
  {
    id: 1,
    image: "/decor4.jpeg",
    title: "Discover your natural glow",
  },
  {
    id: 2,
    image: "/decor5.jpeg",
    title: "Enhance elegance with every touch",
  },
  {
    id: 3,
    image: "/decor4.jpeg",
    title: "Radiate confidence, effortlessly",
  },
];

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3.5,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 768, settings: { slidesToShow: 1 } },
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
  ],
};

export default function DecorCaraousel() {
  return (
    <div className="container  ">
      <h5 className="fw-bold ms-2 " style={{fontSize:"15px"}}>Trending Now</h5>
      <Slider {...settings}>
        {trendingItems.map((item) => (
          <div key={item.id} className="">
            <div className="position-relative border rounded-4 border-primary border 5 overflow-hidden  "
              style={{ backgroundColor: "#f3e6ff" }}>
              <img
                src={item.image}
                alt={item.title}
                className="img-fluid"
                style={{ height: 200, width: "100%"  }}
              />
              <div
                className="position-absolute  p-2"
                style={{
                  top: 10,
                  left: 10,
                  borderRadius: "10px",
                  width: "85%",
                }}
              >
                <h6 className="fw-bold mb-1">{item.title}</h6>
                <small>{item.description}</small>
                <div className="mt-5 ">
                  <Link
                    to={`/decoropen/${item.id}`}
                    className="btn btn-outline-secondary btn-sm bg-light text-dark mt-4 p-2"
                  >
                    Order Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
