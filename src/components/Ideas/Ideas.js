import "./Ideas.css";

function Ideas() {
  const images = [
    "/ideas1.jpg",
    "/ideas2.jpg",
    "/ideas3.jpg",
    "/ideas4.jpg",
    "/ideas5.jpg",
    "/ideas6.jpg",
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
