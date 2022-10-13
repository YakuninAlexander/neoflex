import React, { useContext } from 'react';
import { BuyGoodContext } from '../Contexts/BuyGoodContext';
import { GoodContext } from '../Contexts/GoodContext';
import IGoodProps from '../data/interfaces/IGoodProps';
import GoodDescription from './GoodDescription';

export default function Good(props: IGoodProps) {
  return (
    <div className='w-[21.875rem] h-[25.4375rem] bg-white rounded-[1.875rem] shadow-good'>
      <img 
        src={props.img} 
        alt='Empty' 
        className='absolute w-[13.725625rem] h-[14.816875rem] ml-[4.1175rem] mr-[4.031875rem] mt-[0.941875rem]'>
      </img>
      <GoodContext.Provider value={props}>
        <GoodDescription></GoodDescription>
      </GoodContext.Provider>
    </div>
  )
}
