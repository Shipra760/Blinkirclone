import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const trendingItems = [
  {
    id: 1,
    image: "/elec6.jpeg",
    title: "Smooth, precise control for everyday computing tasks",
  },
  {
    id: 2,
    image: "/elec5.jpeg",
    title: "Powerful bass for an immersive sound experience",
  },
  {
    id: 3,
    image: "/elec4.jpeg",
    title: " Clear audio and comfort for music and calls on the go",
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

export default function TrendingCarousel() {
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
                    to={`/trendopen/${item.id}`}
                    className="btn btn-outline-dark btn-sm bg-dark text-light"
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
