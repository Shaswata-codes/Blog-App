import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { motion } from 'framer-motion'

const BlogTableItem = ({blog, fetchBlogs, index}) => {
    const {title, createdAt} = blog
    const BlogDate = new Date(createdAt)
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.tr 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className='border-b border-emerald-100/50 hover:bg-gradient-to-r hover:from-emerald-50/40 hover:via-green-50/30 hover:to-transparent transition-all duration-300 group relative'
        >
            {/* Animated Border on Hover */}
            <td colSpan="5" className='absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-green-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></td>

            {/* Index Column */}
            <th className='px-5 py-6 text-left relative'>
                <div className='flex items-center gap-3'>
                    <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className='w-8 h-8 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center font-black text-emerald-700 text-sm shadow-md group-hover:shadow-lg group-hover:from-emerald-200 group-hover:to-teal-200 transition-all duration-300'
                    >
                        {index}
                    </motion.div>
                </div>
            </th>

            {/* Title Column */}
            <td className='px-5 py-6 relative'>
                <div className='flex items-center gap-3 max-w-md'>
                    {/* Title Icon */}
                    <div className='w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300'>
                        <svg className='w-5 h-5 text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    
                    <div className='flex-1 min-w-0'>
                        <h3 className='text-gray-800 font-bold text-sm sm:text-base truncate group-hover:text-emerald-700 transition-colors duration-300'>
                            {title}
                        </h3>
                        <p className='text-xs text-gray-500 font-medium mt-0.5 sm:hidden'>
                            {BlogDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </p>
                    </div>
                </div>
            </td>

            {/* Date Column */}
            <td className='px-5 py-6 max-sm:hidden'>
                <div className='flex items-center gap-2 text-gray-600'>
                    <svg className='w-4 h-4 text-emerald-500' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className='text-sm font-semibold'>
                        {BlogDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                </div>
            </td>

            {/* Status Column */}
            <td className='px-5 py-6 max-sm:hidden'>
                <motion.span 
                    whileHover={{ scale: 1.05 }}
                    className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-black tracking-wide shadow-md hover:shadow-lg transition-all duration-300 ${
                        blog.isPublished
                            ? 'bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 border-2 border-emerald-200/50'
                            : 'bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 border-2 border-orange-200/50'
                    }`}
                >
                    <span className={`relative flex items-center justify-center mr-2`}>
                        <span className={`absolute w-3 h-3 rounded-full ${blog.isPublished ? 'bg-emerald-500 animate-ping' : 'bg-orange-500 animate-ping'}`}></span>
                        <span className={`relative w-2 h-2 rounded-full ${blog.isPublished ? 'bg-emerald-600' : 'bg-orange-600'}`}></span>
                    </span>
                    {blog.isPublished ? 'Published' : 'Unpublished'}
                </motion.span>
            </td>

            {/* Actions Column */}
            <td className='px-5 py-6'>
                <div className='flex items-center gap-2 sm:gap-3 justify-end'>
                    {/* Publish/Unpublish Button */}
                    <motion.button 
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`relative px-4 sm:px-5 py-2.5 rounded-xl text-xs font-black transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden group/btn ${
                            blog.isPublished
                                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:from-orange-600 hover:to-amber-600'
                                : 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600'
                        }`}
                    >
                        <span className='relative z-10 flex items-center gap-2'>
                            <svg className='w-4 h-4' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {blog.isPublished ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                )}
                            </svg>
                            <span className='hidden sm:inline'>
                                {blog.isPublished ? 'Unpublish' : 'Publish'}
                            </span>
                        </span>

                        {/* Shimmer Effect */}
                        <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700'></div>

                        {/* Glow Effect */}
                        <div className={`absolute inset-0 opacity-0 group-hover/btn:opacity-20 blur-xl transition-opacity duration-300 ${
                            blog.isPublished ? 'bg-orange-400' : 'bg-emerald-400'
                        }`}></div>
                    </motion.button>

                    {/* Delete Button */}
                    <motion.button 
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                        className='relative p-2.5 sm:p-3 rounded-xl bg-gradient-to-br from-red-50 to-pink-50 hover:from-red-100 hover:to-pink-100 border-2 border-red-200/50 hover:border-red-300 transition-all duration-300 shadow-md hover:shadow-lg group/delete overflow-hidden'
                    >
                        <svg className='w-5 h-5 text-red-600 relative z-10' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>

                        {/* Hover Background */}
                        <div className='absolute inset-0 bg-gradient-to-br from-red-500 to-pink-500 opacity-0 group-hover/delete:opacity-10 transition-opacity duration-300'></div>
                    </motion.button>
                </div>

                {/* Mobile Status Badge */}
                <div className='sm:hidden mt-2 flex justify-end'>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
                        blog.isPublished
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-orange-100 text-orange-700'
                    }`}>
                        <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${blog.isPublished ? 'bg-emerald-500' : 'bg-orange-500'}`}></span>
                        {blog.isPublished ? 'Live' : 'Draft'}
                    </span>
                </div>
            </td>

            {/* Floating Action Indicator */}
            {isHovered && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-1 h-12 bg-gradient-to-b from-emerald-500 via-green-500 to-teal-500 rounded-full shadow-lg'
                />
            )}

            <style jsx>{`
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
        </motion.tr>
    )
}

export default BlogTableItem