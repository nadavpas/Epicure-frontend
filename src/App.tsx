import { useState } from "react";
import "./App.scss";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Legend from "./components/Legend/Legend";
import Popular from "./components/PopularRestaurants/Popular";
import SignatureDish from "./components/Signature-Dish/SignatureDish";
import Weekly from "./components/Weekly/Weekly";

function App() {
  const [showCart, setShowCart] = useState(false);
  const toggleShowCart = () => {
    setShowCart((prev) => !prev);
  };
  return (
    <div className="app">
      <div>
        <Header onChange={toggleShowCart} showCart={showCart}/>
        <Hero showCart={showCart}/>
      </div>
      <Popular />
      <SignatureDish />
      <Legend />
      <Weekly />
      <About />
      <Footer />
    </div>
  );
}

export default App;
