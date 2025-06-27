import React from "react";
export default function KidCart() {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-12 ">
          <div className="position-relative ">
            <img
              src="/kid1.jpeg"
              alt="Banner"
              className="img-fluid w-100"
              style={{ height: "250px", objectFit: "", borderRadius: "20px" }}
            />

            <div
              className="position-absolute"
              style={{
                top: "20px",
                left: "20px",
                padding: "15px 20px",
                borderRadius: "15px",
                backdropFilter: "",
                maxWidth: "90%",
              }}
            >
              <h4 className="fw-bold fs-2 text-dark mb-2">Happy Life</h4>
              <p className="text-dark m-0 small fs-4">
                Your favourite person is now online
              </p>
              
               <a
                  href="/kidopen" 
                  className="btn btn-light text-dark mt-5"
                >
                  Order Now
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}