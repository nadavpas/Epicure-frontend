import DishCard from './components/DishCard'
import './App.css'

function App() {
const dish = {name:"Pad Ki Mao",
    extra: "spicy" as "spicy",
    info:'Shrimps, Glass Noodles, Kemiri Nuts, Shallots,Lemon Grass, Magic Chili Brown Coconut',
    price:98}

  return (
    <>
      <DishCard  {...dish}/>
    </>
  )
}

export default App
