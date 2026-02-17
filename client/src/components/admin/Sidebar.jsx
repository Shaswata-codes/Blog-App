import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { motion, AnimatePresence } from 'framer-motion'

const Sidebar = () => {
    const location = useLocation()
    const [hoveredItem, setHoveredItem] = useState(null)

    const navItems = [
        { 
            path: '/admin', 
            icon: assets.home_icon, 
            label: 'Dashboard',
            end: true,
            gradient: 'from-emerald-500 to-green-500'
        },
        { 
            path: '/admin/add-blog', 
            icon: assets.add_icon, 
            label: 'Add Blog',
            gradient: 'from-green-500 to-teal-500'
        },
        { 
            path: '/admin/list-blog', 
            icon: assets.list_icon, 
            label: 'List Blogs',
            gradient: 'from-teal-500 to-emerald-500'
        },
        { 
            path: '/admin/comments', 
            icon: assets.comment_icon, 
            label: 'Comments',
            gradient: 'from-emerald-600 to-green-600'
        }
    ]

    const navLinkClass = ({isActive}, gradient) => `
        flex items-center gap-4 py-4 px-4 md:px-6 md:min-w-64 
        cursor-pointer transition-all duration-300 ease-out
        relative overflow-hidden group
        ${isActive 
            ? "bg-gradient-to-r from-emerald-50 to-green-50 border-r-4 border-emerald-500 text-emerald-700 font-bold shadow-lg shadow-emerald-100/50" 
            : "text-gray-600 hover:text-gray-900 hover:bg-gradient-to-r hover:from-emerald-50/30 hover:to-transparent"
        }
    `

    return (
        <div className='flex flex-col border-r-2 border-emerald-100/50 min-h-screen pt-8 bg-gradient-to-b from-white via-emerald-50/20 to-white shadow-xl relative overflow-hidden'>
            
            {/* Animated Background Elements */}
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                <div className='absolute top-20 -left-10 w-40 h-40 bg-emerald-300/10 rounded-full blur-3xl animate-float-slow'></div>
                <div className='absolute bottom-20 -right-10 w-40 h-40 bg-teal-300/10 rounded-full blur-3xl animate-float-slow animation-delay-2000'></div>
            </div>

            {/* Logo Section */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='px-4 md:px-6 mb-8 relative z-10'
            >
                <div className='flex items-center gap-3 p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl shadow-xl'>
                    <div className='w-10 h-10 bg-white rounded-xl flex items-center justify-center'>
                        <svg className='w-6 h-6 text-emerald-600' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <div className='hidden md:block'>
                        <h3 className='text-white font-black text-sm tracking-wide'>ADMIN PANEL</h3>
                        <p className='text-emerald-100 text-xs font-semibold'>Shas Blog</p>
                    </div>
                </div>
            </motion.div>

            {/* Navigation Items */}
            <nav className='flex-1 relative z-10'>
                {navItems.map((item, index) => {
                    const isActive = item.end 
                        ? location.pathname === item.path 
                        : location.pathname.startsWith(item.path)

                    return (
                        <motion.div
                            key={item.path}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredItem(item.path)}
                            onMouseLeave={() => setHoveredItem(null)}
                            className='relative'
                        >
                            <NavLink 
                                end={item.end} 
                                to={item.path} 
                                className={(props) => navLinkClass(props, item.gradient)}
                            >
                                {/* Active Indicator Bar */}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className='absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-green-500 to-teal-500 rounded-r-full'
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}

                                {/* Icon Container */}
                                <div className={`relative w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                                    isActive 
                                        ? `bg-gradient-to-br ${item.gradient} shadow-lg` 
                                        : 'bg-gray-100 group-hover:bg-emerald-100'
                                }`}>
                                    <img 
                                        src={item.icon}  
                                        className={`w-5 h-5 transition-all duration-300 ${
                                            isActive 
                                                ? 'brightness-0 invert scale-110' 
                                                : 'group-hover:scale-110'
                                        }`}
                                        alt={item.label}
                                    />
                                    
                                    {/* Pulse Effect on Active */}
                                    {isActive && (
                                        <span className='absolute inset-0 rounded-xl bg-white/30 animate-ping'></span>
                                    )}
                                </div>

                                {/* Label */}
                                <p className={`hidden md:inline-block text-sm font-bold transition-all duration-300 ${
                                    isActive ? 'text-emerald-700' : 'text-gray-700 group-hover:text-emerald-700'
                                }`}>
                                    {item.label}
                                </p>

                                {/* Hover Gradient Background */}
                                {hoveredItem === item.path && !isActive && (
                                    <motion.div
                                        layoutId="hoverBg"
                                        className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-5 -z-10`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 0.05 }}
                                        exit={{ opacity: 0 }}
                                    />
                                )}

                                {/* Shimmer Effect on Hover */}
                                <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000'></div>

                                {/* Arrow Indicator on Active */}
                                {isActive && (
                                    <motion.div
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className='absolute right-4 hidden md:block'
                                    >
                                        <svg className='w-4 h-4 text-emerald-600' fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </motion.div>
                                )}
                            </NavLink>

                            {/* Mobile Active Dot */}
                            {isActive && (
                                <div className='md:hidden absolute right-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-emerald-500 rounded-full animate-pulse'></div>
                            )}
                        </motion.div>
                    )
                })}
            </nav>

            {/* Footer Stats */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='px-4 md:px-6 py-6 border-t-2 border-emerald-100/50 relative z-10'
            >
                <div className='bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-4 border-2 border-emerald-100/50 shadow-lg'>
                    <div className='flex items-center gap-3 mb-3'>
                        <div className='w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg'>
                            <svg className='w-5 h-5 text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <div className='hidden md:block'>
                            <p className='text-xs font-bold text-emerald-700 uppercase tracking-wide'>Quick Stats</p>
                        </div>
                    </div>
                    
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 hidden md:grid'>
                        <div className='bg-white rounded-lg p-2 border border-emerald-100'>
                            <p className='text-xs text-gray-500 font-semibold'>Total Blogs</p>
                            <p className='text-lg font-black text-emerald-600'>24</p>
                        </div>
                        <div className='bg-white rounded-lg p-2 border border-emerald-100'>
                            <p className='text-xs text-gray-500 font-semibold'>Comments</p>
                            <p className='text-lg font-black text-teal-600'>156</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            <style jsx>{`
                @keyframes float-slow {
                    0%, 100% { 
                        transform: translateY(0);
                    }
                    50% { 
                        transform: translateY(-20px);
                    }
                }

                .animate-float-slow {
                    animation: float-slow 6s ease-in-out infinite;
                }

                .animation-delay-2000 {
                    animation-delay: 2s;
                }

                @keyframes ping {
                    75%, 100% {
                        transform: scale(2);
                        opacity: 0;
                    }
                }

                .animate-ping {
                    animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
                }
            `}</style>
        </div>
    )
}

export default Sidebar