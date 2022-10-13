import React, { useContext } from 'react';
import CartList from '../components/CartList';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { CartContext } from '../Contexts/CartContext';


export default function Cart() {
  const context = useContext(CartContext)
  let quantity = 0
  if (context) {
    quantity = context.cart.reduce((acum, cur) => acum+= cur.quantity!, 0) ?? 0;
  }

  return(
    <>
        <div className='min-h-[calc(100vh-10.584375rem)]'>
          <Navbar quantity={quantity}></Navbar>
          <CartList></CartList>
        </div>
        <Footer></Footer>
    </>
  )
}