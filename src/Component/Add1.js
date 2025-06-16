import React, { useState, useEffect } from "react";

export default function Add1() {
  const [cardSize, setCardSize] = useState({ height: 220, imageHeight: 100 });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setCardSize({ height: 160, imageHeight: 70 });
      } else if (width <= 576) {
        setCardSize({ height: 180, imageHeight: 75 });
      } else if (width <= 768) {
        setCardSize({ height: 200, imageHeight: 90 });
      } else if (width <= 992) {
        setCardSize({ height: 210, imageHeight: 95 });
      } else {
        setCardSize({ height: 220, imageHeight: 100 });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const items = [
    { img: "/cow.jpeg", title: "Cow Milk", volume: "500ml", price: "₹30" },
    {
      img: "/ice.jpeg",
      title: "Mother Dairy",
      volume: "1 liter",
      price: "₹50",
    },
    {
      img: "/chocolate.png",
      title: "Cold Coffee",
      volume: "250ml",
      price: "₹40",
    },
    {
      img: "/namkin.jpeg",
      title: "Organic Milk",
      volume: "1 liter",
      price: "₹60",
    },
    {
      img: "/cake.jpeg",
      title: "Flavored Milk",
      volume: "500ml",
      price: "₹35",
    },
    {
      img: "/biscuit.jpeg",
      title: "Low Fat Milk",
      volume: "1 liter",
      price: "₹45",
    },
  ];

  return (
    <div className="container mt-4">
      <style>{`
        @media (max-width: 576px) {
          .product-card p {
            font-size: 14px !important;
            margin-bottom: 2px !important;
          }

          .product-card .price-text {
            font-size: 11px !important;
          }

          .product-card .add-btn {
            font-size: 10px !important;
            padding: 2px 6px !important;
          }
        }
      `}</style>

      <h4 className="fw-bold" style={{ fontSize: "15px" }}>
        Sneakerheads & shoe-lovers corner
      </h4>

      <div className="row">
        {items.map((item, index) => (
          <div key={index} className="col-4 col-sm-4 col-md-3 col-lg-2 mb-3">
            <div
              className="product-card text-start d-flex flex-column justify-content-between"
              style={{
                height: `${cardSize.height}px`,
                backgroundColor: "#fff",
                boxShadow: "0 0 8px rgba(0,0,0,0.05)",
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="img-fluid mb-2"
                style={{
                  height: `${cardSize.imageHeight}px`,
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <p className=" mb-1 text-truncate" style={{ fontSize: "15px" }}>
                {item.title}
              </p>
              <p className="mb-1" style={{ fontSize: "15px" }}>
                {item.volume}
              </p>
              <div className="d-flex justify-content-between align-items-center px-1">
                <span className="text-success fw-bold price-text">
                  {item.price}
                </span>
                <button className="btn btn-light btn-sm px-3 py-1 add-btn border border 1 border-success">
                  ADD
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
