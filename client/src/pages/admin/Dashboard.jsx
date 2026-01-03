import React, { useEffect } from 'react'
import { assets, dashboard_data } from '../../assets/assets'
import BlogTableItem from '../../components/admin/BlogTableItem'

const Dashboard = () => {

  const [dashboardData, setDashboardData] = React.useState({
    blogs : 0,
    comments : 0,
    drafts : 0,
    recentBlogs : []
  })

  const fetchDashboardData = async () => {
    setDashboardData(dashboardData);
  }

  useEffect(()=>{
    fetchDashboardData();
  },[])

  return (
    <div className='flex-1 p-4 md:p-10 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>

        <div className='group relative flex items-center gap-5 bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100'>
          <div className='absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
          <div className='relative z-10 p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300'>
            <img src={assets.dashboard_icon_1} className='w-8 h-8'/>
          </div>
          <div className='relative z-10'>
            <p className='text-3xl font-bold text-gray-800 mb-1'>{dashboardData.blogs}</p>
            <p className='text-gray-500 font-medium text-sm tracking-wide'>Blogs</p>
          </div>
          <div className='absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500'></div>
        </div>

        <div className='group relative flex items-center gap-5 bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100'>
          <div className='absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
          <div className='relative z-10 p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300'>
            <img src={assets.dashboard_icon_2} className='w-8 h-8'/>
          </div>
          <div className='relative z-10'>
            <p className='text-3xl font-bold text-gray-800 mb-1'>{dashboardData.comments}</p>
            <p className='text-gray-500 font-medium text-sm tracking-wide'>Comments</p>
          </div>
          <div className='absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500'></div>
        </div>

        <div className='group relative flex items-center gap-5 bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100'>
          <div className='absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
          <div className='relative z-10 p-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300'>
            <img src={assets.dashboard_icon_3} className='w-8 h-8'/>
          </div>
          <div className='relative z-10'>
            <p className='text-3xl font-bold text-gray-800 mb-1'>{dashboardData.drafts}</p>
            <p className='text-gray-500 font-medium text-sm tracking-wide'>Drafts</p>
          </div>
          <div className='absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500'></div>
        </div>

      </div>
      <div className='max-w-4xl'> 
  {/* Latest Blog Header */}
  <div className='flex items-center gap-4 px-6 py-5 bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-t-2xl'>
    <div className='p-3 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg shadow-md'>
      <img src={assets.dashboard_icon_4} className='w-6 h-6' alt="" />
    </div>
    <p className='text-xl font-bold text-gray-800 tracking-tight'>Latest Blogs</p>
  </div>

  {/* Table Container */}
  <div className='relative overflow-x-auto shadow-lg rounded-b-2xl scrollbar-hide bg-white border border-gray-200 border-t-0'>
    <table className='w-full text-sm text-gray-500'>
      <thead className='text-xs text-gray-700 text-left uppercase bg-gray-50 border-b-2 border-gray-200'>
        <tr>
          <th scope='col' className='px-4 py-4 font-semibold'>#</th>
          <th scope='col' className='px-4 py-4 xl:px-6 font-semibold'>Blog title</th>
          <th scope='col' className='px-4 py-4 font-semibold max-sm:hidden'>Date</th>
          <th scope='col' className='px-4 py-4 font-semibold max-sm:hidden'>Status</th>
          <th scope='col' className='px-4 py-4 font-semibold'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {dashboard_data.recentBlogs.map((blog, index)=>{
          return <BlogTableItem key = {blog.id} blog={blog} fetchBlogs={fetchDashboardData} index={index+1}/>
        })}
      </tbody>
    </table>
  </div>
</div>
    </div>
  )
}

export default Dashboard