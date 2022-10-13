import React, { useContext } from 'react';
import { BuyGoodContext } from '../Contexts/BuyGoodContext';
import { GoodContext } from '../Contexts/GoodContext';
import IGoodProps from '../data/interfaces/IGoodProps';

export default function GoodDescription() {
  const {id, img, title, price, oldPrice, rate} = useContext(GoodContext);
  const buyHandler = useContext(BuyGoodContext);
  return(
    <>
      <span 
        className='ml-[1.3725rem] mt-[19.156875rem] absolute font-sans font-semibold'>
          {title}
      </span>

      <span 
        className='font-sans ml-[16.875rem] mt-[19.156875rem] absolute text-[#FFA542] font-semibold'>
          {price + ' $'}
      </span>

      {oldPrice && 
      <span 
        className='absolute ml-[17.375rem] mt-[20.4675rem] text-[#FFCE7F] font-sans font-semibold text-[.8125rem] leading-4 line-through'>
          {oldPrice+' $'}
      </span>}

      <img 
        src={require('../images/Star.png')} 
        alt='Empty' 
        className='absolute ml-[1.3725rem] mt-[22.0275rem]'>
      </img>

      <span 
        className='font-sans text-[#838383] absolute ml-[3.455625rem] mt-[22.09rem] font-semibold text-[1.0625rem] leading-[1.3125rem]'>
          {rate}
      </span>

      <button 
        className='font-sans absolute ml-[16.6875rem] mt-[22.459375rem] font-semibold text-[1.0625rem] leading-[1.3125rem]'
        onClick={() => buyHandler({img, title, price, oldPrice, id, rate})}
      >
          Купить
      </button>
    </>
  )
}