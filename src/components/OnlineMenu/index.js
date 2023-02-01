import {
  greekSalad,
  cheeseBread,
  lemonDessert,
  pasta,
  fries,
  oysters,
  tilapia,
  bruschetta,
} from "../Highlights/index";

const initialState = {
  menu: [
    {
      id: 1,
      img: cheeseBread,
      price: "7.99",

      title: "Cheese Bread",
      description:
        "Our tasty cheesey bread, with chopped tomatoes, bazil leaves and yellow peppers.",
      quantity: 0,
    },
    {
      id: 2,
      img: greekSalad,
      price: "12.99",

      title: "Greek Salad",
      description:
        "Salad with avocado, tomatoes, Bulgarian cheese, green peppers and onions, with our famous sauce.",
      quantity: 0,
    },
    {
      id: 3,
      img: pasta,
      price: "14.99",

      title: "Pasta Margarita",
      description:
        "A fresh hand made pasta with high quality tomatoes, bazil leaves and Parmezan cheese.",
      quantity: 0,
    },
    {
      id: 4,
      img: tilapia,
      price: "8.99",

      title: "Tilapia Lemon fish",
      description:
        "Pan grilled tilapia with fresh herbs, olive and lemon, served with pan seared vegetables.",
      quantity: 0,
    },
    {
      id: 5,
      img: oysters,
      price: "22.99",

      title: "Grilled Oysters",
      description:
        "Freshly caught grilled oysters with garlic, brandy and parmesan cheese served with vegetables.",
      quantity: 0,
    },
    {
      id: 6,
      img: fries,
      price: "5.99",

      title: "Home Fries",
      description:
        "Our traditional sweet & sour potatoes with parmesan cheese, tomatoes and our secret herbs.",
      quantity: 0,
    },
    {
      id: 7,
      img: lemonDessert,
      price: "5.99",
      title: "Lemon Dessert",

      description:
        "Pretty as a picture, this syrup-soaked lemon cake has a secret ingredient.",
      quantity: 0,
    },
    {
      id: 8,
      img: bruschetta,
      price: "5.99",
      title: "Bruschetta",

      description:
        "Bruschetta is a classic Italian appetizer that is easy to make at home. Toasted bread is topped with tomatoes, Parmesan cheese, garlic, and fresh basil.",
      quantity: 0,
    },
  ],
  cart: [],
};

export default initialState;
