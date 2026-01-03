import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className='flex justify-between items-center py-6 sm:py-7 mx-6 sm:mx-12 md:mx-20 xl:mx-32 border-b border-gray-200/60'>
      <img 
        onClick={()=>navigate('/')} 
        src={assets.logo} 
        alt="logo" 
        className='w-36 sm:w-48 cursor-pointer hover:scale-105 transition-transform duration-300 active:scale-95'
      />
      <button 
        onClick={()=>navigate('/admin')}
        className='flex items-center gap-3 rounded-full text-sm font-semibold cursor-pointer bg-gradient-to-r from-primary to-purple-600 text-white px-8 sm:px-10 py-3 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 group'
      >
        Login
        <img 
          src={assets.arrow} 
          className='w-3 group-hover:translate-x-1 transition-transform duration-200' 
          alt="arrow"
        />
      </button>
    </div>
  )
}
export default Navbar