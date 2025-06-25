export default function BannerBeauty() {
  return (
    <div className="beauty-banner p-2 ">
      <div className="top-text">
        <h4>BEAUTY</h4>
      <h2>PRODUCTS</h2>
      </div>

      <div className="card-container">
        <div className="card-box border border1">
          <div className="card-title" style={{fontSize:"12px"}}>Lipstick</div>
          <img src="/beauty1.jpeg" alt="Flowers" />
        </div>

        <div className="card-box border border1">
          <div className="card-title" style={{fontSize:"12px"}}> Powder</div>
          <img src="/powder.jpeg" alt="Gadgets" />
        </div>

        <div className="card-box border border1">
          <div className="card-title" style={{fontSize:"12px"}}>Brushes</div>
          <img src="/multy.jpeg" alt="Chocolates" />
        </div>
      </div>
    </div>
  );
}
