export default function TwoBanner() {
  return (
    <div className="container my-4">
      <h4 className="fw-bold " style={{fontSize:"15px"}}>Events this week</h4>
      <div className="row g-2">
        <div className="col-6">
          <div className="event-card bg-chill text-white p-2 rounded-4 d-flex flex-column justify-content-between">
            <h6 className="fw-bold">Chill and Munch</h6>
            <img
              src="/chips.png"
              alt="Chill and Munch"
              className="img-fluid mt-auto"
              style={{ maxHeight: "100px", objectFit: "contain" }}
            />
          </div>
        </div>

        <div className="col-6">
          <div className="event-card bg-skin text-white p-2 rounded-4 d-flex flex-column justify-content-between">
            <h6 className="fw-bold">Smooth Skin Days</h6>
            <img
              src="/download.jpeg"
              alt="Smooth Skin Days"
              className="img-fluid mt-auto"
              style={{ maxHeight: "100px", objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
