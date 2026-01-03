import React, { useState } from 'react'
import {blog_data, blogCategories} from '../assets/assets'
import {motion} from "motion/react"
import BlogCard from './BlogCard';


const BlogList = () => {

  const [menu, setMenu] = useState("All");

  return (
    <div className='bg-gradient-to-b from-gray-50 via-white to-gray-50 py-12'>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 my-10 px-4 relative">
          {blogCategories.map((item)=>(
            <div key={item} className='relative'>
              <button onClick={()=> setMenu(item)}
              className={`cursor-pointer font-medium text-sm sm:text-base transition-all duration-300 py-2.5 px-6 rounded-full ${menu === item
              ? 'text-white z-10 relative scale-105 shadow-lg' 
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 hover:scale-105'}`}>
                {item}
                {menu === item && (
                  <motion.div layoutId='underline'
                  transition={{type : 'spring', stiffness: 500, damping: 30}}
                  className='absolute left-0 right-0 top-0 bottom-0 -z-10
                  bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full shadow-xl'></motion.div>
                )}
              </button>
            </div>
          ))}
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8
        mb-24 mx-4 sm:mx-8 md:mx-16 xl:mx-32 2xl:mx-40'>
          {blog_data.filter((blog)=>menu === "All"?
            true :  blog.category === menu
          ).map((blog)=><BlogCard key={blog._id} blog={blog}/>)}
        </div>
    </div>
  )
}
export default BlogList