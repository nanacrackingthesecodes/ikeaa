import "./Catalog.css";

function Catalog() {
  const products = [
    "/img/названабору1.png","/img/названабору2.png","/img/названабору3.png",
    "/img/названабору4.png","/img/названабору5.png","/img/названабору6.png",
    "/img/названабору7.png","/img/названабору8.png","/img/названабору9.png",
    "/img/названабору10.png","/img/названабору11.png","/img/названабору12.png",
    "/img/названабору13.png","/img/названабору14.png","/img/названабору15.png"
  ];

  return (
    <section className="catalog">
      <h2>КАТАЛОГ</h2>

      <div className="catalog-grid">
        {products.map((img, index) => (
          <div className="catalog-item" key={index}>
            <img src={img} alt="" />
            <p>НАЗВА НАБОРУ</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Catalog;