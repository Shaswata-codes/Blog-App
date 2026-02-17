import React, { useState } from 'react'
import {blog_data, blogCategories} from '../assets/assets'
import {motion, AnimatePresence} from "motion/react"
import BlogCard from './BlogCard';

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const [hoveredCategory, setHoveredCategory] = useState(null);

  // Filter blogs based on selected category
  const filteredBlogs = blog_data.filter((blog) => 
    menu === "All" ? true : blog.category === menu
  );

  return (
    <div className='relative bg-gradient-to-b from-emerald-50/50 via-white to-teal-50/30 py-16 sm:py-20 overflow-hidden'>
      
      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-20 left-10 w-96 h-96 bg-emerald-300/10 rounded-full blur-3xl animate-blob-float'></div>
        <div className='absolute bottom-20 right-10 w-80 h-80 bg-teal-300/10 rounded-full blur-3xl animate-blob-float animation-delay-2000'></div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-300/5 rounded-full blur-3xl animate-pulse-slow'></div>
      </div>

      {/* Section Header */}
      <div className='text-center mb-12 sm:mb-16 px-4 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='inline-flex items-center gap-2 mb-4 px-5 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full border-2 border-emerald-200/50'
        >
          <span className='w-2 h-2 bg-emerald-500 rounded-full animate-pulse'></span>
          <span className='text-sm font-bold text-emerald-700'>Explore Content</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='text-3xl sm:text-4xl md:text-5xl font-black text-gray-800 mb-3'
        >
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-500 to-teal-600'>
            Featured
          </span> Blogs
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='text-gray-600 text-sm sm:text-base max-w-2xl mx-auto'
        >
          Discover amazing content across {blogCategories.length} categories
        </motion.p>
      </div>

      {/* Category Filter Pills */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap justify-center gap-3 sm:gap-4 my-10 sm:my-12 px-4 relative z-10"
      >
        {blogCategories.map((item, index) => (
          <motion.div 
            key={item}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.4, 
              delay: 0.5 + index * 0.05,
              type: "spring",
              stiffness: 300,
              damping: 20
            }}
            className='relative'
            onMouseEnter={() => setHoveredCategory(item)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <button 
              onClick={() => setMenu(item)}
              className={`cursor-pointer font-bold text-sm sm:text-base transition-all duration-300 py-3 px-6 sm:px-8 rounded-full relative overflow-hidden group
              ${menu === item
                ? 'text-white scale-105 shadow-2xl shadow-emerald-500/40' 
                : 'text-gray-700 hover:text-gray-900 hover:bg-emerald-50/50 hover:scale-105 hover:shadow-lg'
              }`}
            >
              {/* Active Background with Framer Motion */}
              {menu === item && (
                <motion.div 
                  layoutId='activeCategory'
                  transition={{
                    type: 'spring', 
                    stiffness: 500, 
                    damping: 30
                  }}
                  className='absolute inset-0 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 rounded-full'
                >
                  {/* Animated Shimmer Effect */}
                  <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-slide'></div>
                </motion.div>
              )}

              {/* Hover Background */}
              {menu !== item && hoveredCategory === item && (
                <motion.div
                  layoutId='hoverCategory'
                  className='absolute inset-0 bg-gradient-to-r from-emerald-100 via-green-100 to-teal-100 rounded-full border-2 border-emerald-200'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}

              {/* Text */}
              <span className='relative z-10 flex items-center gap-2'>
                {item}
                {menu === item && (
                  <motion.span
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className='w-1.5 h-1.5 bg-white rounded-full'
                  />
                )}
              </span>

              {/* Particle Effect on Active */}
              {menu === item && (
                <>
                  <span className='absolute top-0 left-1/4 w-1 h-1 bg-white/80 rounded-full animate-particle-float-1'></span>
                  <span className='absolute top-0 right-1/4 w-1 h-1 bg-white/80 rounded-full animate-particle-float-2'></span>
                </>
              )}
            </button>

            {/* Glow Effect */}
            {menu === item && (
              <div className='absolute inset-0 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 rounded-full blur-xl opacity-40 animate-pulse-glow -z-10'></div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Results Counter with Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='text-center mb-8 px-4 relative z-10'
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={menu}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className='inline-flex items-center gap-2 px-5 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-emerald-200/50 shadow-lg'
          >
            <svg className='w-4 h-4 text-emerald-600' fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span className='text-sm font-semibold text-gray-700'>
              {filteredBlogs.length} {filteredBlogs.length === 1 ? 'Blog' : 'Blogs'} Found
            </span>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Blog Grid with Stagger Animation */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={menu}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mb-24 mx-4 sm:mx-8 md:mx-16 xl:mx-32 2xl:mx-40 relative z-10'
        >
          {filteredBlogs.map((blog, index) => (
            <motion.div
              key={blog._id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                type: "spring",
                stiffness: 200,
                damping: 20
              }}
              layout
            >
              <BlogCard blog={blog} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Empty State */}
      {filteredBlogs.length === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='text-center py-20 px-4 relative z-10'
        >
          <div className='max-w-md mx-auto bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-emerald-100'>
            <div className='w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full flex items-center justify-center'>
              <svg className='w-12 h-12 text-emerald-600' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className='text-2xl font-bold text-gray-800 mb-3'>No Blogs Found</h3>
            <p className='text-gray-600 mb-6'>We couldn't find any blogs in this category yet.</p>
            <button 
              onClick={() => setMenu("All")}
              className='px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300'
            >
              View All Blogs
            </button>
          </div>
        </motion.div>
      )}

      {/* Decorative Elements */}
      <div className='absolute bottom-10 left-10 w-20 h-20 border-4 border-emerald-200/30 rounded-full animate-pulse-rotate'></div>
      <div className='absolute top-40 right-16 w-16 h-16 border-4 border-teal-200/30 rounded-2xl animate-rotate-slow'></div>

      <style jsx>{`
        @keyframes blob-float {
          0%, 100% { 
            transform: translate(0, 0) scale(1);
          }
          33% { 
            transform: translate(30px, -30px) scale(1.1);
          }
          66% { 
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes shimmer-slide {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes particle-float-1 {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0;
          }
          25% {
            opacity: 1;
          }
          50% {
            transform: translate(-10px, -30px);
            opacity: 0.5;
          }
          75% {
            opacity: 0.2;
          }
        }

        @keyframes particle-float-2 {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0;
          }
          25% {
            opacity: 1;
          }
          50% {
            transform: translate(10px, -35px);
            opacity: 0.5;
          }
          75% {
            opacity: 0.2;
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }

        @keyframes pulse-rotate {
          0%, 100% { 
            transform: scale(1) rotate(0deg);
            opacity: 0.3;
          }
          50% { 
            transform: scale(1.1) rotate(180deg);
            opacity: 0.15;
          }
        }

        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse-slow {
          0%, 100% { 
            opacity: 0.05;
            transform: scale(1);
          }
          50% { 
            opacity: 0.1;
            transform: scale(1.05);
          }
        }

        .animate-blob-float {
          animation: blob-float 8s ease-in-out infinite;
        }

        .animate-shimmer-slide {
          animation: shimmer-slide 2s infinite;
        }

        .animate-particle-float-1 {
          animation: particle-float-1 2s ease-in-out infinite;
        }

        .animate-particle-float-2 {
          animation: particle-float-2 2.5s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-pulse-rotate {
          animation: pulse-rotate 6s ease-in-out infinite;
        }

        .animate-rotate-slow {
          animation: rotate-slow 20s linear infinite;
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

export default BlogList