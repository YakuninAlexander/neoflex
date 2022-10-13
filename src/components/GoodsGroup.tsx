import React from 'react';
import IGoodsGroup from '../data/interfaces/IGoodsGroup';
import Good from './Good';

export default function GoodsGroup({title, content}: IGoodsGroup) {
  return(
    <>
      <p className='mt-7 ml-[11.375rem] text-xl font-semibold font-sans leading-6 text-[#838383]'>{title}</p>

      <div className='mt-5 ml-[11.375rem] mr-[9.25rem] grid grid-cols-3 gap-[1.875rem]'>
        {content.map( (good) => 
          <Good key={good.id} id={good.id} img={good.img} rate={good.rate} price={good.price} oldPrice={good.oldPrice} title={good.title}></Good>
        )}
      </div>
    </>
  )
}