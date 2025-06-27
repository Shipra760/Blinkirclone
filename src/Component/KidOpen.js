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
    { img: "/kid1.jpeg", title: "Wipes" },
    { img: "/kid2.jpeg", title: "Crayons" },
    { img: "/kid3.jpeg", title: "Snacks" },
    { img: "/kid4.jpeg", title: "Pacifier" },
    { img: "/kid5.jpeg", title: "Onesies" },
    { img: "/kid6.jpeg", title: "Softtoy" },
    { img: "/kid1.jpeg", title: "Stencils" },
    { img: "/kid5.jpeg", title: "Palette" },
    { img: "/kid2.jpeg", title: "Outliner" },
    { img: "/kid3.jpeg", title: "Artkit" },
    { img: "/kid6.jpeg", title: "Gelpens" },
    { img: "/shoefix.jpeg", title: "Shoefix" },
  ];

  const items = [
    { img: "/kid1.jpeg", title: "Tracing", volume: "1Piece", price: "₹10050" },
    {
      img: "/kid2.jpeg",
      title: "Artfile",
      volume: "1Piece",
      price: "₹300",
    },
    {
      img: "/kid3.jpeg",
      title: "Ink",
      volume: "1Piece",
      price: "₹400",
    },
    { img: "/kid4.jpeg", title: "ToyPhone", volume: "1Piece", price: "₹250" },
    {
      img: "/kid5.jpeg",
      title: "Trumpet",
      volume: "1Piece",
      price: "₹60",
    },
    {
      img: "/kid6.jpeg",
      title: "Outliner",
      volume: "3Piece",
      price: "₹35",
    },
    {
      img: "/kid2.jpeg",
      title: "Clipboard",
      volume: "1Piece",
      price: "₹300",
    },
    {
      img: "/kid3.jpeg",
      title: "Stapler",
      volume: "1Piece",
      price: "₹400",
    },
    {
      img: "/kid4.jpeg",
      title: "Correctionpen",
      volume: "1Piece",
      price: "₹250",
    },
    {
      img: "/kid5.jpeg",
      title: "Postercolors",
      volume: "1Piece",
      price: "₹60",
    },
    {
      img: "/kidc3.jpeg",
      title: "Stapler",
      volume: "1Piece",
      price: "₹400",
    },
    { img: "/kid4.jpeg", title: "Brushpen", volume: "1Piece", price: "₹250" },
    {
      img: "/kid5.jpeg",
      title: "Palette",
      volume: "1Piece",
      price: "₹60",
    },
    {
      img: "/kid3.jpeg",
      title: "Ruler",
      volume: "1Piece",
      price: "₹400",
    },
    { img: "/kid4.jpeg", title: "Easel", volume: "1Piece", price: "₹250" },
    {
      img: "/kid5.jpeg",
      title: "Boofer",
      volume: "1Piece",
      price: "₹60",
    },
    { img: "/kid1.jpeg", title: "Gelpens", volume: "1Piece", price: "₹10050" },
    {
      img: "/kid2.jpeg",
      title: "Oilpastel",
      volume: "1Piece",
      price: "₹300",
    },
    {
      img: "/kid3.jpeg",
      title: "Fineliner",
      volume: "1Piece",
      price: "₹400",
    },
    { img: "/kid4.jpeg", title: "Templates", volume: "1Piece", price: "₹250" },
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

      <h4 className="mb-3 p-2 border-bottom fs-5">Kids Section</h4>
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
          Kids' products are all about fun, learning, and care. Whether you’re a
          parent, guardian, or gift-giver, choosing the right toys and
          essentials helps children grow creatively, stay active, and feel
          happy. We bring you a wide range of top-quality kids’ items that are
          safe, colorful, and educational.
        </p>

        <h4>Types of Kids' Products Available</h4>
        <p>
          From toys and drawing tools to baby care and snacks, we offer it all!
          Popular brands like Funskool, Hamleys, Mee Mee, and LuvLap make sure
          your kids get the best quality and joy.
        </p>

        <h5>Learning & Activity Toys</h5>
        <p>
          Build your child’s skills with fun puzzles, alphabet games, memory
          cards, and brain teasers. Great for early learning and creative
          thinking.
        </p>

        <h5>Drawing & Art Supplies</h5>
        <p>
          Encourage artistic expression with crayons, sketchbooks, watercolor
          sets, and safe brushes. Perfect for kids to color, doodle, and draw
          freely.
        </p>

        <h5>Soft Toys & Dolls</h5>
        <p>
          Cute teddies, dolls, and stuffed animals are cuddly companions for
          babies and toddlers. Great for comfort and imaginative play.
        </p>

        <h5>Outdoor & Ride-On Toys</h5>
        <p>
          Let kids explore with scooters, cycles, and ride-on cars. These help
          develop motor skills while keeping them active.
        </p>

        <h5>Baby Care Essentials</h5>
        <p>
          Diapers, baby wipes, feeding bottles, and lotions – everything needed
          to care for newborns and toddlers with love and safety.
        </p>

        <h5>Top Brands for Kids' Products</h5>
        <p>
          <strong>Funskool</strong> – Educational and fun board games.
        </p>
        <p>
          <strong>Hamleys</strong> – Premium toys and plush animals.
        </p>
        <p>
          <strong>Mee Mee</strong> – Trusted baby care items and feeding tools.
        </p>
        <p>
          <strong>LuvLap</strong> – Quality strollers, bottles, and baby gear.
        </p>

        <h4>Why Buy Kids’ Products from Us?</h4>
        <p>
          <strong>All-in-One</strong> – Everything your child needs in one
          place.
        </p>
        <p>
          <strong>Fast Delivery</strong> – Toys and care items delivered quickly
          to your home.
        </p>
        <p>
          <strong>100% Safe</strong> – Child-safe, BPA-free, and tested
          products.
        </p>
        <p>
          <strong>Affordable</strong> – Great deals, bundles, and daily
          discounts.
        </p>

        <h3>Frequently Asked Questions</h3>

        <h5>1. What toys are best for 1–3-year-olds?</h5>
        <p>
          Soft toys, rattles, stackers, and music toys are great for toddlers.
        </p>

        <h5>2. Are the art supplies child-safe?</h5>
        <p>
          Yes, all crayons, colors, and paints are non-toxic and safe for kids.
        </p>

        <h5>3. Do you have combo packs for gifting?</h5>
        <p>Yes! We offer gift bundles with toys, games, and coloring sets.</p>

        <h5>4. Do kids’ bottles and accessories have BPA?</h5>
        <p>
          No, all baby feeding products are BPA-free and meet safety standards.
        </p>

        <h5>5. How fast is delivery for kids' items?</h5>
        <p>
          Most items are eligible for same-day or 30-minute delivery in select
          cities.
        </p>

        <h5>6. Can I return toys if broken or damaged?</h5>
        <p>Absolutely. We offer easy returns for defective or damaged items.</p>

        <h5>7. Do you sell original branded toys?</h5>
        <p>Yes, all toys are 100% original from trusted brands and sellers.</p>

        <h5>8. Do you offer learning kits or bundles?</h5>
        <p>
          Yes, we have learning kits, drawing sets, and combo boxes to keep your
          child engaged.
        </p>
      </div>
    </div>
  );
}
