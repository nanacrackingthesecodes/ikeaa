import "./Important.css";
import infoImg from "../public/laptop.jpg";

function InfoSection() {
  return (
    <section className="info">
      <h2 className="info-title">ВАЖЛИВА ІНФОРМАЦІЯ</h2>

      <div className="info-wrapper">
        <div className="info-image">
          <img src={infoImg} alt="" />
        </div>

        <div className="info-card">
          <h3>ВАЖЛИВА ІНФОРМАЦІЯ</h3>
          <p>...</p>
        </div>
      </div>
    </section>
  );
}

export default Important;
