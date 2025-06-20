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
      link: "/order/1",
    },
    {
      image: "/namkin.jpeg",
      title: "Fresh Medicines Delivered!",
      description: "Speedy and reliable pharmacy delivery",
      link: "/order/2",
    },
    {
      image: "/biscuit.jpeg",
      title: "Cold Medicines Delivered!",
      description: "Cold relief at your home",
      link: "/order/3",
    },
    {
      image: "/cake.jpeg",
      title: "Healthy You, Fast Delivery",
      description: "Top brands at best prices",
      link: "/order/4",
    },
    {
      image: "/meat.jpeg",
      title: "24x7 Medical Delivery",
      description: "We are always open for you",
      link: "/order/5",
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
            <div className="position-relative border rounded-4 overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
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
                <br />
                <a
                  href="/open" // link to new page
                  className="btn btn-dark mt-3"
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
