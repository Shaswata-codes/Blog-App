import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { assets } from '../../assets/assets'
import BlogTableItem from '../../components/admin/BlogTableItem'

const Dashboard = () => {
  const [dashboardData, setDashboardData] = React.useState({
    blogs : 0,
    comments : 0,
    drafts : 0,
    recentBlogs : []
  })
  const [mounted, setMounted] = React.useState(false)

  // Dummy data for demonstration
  const dummyData = {
    blogs: 47,
    comments: 328,
    drafts: 12,
    recentBlogs: [
      {
        id: 1,
        title: "Getting Started with React Hooks: A Complete Guide",
        date: "2024-02-10",
        status: "Published",
        author: "Sarah Johnson",
        category: "Technology"
      },
      {
        id: 2,
        title: "10 Essential Tips for Successful Startup Growth",
        date: "2024-02-09",
        status: "Published",
        author: "Michael Chen",
        category: "Startup"
      },
      {
        id: 3,
        title: "The Future of Artificial Intelligence in Healthcare",
        date: "2024-02-08",
        status: "Draft",
        author: "Dr. Emily Rodriguez",
        category: "Technology"
      },
      {
        id: 4,
        title: "Mastering Modern CSS: Grid and Flexbox",
        date: "2024-02-07",
        status: "Published",
        author: "Alex Thompson",
        category: "Lifestyle"
      },
      {
        id: 5,
        title: "Building Scalable Microservices Architecture",
        date: "2024-02-06",
        status: "Published",
        author: "David Kumar",
        category: "Technology"
      },
      {
        id: 6,
        title: "Effective Time Management for Remote Workers",
        date: "2024-02-05",
        status: "Draft",
        author: "Jessica Martinez",
        category: "Lifestyle"
      },
      {
        id: 7,
        title: "The Rise of Web3 and Decentralized Applications",
        date: "2024-02-04",
        status: "Published",
        author: "Ryan Peterson",
        category: "Startup"
      },
      {
        id: 8,
        title: "Sustainable Living: Small Changes, Big Impact",
        date: "2024-02-03",
        status: "Published",
        author: "Emma Williams",
        category: "Lifestyle"
      }
    ]
  }

  const fetchDashboardData = async () => {
    // Simulate API call with setTimeout
    setTimeout(() => {
      setDashboardData(dummyData);
    }, 500);
  }

  useEffect(()=>{
    setMounted(true)
    fetchDashboardData();
  },[])

  return (
    <div className={`flex-1 p-4 md:p-10 bg-gradient-to-br from-emerald-50 via-green-50/40 to-teal-50/50 min-h-screen transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'} relative overflow-hidden`}>
      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-20 left-20 w-80 h-80 bg-emerald-300/10 rounded-full blur-3xl animate-float-slow'></div>
        <div className='absolute bottom-20 right-20 w-96 h-96 bg-teal-300/10 rounded-full blur-3xl animate-float-slow animation-delay-2000'></div>
      </div>

      <div className='relative z-10'>
        {/* Stats Cards Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
          {/* Blogs Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='group relative flex items-center gap-5 bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border-2 border-emerald-100/50'
          >
            <div className='absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            <div className='relative z-10 p-4 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300'>
              <img src={assets.dashboard_icon_1} className='w-8 h-8'/>
            </div>
            <div className='relative z-10'>
              <p className='text-3xl font-bold text-gray-800 mb-1'>{dashboardData.blogs}</p>
              <p className='text-gray-500 font-medium text-sm tracking-wide'>Blogs</p>
            </div>
            <div className='absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500'></div>
          </motion.div>

          {/* Comments Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='group relative flex items-center gap-5 bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border-2 border-green-100/50'
          >
            <div className='absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            <div className='relative z-10 p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300'>
              <img src={assets.dashboard_icon_2} className='w-8 h-8'/>
            </div>
            <div className='relative z-10'>
              <p className='text-3xl font-bold text-gray-800 mb-1'>{dashboardData.comments}</p>
              <p className='text-gray-500 font-medium text-sm tracking-wide'>Comments</p>
            </div>
            <div className='absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500'></div>
          </motion.div>

          {/* Drafts Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='group relative flex items-center gap-5 bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border-2 border-teal-100/50'
          >
            <div className='absolute inset-0 bg-gradient-to-r from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            <div className='relative z-10 p-4 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300'>
              <img src={assets.dashboard_icon_3} className='w-8 h-8'/>
            </div>
            <div className='relative z-10'>
              <p className='text-3xl font-bold text-gray-800 mb-1'>{dashboardData.drafts}</p>
              <p className='text-gray-500 font-medium text-sm tracking-wide'>Drafts</p>
            </div>
            <div className='absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500'></div>
          </motion.div>
        </div>

        {/* Latest Blogs Table */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='max-w-4xl'
        > 
          {/* Latest Blog Header */}
          <div className='flex items-center gap-4 px-6 py-5 bg-white/80 backdrop-blur-xl border-2 border-emerald-100/50 rounded-t-2xl shadow-md relative overflow-hidden group'>
            <div className='absolute inset-0 bg-gradient-to-r from-emerald-50 via-green-50/30 to-teal-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            <div className='relative z-10 p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300'>
              <img src={assets.dashboard_icon_4} className='w-6 h-6' alt="" />
            </div>
            <p className='relative z-10 text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-500 to-teal-600 tracking-tight'>Latest Blogs</p>
          </div>

          {/* Table Container */}
          <div className='relative overflow-x-auto shadow-lg rounded-b-2xl scrollbar-hide bg-white/80 backdrop-blur-xl border-2 border-emerald-100/50 border-t-0'>
            <table className='w-full text-sm text-gray-500'>
              <thead className='text-xs text-gray-700 text-left uppercase bg-gradient-to-r from-emerald-50 via-green-50/50 to-teal-50/50 border-b-2 border-emerald-200/50'>
                <tr>
                  <th scope='col' className='px-4 py-4 font-semibold'>#</th>
                  <th scope='col' className='px-4 py-4 xl:px-6 font-semibold'>Blog title</th>
                  <th scope='col' className='px-4 py-4 font-semibold max-sm:hidden'>Date</th>
                  <th scope='col' className='px-4 py-4 font-semibold max-sm:hidden'>Status</th>
                  <th scope='col' className='px-4 py-4 font-semibold'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {dashboardData.recentBlogs.map((blog, index)=>{
                  return <BlogTableItem key = {blog.id} blog={blog} fetchBlogs={fetchDashboardData} index={index+1}/>
                })}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes float-slow {
          0%, 100% { 
            transform: translateY(0);
          }
          50% { 
            transform: translateY(-20px);
          }
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        /* Custom scrollbar */
        .overflow-x-auto::-webkit-scrollbar {
          height: 8px;
        }

        .overflow-x-auto::-webkit-scrollbar-track {
          background: linear-gradient(to right, #f0fdf4, #ecfdf5);
          border-radius: 4px;
        }

        .overflow-x-auto::-webkit-scrollbar-thumb {
          background: linear-gradient(to right, #10b981, #14b8a6);
          border-radius: 4px;
        }

        .overflow-x-auto::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to right, #059669, #0d9488);
        }

        /* Hide scrollbar but keep functionality */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}

export default Dashboard