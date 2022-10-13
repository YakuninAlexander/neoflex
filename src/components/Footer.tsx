import React from 'react';
export default function Footer() {
  return( 
    <div className='w-[69.375rem] h-[9.3125rem] mt-[1.271875rem] ml-[11.375rem] mr-[9.25rem] bg-white rounded-t-[1.875rem] shadow-good'>
      <h1 className='absolute font-sans font-bold leading-[1.875rem] text-[1.5625rem] ml-[1.8125rem] mt-[1.8125rem]'>QPICK</h1>
      <p className='absolute font-sans font-normal leading-[1.3125rem] text-[1.0625rem] ml-[21.6875rem] mt-[2.1075rem]'>Избранное</p>
      <p className='absolute font-sans font-normal leading-[1.3125rem] text-[1.0625rem] ml-[21.6875rem] mt-[4.08875rem]'>Корзина</p>
      <p className='absolute font-sans font-normal leading-[1.3125rem] text-[1.0625rem] ml-[21.6875rem] mt-[5.9825rem]'>Контакты</p>

      <p className='absolute font-sans font-normal leading-[1.3125rem] text-[1.0625rem] ml-[38.875rem] mt-[2.1075rem]'>Условия сервиса</p>
      <p className='absolute font-sans font-bold leading-[1.125rem] text-[.9375rem] text-[#FFA542] ml-[41.0625rem] mt-[5.6875rem]'>Рус</p>
      <p className='absolute font-sans font-medium leading-[1.125rem] text-[.9375rem] text-[#101010] ml-[43.75rem] mt-[5.6875rem]'>Eng</p>
      <img src={require("../images/Lang.png")} alt='Empty' className="absolute ml-[38.75rem] mt-[5.625rem]" />
      

      <img src={require("../images/Telegram.png")} alt='Empty' className="absolute ml-[62.8125rem] mt-[1.8125rem]" />
      <img src={require("../images/Whatsapp.png")} alt='Empty' className="absolute ml-[65.8125rem] mt-[1.8125rem]" />
      <img src={require("../images/VK.png")} alt='Empty' className="absolute ml-[59.8125rem] mt-[2.135rem]" />
    </div>
  )
}