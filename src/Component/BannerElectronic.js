export default function BannerElectronic() {
  return (
    <div className="electronic-day-banner p-2 ">
      <div className="top-text">
        <h4>CELEBRATE</h4>
        <h1>ELECTRONIC'S</h1>
        <h1>DAY</h1>
       
      </div>

      <div className="card-container">
        <div className="card-box border border1">
          <div className="card-title" style={{fontSize:"12px"}}>Watch</div>
          <img src="/watch.jpeg" alt="Flowers" />
        </div>

        <div className="card-box border border1">
          <div className="card-title" style={{fontSize:"12px"}}>Boofer</div>
          <img src="/elec5.jpeg" alt="Gadgets" />
        </div>

        <div className="card-box border border1">
          <div className="card-title" style={{fontSize:"12px"}}>Mouse</div>
          <img src="/elec6.jpeg" alt="Chocolates" />
        </div>
      </div>
    </div>
  );
}
