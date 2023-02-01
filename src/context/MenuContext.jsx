import { createContext, useContext, useReducer } from "react";
import initialState from "../components/OnlineMenu/index";
const MenuContext = createContext(undefined);

const OrderReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const inCart = state.cart.find((item) => item.id === action.payload.id);
      if (inCart) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    case "REMOVE_FROM_CART":
      let items = state.cart.filter((item) => item.id !== action.payload);
      return {
        ...state,
        cart: [...items],
      };
    default:
      return state;
  }
};
export const MenuProvider = ({ children }) => {
  const [state, dispatch] = useReducer(OrderReducer, initialState);

  return (
    <MenuContext.Provider
      value={{ cart: state.cart, menu: state.menu, dispatch }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => useContext(MenuContext);
