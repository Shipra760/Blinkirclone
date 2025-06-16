import React from "react";

const items = [
  { img: "/grocery.jpg", title: "Paan", subtitle: "Corner" },
  { img: "/gro3.jpg", title: "Dairy,Bread", subtitle: "& egg" },
  { img: "/cake.jpeg", title: "Fruit &", subtitle: "Vegetables" },
  { img: "/cow.jpeg", title: "Cod Drinks", subtitle: "& Juices" },
  { img: "/namkin.jpeg", title: "Breakfast &", subtitle: "Instant Food" },
  { img: "/meat.jpeg", title: "Sweet", subtitle: "Tooth" },
  { img: "/maggie.jpeg", title: "Bakery &", subtitle: "Biscuits" },
  { img: "/shoefix.jpeg", title: "Tea,Coffee &", subtitle: "Health Drink" },
  { img: "/biscuit.jpeg", title: "Atta, Rice", subtitle: "& Dal" },
  { img: "/grocery.jpg", title: "Chocolate", subtitle: "Drink" },
  { img: "/chocolate.png", title: "Atta, Rice", subtitle: "& Dal" },
  { img: "/gro3.jpg", title: "Atta, Rice", subtitle: "& Dal" },
];

export default function Box1() {
  return (
    <>
      <style>{`
        @media (max-width: 576px) {
          .box-text p, .box-text span {
            font-size: 0.7rem;
          }
          .box-img {
            width: 65px !important;
            height: 75px !important;
          }
        }

        .box-img {
          width: 85px;
          height: 95px;
          object-fit: cover;
          border-radius: 8px;
        }

        .box-text {
          line-height: 1.2;
        }
      `}</style>

      <div className="container px-1 p-3">
        <h4 className="fw-bold ms-2 mt-2 " style={{ fontSize: "15px" }}>
          Shop by store
        </h4>

        <div className="row gx-1 gy-2 text-center justify-content-start">
          {items.map((item, index) => (
            <div
              key={index}
              className="col-3 col-sm-2 col-md-1 p-1"
              style={{ maxWidth: "100px" }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="img-fluid mb-1 box-img"
              />
              <div className="box-text">
                <p className="mb-0">{item.title}</p>
                <span>{item.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
