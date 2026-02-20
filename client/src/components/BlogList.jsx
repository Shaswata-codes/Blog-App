import React, { useState } from 'react'
import { blogCategories } from '../assets/assets'
import { motion, AnimatePresence } from "motion/react"
import BlogCard from './BlogCard'
import { useAppContext } from '../context/AppContext'

const BlogList = () => {
  const [menu, setMenu] = useState("All")
  const [hoveredCategory, setHoveredCategory] = useState(null)

  const { blogs, input } = useAppContext()

  // ✅ Filter real blogs from backend/context
  const filteredBlogs = blogs?.filter((blog) =>
    (menu === "All" || blog.category === menu) &&
    blog.title.toLowerCase().includes(input.toLowerCase())
  )

  return (
    <div className='relative bg-gradient-to-b from-emerald-50/50 via-white to-teal-50/30 py-16 sm:py-20 overflow-hidden'>

      {/* Header */}
      <div className='text-center mb-12 sm:mb-16 px-4 relative z-10'>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-3xl sm:text-4xl md:text-5xl font-black text-gray-800 mb-3'
        >
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-500 to-teal-600'>
            Featured
          </span> Blogs
        </motion.h2>

        <p className='text-gray-600 text-sm sm:text-base max-w-2xl mx-auto'>
          Discover amazing content
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 my-10 sm:my-12 px-4 relative z-10">
        {blogCategories.map((item) => (
          <div
            key={item}
            className='relative'
            onMouseEnter={() => setHoveredCategory(item)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <button 
              onClick={() => setMenu(item)}
              className={`cursor-pointer font-bold text-sm sm:text-base transition-all duration-300 py-3 px-6 sm:px-8 rounded-full
              ${menu === item
                ? 'text-white bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg scale-105'
                : 'text-gray-700 hover:bg-emerald-50 hover:scale-105'
              }`}
            >
              {item}
            </button>
          </div>
        ))}
      </div>

      {/* Results Counter */}
      <div className='text-center mb-8 px-4 relative z-10'>
        <span className='inline-flex items-center gap-2 px-5 py-2 bg-white rounded-full border border-emerald-200 shadow'>
          {filteredBlogs?.length || 0}{" "}
          {filteredBlogs?.length === 1 ? "Blog" : "Blogs"} Found
        </span>
      </div>

      {/* Blog Grid */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={menu}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mb-24 mx-4 sm:mx-8 md:mx-16 xl:mx-32 2xl:mx-40 relative z-10'
        >
          {filteredBlogs?.map((blog, index) => (
            <motion.div
              key={blog._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <BlogCard blog={blog} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Empty State */}
      {filteredBlogs?.length === 0 && (
        <div className='text-center py-20 px-4'>
          <h3 className='text-2xl font-bold text-gray-800 mb-3'>
            No Blogs Found
          </h3>
          <p className='text-gray-600 mb-6'>
            We couldn't find any blogs in this category.
          </p>
          <button 
            onClick={() => setMenu("All")}
            className='px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-full hover:scale-105 transition-all duration-300'
          >
            View All Blogs
          </button>
        </div>
      )}

    </div>
  )
}

export default BlogList