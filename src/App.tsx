import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero";
import Popular from "./components/Popular";

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
