import Catalog from "./components/Catalog.js";
import Ideas from "./components/Ideas.js";
import InfoSection from "./components/Important";


function App() {
  return (
    <div className="container">
      <Catalog />
      <Ideas />
      <InfoSection />
    </div>
  );
}

export default App;