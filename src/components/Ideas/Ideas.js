import "./Ideas.css";

function Ideas() {
  const images = [
    "/img/ideas1.jpg",
    "/img/ideas2.jpg",
    "/img/ideas3.jpg",
    "/img/ideas4.jpg",
    "/img/ideas5.jpg",
    "/img/ideas6.jpg",
  ];

  return (
    <section className="ideas">
      <h2>ІДЕЇ ДЛЯ ОФОРМЛЕННЯ</h2>

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

export default Ideas;
