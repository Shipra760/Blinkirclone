import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CardCarousel() {
  const cards = [
    {
      image: "/namkin.jpeg",
      title: "Crispy, crunchy, spicy Indian snack",
      description: "Classic Indian munch anytime, anywhere",
      link: "/order/2",
    },
    {
      image: "/vacation.jpeg",
      title: "Perfect time for making memories",
      description: "Family time, laughter, and adventure",
      link: "/order/1",
    },
    
    {
      image: "/biscuit.jpeg",
      title: "Sweet and crunchy biscuit delight",
      description: "Crunchy snack for every mood",
      link: "/order/3",
    },
    {
      image: "/cake.jpeg",
      title: "Sweet treat for every celebration",
      description: "Classic dessert for every occasion",
      link: "/order/4",
    },
    {
      image: "/meat.jpeg",
      title: "Tender, juicy, and flavorful meat",
      description: "High-protein, fresh, and full-flavored",
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
    <div className="container my-4 ">
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
                className="position-absolute text-dark bg-opacity-75"
                style={{
                  top: "15px",
                  left: "10px",
                  padding: "10px 15px",
                  borderRadius: "10px",
                  maxWidth: "85%",
                }}
              >
                <h4 className="fw-bold fs-5 mb-1 text-dark">{card.title}</h4>
                <small>{card.description}</small>
                <br />
                <a
                  href="/open"
                  className="btn btn-light mt-5 border border 1 border-success"
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
