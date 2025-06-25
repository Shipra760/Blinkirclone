import React from "react";


const data = [
  {
    title: "Electric Kettles",
    images: ["/elec1.jpeg", "/elec6.jpeg"],
  },
  {
    title: "Phone Cases",
    images: ["/elec2.jpeg", "/elec5.jpeg"],
  },
  {
    title: "Dehumidifiers",
    images: ["/elec3.jpeg", "/elec4.jpeg"],
  },
  {
    title: "Headsets",
    images: ["/elec4.jpeg", "/elec3.jpeg"],
  },
//   {
//     title: "Headphones",
//     images: ["/elec5.jpeg", "/elec2.jpeg"],
//   },
//   {
//     title: "Extension Cables",
//     images: ["/elec6.jpeg", "/elec1.jpeg"],
//   },
];

export default function ElectronicPara() {
  return (
    <div className="container my-4">
      <h5 className="fw-bold  ms-1" style={{fontSize:"15px"}}>Discover new finds</h5>
      <div className="row g-3">
        {data.map((item, index) => (
          <div key={index} className="col-6">
            <div className="category-box text-center p-2">
              <div className="category-title mb-2">{item.title}</div>
              <div className="d-flex justify-content-around">
                {item.images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={item.title}
                    className="category-image"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
