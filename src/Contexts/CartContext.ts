import React from 'react';
import IGoodProps from '../data/interfaces/IGoodProps';

type CartContextValue = {
  cart: IGoodProps[];
  setCart: (value: IGoodProps[]) => void;
};

export const CartContext = React.createContext<CartContextValue | null>(null);

