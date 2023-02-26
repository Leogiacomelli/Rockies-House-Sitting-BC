import Footer from "./Components/Footer/Footer.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
