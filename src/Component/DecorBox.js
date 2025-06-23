const items = [
  { img: "/decor1.jpeg", title: "Dal,Oil", subtitle: "Rice" },
  { img: "/decor2.jpeg", title: "Masala,Bread", subtitle: "& egg" },
  { img: "/decor3.jpeg", title: "Delicious", subtitle: "Cake" },
  { img: "/decor4.jpeg", title: "Cow Milk", subtitle: "" },
  { img: "/decor5.jpeg", title: "Spicy", subtitle: "Namkin" },
  { img: "/decor6.jpeg", title: "Chicken", subtitle: "Meat" },
  { img: "/decor1.jpeg", title: "Maggie", subtitle: "Pasta" },
  { img: "/decor3.jpeg", title: "Shoefix", subtitle: "" },
  { img: "/decor2.jpeg", title: "Choco", subtitle: "Biscuit" },
  { img: "/decor5.jpeg", title: "Dal,Oil", subtitle: "Rice" },
  { img: "/decor2.jpeg", title: "Choco", subtitle: "Chocolate" },
  { img: "/decor6.jpeg", title: "Masala", subtitle: "& Bread" },
];

export default function DecorBox() {
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
          Decor Section
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
