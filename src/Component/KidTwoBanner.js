export default function KidTwoBanner() {
  return (
    <div className="container my-4">
      <h4 className="fw-bold " style={{ fontSize: "15px" }}>
        Events this week
      </h4>
      <div className="row g-2">
        <div className="col-6">
          <div className="event-card bg-chill text-white p-2 rounded-4 d-flex flex-column justify-content-between">
            <h6 className="fw-bold ms-3 ">Rocket Puzzles</h6>
            <img
              src="/kid6.jpeg"
              alt="Rocket Puzzles"
              className="img-fluid mt-auto"
              style={{ maxHeight: "100px", objectFit: "contain" }}
            />
          </div>
        </div>

        <div className="col-6">
          <div className="event-card bg-skin text-white p-2 rounded-4 d-flex flex-column justify-content-between">
            <h6 className="fw-bold ms-3">Puzzel's & Toys</h6>
            <img
              src="/kid3.jpeg"
              alt="Puzzel's & Toys"
              className="img-fluid mt-auto"
              style={{ maxHeight: "100px", objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
