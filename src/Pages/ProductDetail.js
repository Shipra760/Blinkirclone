import React from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import allItems from "../data/productList"


export default function ProductDetails() {
  const { id } = useParams();
  const product = allItems.find((item) => item.id === parseInt(id));

  if (!product) return <div>Product not found.</div>;

  return (
    <div className="container-fluid px-2" style={{ background: "#fff", minHeight: "100vh" }}>
      {/* Product Image */}
      <div className="text-center py-3" style={{ background: "#f9f4f2" }}>
        <img
          src={product.img}
          alt={product.title}
          style={{ maxHeight: "250px", width: "auto", objectFit: "contain" }}
        />
      </div>

      {/* Product Info */}
      <div className="px-2 py-3" style={{ fontSize: "14px" }}>
        <div className="d-flex align-items-center text-muted mb-1" style={{ fontSize: "12px" }}>
          <span>⏱ {product.deliveryTime}</span>
          <span className="ms-auto text-warning">
            <FaStar size={12} /> {product.rating} ({product.ratingCount})
          </span>
        </div>

        <h6 className="fw-bold">{product.title}</h6>
        <p className="text-muted mb-1">{product.weight}</p>

        <div className="d-flex align-items-center mb-1">
          <h5 className="fw-bold mb-0 me-2">₹{product.price}</h5>
          <span className="text-muted text-decoration-line-through">₹{product.mrp}</span>
          <span className="text-success ms-2 fw-semibold">{product.discountPercent}% OFF</span>
        </div>

        <p className="text-secondary" style={{ fontSize: "13px" }}>{product.perUnitPrice}</p>

        {/* Add GSTIN / Brand Info */}
        <div className="border-top border-bottom py-2 my-2">
          <div className="d-flex justify-content-between">
            <span className="text-muted">Brand</span>
            <strong>{product.brand}</strong>
          </div>
        </div>

        {/* Description */}
        <p className="mb-2" style={{ fontSize: "13.5px" }}>
          {product.description}
        </p>

        {/* Add to Cart Button */}
        <button className="btn btn-success w-100 fw-bold py-2">Add to cart</button>
      </div>
    </div>
  );
}
