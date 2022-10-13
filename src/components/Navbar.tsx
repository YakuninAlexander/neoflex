import React, { useContext } from 'react';
import cart from '../images/Cart.svg'
import favourite from '../images/Favourite.svg'
import {Link} from 'react-router-dom'
import { CartContext } from '../Contexts/CartContext';

interface NavbarProps {
  quantity: number
}

function Navbar({quantity}: NavbarProps) {
  
  return(
    <div> 
      <p className='mt-[0.9375rem] ml-[10.3125rem] font-bold font-sans text-[1.5625rem] leading-[1.875rem]'>QPICK</p>
      
      <div className='absolute -mt-6 ml-[73.655625rem]'>
        <div className='absolute ml-[15.51px] -mt-2'>
            <div className='bg-[#FFA542] text-white rounded-full w-[1.0875rem] h-[1.0875rem] px-1 pb-1 pt-0'>0</div>
            {/* мне очень лень делать этот кружок красивым! */}
        </div>
        <img src={favourite} alt='Empty'/>
      </div>

      <div className='absolute -mt-6 ml-[77.843125rem]'>
        <div className='absolute ml-[15.51px] -mt-2'>
          <div className='bg-[#FFA542] text-white rounded-full w-[1.0875rem] h-[1.0875rem] px-1 pb-1 pt-0'>{quantity}</div>
        </div>
        <Link to='/Cart'><img src={cart} alt='Empty' /></Link>
      </div>
    </div>
  )
}

export default Navbar;