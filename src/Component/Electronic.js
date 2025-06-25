const items = [
  { img: "/elec6.jpeg", title: "Mouse" },
  { img: "/elec1.jpeg", title: "Key Pad", subtitle: "Mobile" },
  { img: "/comp5.jpeg", title: "Mouse" },
  { img: "/comp4.jpeg", title: "Cable" },
  { img: "/comp3.jpeg", title: "Personal", subtitle: "Computer" },
  { img: "/comp2.jpeg", title: "Mouse" },
  { img: "/comp1.jpeg", title: "Data", subtitle: "Cable" },
  { img: "/comp5.jpeg", title: "Mouse" },
  { img: "/comp4.jpeg", title: "Wireless", subtitle: "Cable" },
  { img: "/comp3.jpeg", title: "Personal", subtitle: "Computer" },
  { img: "/comp1.jpeg", title: "Cable" },
  { img: "/comp2.jpeg", title: "Mouse" },
];

export default function Electronic() {
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
      <div className="container px-1">
        <h4 className="fw-bold ms-1 p-2 " style={{ fontSize: "15px" }}>
          Computer Accessories
        </h4>

        <div className="row gx-1  text-center justify-content-start">
          {items.map((item, index) => (
            <div
              key={index}
              className="col-3 col-sm-2 col-md-1 "
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
