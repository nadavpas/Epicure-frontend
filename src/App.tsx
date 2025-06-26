import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Popular from "./components/PopularRestaurants/Popular";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Popular />
      <Footer />
    </div>
  );
}

export default App;
