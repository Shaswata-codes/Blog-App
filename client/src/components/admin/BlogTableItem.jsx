import React from 'react'
import { assets } from '../../assets/assets';

const BlogTableItem = ({blog, fetchBlogs, index}) => {

    const{title, createdAt} = blog;
    const BlogDate = new Date (createdAt);

return (
    <tr className='border-b border-gray-100 hover:bg-gradient-to-r hover:from-indigo-50/30 hover:to-transparent transition-all duration-200 group'>
        <th className='px-4 py-5 text-gray-700 font-semibold text-sm'>{index}</th>
        <td className='px-4 py-5 text-gray-800 font-medium max-w-xs truncate'>{title}</td>
        <td className='px-4 py-5 text-gray-600 text-sm max-sm:hidden'>{BlogDate.toDateString()}</td>
        <td className='px-4 py-5 max-sm:hidden'>
            <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide ${blog.isPublished?'bg-green-100 text-green-700':'bg-orange-100 text-orange-700'}`}>
                <span className={`w-1.5 h-1.5 rounded-full mr-2 ${blog.isPublished?'bg-green-500':'bg-orange-500'}`}></span>
                {blog.isPublished?'Published':'Unpublished'}
            </span>
        </td>
        <td className='px-4 py-5'>
            <div className='flex items-center gap-3'>
                <button className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 shadow-sm hover:shadow-md ${blog.isPublished?'bg-orange-500 text-white hover:bg-orange-600':'bg-indigo-500 text-white hover:bg-indigo-600'} transform hover:scale-105 active:scale-95`}>
                    {blog.isPublished?'Unpublish':'Publish'}
                </button>
                <button className='p-2 rounded-lg bg-red-50 hover:bg-red-100 transition-all duration-200 group-hover:scale-110 active:scale-95'>
                    <img src={assets.cross_icon} className='w-5 h-5'/>
                </button>
            </div>
        </td>
    </tr>
    )
}

export default BlogTableItem