import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./pages/components/navbar";
import { Cart } from "./pages/components/cart/cart";
import { Shop } from "./pages/components/shop/shop";
import { ShopContextProvider } from "./context/shop-context";
function App() {
  return (
    
    <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </Router>
      </ShopContextProvider>
    
  );
}

export default App;
