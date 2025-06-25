import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export default function Add2() {
  const items = [
    {
      id: 7,
      img: "/elec1.jpeg",
      title: "Mobile",
      tags: ["Mobile"],
      rating: 4.5, 
      time: "8 MINS",
      price: 2883,
      mrp: 330,
      discountPercent: 12,
      perUnit: "₹7.20/unit",
    },
    {
      id: 8,
      img: "/elec2.jpeg",
      title: "Mother Board",
      tags: ["MotherBoard"],
      rating: 4.7,
      time: "8 MINS",
      price: 5955,
      mrp: 90,
      discountPercent: 34,
      perUnit: "₹81/100 g",
    },
    {
      id: 9,
      img: "/elec3.jpeg",
      title: "Speaker",
      tags: ["Speaker"],
      rating: 4.4,
      time: "8 MINS",
      price: 815,
      mrp: 95,
      discountPercent: 14,
      perUnit: "₹81/100 g",
    },
     {
      id: 10,
      img: "/elec4.jpeg",
      title: "EarPhone",
      tags: ["EarPhone"],
      rating: 4.4,
      time: "8 MINS",
      price: 813,
      mrp: 95,
      discountPercent: 14,
      perUnit: "₹81/100 g",
    },
     {
      id: 11,
      img: "/elec5.jpeg",
      title: "Boofer",
      tags: ["Boofer"],
      rating: 4.4,
      time: "8 MINS",
      price: 819,
      mrp: 95,
      discountPercent: 14,
      perUnit: "₹81/100 g",
    },
     {
      id: 12,
      img: "/elec6.jpeg",
      title: "Speaker",
      tags: ["Speaker"],
      rating: 4.4,
      time: "8 MINS",
      price: 681,
      mrp: 95,
      discountPercent: 14,
      perUnit: "₹81/100 g",
    },
  ];

  return (
    <div className="container p-1">
      <h6 className="fw-bold ms-2 " style={{fontSize:"15px"}}>Previously bought</h6>

      <div className="row">
        {items.map((item) => (
          <div key={item.id} className="col-4 ">
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
