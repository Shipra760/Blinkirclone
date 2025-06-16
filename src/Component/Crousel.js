import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CardCarousel() {
  const cards = [
    {
      image: "/vacation.jpeg",
      title: "Pharmacy at your Doorstep!",
      description: "Your favourite paan shop is now online",
    },
    {
      image: "/cake.jpeg",
      title: "Fresh Medicines Delivered!",
      description: "Speedy and reliable pharmacy delivery",
    },
    {
      image: "/ice.jpeg",
      title: "Fresh Medicines Delivered!",
      description: "Speedy and reliable pharmacy delivery",
    },
    {
      image: "/cake.jpeg",
      title: "Fresh Medicines Delivered!",
      description: "Speedy and reliable pharmacy delivery",
    },
    {
      image: "/vacation.jpeg",
      title: "Fresh Medicines Delivered!",
      description: "Speedy and reliable pharmacy delivery",
    },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="container my-4">
      <Slider {...settings}>
        {cards.map((card, i) => (
          <div key={i} className="p-2">
            <div className="position-relative border  rounded-4 overflow-hidden">
              <img
                src={card.image}
                alt=""
                className="img-fluid"
                style={{ height: 250, width: "100%", objectFit: "cover" }}
              />
              <div
                className="position-absolute text-dark  bg-opacity-75"
                style={{
                  top: "15px",
                  left: "10px",
                  padding: "10px 15px",
                  borderRadius: "10px",
                  maxWidth: "85%",
                }}
              >
                <h4 className="fw-bold fs-5 mb-1">{card.title}</h4>
                <small>{card.description}</small>
                <button className="btn btn-dark mt-5">Order Now</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
