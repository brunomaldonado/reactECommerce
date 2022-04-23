import { useState } from "react";

const initialState = {
  cart: [],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };

  // const addToCart = (payload) => {
  //   if (!state.cart.includes(payload)) {
  //     setState({
  //       ...setState,
  //       cart: [...state.cart, payload],
  //     });
  //   }
  // };

  // const removeFromCart = (payload) => {
  //   const newArray = state.cart.filter((product) => product != payload);
  //   setState({
  //     ...state,
  //     cart: [...newArray],
  //   });
  // };

  return {
    state,
    addToCart,
    removeFromCart,
  };
};

export default useInitialState;
