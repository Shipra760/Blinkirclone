import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export default function Add1() {
  const items = [
    {
      id: 1,
      img: "/cow.jpeg",
      title: "Cow Milk",
      tags: ["Milk"],
      rating: 4.5, 
      time: "8 MINS",
      price: 288,
      mrp: 330,
      discountPercent: 12,
      perUnit: "₹7.20/unit",
    },
    {
      id: 2,
      img: "/ice.jpeg",
      title: "Tasty Icecream",
      tags: ["Brownie"],
      rating: 4.7,
      time: "8 MINS",
      price: 59,
      mrp: 90,
      discountPercent: 34,
      perUnit: "",
    },
    {
      id: 3,
      img: "/chocolate.png",
      title: "Choco",
      tags: ["Chocolate"],
      rating: 4.4,
      time: "8 MINS",
      price: 81,
      mrp: 95,
      discountPercent: 14,
      perUnit: "₹81/100 g",
    },
     {
      id: 4,
      img: "/namkin.jpeg",
      title: "Masala spicy namkin",
      tags: ["Namkin"],
      rating: 4.4,
      time: "8 MINS",
      price: 81,
      mrp: 95,
      discountPercent: 14,
      perUnit: "₹81/100 g",
    },
     {
      id: 5,
      img: "/cake.jpeg",
      title: "Very Delicious Cake",
      tags: ["Cake"],
      rating: 4.4,
      time: "8 MINS",
      price: 81,
      mrp: 95,
      discountPercent: 14,
      perUnit: "₹81/100 g",
    },
     {
      id: 6,
      img: "/biscuit.jpeg",
      title: "Crunchy Biscuit",
      tags: ["Biscuit"],
      rating: 4.4,
      time: "8 MINS",
      price: 81,
      mrp: 95,
      discountPercent: 14,
      perUnit: "₹81/100 g",
    },
  ];

  return (
    <div className="container px-2 mt-3">
      <h6 className="fw-bold mb-3 px-1">Previously bought</h6>

      <div className="row gx-2">
        {items.map((item) => (
          <div key={item.id} className="col-4 mb-3">
            <div
              className="d-flex flex-column justify-content-between"
              style={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 0 6px rgba(0,0,0,0.05)",
                height: "100%", // fills col height
                minHeight: "240px", // make all cards same height
              }}
            >
              {/* Image */}
              <div className="p-1">
                <img
                  src={item.img}
                  alt={item.title}
                  className="img-fluid"
                  style={{
                    borderRadius: "8px",
                    objectFit: "cover",
                    height: "90px",
                    width: "100%",
                  }}
                />
              </div>

              {/* Product Info */}
              <div className="px-2" style={{ fontSize: "11px" }}>
                {/* Tags */}
                <div
  className="d-flex align-items-center mb-1"
  style={{
    height: "20px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }}
>
  {item.tags.map((tag, i) => (
    <span
      key={i}
      className="badge bg-light text-dark border me-1 "
      style={{
        fontSize: "10px",
        padding: "2px 6px",
        lineHeight: "normal",
        flexShrink: 0,
      }}
    >
      {tag}
    </span>
  ))}
</div>


                {/* Title */}
                <div
                  className="fw-medium mb-1"
                  style={{
                    fontSize: "11.5px",
                    height: "32px",
                    lineHeight: "1.2",
                    overflow: "hidden",
                  }}
                >
                  {item.title}
                </div>

                {/* Ratings & Time */}
                <div
                  className="d-flex align-items-center gap-1 mb-1 text-muted"
                  style={{ fontSize: "10px" }}
                >
                  <span className="text-warning">
                    <FaStar style={{ fontSize: "9px", marginRight: "2px" }} />
                    {item.rating}
                  </span>
                  
                  <span className="ms-auto">⏱ {item.time}</span>
                </div>

                {/* Discount */}
                <div
                  className="text-success mb-1 fw-semibold"
                  style={{ fontSize: "10.5px" }}
                >
                  {item.discountPercent}% OFF
                </div>

                {/* Price + MRP */}
                <div className="fw-bold" style={{ fontSize: "12px" }}>
                  ₹{item.price}{" "}
                  <span
                    className="text-muted text-decoration-line-through fw-normal"
                    style={{ fontSize: "10px" }}
                  >
                    ₹{item.mrp}
                  </span>
                </div>

                {/* Per Unit */}
                {item.perUnit && (
                  <div
                    className="text-secondary mb-1"
                    style={{ fontSize: "10px" }}
                  >
                    {item.perUnit}
                  </div>
                )}
              </div>

              {/* ADD + See More (Bottom Aligned) */}
              <div className="px-2 pb-2 mt-auto">
                <div className="d-grid">
                  <Link
                    to={`/details/${item.id}`}
                    className="btn btn-outline-success btn-sm fw-bold"
                    style={{
                      fontSize: "11px",
                      borderRadius: "6px",
                      padding: "2px 6px",
                    }}
                  >
                    ADD
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
