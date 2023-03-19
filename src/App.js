import { Typography } from "@mui/material";
import { fontSize } from "@mui/system";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import CustomerExperiences from "./Components/CustomerExperiences/CustomerExperiences";
import Footer from "./Components/Footer/Footer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";

function App() {
  return (
    <BrowserRouter>
      <Main />
      <Navbar />
      <Routes>
        <Route path="/customerExperiences" element={<CustomerExperiences />} />
        <Route path="/" element={<ItemListContainer />} />

        <Route path="/category/:categoryName" element={<ItemListContainer />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />

        <Route path="/login" element={<Login />} />

        <Route path="*" element={<h1> error 404: Not found </h1>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
