import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Legend from "./components/Legend";
import Popular from "./components/PopularRestaurants/Popular";
import SignatureDish from "./components/Signature-Dish/SignatureDish";

function App() {
  

  return (
    <div className="app">
      <Header />
      <Hero />
      <Popular />
      < SignatureDish />
      < Legend />
    </div>
  );
}

export default App;
