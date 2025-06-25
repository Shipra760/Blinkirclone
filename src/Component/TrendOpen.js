import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function SplitScrollLayout() {
  const [cardSize, setCardSize] = useState({ height: 220, imageHeight: 100 });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setCardSize({ height: 170, imageHeight: 70 });
      } else if (width <= 576) {
        setCardSize({ height: 180, imageHeight: 75 });
      } else if (width <= 768) {
        setCardSize({ height: 200, imageHeight: 90 });
      } else if (width <= 1200) {
        setCardSize({ height: 210, imageHeight: 95 });
      } else {
        setCardSize({ height: 250, imageHeight: 100 });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const categories = [
    { img: "/elec1.jpeg", title: "Mobile" },
    { img: "/elec2.jpeg", title: "MotherBoard" },
    { img: "/elec3.jpeg", title: "Speaker" },
    { img: "/elec4.jpeg", title: "EarPhone" },
    { img: "/elec5.jpeg", title: "Boofer" },
    { img: "/elec6.jpeg", title: "Mouse" },
    { img: "/elec1.jpeg", title: "Mobile" },
    { img: "/watch.jpeg", title: "Watch" },
    { img: "/elec2.jpeg", title: "MotherBoard" },
    { img: "/elec3.jpeg", title: "Speaker" },
    { img: "/elec6.jpeg", title: "Mouse" },
    { img: "/shoefix.jpeg", title: "Shoefix" },
  ];

  const items = [
    { img: "/elec1.jpeg", title: "Mobile", volume: "1Piece", price: "₹10050" },
    {
      img: "/elec2.jpeg",
      title: "MotherBoard",
      volume: "1Piece",
      price: "₹300",
    },
    {
      img: "/elec3.jpeg",
      title: "Speaker",
      volume: "1Piece",
      price: "₹400",
    },
    { img: "/elec4.jpeg", title: "EarPhone", volume: "1Piece", price: "₹250" },
    {
      img: "/elec5.jpeg",
      title: "Boofer",
      volume: "1Piece",
      price: "₹60",
    },
    {
      img: "/elec6.jpeg",
      title: "Mouse",
      volume: "3Piece",
      price: "₹35",
    },
    {
      img: "/elec2.jpeg",
      title: "MotherBoard",
      volume: "1Piece",
      price: "₹300",
    },
    {
      img: "/elec3.jpeg",
      title: "Speaker",
      volume: "1Piece",
      price: "₹400",
    },
    { img: "/elec4.jpeg", title: "EarPhone", volume: "1Piece", price: "₹250" },
    {
      img: "/elec5.jpeg",
      title: "Boofer",
      volume: "1Piece",
      price: "₹60",
    },
    {
      img: "/elec3.jpeg",
      title: "Speaker",
      volume: "1Piece",
      price: "₹400",
    },
    { img: "/elec4.jpeg", title: "EarPhone", volume: "1Piece", price: "₹250" },
    {
      img: "/elec5.jpeg",
      title: "Boofer",
      volume: "1Piece",
      price: "₹60",
    },
    {
      img: "/elec3.jpeg",
      title: "Speaker",
      volume: "1Piece",
      price: "₹400",
    },
    { img: "/elec4.jpeg", title: "EarPhone", volume: "1Piece", price: "₹250" },
    {
      img: "/elec5.jpeg",
      title: "Boofer",
      volume: "1Piece",
      price: "₹60",
    },
    { img: "/elec1.jpeg", title: "Mobile", volume: "1Piece", price: "₹10050" },
    {
      img: "/elec2.jpeg",
      title: "MotherBoard",
      volume: "1Piece",
      price: "₹300",
    },
    {
      img: "/elec3.jpeg",
      title: "Speaker",
      volume: "1Piece",
      price: "₹400",
    },
    { img: "/elec4.jpeg", title: "EarPhone", volume: "1Piece", price: "₹250" },
  ];

  return (
    <div className="container-fluid px-2 mt-3" style={{ overflowX: "hidden" }}>
      <style>{`
        .product-grid {
          display: grid;
          gap: 13px;
          width: 100%;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        }

        @media (max-width: 575.98px) {
          .product-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
          }
          .product-card p {
            font-size: 11px !important;
            margin-bottom: 2px !important;
          }
          .product-card .price-text {
            font-size: 11px !important;
          }
          .product-card .add-btn {
            font-size: 9px !important;
            padding: 2px 6px !important;
          }
        }

        @media (min-width: 576px) and (max-width: 991.98px) {
          .product-grid {
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          }
        }

        @media (min-width: 992px) {
          .product-grid {
            grid-template-columns: repeat(6, 1fr);
          }
        }
      `}</style>

      <h4 className="mb-3 p-2 border-bottom fs-5">Buy Electronic Gadgets</h4>
      <div
        className="d-flex"
        style={{
          maxHeight: "500px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        <div
          style={{
            width: "90px",
            overflowY: "auto",
            backgroundColor: "#f1f1f1",
            padding: "10px",
            borderRight: "1px solid #ccc",
            flexShrink: 0,
          }}
        >
          {categories.map((cat, index) => (
            <div
              key={index}
              className=" mb-2  d-flex flex-column align-items-center"
              style={{ height: "100px" }}
            >
              <img
                src={cat.img}
                alt={cat.title}
                className="img-fluid"
                style={{
                  height: "60px",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "6px",
                  marginBottom: "2px",
                }}
              />
              <p
                className="mb-0 text-truncate"
                style={{ fontSize: "9px", textAlign: "center", padding: "4px" }}
              >
                {cat.title}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "0",
            backgroundColor: "#f9f9f9",
          }}
        >
          <div className="product-grid px-2 py-2">
            {items.map((item, index) => (
              <div
                key={index}
                className="product-card p-1 d-flex flex-column justify-content-between"
                style={{
                  height: `${cardSize.height}px`,
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
                <p
                  className="fw-bold mb-1 text-truncate"
                  style={{ fontSize: "13px" }}
                >
                  {item.title}
                </p>
                <p className="mb-1" style={{ fontSize: "12px" }}>
                  {item.volume}
                </p>
                <div className="d-flex justify-content-between align-items-center px-1">
                  <span className="text-success fw-bold price-text">
                    {item.price}
                  </span>
                  <Link
                    to={`/button/${index}`}
                    className="btn btn-light border border-success btn-sm px-3 py-1 add-btn"
                  >
                    ADD
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-2">
        <p>
          Electronic gadgets are essential companions in modern life. Whether
          you're a tech enthusiast or just looking for reliable devices,
          choosing the right electronic gadget can make your daily tasks easier
          and more enjoyable. We bring you a wide selection of premium
          electronics from top brands, ensuring performance, durability, and
          value.
        </p>

        <h4>Types of Electronic Gadgets Available</h4>
        <p>
          Gadgets come in a variety of types, including smartphones, headphones,
          smartwatches, Bluetooth speakers, and power banks. Top brands like
          Samsung, Sony, Boat, and Realme offer a range of options to suit every
          need and budget.
        </p>

        <h5>Smartphones & Accessories</h5>
        <p>
          Stay connected with the latest smartphones and their essential
          accessories. From chargers to protective cases, everything you need
          for your mobile life is here. Great for professionals, students, and
          entertainment lovers alike.
        </p>

        <h5>Wireless Earphones & Headphones</h5>
        <p>
          Enjoy music and calls on the go with Bluetooth-enabled earphones and
          headphones. Noise cancellation, clear sound, and long battery life
          make them perfect for travel and work.
        </p>

        <h5>Smartwatches & Fitness Bands</h5>
        <p>
          Monitor your health, receive notifications, and track your activities
          with stylish smartwatches and fitness bands. Ideal for fitness
          enthusiasts and tech-savvy users.
        </p>

        <h5>Bluetooth Speakers</h5>
        <p>
          Bring the party anywhere with compact and powerful Bluetooth speakers.
          These speakers offer rich sound, wireless freedom, and long-lasting
          batteries for every occasion.
        </p>

        <h5>Power Banks & Chargers</h5>
        <p>
          Never run out of battery with our collection of high-capacity power
          banks and fast chargers. A must-have for anyone constantly on the
          move.
        </p>

        <h5>Top Brands for Electronic Gadgets</h5>
        <p>
          <strong>Samsung</strong> – Innovative smartphones and smart devices.
        </p>
        <p>
          <strong>Boat</strong> – Stylish and affordable audio accessories.
        </p>
        <p>
          <strong>Realme</strong> – Performance-packed gadgets at great prices.
        </p>
        <p>
          <strong>Sony</strong> – Premium quality headphones and sound systems.
        </p>

        <h4>Why Buy Electronics Online from Us?</h4>
        <p>
          <strong>Wide Selection</strong> – Thousands of gadgets from top
          brands.
        </p>
        <p>
          <strong>Fast Delivery</strong> – Get your gadgets at your doorstep in
          minutes.
        </p>
        <p>
          <strong>Genuine Products</strong> – 100% original and warranty-covered
          items.
        </p>
        <p>
          <strong>Affordable Prices</strong> – Daily deals, discounts, and combo
          offers.
        </p>

        <h3>Frequently Asked Questions</h3>

        <h5>1. Which brand offers the best budget smartphones?</h5>
        <p>
          Realme and Samsung offer great budget smartphones with excellent
          features.
        </p>

        <h5>2. Are Boat headphones good for daily use?</h5>
        <p>
          Yes, Boat headphones are comfortable, affordable, and offer good sound
          quality.
        </p>

        <h5>3. Do smartwatches work with all phones?</h5>
        <p>
          Most smartwatches are compatible with both Android and iOS devices.
        </p>

        <h5>4. What's the best portable speaker for travel?</h5>
        <p>
          Compact Bluetooth speakers from Sony and Boat are great for travel and
          outdoor use.
        </p>

        <h5>5. Do you provide warranty on electronics?</h5>
        <p>
          Yes, all gadgets come with a manufacturer’s warranty and service
          support.
        </p>

        <h5>6. How fast will my order be delivered?</h5>
        <p>
          We offer express delivery in select cities — usually within 10 to 30
          minutes.
        </p>

        <h5>7. Can I return a defective electronic item?</h5>
        <p>
          Yes, we have a hassle-free return policy for damaged or faulty
          products.
        </p>

        <h5>8. Are your products 100% original?</h5>
        <p>
          Absolutely. We only sell 100% genuine products from authorized
          sellers.
        </p>

        <h5>9. Do you offer combo deals on electronics?</h5>
        <p>
          Yes, we regularly feature combo packs and bundle offers to help you
          save more.
        </p>
      </div>
    </div>
  );
}
