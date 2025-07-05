import React from "react";
import { useParams } from "react-router-dom";

export default function ElectronicDetails() {
  const { id } = useParams();
  const product = product.find((item) => item.id === parseInt(id));

  if (!product) return <div className="container mt-4">Product not found</div>;

  return (
    <div className="container mt-4">
      <div className="row g-4">
        <div className="col-md-5 text-center ">
          <img
            src={product.img}
            alt={product.title}
            className="img-fluid rounded shadow m-1 "
            style={{ height: "200px", objectFit: "contain" }}
          />
        </div>

        <div className="col-md-7">
          <h4 className="fw-bold fs-5 text-center m-1">{product.title}</h4>
          <p className="text-muted text-center m-1">{product.description}</p>

          {product.brand && (
            <p className="text-center m-1">
              <strong>Brand:</strong> {product.brand}
            </p>
          )}

          {product.weight && (
            <p className="text-center m-1">
              <strong>Weight:</strong> {product.weight}
            </p>
          )}

          <p className="text-center m-1">
            <strong>MRP:</strong>{" "}
            <span className="text-decoration-line-through text-muted">
              ₹{product.mrp}
            </span>
          </p>
          <p className="text-center m-1">
            <strong>Price:</strong>{" "}
            <span className="text-success fw-bold">₹{product.price}</span>{" "}
            <span className="text-danger">
              ({product.discountPercent}% OFF)
            </span>
          </p>

          <p className="text-center m-1">
            <strong>Per Unit Price:</strong> {product.perUnitPrice}
          </p>
          <p className="text-center m-1">
            <strong>Delivery:</strong> {product.deliveryTime}
          </p>

          {product.rating && (
            <p className="text-center m-1">
              <strong>Rating:</strong> ⭐ {product.rating} / 5 (
              {product.ratingCount} reviews)
            </p>
          )}

          <div className="d-flex justify-content-center">
            <button className="btn btn-light border border 1 border-success mt-2">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
