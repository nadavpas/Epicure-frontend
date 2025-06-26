import { smokedPizza, garbanzoFrito, padKiMao } from "../assets/Images/dishes";
const dishes = [
  {
    name: "Pad Ki Mao",
    extra: "spicy" as "spicy",
    info: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots,Lemon Grass, Magic Chili Brown Coconut",
    price: 98,
    image: padKiMao,
  },
  {
    name: "Garbanzo Frito",
    extra: "spicy" as "spicy",
    info: "Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
    price: 98,
    image: garbanzoFrito,
  },
  {
    name: "Smoked Pizza",
    extra: "vegan" as "vegan",
    info: "Basil dough, cashew butter, demi-glace,bison & radish",
    price: 65,
    image: smokedPizza,
  },
];
export { dishes };
