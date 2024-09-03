import React from 'react'
import imageSrc from './images/images.png';
const Nav = () => {
  return (
    <nav className='flex flex-row justify-between p-4 text-[#585858] h-16'>
     
        <p className="text-xl">Gemini</p>
      
       
        <img src={imageSrc} alt="" className='size-[40px] rounded-[50%] '/>
        
        
        
    </nav>
  )
}

export default Nav