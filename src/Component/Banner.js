export default function Banner() {
  return (
    <div className="fathers-day-banner">
      <div className="top-text">
        <h4>CELEBRATE</h4>
        <h1>FATHER'S DAY</h1>
        <p>
          On 15<sup>th</sup> June
        </p>
      </div>

      <div className="card-container">
        <div className="card-box border border1">
          <div className="card-title" style={{fontSize:"12px"}}>Choco Biscuit</div>
          <img src="/biscuit.jpeg" alt="Flowers" />
        </div>

        <div className="card-box border border1">
          <div className="card-title" style={{fontSize:"12px"}}>Spicy Namkin</div>
          <img src="/namkin.jpeg" alt="Gadgets" />
        </div>

        <div className="card-box border border1">
          <div className="card-title" style={{fontSize:"12px"}}>Cakes</div>
          <img src="/cake.jpeg" alt="Chocolates" />
        </div>
      </div>
    </div>
  );
}
