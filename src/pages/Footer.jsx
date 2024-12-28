import React from 'react'
import logo2 from "../assets/image/logo2.jpg";

const Footer = () => {
  return (
    <div className='bg-zinc-400 p-4'>
      <div className=' flex justify-center mb-4'>
      <img src={logo2} alt="Company Logo" className="w-20 h-auto" />
      </div>
       
      <h4 className='text-black text-center font-serif'>
        Get update on every latest movie on our website</h4>
    </div>
  )
}

export default Footer
