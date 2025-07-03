import sequelize from "../db"; // Adjust this path if needed
import {Chef} from "../Models";

interface ChefData {
  firstName: string;
  lastName: string;
  image: string;
  description: string;
}

const chef_data: ChefData[] = [
  {
    firstName: "Asaf",
    lastName: "Granit",
    image: "/Users/nadavpassal/Projects/Epicure-frontend/src/assets/images/chefs/asafGranit.png",
    description:
      "Chef Asaf Granit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav Udim. Granit's creativity and culinary acumen born of long experience are expressed in every detail of each and every dish.",
  },
  {
    firstName: "Yossi",
    lastName: "Shitrit",
    image: "/Users/nadavpassal/Projects/Epicure-frontend/src/assets/images/chefs/YossiShitrit.jpg",
    description:
      "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav Udim. Shitrit's creativity and culinary acumen born of long experience are expressed in every detail of each and every dish.",
  },
  {
    firstName: "Eyal",
    lastName: "Shani",
    image: "/Users/nadavpassal/Projects/Epicure-frontend/src/assets/images/chefs/eyalShani.png",
    description:
      "Chef Eyal Shani has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav Udim. Shani's creativity and culinary acumen born of long experience are expressed in every detail of each and every dish.",
  },
  {
    firstName: "Meir",
    lastName: "Adoni",
    image: "/Users/nadavpassal/Projects/Epicure-frontend/src/assets/images/chefs/MeirAdony.png",
    description:
      "Chef Meir Adoni has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav Udim. Adoni's creativity and culinary acumen born of long experience are expressed in every detail of each and every dish.",
  },
  {
    firstName: "Omer",
    lastName: "Miller",
    image: "/Users/nadavpassal/Projects/Epicure-frontend/src/assets/images/chefs/OmerMiller.png",
    description:
      "Chef Omer Miller has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav Udim. Miller's creativity and culinary acumen born of long experience are expressed in every detail of each and every dish.",
  },
  {
    firstName: "Yuval",
    lastName: "Ben Neriaha",
    image: "/Users/nadavpassal/Projects/Epicure-frontend/src/assets/images/chefs/YuvalBenNeriah.png",
    description:
      "Chef Yuval Ben Neriaha has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav Udim. Ben Neriaha's creativity and culinary acumen born of long experience are expressed in every detail of each and every dish.",
  },
];

async function Create(){
  await sequelize.sync();

  const newChefs = await Chef.bulkCreate(chef_data);

}

Create();