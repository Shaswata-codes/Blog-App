import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Sidebar = () => {
    const navLinkClass = ({isActive}) => `
        flex items-center gap-3 py-3.5 px-3 md:px-6 md:min-w-64 
        cursor-pointer transition-all duration-200 ease-in-out
        hover:bg-gray-50 group relative
        ${isActive 
            ? "bg-primary/10 border-r-4 border-primary text-primary font-medium" 
            : "text-gray-600 hover:text-gray-900"
        }
    `

    return (
        <div className='flex flex-col border-r border-gray-200 min-h-screen pt-6 bg-white shadow-sm'>
            <NavLink 
                end={true} 
                to='/admin' 
                className={navLinkClass}
            >
                <img 
                    src={assets.home_icon}  
                    className='min-w-5 w-5 transition-transform duration-200 group-hover:scale-110'
                    alt="Dashboard"
                />
                <p className='hidden md:inline-block text-sm'>Dashboard</p>
            </NavLink>

            <NavLink 
                to='/admin/add-blog' 
                className={navLinkClass}
            >
                <img 
                    src={assets.add_icon}  
                    className='min-w-5 w-5 transition-transform duration-200 group-hover:scale-110'
                    alt="Add Blog"
                />
                <p className='hidden md:inline-block text-sm'>Add Blog</p>
            </NavLink>

            <NavLink 
                to='/admin/list-blog' 
                className={navLinkClass}
            >
                <img 
                    src={assets.list_icon}  
                    className='min-w-5 w-5 transition-transform duration-200 group-hover:scale-110'
                    alt="List Blog"
                />
                <p className='hidden md:inline-block text-sm'>List Blog</p>
            </NavLink>

            <NavLink 
                to='/admin/comments' 
                className={navLinkClass}
            >
                <img 
                    src={assets.comment_icon}  
                    className='min-w-5 w-5 transition-transform duration-200 group-hover:scale-110'
                    alt="Comments"
                />
                <p className='hidden md:inline-block text-sm'>Comments</p>
            </NavLink>
        </div>
    )
}

export default Sidebar