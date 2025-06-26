import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Popular from "./components/Popular-restaurants/Popular";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Popular />
    </div>
  );
}

export default App;
