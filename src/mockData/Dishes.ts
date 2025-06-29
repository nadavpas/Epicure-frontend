import { smokedPizza, garbanzoFrito, padKiMao } from '../assets/images/dishes';
import { ExtraType } from '../utils/enum';
const dishes = [
  {
    name: "Pad Ki Mao",
    extra: ExtraType.SPICY,
    info: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots,Lemon Grass, Magic Chili Brown Coconut",
    price: 98,
    image: padKiMao,
  },
  {
    name: "Garbanzo Frito",
    extra: ExtraType.SPICY,
    info: "Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
    price: 98,
    image: garbanzoFrito,
  },
  {
    name: "Smoked Pizza",
    extra: ExtraType.VEGAN,
    info: "Basil dough, cashew butter, demi-glace,bison & radish",
    price: 65,
    image: smokedPizza,
  },
];
export { dishes };
