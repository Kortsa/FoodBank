import { Cart } from "./pages/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
