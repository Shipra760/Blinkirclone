import React from "react";
import {  FaCheckSquare } from "react-icons/fa";

const orders = [
  {
    id: 1,
    time: "Arrived in 8 minutes",
    price: "₹231",
    date: "06 May, 8:51 pm",
    items: ["/rice.jpeg"],
  },
  {
    id: 2,
    time: "Arrived in 8 minutes",
    price: "₹286",
    date: "30 Mar, 2:18 pm",
    items: ["/ice.jpeg"],
  },
  {
    id: 3,
    time: "Arrived in 9 minutes",
    price: "₹426",
    date: "20 Mar, 9:14 pm",
    items: ["/lays.jpeg", "/maggie.jpeg", "/protein.jpeg"],
  },
  {
    id: 4,
    time: "Arrived in 9 minutes",
    price: "₹426",
    date: "20 Mar, 9:14 pm",
    items: ["/namkin.jpeg", "/chips.png", "/cake.jpeg"],
  },
  {
    id: 5,
    time: "Arrived in 9 minutes",
    price: "₹426",
    date: "20 Mar, 9:14 pm",
    items: ["/rice.jpeg", "/cake.jpeg", "/maggie.jpeg"],
  },
];

const Order = () => {
  return (
    <div className="container py-3  ">
      <div className="d-flex align-items-center mb-3">
        <button className="btn btn-link p-0 me-2">
          <i className="bi bi-arrow-left"></i>
        </button>
        <h5 className="mb-0" style={{ fontSize: "15px" }}>
          Your orders
        </h5>
      </div>

      {orders.map((order) => (
        <div key={order.id} className="card mb-3 shadow-sm">
          <div className="card-body">
            <div className="d-flex align-items-center mb-0">
              <FaCheckSquare color="lightgreen" className="me-2 fs-1" />
              <strong>{order.time}</strong>
            </div>
            <div className="text-muted mb-3 " style={{fontSize:"13px" , marginLeft:"32px"}}>
              {order.price} • {order.date}
            </div>

            <div className="d-flex gap-1 mb-2 p-2 border-top">
              {order.items.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  style={{ width: 50, height: 50, objectFit: "contain" }}
                />
              ))}
            </div>

            <div className=" container-fluid d-flex justify-content-evenly  border-top p-2">
              <button className="btn text-success btn-sm">Reorder</button>
             <div class="border-start mx-2 bg-secondary" style={{width:"1px", height:"27px"}}></div>

              <button className="btn text-success btn-sm">Rate order</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Order;
