import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Add2() {
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
    { id: 1, img: "/elec1.jpeg", title: "Mobile", price: "₹300" },
    { id: 2, img: "/elec2.jpeg", title: "MotherBoard", price: "₹500" },
    { id: 3, img: "/elec3.jpeg", title: "Speaker", price: "₹400" },
    { id: 4, img: "/elec4.jpeg", title: "EarPhone", price: "₹600" },
    { id: 5, img: "/elec5.jpeg", title: "Boofer", price: "₹350" },
    { id: 6, img: "/elec6.jpeg", title: "Speaker", price: "₹450" },
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
        Electronics Gadgets
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
                className="img-fluid mb-2 "
                style={{
                  height: `${cardSize.imageHeight}px`,
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                  backgroundColor: "lightblue",
                }}
              />
              <p
                className="mb-1 text-truncate p-1"
                style={{ fontSize: "15px" }}
              >
                {item.title}
              </p>
              <p className="mb-1" style={{ fontSize: "15px" }}>
                {item.volume}
              </p>
              <div className="d-flex justify-content-between align-items-center px-1">
                <span className="text-success fw-bold price-text">
                  {item.price}
                </span>
                <Link
                  to={`/details/${item.id}`}
                  className="btn btn-light btn-sm px-3 py-1 add-btn border border-1 border-success text-decoration-none"
                >
                  ADD
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
