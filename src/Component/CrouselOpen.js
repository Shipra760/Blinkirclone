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
    { img: "/jew.jpeg", title: "Jewellery" },
    { img: "/gro3.jpg", title: "Grocery" },
    { img: "/biscuit.jpeg", title: "Biscuit" },
    { img: "/cake.jpeg", title: "Cake" },
    { img: "/protein.jpeg", title: "Protein" },
    { img: "/shoefix.jpeg", title: "Shoefix" },
    { img: "/vacation.jpeg", title: "Vacation" },
    { img: "/watch.jpeg", title: "Watch" },
    { img: "/biscuit.jpeg", title: "Biscuit" },
    { img: "/cake.jpeg", title: "Cake" },
    { img: "/protein.jpeg", title: "Protein" },
    { img: "/shoefix.jpeg", title: "Shoefix" },
  ];

  const items = [
    { img: "/cow.jpeg", title: "Pure Cow Milk", volume: "1L", price: "₹50" },
    {
      img: "/ice.jpeg",
      title: "Amul Ice Cream",
      volume: "100ml",
      price: "₹30",
    },
    {
      img: "/chocolate.png",
      title: "Choco Shake",
      volume: "250ml",
      price: "₹40",
    },
    { img: "/cake.jpeg", title: "Vanilla Cake", volume: "1Kg", price: "₹250" },
    {
      img: "/namkin.jpeg",
      title: "Haldiram Namkeen",
      volume: "500g",
      price: "₹60",
    },
    {
      img: "/biscuit.jpeg",
      title: "Parle-G Biscuits",
      volume: "300g",
      price: "₹35",
    },
     {
      img: "/biscuit.jpeg",
      title: "Parle-G Biscuits",
      volume: "300g",
      price: "₹35",
    },
     {
      img: "/biscuit.jpeg",
      title: "Parle-G Biscuits",
      volume: "300g",
      price: "₹35",
    },
      {
      img: "/ice.jpeg",
      title: "Amul Ice Cream",
      volume: "100ml",
      price: "₹30",
    },
    {
      img: "/chocolate.png",
      title: "Choco Shake",
      volume: "250ml",
      price: "₹40",
    },
    { img: "/cake.jpeg", title: "Vanilla Cake", volume: "1Kg", price: "₹250" },
    {
      img: "/namkin.jpeg",
      title: "Haldiram Namkeen",
      volume: "500g",
      price: "₹60",
    },
     {
      img: "/biscuit.jpeg",
      title: "Parle-G Biscuits",
      volume: "300g",
      price: "₹35",
    },
     {
      img: "/biscuit.jpeg",
      title: "Parle-G Biscuits",
      volume: "300g",
      price: "₹35",
    },
      {
      img: "/ice.jpeg",
      title: "Amul Ice Cream",
      volume: "100ml",
      price: "₹30",
    },
    {
      img: "/chocolate.png",
      title: "Choco Shake",
      volume: "250ml",
      price: "₹40",
    },
     {
      img: "/biscuit.jpeg",
      title: "Parle-G Biscuits",
      volume: "300g",
      price: "₹35",
    },
     {
      img: "/biscuit.jpeg",
      title: "Parle-G Biscuits",
      volume: "300g",
      price: "₹35",
    },
      {
      img: "/ice.jpeg",
      title: "Amul Ice Cream",
      volume: "100ml",
      price: "₹30",
    },
    {
      img: "/chocolate.png",
      title: "Choco Shake",
      volume: "250ml",
      price: "₹40",
    },
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

      <h4 className="mb-3 p-2 border-bottom fs-5">Buy Rolling Paper Online</h4>
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
          Rolling paper is an essential component for smokers who prefer to roll
          their cigarettes or joints. Whether you're a seasoned roller or a
          beginner, choosing the right rolling paper can enhance your smoking
          experience. We bring you a wide selection of premium rolling papers
          from top brands like Stash Pro, Bongchie, and Mozo, ensuring a clean,
          slow, and even burn every time.
        </p>
        <h4>Types of Rolling Paper Available</h4>
        <p>
          Rolling papers come in various types, including rice, hemp, wood pulp,
          and ultra-thin papers. They are available in bleached, unbleached,
          flavoured, and pre-rolled cones. Popular brands like Stash Pro,
          Bongchie, and Mozo offer high-quality options for a smooth experience.
        </p>
        <h5>Standard Rolling Papers</h5>
        <p>
          Perfect for everyday use, these rolling papers come in different
          thicknesses and materials, including hemp, rice, and wood pulp. They
          offer a balanced burn and are suitable for both beginners and
          experienced users.
        </p>
        <h5>King Size & Slim Rolling Papers</h5>
        <p>
          For those who enjoy longer sessions, King Size and Slim Rolling Papers
          provide extra space for a more substantial role. They are ideal for
          social smoking or when you want a smoother, slower burn.
        </p>
        <h5>Pre-Rolled Cones</h5>
        <p>
          No rolling skills? No problem! Pre-rolled cones eliminate the need to
          roll manually—just fill, twist, and enjoy. These cones are perfect for
          beginners and those who prefer convenience. Available in various sizes
          and materials, pre-rolled cones offer an effortless smoking
          experience.
        </p>
        <h5>Unbleached & Organic Rolling Papers</h5>
        <p>
          If you prefer a more natural smoking experience, unbleached, organic,
          and hemp rolling papers are a great choice. They are free from
          chlorine and other harsh chemicals, providing a cleaner taste and a
          healthier alternative to traditional rolling papers.
        </p>
        <h5>Flavored & Specialty Rolling Papers</h5>
        <p>
          Enhance your smoke with flavoured rolling papers that come in fruit,
          mint, chocolate, and other exotic flavours. Transparent cellulose
          rolling papers are another unique option, offering a stylish,
          slow-burning experience without affecting the taste.
        </p>
        <h5>Top Brands for Rolling Papers</h5>
        <p>Top Brands for Rolling Papers</p>
        <p>
          <strong>Stash Pro</strong>-Premium rolling papers, cones, and
          accessories.
        </p>
        <p>
          <strong>Stash Pro</strong>-Premium rolling papers, cones, and
          accessories.
        </p>
        <p>
          <strong>Stash Pro</strong>-Premium rolling papers, cones, and
          accessories.
        </p>
        <h4>Why Buy Rolling Paper Online from Us?</h4>
        <p>
          <strong>Stash Pro</strong>-Premium rolling papers, cones, and
          accessories.
        </p>
        <p>
          <strong>Stash Pro</strong>-Premium rolling papers, cones, and
          accessories.
        </p>
        <p>
          <strong>Stash Pro</strong>-Premium rolling papers, cones, and
          accessories.
        </p>
        <p>
          <strong>Stash Pro</strong>-Premium rolling papers, cones, and
          accessories.
        </p>

        <h3>Frequently Asked Questions</h3>
        <h5>1. What is the best rolling paper for beginners?</h5>
        <p>
          Pre-rolled cones are the easiest option, as they eliminate the need
          for manual rolling.
        </p>
        <h5>2. Are unbleached rolling papers better?</h5>
        <p>
          Yes, unbleached papers are free from chemicals and provide a cleaner,
          more natural smoke.
        </p>
        <h5>3. Do you offer flavoured rolling papers?</h5>
        <p>
          Yes, we have a variety of flavoured papers, including fruit,
          chocolate, and mint.
        </p>

        <h5>4. What is the best rolling paper for beginners?</h5>
        <p>
          Pre-rolled cones are the easiest option, as they eliminate the need
          for manual rolling.
        </p>
        <h5>5. Are unbleached rolling papers better?</h5>
        <p>
          Yes, unbleached papers are free from chemicals and provide a cleaner,
          more natural smoke.
        </p>
        <h5>6. Do you offer flavoured rolling papers?</h5>
        <p>
          Yes, we have a variety of flavoured papers, including fruit,
          chocolate, and mint.
        </p>
        <h5>7. What is the best rolling paper for beginners?</h5>
        <p>
          Pre-rolled cones are the easiest option, as they eliminate the need
          for manual rolling.
        </p>
        <h5>8. Are unbleached rolling papers better?</h5>
        <p>
          Yes, unbleached papers are free from chemicals and provide a cleaner,
          more natural smoke.
        </p>
        <h5>9. Do you offer flavoured rolling papers?</h5>
        <p>
          Yes, we have a variety of flavoured papers, including fruit,
          chocolate, and mint.
        </p>
      </div>
    </div>
  );
}
