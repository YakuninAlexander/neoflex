import {createContext} from 'react';
import IGoodProps from '../data/interfaces/IGoodProps';

const NullGood = {
  img:'null',
  title: 'Empty good',
  price: 0,
  rate: 0,
} as IGoodProps

export const GoodContext = createContext(NullGood);