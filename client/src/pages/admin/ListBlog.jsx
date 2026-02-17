import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import BlogTableItem from '../../components/admin/BlogTableItem';

const ListBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [mounted, setMounted] = useState(false);

  // Dummy blog data
  const dummyBlogs = [
    {
      id: 1,
      title: "Getting Started with React Hooks: A Complete Guide",
      date: "2024-02-10",
      status: "Published",
      author: "Sarah Johnson",
      category: "Technology",
      description: "Learn the fundamentals of React Hooks and how to use them effectively in your applications."
    },
    {
      id: 2,
      title: "10 Essential Tips for Successful Startup Growth",
      date: "2024-02-09",
      status: "Published",
      author: "Michael Chen",
      category: "Startup",
      description: "Discover proven strategies to scale your startup and achieve sustainable growth."
    },
    {
      id: 3,
      title: "The Future of Artificial Intelligence in Healthcare",
      date: "2024-02-08",
      status: "Draft",
      author: "Dr. Emily Rodriguez",
      category: "Technology",
      description: "Exploring how AI is revolutionizing patient care and medical diagnostics."
    },
    {
      id: 4,
      title: "Mastering Modern CSS: Grid and Flexbox",
      date: "2024-02-07",
      status: "Published",
      author: "Alex Thompson",
      category: "Lifestyle",
      description: "A comprehensive guide to creating responsive layouts with CSS Grid and Flexbox."
    },
    {
      id: 5,
      title: "Building Scalable Microservices Architecture",
      date: "2024-02-06",
      status: "Published",
      author: "David Kumar",
      category: "Technology",
      description: "Best practices for designing and implementing microservices at scale."
    },
    {
      id: 6,
      title: "Effective Time Management for Remote Workers",
      date: "2024-02-05",
      status: "Draft",
      author: "Jessica Martinez",
      category: "Lifestyle",
      description: "Productivity tips and techniques for maximizing efficiency while working from home."
    },
    {
      id: 7,
      title: "The Rise of Web3 and Decentralized Applications",
      date: "2024-02-04",
      status: "Published",
      author: "Ryan Peterson",
      category: "Startup",
      description: "Understanding blockchain technology and its impact on the future of the internet."
    },
    {
      id: 8,
      title: "Sustainable Living: Small Changes, Big Impact",
      date: "2024-02-03",
      status: "Published",
      author: "Emma Williams",
      category: "Lifestyle",
      description: "Practical tips for reducing your carbon footprint and living more sustainably."
    },
    {
      id: 9,
      title: "Machine Learning for Beginners: First Steps",
      date: "2024-02-02",
      status: "Published",
      author: "Marcus Johnson",
      category: "Technology",
      description: "An introductory guide to understanding and implementing machine learning algorithms."
    },
    {
      id: 10,
      title: "Creating a Winning Product Launch Strategy",
      date: "2024-02-01",
      status: "Draft",
      author: "Sophie Anderson",
      category: "Startup",
      description: "Step-by-step guide to planning and executing a successful product launch."
    },
    {
      id: 11,
      title: "The Art of Minimalist Design in 2024",
      date: "2024-01-31",
      status: "Published",
      author: "Oliver Martinez",
      category: "Lifestyle",
      description: "Exploring the principles of minimalist design and how to apply them effectively."
    },
    {
      id: 12,
      title: "Cybersecurity Best Practices for Small Businesses",
      date: "2024-01-30",
      status: "Published",
      author: "Rachel Green",
      category: "Technology",
      description: "Essential security measures every small business should implement to protect their data."
    }
  ];

  const fetchBlogs = async() => {
    // Simulate API call
    setTimeout(() => {
      setBlogs(dummyBlogs);
    }, 500);
  }

  useEffect(() => {
    setMounted(true);
    fetchBlogs();
  }, [])

  return (
    <div className={`flex-1 pt-8 sm:pt-12 px-6 sm:pl-16 sm:pr-10 bg-gradient-to-br from-emerald-50 via-green-50/40 to-teal-50/50 min-h-screen transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'} relative overflow-hidden`}>
      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-40 right-20 w-80 h-80 bg-emerald-300/10 rounded-full blur-3xl animate-float-slow'></div>
        <div className='absolute bottom-40 left-20 w-96 h-96 bg-teal-300/10 rounded-full blur-3xl animate-float-slow animation-delay-2000'></div>
      </div>

      <div className='relative z-10'>
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='mb-8'
        >
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h1 className='text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-500 to-teal-600 tracking-tight'>
              All Blogs
            </h1>
          </div>
          <p className='text-gray-600 text-sm md:text-base font-semibold ml-16'>Manage and organize your blog posts</p>
        </motion.div>
        
        {/* Table Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border-2 border-emerald-100/50 overflow-hidden'
        >
          <div className='relative overflow-x-auto scrollbar-custom'>
            <table className='w-full text-sm text-gray-500'>
              <thead className='text-xs text-gray-700 text-left uppercase bg-gradient-to-r from-emerald-50 via-green-50/50 to-teal-50/50 border-b-2 border-emerald-200/50'>
                <tr>
                  <th scope='col' className='px-4 py-5 font-bold text-gray-800'>#</th>
                  <th scope='col' className='px-4 py-5 xl:px-6 font-bold text-gray-800'>Blog title</th>
                  <th scope='col' className='px-4 py-5 font-bold text-gray-800 max-sm:hidden'>Date</th>
                  <th scope='col' className='px-4 py-5 font-bold text-gray-800 max-sm:hidden'>Status</th>
                  <th scope='col' className='px-4 py-5 font-bold text-gray-800'>Actions</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-emerald-100/50'>
                {blogs.length === 0 ? (
                  <tr>
                    <td colSpan="5" className='px-4 py-16 text-center'>
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className='flex flex-col items-center justify-center'
                      >
                        <div className='w-24 h-24 bg-gradient-to-br from-emerald-100 to-teal-200 rounded-full flex items-center justify-center mb-5 shadow-lg'>
                          <svg className='w-12 h-12 text-emerald-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
                          </svg>
                        </div>
                        <p className='text-gray-700 font-bold text-lg mb-2'>No blogs yet</p>
                        <p className='text-gray-500 text-sm font-semibold'>Your blog posts will appear here once created</p>
                      </motion.div>
                    </td>
                  </tr>
                ) : (
                  blogs.map((blog, index) => {
                    return <BlogTableItem key={blog.id} blog={blog} fetchBlogs={fetchBlogs} index={index + 1}/>
                  })
                )}
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
        .scrollbar-custom::-webkit-scrollbar {
          height: 8px;
        }

        .scrollbar-custom::-webkit-scrollbar-track {
          background: linear-gradient(to right, #f0fdf4, #ecfdf5);
          border-radius: 4px;
        }

        .scrollbar-custom::-webkit-scrollbar-thumb {
          background: linear-gradient(to right, #10b981, #14b8a6);
          border-radius: 4px;
        }

        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to right, #059669, #0d9488);
        }

        /* Hide scrollbar but keep functionality for mobile */
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

export default ListBlog