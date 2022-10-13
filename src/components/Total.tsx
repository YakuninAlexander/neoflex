import React, { useContext } from 'react';
import { CartContext } from '../Contexts/CartContext';

export default function Total() {
  const context = useContext(CartContext);
  let sum = context?.cart.reduce((acum, cur) => acum += cur.price * cur.quantity!, 0);
  return (
    <div className="absolute w-[21.8125rem] h-[7.125rem] ml-[57.8125rem] mt-5 rounded-[1.875rem] shadow-good bg-white">
      <span className="absolute ml-[1.339375rem] mt-5 font-sans font-semibold text-sm text-black">ИТОГО</span>
      <span className="absolute ml-[17.219375rem] mt-5 font-sans font-semibold text-sm" id="deliverCost">{sum}</span>
      <button className="rounded-[1.25rem] bg-black text-white w-[21.8125rem] h-16 shadow-good text-center mt-14 p-5">
          Перейти к оформлению
      </button>
    </div>
  )
}