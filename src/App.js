import CartWidget from "./Components/CartWidget/CartWidget.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import ProductCard from "./Components/ProductCard/ProductCard.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer />

      <ProductCard title={"Producto uno"} price={200} isRed={true} />
      <ProductCard title={"Producto dos"} price={1500} isRed={true} />
      <ProductCard title={"Producto tres"} isRed={false} />

      <Footer />
    </div>
  );
}

export default App;
