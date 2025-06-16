import React from "react";
import MobileFooter from "./MobileFooter";

export default function Footer() {
  return (
    <div className="container mt-5 pt-4">
      {/* Desktop Footer - Hidden on Mobile */}
      <div className="d-none d-md-block">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold fs-5">Useful Links</h6>
            <div className="row">
              <div className="col-6">
                <p>Blog</p>
                <p>Privacy</p>
                <p>Terms</p>
                <p>FAQs</p>
                <p>Security</p>
                <p>Contact</p>
              </div>
              <div className="col-6">
                <p>Partner</p>
                <p>Franchise</p>
                <p>Seller</p>
                <p>Warehouse</p>
                <p>Deliver</p>
                <p>Resources</p>
                <p>Recipes</p>
                <p>Bistro</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <h6 className="fw-bold fs-5">Categories</h6>
            <div className="row">
              <div className="col-6">
                <p>Vegetables & Fruits</p>
                <p>Cold Drinks & Juices</p>
                <p>Bakery & Biscuits</p>
                <p>Dry Fruits, Masala & Oil</p>
                <p>Paan Corner</p>
                <p>Pharma & Wellness</p>
                <p>Ice Creams & Frozen Desserts</p>
                <p>Beauty & Cosmetics</p>
                <p>Electronics & Electricals</p>
                <p>Toys & Games</p>
              </div>
              <div className="col-6">
                <p>Dairy & Breakfast</p>
                <p>Instant & Frozen Food</p>
                <p>Sweet Tooth</p>
                <p>Sauces & Spreads</p>
                <p>Organic & Premium</p>
                <p>Cleaning Essentials</p>
                <p>Personal Care</p>
                <p>Magazines</p>
                <p>Stationery Needs</p>
                <p>Print Store</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <h6 className="fw-bold fs-5">More Categories</h6>
            <p>Munchies</p>
            <p>Tea, Coffee & Health Drinks</p>
            <p>Atta, Rice & Dal</p>
            <p>Chicken, Meat & Fish</p>
            <p>Baby Care</p>
            <p>Home & Office</p>
            <p>Pet Care</p>
            <p>Fashion & Accessories</p>
            <p>Books</p>
            <p>E-Gift Cards</p>
          </div>
        </div>

        <div className="row mt-4 pt-3 border-top text-center text-md-start">
          <div className="col-12 col-md-4 mb-3">
            <span>© Blink Commerce Private Limited, 2016-2025</span>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <strong>Download App</strong>
            <div className="d-flex justify-content-center justify-content-md-start align-items-center mt-2">
              <img
                src="/app-store-logo.png"
                alt="App Store"
                height="30"
                className="me-2"
                style={{ width: "110px", objectFit: "contain" }}
              />
              <img
                src="/play.jpg"
                alt="Google Play"
                height="30"
                style={{ width: "110px", objectFit: "contain" }}
              />
            </div>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <div className="d-flex justify-content-center justify-content-md-end">
              <i className="bi bi-facebook me-3 fs-4"></i>
              <i className="bi bi-twitter me-3 fs-5"></i>
              <i className="bi bi-instagram me-3 fs-5"></i>
              <i className="bi bi-linkedin me-3 fs-5"></i>
              <i className="bi bi-globe fs-5"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Footer Only - Hidden on Desktop */}
      <div className="d-block d-md-none">
        <MobileFooter />
      </div>
    </div>
  );
}
