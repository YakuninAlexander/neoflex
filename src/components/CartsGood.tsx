import IGoodProps from '../data/interfaces/IGoodProps';
import Delete from '../images/Delete.png';

interface ICartsGoodProps {
  good: IGoodProps
  deleteHandler: (e: IGoodProps) => void
  changeQuantityHandler: (e: IGoodProps, inc:number) => void 
}

export default function CartsGood({good, deleteHandler, changeQuantityHandler}: ICartsGoodProps) {

  return(
    <div className='relative mt-5 w-[39.5625rem] h-[13.625rem] rounded-[1.875rem]  bg-white shadow-good'>
      <img src={good.img} alt='Empty' className='absolute w-[9.158125rem] h-[8.5rem] mt-[1.125rem] ml-[1.125rem]' />
      <h3 className='absolute mt-[4.75rem] ml-[11.795625rem] font-sans font-medium text-[1.0625rem] leading-[1.3125rem] text-[#1C1C27]'>{good.title}</h3>
      <span className='absolute mt-[6.8125rem] ml-[11.795625rem] font-sans font-semibold text-[0.9375rem] leading-[1.125rem] text-[#AAAAAA]'>{good.price}</span>
      <span className='absolute mt-[11.1875rem] ml-[31.50375rem] mr-[1.758125rem] w-[6.25rem] text-right font-sans font-semibold text-[0.9375rem] leading-[1.125rem] text-[#1C1C27]'>{good.price * good.quantity!}</span>
      
      <button className='absolute mt-[10.6875rem] ml-4 rounded-full w-[1.875rem] h-[1.875rem] bg-[#FFCE7F] text-white' onClick={() => changeQuantityHandler(good, -1)}>-</button>
      <button className='absolute mt-[10.6875rem] ml-24 rounded-full w-[1.875rem] h-[1.875rem] bg-[#FFCE7F] text-white' onClick={() => changeQuantityHandler(good, 1)}>+</button>
      <span className='absolute mt-44 ml-[4.125rem] font-sans font-semibold text-[1.0625rem] leading-[1.3125rem] text-[#000000]'>{good.quantity}</span>

      <button className='mt-[1.125rem] ml-[36.5625rem]' onClick={() => deleteHandler(good)}><img src={Delete} alt='Empty' /></button>
      
    </div>
  )
}