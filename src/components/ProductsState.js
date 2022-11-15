import { uuid } from "uuidv4";
import milkBox from "../img/milk-box.png";
import darkBox from "../img/dark-box.png";
import milkTablet from "../img/milk-tablet.jpeg";
import darkTablet from "../img/dark-tablet.png";
import assortedBox from "../img/assorted.png";
import letterCake from "../img/letter-cake.png";
import birthdayCake from "../img/birthday-cake.png";
import christmasHome from "../img/christmas-home.png";
export const productsState = [
  {
    name: "Milk Chocolatte Box",
    price: [15, 20, 30],
    id: uuid(),
    type: "box",
    img: milkBox,
  },
  {
    name: "Dark Chocolatte Box",
    price: [15, 20, 30],
    id: uuid(),
    type: "box",
    img: darkBox,
  },
  {
    name: "Assorted Chocolatte Box",
    price: [15, 20, 30],
    id: uuid(),
    type: "box",
    img: assortedBox,
  },
  {
    name: "Dark Chocolatte Tablet",
    price: 5,
    id: uuid(),
    type: "tablet",
    img: darkTablet,
  },
  {
    name: "Milk Chocolatte Tablet",
    price: 5,
    id: uuid(),
    type: "tablet",
    img: milkTablet,
  },
  {
    name: "Letter Cake",
    price: 20,
    id: uuid(),
    type: "cake",
    img: letterCake,
  },
  {
    name: "Birthday Cake",
    price: 30,
    id: uuid(),
    type: "cake",
    img: birthdayCake,
  },
  {
    name: "Christmas Home",
    price: 30,
    id: uuid(),
    type: "christmas",
    img: christmasHome,
  },
];
