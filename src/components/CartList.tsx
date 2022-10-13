import React, { useContext } from 'react';
import { CartContext } from '../Contexts/CartContext';
import IGoodProps from '../data/interfaces/IGoodProps';
import CartsGood from './CartsGood';
import Total from './Total';



export default function CartList() {
  
  const context = useContext(CartContext);
  console.log(context);
  function deleteHandler(good: IGoodProps) {
    const newCart = context?.cart.filter((elem) => elem.id!==good.id) ?? [];
    context?.setCart(newCart)
  }
  function changeQuantityHandler(good: IGoodProps, inc: number) {
      if(context) {
        let newCart = context.cart.map(elem => {
            if(elem.id === good.id) {
              elem.quantity! += inc;
            }
            
            return elem;
          }) 
        
        context.setCart(newCart);
      }
  }

  return(
    <>
      <h3 className='mt-7 ml-[10.326875rem] font-sans text-xl leading-6 font-semibold'>Корзина</h3>

      <Total></Total>
      <div className='ml-[10.3125rem]'>
        {context?.cart.map(elem => <CartsGood key={elem.id} good={elem} deleteHandler={deleteHandler} changeQuantityHandler={changeQuantityHandler}></CartsGood>)}
      </div>
    </>
  )
}