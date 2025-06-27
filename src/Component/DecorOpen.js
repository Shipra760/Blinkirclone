import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiChevronLeft, BiSearch } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import { LuArrowUpDown } from "react-icons/lu";

export default function SplitScrollLayout() {
  const [cardSize, setCardSize] = useState({ height: 220, imageHeight: 100 });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 480) setCardSize({ height: 170, imageHeight: 70 });
      else if (width <= 576) setCardSize({ height: 180, imageHeight: 75 });
      else if (width <= 768) setCardSize({ height: 200, imageHeight: 90 });
      else if (width <= 1200) setCardSize({ height: 210, imageHeight: 95 });
      else setCardSize({ height: 250, imageHeight: 100 });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const categories = [
    { img: "/decor1.jpeg", title: "Wall-mounted " },
    { img: "/decor2.jpeg", title: "Canvas painting" },
    { img: "/decor3.jpeg", title: "Flower vase" },
    { img: "/decor4.jpeg", title: "LED lights" },
    { img: "/decor5.jpeg", title: "Wooden " },
    { img: "/decor6.jpeg", title: "Tabletop " },
    { img: "/decor1.jpeg", title: "Scented " },
    { img: "/decor2.jpeg", title: "Showpiece" },
    { img: "/decor3.jpeg", title: "Wall clock" },
    { img: "/decor4.jpeg", title: "Plant pot" },
    { img: "/decor5.jpeg", title: "Photo frame" },
    { img: "/decor6.jpeg", title: "Lamp" },
  ];

  const items = [
    {
      img: "/decor6.jpeg",
      title: "Dream catcher",
      volume: "1Piece",
      price: "₹10050",
    },
    {
      img: "/decor5.jpeg",
      title: "Wall hanging",
      volume: "1Piece",
      price: "₹3090",
    },
    {
      img: "/decor4.jpeg",
      title: "Stand",
      volume: "1Piece",
      price: "₹4090",
    },
    {
      img: "/decor5.jpeg",
      title: "Planters",
      volume: "1Piece",
      price: "₹2590",
    },
    {
      img: "/decor3.jpeg",
      title: "Cushion covers",
      volume: "1Piece",
      price: "₹6890",
    },
    {
      img: "/decor2.jpeg",
      title: "Wind set",
      volume: "3Piece",
      price: "₹3765",
    },
    {
      img: "/decor1.jpeg",
      title: "Aromatherapy",
      volume: "1Piece",
      price: "₹36700",
    },
    {
      img: "/decor3.jpeg",
      title: "Jute basket",
      volume: "1Piece",
      price: "₹40670",
    },
    {
      img: "/decor4.jpeg",
      title: "Wall art",
      volume: "1Piece",
      price: "₹27650",
    },
    {
      img: "/decor2.jpeg",
      title: "Stickers",
      volume: "1Piece",
      price: "₹6870",
    },
    {
      img: "/decor1.jpeg",
      title: "Plate",
      volume: "1Piece",
      price: "₹4300",
    },
    {
      img: "/decor5.jpeg",
      title: "Lamp",
      volume: "1Piece",
      price: "₹2250",
    },
    {
      img: "/decor5.jpeg",
      title: "Abstract ",
      volume: "1Piece",
      price: "₹6320",
    },
    {
      img: "/decor3.jpeg",
      title: "Key holder",
      volume: "1Piece",
      price: "₹4500",
    },
    {
      img: "/decor4.jpeg",
      title: "Door hanging",
      volume: "1Piece",
      price: "₹250",
    },
    {
      img: "/decor1.jpeg",
      title: "LED lights",
      volume: "1Piece",
      price: "₹6430",
    },
    {
      img: "/decor5.jpeg",
      title: "Resin fountain",
      volume: "1Piece",
      price: "₹10050",
    },
    {
      img: "/decor6.jpeg",
      title: "Macrame hanging",
      volume: "1Piece",
      price: "₹300",
    },
    {
      img: "/decor1.jpeg",
      title: "Rustic",
      volume: "1Piece",
      price: "₹4300",
    },
    {
      img: "/decor2.jpeg",
      title: "Dream decor",
      volume: "1Piece",
      price: "₹2250",
    },
  ];

  return (
    <div className="container-fluid px-2" style={{ overflowX: "hidden" }}>
      {/* TOP NAVBAR SECTION */}
      <div
        className="d-flex align-items-center justify-content-between sticky-top px-2"
        style={{
          height: "50px",
          background: "#fff",
          zIndex: 10,
          borderBottom: "1px solid #ddd",
        }}
      >
        <div className="d-flex align-items-center gap-2">
          <BiChevronLeft size={24} />
          <h6 className="mb-0">Bedroom</h6>
        </div>
        <BiSearch size={20} />
      </div>

      {/* SPLIT SCROLL LAYOUT */}
      <div
        className="d-flex"
        style={{
          maxHeight: "500px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        {/* LEFT CATEGORY LIST */}
        <div
          style={{
            width: "90px",
            overflowY: "auto",
            padding: "10px",
            borderRight: "1px solid #ccc",
            flexShrink: 0,
          }}
        >
          {categories.map((cat, i) => (
            <div
              key={i}
              className="mb-2 d-flex flex-column align-items-center"
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
                style={{
                  fontSize: "12px",
                  textAlign: "center",
                  padding: "4px",
                }}
              >
                {cat.title}
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT SCROLLABLE CONTENT */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "0",
            backgroundColor: "#f9f9f9",
          }}
        >
          {/* FILTER BUTTONS ROW */}
          <div
            className="d-flex py-2 overflow-auto "
            style={{
              top: "30px",
              background: "#fff",
              borderBottom: "1px solid #eee",
            }}
          >
            <button
              className="btn btn-light border  d-flex align-items-center justify-content-center px-2 py-1 m-1 "
              style={{ fontSize: "14px", height: "47px", fontStyle: "italic " }}
            >
              <FiFilter size={14} className="me-1" /> Filters
            </button>
            <button
              className="btn btn-light border  d-flex align-items-center justify-content-center px-2 py-1 m-1"
              style={{ fontSize: "14px", height: "47px", fontStyle: "italic " }}
            >
              <LuArrowUpDown size={14} className="me-1" /> Sort
            </button>
            <button
              className="btn btn-light border px-2 py-1 m-1"
              style={{ fontSize: "14px", height: "47px", fontStyle: "italic " }}
            >
              Brand
            </button>
            <button
              className="btn btn-light border  px-2 py-1 m-1"
              style={{ fontSize: "14px", height: "47px", fontStyle: "italic " }}
            >
              Bedsheet Type
            </button>
          </div>

          {/* ✅ Product Grid */}
          <div className="product-grid px-2 py-2">
            {items.map((item, idx) => (
              <div
                key={idx}
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
                  style={{ fontSize: "14px" }}
                >
                  {item.title}
                </p>
                <p className="mb-1" style={{ fontSize: "14px" }}>
                  {item.volume}
                </p>
                <div className="d-flex justify-content-between align-items-center px-1">
                  <span className="text-success fw-bold price-text">
                    {item.price}
                  </span>
                  <Link
                    to={`/button/${idx}`}
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
          Home decor items add personality, warmth, and style to your living
          spaces. Whether you're revamping a room or adding the final touch, the
          right decor pieces can completely transform your home. We bring you a
          wide selection of premium decor products from top brands, ensuring
          aesthetics, quality, and value.
        </p>

        <h4>Types of Home Decor Available</h4>
        <p>
          Decor items include wall art, lighting, decorative cushions, curtains,
          vases, clocks, and more. Top brands like Chumbak, Home Centre, Ikea,
          and Pepperfry offer elegant and affordable options for every home and
          style.
        </p>

        <h5>Wall Art & Paintings</h5>
        <p>
          Enhance your walls with beautiful paintings, posters, and wall
          hangings. Perfect for living rooms, bedrooms, and hallways to reflect
          your personality.
        </p>

        <h5>Lighting & Lamps</h5>
        <p>
          Create the right mood with decorative lighting including table lamps,
          floor lamps, and LED fairy lights. A blend of functionality and charm.
        </p>

        <h5>Cushions & Throws</h5>
        <p>
          Add comfort and style with colorful cushions and cozy throws. Great
          for sofas, beds, and accent chairs to elevate your interior look.
        </p>

        <h5>Decorative Vases & Planters</h5>
        <p>
          Bring life into your space with designer vases, ceramic planters, and
          indoor plant pots. Ideal for fresh or artificial flowers and greenery.
        </p>

        <h5>Clocks & Decorative Mirrors</h5>
        <p>
          Functional yet stylish, wall clocks and designer mirrors make
          excellent focal points in any room while serving a purpose.
        </p>

        <h5>Top Brands for Home Decor</h5>
        <p>
          <strong>Chumbak</strong> – Quirky and colorful Indian-style decor.
        </p>
        <p>
          <strong>Home Centre</strong> – Elegant and affordable furnishing and
          decor.
        </p>
        <p>
          <strong>Pepperfry</strong> – Wide range of premium home decor
          essentials.
        </p>
        <p>
          <strong>Ikea</strong> – Scandinavian style and smart design at great
          prices.
        </p>

        <h4>Why Buy Home Decor Online from Us?</h4>
        <p>
          <strong>Extensive Collection</strong> – Thousands of decor items to
          suit all tastes.
        </p>
        <p>
          <strong>Fast Delivery</strong> – Beautify your home without the wait.
        </p>
        <p>
          <strong>Trusted Brands</strong> – 100% original products from top
          decor labels.
        </p>
        <p>
          <strong>Great Prices</strong> – Daily deals, seasonal sales, and combo
          offers.
        </p>

        <h3>Frequently Asked Questions</h3>

        <h5>1. Which brand is best for unique wall decor?</h5>
        <p>
          Chumbak and Pepperfry offer a great selection of creative wall art and
          hangings.
        </p>

        <h5>2. Are decorative lamps energy-efficient?</h5>
        <p>
          Yes, many of our lamps use LED bulbs, combining beauty with
          efficiency.
        </p>

        <h5>3. Do cushion covers come with fillers?</h5>
        <p>
          Some do, but many are sold as covers only. You can choose fillers
          separately.
        </p>

        <h5>4. Can I return a broken decor item?</h5>
        <p>
          Yes, we offer easy returns for damaged or defective decor products.
        </p>

        <h5>5. Are your decor items suitable for gifting?</h5>
        <p>
          Absolutely! Our collection includes great gift options for
          housewarmings, weddings, and festivals.
        </p>

        <h5>6. How fast is delivery for decor items?</h5>
        <p>
          Many products are available for express delivery within 30–60 minutes
          in select cities.
        </p>

        <h5>7. Do you have combo offers for home decor?</h5>
        <p>
          Yes, we frequently offer bundled sets like cushion + throw combos, or
          lamp + bulb kits.
        </p>

        <h5>8. Are your products environmentally friendly?</h5>
        <p>
          We offer many eco-friendly and sustainable decor products, especially
          in planters and lighting.
        </p>

        <h5>9. Can I see product previews before buying?</h5>
        <p>
          Yes, we provide clear images, customer reviews, and even AR previews
          on select items.
        </p>
      </div>

      {/* CSS */}
      <style>{`
        .product-grid {
          display: grid;
          gap: 13px;
          width: 100%;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        }
        .scroll-content::-webkit-scrollbar {
          display: none;
        }
        .scroll-content {
          -ms-overflow-style: none;
          scrollbar-width: none;
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
      `}</style>
    </div>
  );
}
