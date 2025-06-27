const items = [
  { img: "/kid1.jpeg", title: "Puzzles" },
  { img: "/kid2.jpeg", title: "Coloring" },
  { img: "/kid3.jpeg", title: "Stationery" },
  { img: "/kid4.jpeg", title: "Crayons" },
  { img: "/kid5.jpeg", title: "Rattles" },
  { img: "/kid6.jpeg", title: "Teether" },
  { img: "/kid7.jpeg", title: "Blocks" },
  { img: "/kid8.jpeg", title: "Softtoys" },
  { img: "/kid9.jpeg", title: "Snacks" },
  { img: "/kid10.jpeg", title: "Bibs" },
  { img: "/kid1.jpeg", title: "Onesies" },
  { img: "/kid2.jpeg", title: "Learning" },
];

export default function KidBox() {
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
          Kid Section
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
