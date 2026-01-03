import React from 'react'
import { assets } from '../../assets/assets';

const CommentTableItem = ({comment, fetchComments}) => {

    const {blog, createdAt} = comment;
    const BlogDate = new Date(createdAt);

    return (
        <tr className='border-b border-gray-100 hover:bg-gradient-to-r hover:from-blue-50/30 hover:to-transparent transition-all duration-200 group'>
            <td className='px-6 py-6'>
                <div className='space-y-3'>
                    <div>
                        <span className='font-semibold text-gray-700 text-sm'>Blog:</span>
                        <span className='ml-2 text-gray-800 font-medium'>{blog.title}</span>
                    </div>
                    <div>
                        <span className='font-semibold text-gray-700 text-sm'>Name:</span>
                        <span className='ml-2 text-gray-600'>{comment.name}</span>
                    </div>
                    <div>
                        <span className='font-semibold text-gray-700 text-sm'>Comment:</span>
                        <p className='ml-2 mt-1 text-gray-600 leading-relaxed max-w-2xl'>{comment.content}</p>
                    </div>
                </div>
            </td>
            <td className='px-6 py-6 text-gray-600 font-medium max-sm:hidden'>
                {BlogDate.toLocaleDateString()}
            </td>
            <td className='px-6 py-6'>
                <div className='flex items-center gap-4'>
                    {!comment.isApproved ? 
                    <button className='p-2.5 bg-green-50 hover:bg-green-100 rounded-lg transition-all duration-200 group-hover:scale-110 active:scale-95 shadow-sm hover:shadow-md'>
                        <img src={assets.tick_icon} className='w-5'/>
                    </button> 
                    : 
                    <span className='inline-flex items-center text-xs font-semibold border-2 border-green-500 bg-green-50 text-green-700 rounded-full px-4 py-1.5 shadow-sm'>
                        <span className='w-1.5 h-1.5 bg-green-500 rounded-full mr-2'></span>
                        Approved
                    </span>}
                    <button className='p-2.5 bg-red-50 hover:bg-red-100 rounded-lg transition-all duration-200 group-hover:scale-110 active:scale-95 shadow-sm hover:shadow-md'>
                        <img src={assets.bin_icon} className='w-5'/>
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default CommentTableItem