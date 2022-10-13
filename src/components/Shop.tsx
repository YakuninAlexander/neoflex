import React from 'react';
import { BuyGoodContext } from '../Contexts/BuyGoodContext';
import IGoodProps from '../data/interfaces/IGoodProps';
import IGoodsGroup from '../data/interfaces/IGoodsGroup';
import GoodsGroup from './GoodsGroup';

interface ShopProps{
  data: Array<IGoodsGroup>
  buyHandler: (good:IGoodProps) => undefined
}

function Shop({data, buyHandler}: ShopProps) {
  return(
    <BuyGoodContext.Provider value={buyHandler}>
      {data.map((elem, id) => <GoodsGroup key={id} title={elem.title} content={elem.content}></GoodsGroup>)}
    </BuyGoodContext.Provider>
  )
}

export default Shop