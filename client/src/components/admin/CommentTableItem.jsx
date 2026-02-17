import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { motion } from 'framer-motion'

const CommentTableItem = ({comment, fetchComments, index = 0}) => {
    const {blog, createdAt} = comment
    const BlogDate = new Date(createdAt)
    const [isHovered, setIsHovered] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <motion.tr 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className='border-b-2 border-emerald-100/50 hover:bg-gradient-to-r hover:from-emerald-50/40 hover:via-green-50/30 hover:to-transparent transition-all duration-300 group relative'
        >
            {/* Animated Border on Hover */}
            <td colSpan="3" className='absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-green-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-r-full'></td>

            {/* Main Content Column */}
            <td className='px-6 sm:px-8 py-6 sm:py-8'>
                <div className='space-y-4'>
                    
                    {/* Blog Title */}
                    <div className='flex items-start gap-3 group/blog'>
                        <div className='w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300'>
                            <svg className='w-5 h-5 text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <div className='flex-1 min-w-0'>
                            <span className='inline-block font-black text-xs text-emerald-700 mb-1 tracking-wide uppercase'>
                                Blog Post
                            </span>
                            <h4 className='text-gray-800 font-bold text-sm sm:text-base group-hover/blog:text-emerald-700 transition-colors duration-300 line-clamp-2'>
                                {blog.title}
                            </h4>
                        </div>
                    </div>

                    {/* Commenter Name */}
                    <div className='flex items-center gap-3 group/user'>
                        <div className='w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300'>
                            <svg className='w-5 h-5 text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <div className='flex-1'>
                            <span className='inline-block font-black text-xs text-green-700 mb-0.5 tracking-wide uppercase'>
                                Commenter
                            </span>
                            <p className='text-gray-800 font-bold text-sm sm:text-base'>
                                {comment.name}
                            </p>
                        </div>
                        {/* Date on Mobile */}
                        <div className='sm:hidden text-right'>
                            <span className='text-xs font-semibold text-gray-500'>
                                {BlogDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                            </span>
                        </div>
                    </div>

                    {/* Comment Content */}
                    <div className='flex items-start gap-3 group/comment'>
                        <div className='w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg transition-all duration-300'>
                            <svg className='w-5 h-5 text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                        </div>
                        <div className='flex-1 min-w-0'>
                            <span className='inline-block font-black text-xs text-teal-700 mb-1 tracking-wide uppercase'>
                                Comment
                            </span>
                            <div className='relative'>
                                <p className={`text-gray-700 leading-relaxed text-sm sm:text-base font-medium bg-gradient-to-r from-gray-50 to-emerald-50/30 p-4 rounded-xl border-2 border-emerald-100/50 shadow-sm ${
                                    !isExpanded && comment.content.length > 150 ? 'line-clamp-3' : ''
                                }`}>
                                    {comment.content}
                                </p>
                                
                                {/* Expand Button for Long Comments */}
                                {comment.content.length > 150 && (
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setIsExpanded(!isExpanded)}
                                        className='mt-2 text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1 transition-colors duration-300'
                                    >
                                        {isExpanded ? 'Show Less' : 'Read More'}
                                        <svg 
                                            className={`w-3 h-3 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </motion.button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </td>

            {/* Date Column - Desktop Only */}
            <td className='px-6 py-8 max-sm:hidden align-top'>
                <div className='flex flex-col items-center gap-2'>
                    <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 border-2 border-emerald-200/50 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300'>
                        <svg className='w-6 h-6 text-emerald-600' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div className='text-center'>
                        <p className='text-sm font-black text-gray-800'>
                            {BlogDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </p>
                        <p className='text-xs font-semibold text-gray-500'>
                            {BlogDate.toLocaleDateString('en-US', { year: 'numeric' })}
                        </p>
                    </div>
                </div>
            </td>

            {/* Actions Column */}
            <td className='px-6 py-8 align-top'>
                <div className='flex flex-col sm:flex-row items-end sm:items-start gap-3'>
                    
                    {/* Approve/Approved Button */}
                    {!comment.isApproved ? (
                        <motion.button 
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            className='relative p-3 bg-gradient-to-br from-emerald-50 to-green-50 hover:from-emerald-100 hover:to-green-100 rounded-xl border-2 border-emerald-200/50 hover:border-emerald-300 transition-all duration-300 shadow-lg hover:shadow-xl group/approve overflow-hidden'
                        >
                            <svg className='w-6 h-6 text-emerald-600 relative z-10' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            {/* Tooltip */}
                            <span className='absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-900 text-white text-xs font-bold rounded-lg opacity-0 group-hover/approve:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none'>
                                Approve Comment
                            </span>

                            {/* Hover Background */}
                            <div className='absolute inset-0 bg-gradient-to-br from-emerald-500 to-green-500 opacity-0 group-hover/approve:opacity-10 transition-opacity duration-300'></div>

                            {/* Ripple Effect */}
                            <div className='absolute inset-0 rounded-xl bg-emerald-400 opacity-0 group-hover/approve:opacity-20 blur-xl transition-opacity duration-300'></div>
                        </motion.button>
                    ) : (
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            whileHover={{ scale: 1.05 }}
                            className='inline-flex items-center text-xs font-black border-2 border-emerald-400/50 bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 rounded-full px-5 py-2.5 shadow-lg relative overflow-hidden'
                        >
                            <span className='relative flex items-center justify-center mr-2'>
                                <span className='absolute w-3 h-3 bg-emerald-500 rounded-full animate-ping'></span>
                                <span className='relative w-2 h-2 bg-emerald-600 rounded-full'></span>
                            </span>
                            <span className='relative z-10'>Approved</span>
                            
                            {/* Shine Effect */}
                            <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000'></div>
                        </motion.div>
                    )}

                    {/* Delete Button */}
                    <motion.button 
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className='relative p-3 bg-gradient-to-br from-red-50 to-pink-50 hover:from-red-100 hover:to-pink-100 rounded-xl border-2 border-red-200/50 hover:border-red-300 transition-all duration-300 shadow-lg hover:shadow-xl group/delete overflow-hidden'
                    >
                        <svg className='w-6 h-6 text-red-600 relative z-10' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>

                        {/* Tooltip */}
                        <span className='absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-900 text-white text-xs font-bold rounded-lg opacity-0 group-hover/delete:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none'>
                            Delete Comment
                        </span>

                        {/* Hover Background */}
                        <div className='absolute inset-0 bg-gradient-to-br from-red-500 to-pink-500 opacity-0 group-hover/delete:opacity-10 transition-opacity duration-300'></div>

                        {/* Ripple Effect */}
                        <div className='absolute inset-0 rounded-xl bg-red-400 opacity-0 group-hover/delete:opacity-20 blur-xl transition-opacity duration-300'></div>
                    </motion.button>
                </div>
            </td>

            {/* Floating Action Indicator */}
            {isHovered && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-1 h-16 bg-gradient-to-b from-emerald-500 via-green-500 to-teal-500 rounded-full shadow-lg'
                />
            )}

            <style>{`
                @keyframes ping {
                    75%, 100% {
                        transform: scale(2);
                        opacity: 0;
                    }
                }

                .animate-ping {
                    animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
                }

                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </motion.tr>
    )
}

export default CommentTableItem