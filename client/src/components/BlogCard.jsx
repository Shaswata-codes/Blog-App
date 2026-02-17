import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const BlogCard = ({ blog }) => {
  const { title, description, category, image, _id } = blog
  const navigate = useNavigate()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      onClick={() => navigate(`/blog/${_id}`)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      className="group w-full rounded-2xl overflow-hidden bg-white border-2 border-emerald-100/50 hover:border-emerald-300/50 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/20 duration-500 cursor-pointer relative"
    >
      {/* Animated Gradient Border */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>

      {/* Image Container with Overlay */}
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-emerald-100 to-teal-100">
        <motion.img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
        />
        
        {/* Dark Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Animated Corner Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>
        
        {/* Read More Button Overlay */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="px-6 py-3 bg-white/95 backdrop-blur-sm rounded-full font-bold text-emerald-700 shadow-xl flex items-center gap-2 group-hover:scale-110 transition-transform duration-300">
            Read Article
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </motion.div>

        {/* Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>

      {/* Content Container */}
      <div className="p-6 relative">
        
        {/* Category Badge with Enhanced Styling */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute -top-4 left-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-white text-xs font-bold shadow-lg shadow-emerald-500/30 group-hover:shadow-xl group-hover:shadow-emerald-500/50 group-hover:scale-110 transition-all duration-300 relative overflow-hidden">
            {/* Badge Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Dot Indicator */}
            <span className="w-1.5 h-1.5 bg-white rounded-full relative z-10 animate-pulse"></span>
            
            {/* Category Text */}
            <span className="relative z-10">{category}</span>

            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </span>
        </motion.div>

        {/* Title */}
        <motion.h5 
          className="mt-6 mb-3 font-bold text-lg text-gray-900 line-clamp-2 group-hover:text-emerald-700 transition-colors duration-300 leading-tight"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {title}
        </motion.h5>

        {/* Description */}
        <motion.p 
          className="mb-4 text-sm text-gray-600 line-clamp-3 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: description.slice(0, 120) + '...' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        />

        {/* Read More Link with Icon */}
        <div className="flex items-center justify-between pt-3 border-t border-emerald-100/50 group-hover:border-emerald-200 transition-colors duration-300">
          <span className="text-sm font-bold text-emerald-600 group-hover:text-emerald-700 flex items-center gap-2 transition-colors duration-300">
            Continue Reading
            <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>

          {/* Reading Time Badge */}
          <span className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            5 min read
          </span>
        </div>

        {/* Hover Indicator Line */}
        <motion.div 
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: isHovered ? '100%' : 0 }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-emerald-300/30 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-teal-300/30 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Floating Particles on Hover */}
      {isHovered && (
        <>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 1, 0], y: -30 }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full"
          />
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 1, 0], y: -40 }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-teal-400 rounded-full"
          />
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 1, 0], y: -35 }}
            transition={{ duration: 1.8, repeat: Infinity, delay: 0.6 }}
            className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-green-400 rounded-full"
          />
        </>
      )}

      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </motion.div>
  )
}

export default BlogCard