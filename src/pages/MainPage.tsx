import React, { useContext } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Shop from '../components/Shop';
import { CartContext } from '../Contexts/CartContext';
import IGoodProps from '../data/interfaces/IGoodProps';
import shopData from '../data/shopData';


function MainPage() {
  const context = useContext(CartContext);

  function buyHandler(good : IGoodProps) : undefined {
    function contains(elem:IGoodProps) {
        if(elem.id !== good.id) return false;
      return true;
    }

    if(context) {
      let newCart;

      if(context.cart.findIndex(contains) !== -1){
        newCart = context.cart.map(elem => {
          if(elem.id === good.id) {
            elem.quantity!++;
          }
          
          return elem;
        }) 
      } else {
        const goodInCart = good;
        goodInCart.quantity = 1;
        newCart = context.cart.concat([goodInCart]);
      }

      context.setCart(newCart);
    }
    return;
  }

  const quantity = context?.cart.reduce((acum, cur) => acum += cur.quantity!, 0) ?? 0;
  
  return (
    <>
      <div className='min-h-[calc(100vh-10.584375rem)]'>
        <Navbar quantity={quantity}></Navbar>
        <Shop data={shopData} buyHandler={buyHandler}></Shop>
      </div>
      <Footer></Footer>
    </>
  );
}

export default MainPage;