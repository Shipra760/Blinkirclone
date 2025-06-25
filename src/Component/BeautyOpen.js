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
    { img: "/beauty1.jpeg", title: "Lipstick" },
    { img: "/beauty2.jpeg", title: "Matted Lipstick" },
    { img: "/beauty3.jpeg", title: "Brush" },
    { img: "/beauty4.jpeg", title: "Blushes" },
    { img: "/beauty5.jpeg", title: "powder" },
    { img: "/beauty6.jpeg", title: "Brushes" },
    { img: "/lip.jpeg", title: "Brown Lipstick" },
    { img: "/makeup.jpeg", title: "Makeup" },
    { img: "/multy.jpeg", title: "Brushes" },
    { img: "/lipstick.jpeg", title: "Lipstick" },
    { img: "/loreal.jpeg", title: "Shampoo" },
    { img: "/brush.jpeg", title: "Brush" },
  ];

  const items = [
    { img: "/beauty6.jpeg", title: "Brushes", volume: "1Piece", price: "₹10050" },
    {
      img: "/beauty5.jpeg",
      title: "Blushes",
      volume: "1Piece",
      price: "₹300",
    },
    {
      img: "/beauty4.jpeg",
      title: "powder",
      volume: "1Piece",
      price: "₹400",
    },
    { img: "/beauty5.jpeg", title: "powder", volume: "1Piece", price: "₹250" },
    {
      img: "/beauty3.jpeg",
      title: "powder",
      volume: "1Piece",
      price: "₹60",
    },
    {
      img: "/beauty2.jpeg",
      title: "Brush",
      volume: "3Piece",
      price: "₹35",
    },
    {
      img: "/beauty1.jpeg",
      title: "Lipstick",
      volume: "1Piece",
      price: "₹300",
    },
    {
      img: "/lip.jpeg",
      title: "Lipstick",
      volume: "1Piece",
      price: "₹400",
    },
    { img: "/powder.jpeg", title: "Powder", volume: "1Piece", price: "₹250" },
    {
      img: "/multy.jpeg",
      title: "Brushes",
      volume: "1Piece",
      price: "₹60",
    },
    {
      img: "/makeup.jpeg",
      title: "Makeup Kit",
      volume: "1Piece",
      price: "₹400",
    },
    { img: "/loreal.jpeg", title: "Shampoo", volume: "1Piece", price: "₹250" },
    {
      img: "/beauty5.jpeg",
      title: "Blushes",
      volume: "1Piece",
      price: "₹60",
    },
    {
      img: "/beauty3.jpeg",
      title: "Brush",
      volume: "1Piece",
      price: "₹400",
    },
    { img: "/beauty4.jpeg", title: "Blush", volume: "1Piece", price: "₹250" },
    {
      img: "/beauty1.jpeg",
      title: "Lipstick",
      volume: "1Piece",
      price: "₹60",
    },
    { img: "/powder.jpeg", title: "Powder", volume: "1Piece", price: "₹10050" },
    {
      img: "/multy.jpeg",
      title: "Brushes",
      volume: "1Piece",
      price: "₹300",
    },
    {
      img: "/brush.jpeg",
      title: "Brush",
      volume: "1Piece",
      price: "₹400",
    },
    { img: "/loreal.jpeg", title: "Shampoo", volume: "1Piece", price: "₹250" },
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

      <h4 className="mb-3 p-2 border-bottom fs-5">Beauty, Cosmetics</h4>
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
    Cosmetics are essential for enhancing your natural beauty and expressing your personal style. Whether you're a skincare lover or a makeup enthusiast, choosing the right cosmetic products can elevate your daily routine and boost confidence. We offer a wide selection of premium cosmetics from top brands, ensuring quality, variety, and value.
  </p>

  <h4>Types of Cosmetics Available</h4>
  <p>
    Cosmetics come in a variety of types, including foundations, lipsticks, eyeliners, moisturizers, face masks, and makeup tools. Top brands like Lakmé, Maybelline, Sugar, and Mamaearth offer a wide range of options to suit every skin type and occasion.
  </p>

  <h5>Face Makeup</h5>
  <p>
    Achieve a flawless look with primers, foundations, concealers, and compact powders. Perfect for everyday wear or special occasions, these products create a smooth base and even skin tone.
  </p>

  <h5>Lipsticks & Lip Care</h5>
  <p>
    Add a pop of color with matte, gloss, and liquid lipsticks. Lip balms and scrubs ensure your lips stay soft and nourished all day.
  </p>

  <h5>Eye Makeup</h5>
  <p>
    Highlight your eyes with kajal, eyeliners, mascaras, and eye shadows. Smudge-proof and long-lasting formulas give your eyes a stunning look.
  </p>

  <h5>Skincare Essentials</h5>
  <p>
    Keep your skin healthy and glowing with moisturizers, face washes, toners, serums, and face masks. Suitable for all skin types including oily, dry, and sensitive.
  </p>

  <h5>Makeup Tools & Brushes</h5>
  <p>
    Get professional results with high-quality makeup brushes, sponges, and beauty blenders. Easy to use and clean for a flawless application every time.
  </p>

  <h5>Top Brands for Cosmetics</h5>
  <p><strong>Lakmé</strong> – Iconic Indian brand with a wide range of beauty products.</p>
  <p><strong>Maybelline</strong> – Trendy and high-performance makeup for all occasions.</p>
  <p><strong>Sugar</strong> – Bold, cruelty-free cosmetics with modern formulas.</p>
  <p><strong>Mamaearth</strong> – Natural and toxin-free skincare and beauty products.</p>

  <h4>Why Buy Cosmetics Online from Us?</h4>
  <p><strong>Vast Selection</strong> – Thousands of beauty items for every skin tone and type.</p>
  <p><strong>Fast Delivery</strong> – Get your favorite products delivered in minutes.</p>
  <p><strong>Authentic Products</strong> – 100% genuine with brand warranty and freshness.</p>
  <p><strong>Exciting Offers</strong> – Daily deals, free gifts, and bundle discounts.</p>

  <h3>Frequently Asked Questions</h3>

  <h5>1. Which brand offers the best foundation for daily use?</h5>
  <p>
    Lakmé and Maybelline foundations are popular for daily wear with great coverage.
  </p>

  <h5>2. Are Sugar lipsticks long-lasting?</h5>
  <p>
    Yes, Sugar lipsticks offer bold color and long-lasting formulas perfect for all-day use.
  </p>

  <h5>3. Is Mamaearth good for sensitive skin?</h5>
  <p>
    Yes, Mamaearth products are natural and safe for sensitive skin types.
  </p>

  <h5>4. What’s the best product for glowing skin?</h5>
  <p>
    Try vitamin C serums or face masks from brands like Mamaearth and Plum for a radiant glow.
  </p>

  <h5>5. Do you offer skincare kits?</h5>
  <p>
    Yes, we have curated skincare kits that include cleansers, toners, serums, and moisturizers.
  </p>

  <h5>6. How fast is the delivery?</h5>
  <p>
    We provide express delivery in select cities — usually within 10 to 30 minutes.
  </p>

  <h5>7. Can I return a cosmetic product if I don't like it?</h5>
  <p>
    Yes, we offer easy returns on unopened and unused products within our return policy.
  </p>

  <h5>8. Are the products you sell original?</h5>
  <p>
    Absolutely. We only sell 100% genuine products sourced directly from the brands.
  </p>

  <h5>9. Do you have combo offers on cosmetics?</h5>
  <p>
    Yes, we feature combo packs and beauty bundles that offer extra savings.
  </p>
</div>

    </div>
  );
}
