import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import allItems from "../data/productList";

export default function ProductDetails() {
  const { id } = useParams();
  const product = allItems.find((item) => item.id === parseInt(id));

  const [qty, setQty] = useState(0); 

  const handleAdd = () => setQty(1);
  const handleIncrement = () => setQty(qty + 1);
  const handleDecrement = () => {
    if (qty <= 1) setQty(0);
    else setQty(qty - 1);
  };

  if (!product) return <div>Product not found.</div>;

  return (
    <div
      className="container-fluid px-2"
      style={{ background: "#fff", minHeight: "100vh" }}
    >
      <div className="text-center py-3" style={{ background: "#f9f4f2" }}>
        <img
          src={product.img}
          alt={product.title}
          style={{ maxHeight: "250px", width: "auto", objectFit: "contain" }}
        />
      </div>

      <div className="px-2 py-3" style={{ fontSize: "14px" }}>
        <div
          className="d-flex align-items-center text-muted mb-1"
          style={{ fontSize: "12px" }}
        >
          <span>⏱ {product.deliveryTime}</span>
          <span className="ms-auto text-warning">
            <FaStar size={12} /> {product.rating} ({product.ratingCount})
          </span>
        </div>

        <h6 className="fw-bold">{product.title}</h6>
        <p className="text-muted mb-1">{product.weight}</p>

        <div className="d-flex align-items-center mb-1">
          <h5 className="fw-bold mb-0 me-2">₹{product.price}</h5>
          <span className="text-muted text-decoration-line-through">
            ₹{product.mrp}
          </span>
          <span className="text-success ms-2 fw-semibold">
            {product.discountPercent}% OFF
          </span>
        </div>

        <p className="text-secondary" style={{ fontSize: "13px" }}>
          {product.perUnitPrice}
        </p>

        <div className="border-top border-bottom py-2 my-2">
          <div className="d-flex justify-content-between">
            <span className="text-muted">Brand</span>
            <strong>{product.brand}</strong>
          </div>
        </div>

        <p className="mb-2" style={{ fontSize: "13.5px" }}>
          {product.description}
        </p>

        <div className="d-grid mt-3">
          {qty === 0 ? (
            <button
              className="btn btn-success fw-bold py-2"
              onClick={handleAdd}
            >
              Add to cart
            </button>
          ) : (
            <div className="d-flex justify-content-center align-items-center border rounded px-3 py-2">
              <button
                onClick={handleDecrement}
                className="btn btn-outline-danger btn-sm fw-bold px-3"
              >
                –
              </button>
              <span className="mx-3 fw-bold">{qty}</span>
              <button
                onClick={handleIncrement}
                className="btn btn-outline-success btn-sm fw-bold px-3"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
