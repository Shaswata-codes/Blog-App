import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { assets } from '../../assets/assets'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../../components/admin/Sidebar';

const Layout = () => {
    const navigate = useNavigate();
    const [mounted, setMounted] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const logout = () => {
        navigate('/')
    }

    return (
        <div className={`transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
            {/* Header/Navbar */}
            <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className='relative flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b-2 border-emerald-100/50 bg-white/80 backdrop-blur-xl overflow-hidden'
            >
                {/* Animated Background Gradient */}
                <div className='absolute inset-0 bg-gradient-to-r from-emerald-50/30 via-green-50/20 to-teal-50/30 opacity-0 hover:opacity-100 transition-opacity duration-500'></div>
                
                {/* Logo */}
                <motion.img 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    src={assets.logo} 
                    className='relative z-10 w-32 sm:w-40 cursor-pointer transition-all duration-300' 
                    onClick={() => navigate('/')} 
                    alt="Logo"
                />
                
                {/* Logout Button */}
                <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={logout}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className='relative z-10 text-sm px-8 py-2.5 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 text-white rounded-full cursor-pointer font-bold shadow-md hover:shadow-xl hover:shadow-emerald-500/50 transition-all duration-300 overflow-hidden group'
                >
                    <span className="relative z-10 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Logout
                    </span>
                    <div className='absolute inset-0 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                    <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000'></div>
                </motion.button>
            </motion.div>

            {/* Main Content Area */}
            <div className='flex h-[calc(100vh-70px)] relative overflow-hidden'>
                {/* Animated Background Elements */}
                <div className='absolute inset-0 overflow-hidden pointer-events-none z-0'>
                    <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-300/5 rounded-full blur-3xl animate-float-slow'></div>
                    <div className='absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-teal-300/5 rounded-full blur-3xl animate-float-slow animation-delay-2000'></div>
                </div>

                <Sidebar/>
                <div className='flex-1 overflow-y-auto'>
                    <Outlet/>
                </div>
            </div>

            <style>{`
                @keyframes float-slow {
                    0%, 100% { 
                        transform: translateY(0) translateX(0);
                    }
                    50% { 
                        transform: translateY(-20px) translateX(10px);
                    }
                }

                .animate-float-slow {
                    animation: float-slow 8s ease-in-out infinite;
                }

                .animation-delay-2000 {
                    animation-delay: 2s;
                }
            `}</style>
        </div>
    )
}

export default Layout