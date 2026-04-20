import "./Catalog.css";

function Catalog() {
  const products = [
    "/названабору1.png","/названабору2.png","/названабору3.png",
    "/названабору4.png","/названабору5.png","/названабору6.png",
    "/названабору7.png","/названабору8.png","/названабору9.png",
    "/названабору10.png","/названабору11.png","/названабору12.png",
    "/названабору13.png","/названабору14.png","/названабору15.png"
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