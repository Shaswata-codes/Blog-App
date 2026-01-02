import React from 'react'

const BlogTableItem = ({blog, fetchBlogs, index}) => {

    const{title, createdAt} = blog;
    const BlogDate = new Date (createdAt);

return (
    <tr className='border-y border-gray-300'>
        <th className='px-2 py-4'>{index}</th>
        <td className='px-2 py-4'>{title}</td>
        <td className='px-2 py-4 mx-sm:hidden'>{BlogDate.toDateString()}</td>
        <td className='px-2 py-4 mx-sm:hidden'>{BlogDate.toDateString()}</td>
    </tr>
    )
}

export default BlogTableItem
