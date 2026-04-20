import "./Catalog.css";

function Catalog() {
  const products = [
    "/названабору1.png","/названабору2.png","/названабору3.png",
    "/названабору4.jpg","/названабору5.jpg","/названабору6.jpg",
    "/названабору7.jpg","/названабору8.png","/названабору9.jpg",
    "/названабору10.png","/названабору11.jpg","/названабору12.jpg",
    "/названабору13.png","/названабору14.png","/названабору15.jpg",
    "/названабору16.jpg","/названабору17.jpg","/названабору18.jpg"
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