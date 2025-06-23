const items = [
  { img: "/perfume.webp", title: "Perfume"},
  { img: "/watch.jpeg", title: "Watch" },
  { img: "/elec1.jpeg", title: "Mobile" },
  { img: "/elec2.jpeg", title: "Mother", subtitle: "Boards" },
  { img: "/namkin.jpeg", title: "Breakfast &", subtitle: "Instant Food" },
  { img: "/meat.jpeg", title: "Spicy" },
  { img: "/maggie.jpeg", title: "Grocery" },
  { img: "/shoefix.jpeg", title: "Shoe", subtitle: "Fix" },
  { img: "/biscuit.jpeg", title: "Biscuit", subtitle: "Sweets" },
  { img: "/elec5.jpeg", title: "Speaker", subtitle: "Best Volume" },
  { img: "/chocolate.png", title: "Chocolate", subtitle: "Delicious" },
  { img: "/gro3.jpg", title: "Atta, Rice", subtitle: "& Dal" },
];

export default function Box2() {
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
          Grocery & Electronics
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
                <p className="mb-0 ">{item.title}</p>
                <span>{item.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
