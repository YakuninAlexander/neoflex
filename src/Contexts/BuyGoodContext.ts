import {createContext} from 'react';
import IGoodProps from '../data/interfaces/IGoodProps';


export const BuyGoodContext = createContext((good: IGoodProps) => undefined);