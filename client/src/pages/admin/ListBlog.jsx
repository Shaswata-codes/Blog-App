import React, { useEffect, useState } from 'react'
import { blog_data } from '../../assets/assets';
import BlogTableItem from '../../components/admin/BlogTableItem';

const ListBlog = () => {

  const[blogs, setBlogs] = useState([]);

  const fetchBlogs = async() =>{
    setBlogs(blog_data);
  }

  useEffect(()=>{
    fetchBlogs();
  },[])

  return (
    <div className='flex-1 pt-8 sm:pt-12 px-6 sm:pl-16 sm:pr-10 bg-gradient-to-br from-blue-50 via-indigo-50/30 to-purple-50/20 min-h-screen'>
      <div className='mb-8'>
        <h1 className='text-3xl md:text-4xl font-bold text-gray-800 tracking-tight mb-2'>All Blogs</h1>
        <p className='text-gray-600 text-sm md:text-base'>Manage and organize your blog posts</p>
      </div>
      
      <div className='bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden'>
        <div className='relative overflow-x-auto scrollbar-hide'>
          <table className='w-full text-sm text-gray-500'>
            <thead className='text-xs text-gray-700 text-left uppercase bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200'>
              <tr>
                <th scope='col' className='px-4 py-5 font-bold text-gray-800'>#</th>
                <th scope='col' className='px-4 py-5 xl:px-6 font-bold text-gray-800'>Blog title</th>
                <th scope='col' className='px-4 py-5 font-bold text-gray-800 max-sm:hidden'>Date</th>
                <th scope='col' className='px-4 py-5 font-bold text-gray-800 max-sm:hidden'>Status</th>
                <th scope='col' className='px-4 py-5 font-bold text-gray-800'>Actions</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-100'>
              {blogs.length === 0 ? (
                <tr>
                  <td colSpan="5" className='px-4 py-16 text-center'>
                    <div className='flex flex-col items-center justify-center'>
                      <div className='w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-5 shadow-inner'>
                        <svg className='w-12 h-12 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
                        </svg>
                      </div>
                      <p className='text-gray-700 font-semibold text-lg mb-2'>No blogs yet</p>
                      <p className='text-gray-500 text-sm'>Your blog posts will appear here once created</p>
                    </div>
                  </td>
                </tr>
              ) : (
                blogs.map((blog, index)=>{
                  return <BlogTableItem key = {blog.id} blog={blog} fetchBlogs={fetchBlogs} index={index+1}/>
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ListBlog