import './AdditionalInfo.css';

import "./Ideas.css";

function Ideas() {
  const images = [
    "/rec1.jpg",
    "/rec2.jpg",
    "/rec3.jpg",
    "/rec4.jpg",
    "/rec5.jpg",
    "/rec6.jpg",
  ];

  return (
    <section className="ideas">
      <h2>ДОДАТКОВІ РЕКОМЕНДАЦІЇ</h2>

      <div className="ideas-grid">
        {images.map((img, index) => (
          <div className="idea-card" key={index}>
            <img src={img} alt="" />
            <div className="arrow">↗</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AdditionalInfo;