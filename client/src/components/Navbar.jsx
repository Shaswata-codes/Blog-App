import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-emerald-100/50' 
        : 'bg-transparent'
    }`}>
      <div className='flex justify-between items-center py-5 sm:py-6 mx-6 sm:mx-12 md:mx-20 xl:mx-32 relative'>
        
        {/* Animated Border */}
        <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent transition-opacity duration-500 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}></div>

        {/* Logo Section with Animation */}
        <div 
          onClick={() => navigate('/')} 
          className='flex items-center gap-3 cursor-pointer group relative'
        >
          <div className='relative'>
            {/* Glow Effect */}
            <div className='absolute -inset-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500'></div>
            
            <img 
              src={assets.logo} 
              alt="logo" 
              className='w-36 sm:w-48 relative z-10 transform group-hover:scale-110 transition-all duration-500 group-active:scale-95'
            />
          </div>
          
          {/* Animated Tagline */}
          <div className='hidden lg:flex flex-col ml-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-2'>
            <span className='text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600'>
              AI-Powered
            </span>
            <span className='text-[10px] text-gray-500 font-medium'>Blogging Platform</span>
          </div>
        </div>

        {/* Navigation Links - Hidden on mobile, visible on tablet+ */}
        <nav className='hidden md:flex items-center gap-8 lg:gap-12 absolute left-1/2 -translate-x-1/2'>
          <NavLink onClick={() => navigate('/')} label="Home" />
          <NavLink onClick={() => navigate('/blogs')} label="Blogs" />
          <NavLink onClick={() => navigate('/about')} label="About" />
          <NavLink onClick={() => navigate('/contact')} label="Contact" />
        </nav>

        {/* Right Section - Auth Buttons */}
        <div className='flex items-center gap-3 sm:gap-4'>
          {/* Get Started Button - Hidden on small screens */}
          <button
            onClick={() => navigate('/get-started')}
            className='hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-emerald-700 bg-emerald-50 border-2 border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-200/50 active:scale-95 transition-all duration-300 group'
          >
            Get Started
            <svg className='w-4 h-4 group-hover:rotate-45 transition-transform duration-300' fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>

          {/* Login Button with Advanced Animations */}
          <button 
            onClick={() => navigate('/admin')}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className='relative flex items-center gap-3 rounded-full text-sm font-bold cursor-pointer bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 text-white px-6 sm:px-10 py-3 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-all duration-300 group overflow-hidden'
          >
            {/* Animated Shine Effect */}
            <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700'></div>
            
            {/* Ripple Effect */}
            <div className={`absolute inset-0 rounded-full bg-white/20 scale-0 ${isHovered ? 'animate-ripple' : ''}`}></div>
            
            <span className='relative z-10 flex items-center gap-2'>
              <svg className='w-4 h-4' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Login
            </span>
            
            <img 
              src={assets.arrow} 
              className='w-3 relative z-10 group-hover:translate-x-2 transition-transform duration-300' 
              alt="arrow"
            />

            {/* Hover Gradient Overlay */}
            <div className='absolute inset-0 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full'></div>
          </button>

          {/* Mobile Menu Button */}
          <button className='md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-emerald-50 border-2 border-emerald-200 hover:bg-emerald-100 active:scale-95 transition-all duration-300'>
            <svg className='w-5 h-5 text-emerald-600' fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Decorative Elements */}
        <div className='absolute -top-20 -left-20 w-40 h-40 bg-emerald-300/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none'></div>
        <div className='absolute -top-20 -right-20 w-40 h-40 bg-teal-300/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000 pointer-events-none'></div>
      </div>

      <style>{`
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }

        .animate-ripple {
          animation: ripple 0.6s ease-out;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  )
}

// Reusable NavLink Component
const NavLink = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className='relative text-gray-700 font-semibold text-sm hover:text-emerald-600 transition-colors duration-300 group cursor-pointer'
    >
      {label}
      
      {/* Animated Underline */}
      <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-300 rounded-full'></span>
      
      {/* Dot Indicator */}
      <span className='absolute -top-1 -right-1 w-1.5 h-1.5 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-300'></span>
    </button>
  )
}

export default Navbar