// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { assets, blog_data, comments_data } from '../assets/assets';
// import Navbar from '../components/Navbar';
// import Moment from 'moment';
// import Footer from '../components/Footer';
// import Loader from '../components/Loader';

// const Blog = () => {
//   const {id} = useParams();
//   const [data, setData] = useState(null);
//   const [comments, setComments] = useState([]);
//   const [name, setName] = useState('');
//   const [content, setContent] = useState('');

//   const fetchBlogData = () => {
//     const blog = blog_data.find(item => item._id === id);
//     setData(blog);
//   };

//   const fetchComments = () =>{
//     setComments(comments_data);
//   }

//   const addComment = async(e) =>{
//     e.preventDefault();
//   }

//   useEffect(()=>{
//     fetchBlogData();
//     fetchComments();
//   },[])
//   return data?(
//     <div className='relative'>
//       <img src={assets.gradientBackground} className='absolute -top-50 -z-1 opacity-50'/>
//       <Navbar/>
//       <div className='text-center mt-20 text-gray-600'>
//         <p className='text-primary py-4 font-medium'>Published On {Moment(data.createdAt).format('MMMM Do YYYY')}</p>
//         <h1 className='text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800'>{data.title}</h1>
//         <h2 className='my-5 max-w-lg truncate mx-auto'>{data.subTitle}</h2>
//         <p className='inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary'>Shasssss</p>
//       </div>
//       <div className='mx-5 max-w-5xl md:auto my-10 mt-6'>
//         <img src={data.image} className='rounded-3xl mb-5 w-full translate-x-[100px]'/>
//         <div className='rich-text max-w-3xl mx-auto' dangerouslySetInnerHTML={{__html: data.description}}></div>
//         <div className='mt-14 mb-10 max-w-3xl mx-auto'>
//           <p className='font-semibold mb-4'> Comments ({comments.length}) </p>
//           <div className='flex flex-col gap-4'>
//             {comments.map((item, index) => (
//               <div
//                 key={index}
//                 className='relative bg-primary/2 border border-primary/5 max-w-xl p-4 rounded text-gray-600'
//               >
//                 <div className='flex items-center gap-2 mb-2'>
//                   <img src={assets.user_icon} className='w-6' />
//                   <p className='font-medium'>{item.name}</p>
//                 </div>

//                 <p className='text-sm max-w-md ml-8'>{item.content}</p>
//                 <div className='absolute right-4 bottom-3 flex items-center gap-2 text-xs'>
//                   {Moment(item.createdAt).fromNow()}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className='max-w-3xl mx-auto'>
//             <p className='font-semibold mb-4'>Add your Comment</p>
//             <form onSubmit={addComment} className='flex flex-col items-start gap-4 max-w-lg'>
//               <input onChange={(e)=>setName(e.target.value)} value={name} type='text' placeholder='Name' required className='w-full p-2 border border-gray-300 rounded outline-none'/>
//               <textarea onChange={(e)=>setContent(e.target.value)} value={content} placeholder='Comment' className='w-full p-2 border border-gray-300 rounded outline-none h-48' required></textarea>
//               <button type='submit' className='bg-primary text-white px-8 p-2 rounded hover:bg-primary/90 transition'>Submit</button>
//             </form>
//         </div>
//         <div className='my-24 max-w-3xl mx-auto'>
//           <p className='font-semibold my-4'>Share This article on social media</p>
//           <div className='flex'>
//             <img src={assets.facebook_icon} width ={50}/>
//             <img src={assets.twitter_icon} width ={50}/>
//             <img src={assets.googleplus_icon} width ={50}/>
//           </div>
//         </div>
//       </div>

//       <Footer/>

//     </div>
//   )
//   :<Loader/>
// }
// export default Blog



import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, blog_data, comments_data } from '../assets/assets';
import Navbar from '../components/Navbar';
import Moment from 'moment';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const Blog = () => {
  const {id} = useParams();
  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const fetchBlogData = () => {
    const blog = blog_data.find(item => item._id === id);
    setData(blog);
  };

  const fetchComments = () =>{
    setComments(comments_data);
  }

  const addComment = async(e) =>{
    e.preventDefault();
  }

  useEffect(()=>{
    fetchBlogData();
    fetchComments();
    setTimeout(() => setIsVisible(true), 100);
  },[])

  return data ? (
    <div className='relative overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 min-h-screen'>
      {/* Animated Background Gradient */}
      <div className='absolute inset-0 -z-10'>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-200/30 via-green-300/20 to-teal-200/30 animate-gradient-shift'></div>
        <div className='absolute top-20 -left-20 w-72 h-72 bg-emerald-300/20 rounded-full blur-3xl animate-blob'></div>
        <div className='absolute top-40 -right-20 w-96 h-96 bg-teal-300/20 rounded-full blur-3xl animate-blob animation-delay-2000'></div>
        <div className='absolute -bottom-20 left-1/2 w-80 h-80 bg-green-300/20 rounded-full blur-3xl animate-blob animation-delay-4000'></div>
      </div>

      <Navbar/>
      
      {/* Hero Section */}
      <div className={`text-center mt-20 text-gray-700 px-4 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className='text-emerald-600 py-4 font-medium tracking-wide animate-fade-in-up'>
          Published On {Moment(data.createdAt).format('MMMM Do YYYY')}
        </p>
        <h1 className='text-2xl sm:text-5xl font-bold max-w-2xl mx-auto text-gray-800 mb-4 animate-fade-in-up animation-delay-200 bg-gradient-to-r from-emerald-700 via-green-600 to-teal-700 bg-clip-text text-transparent'>
          {data.title}
        </h1>
        <h2 className='my-5 max-w-lg mx-auto text-gray-600 animate-fade-in-up animation-delay-400'>
          {data.subTitle}
        </h2>
        <span className='inline-block py-2 px-6 rounded-full mb-6 border-2 text-sm border-emerald-400/50 bg-gradient-to-r from-emerald-100 to-teal-100 font-medium text-emerald-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-600'>
          Shasssss
        </span>
      </div>

      {/* Main Content */}
      <div className='mx-5 max-w-5xl md:mx-auto my-10 mt-6'>
        {/* Featured Image */}
        <div className='overflow-hidden rounded-3xl mb-8 shadow-2xl hover:shadow-emerald-300/50 transition-all duration-500 group'>
          <img 
            src={data.image} 
            className='w-full h-auto transform group-hover:scale-105 transition-transform duration-700 ease-out'
            alt={data.title}
          />
        </div>

        {/* Article Content */}
        <div className='rich-text max-w-3xl mx-auto bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-emerald-100/50 animate-slide-up' 
             dangerouslySetInnerHTML={{__html: data.description}}>
        </div>

        {/* Comments Section */}
        <div className='mt-14 mb-10 max-w-3xl mx-auto animate-slide-up animation-delay-800'>
          <p className='font-bold text-2xl mb-6 text-emerald-800 flex items-center gap-2'>
            <span className='inline-block w-1 h-8 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full'></span>
            Comments ({comments.length})
          </p>
          <div className='flex flex-col gap-4'>
            {comments.map((item, index) => (
              <div
                key={index}
                style={{animationDelay: `${index * 100}ms`}}
                className='relative bg-gradient-to-br from-white/80 to-emerald-50/80 backdrop-blur-sm border border-emerald-200/50 max-w-xl p-5 rounded-xl text-gray-700 shadow-md hover:shadow-xl hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1 animate-fade-in-right group'
              >
                <div className='flex items-center gap-3 mb-3'>
                  <div className='w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300'>
                    <img src={assets.user_icon} className='w-6' alt="user" />
                  </div>
                  <p className='font-semibold text-emerald-800'>{item.name}</p>
                </div>

                <p className='text-sm max-w-md ml-12 leading-relaxed'>{item.content}</p>
                <div className='absolute right-4 bottom-3 flex items-center gap-2 text-xs text-emerald-600 font-medium'>
                  <span className='w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse'></span>
                  {Moment(item.createdAt).fromNow()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add Comment Form */}
        <div className='max-w-3xl mx-auto animate-slide-up animation-delay-1000'>
          <p className='font-bold text-2xl mb-6 text-emerald-800 flex items-center gap-2'>
            <span className='inline-block w-1 h-8 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full'></span>
            Add your Comment
          </p>
          <form onSubmit={addComment} className='flex flex-col items-start gap-5 max-w-lg bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-emerald-100/50'>
            <input 
              onChange={(e)=>setName(e.target.value)} 
              value={name} 
              type='text' 
              placeholder='Your Name' 
              required 
              className='w-full p-4 border-2 border-emerald-200 rounded-xl outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 transition-all duration-300 bg-white/80'
            />
            <textarea 
              onChange={(e)=>setContent(e.target.value)} 
              value={content} 
              placeholder='Share your thoughts...' 
              className='w-full p-4 border-2 border-emerald-200 rounded-xl outline-none h-40 resize-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 transition-all duration-300 bg-white/80' 
              required
            ></textarea>
            <button 
              type='submit' 
              className='bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-10 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 active:scale-95 hover:-translate-y-1'
            >
              Submit Comment
            </button>
          </form>
        </div>

        {/* Social Share Section */}
        <div className='my-24 max-w-3xl mx-auto animate-fade-in'>
          <p className='font-bold text-2xl mb-6 text-emerald-800 flex items-center gap-2'>
            <span className='inline-block w-1 h-8 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full'></span>
            Share This Article
          </p>
          <div className='flex gap-4'>
            <div className='group cursor-pointer transform hover:scale-110 hover:-rotate-6 transition-all duration-300'>
              <img src={assets.facebook_icon} width={50} className='drop-shadow-lg group-hover:drop-shadow-2xl' alt="Facebook"/>
            </div>
            <div className='group cursor-pointer transform hover:scale-110 hover:rotate-6 transition-all duration-300'>
              <img src={assets.twitter_icon} width={50} className='drop-shadow-lg group-hover:drop-shadow-2xl' alt="Twitter"/>
            </div>
            <div className='group cursor-pointer transform hover:scale-110 hover:-rotate-6 transition-all duration-300'>
              <img src={assets.googleplus_icon} width={50} className='drop-shadow-lg group-hover:drop-shadow-2xl' alt="Google Plus"/>
            </div>
          </div>
        </div>
      </div>

      <Footer/>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }

        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-gradient-shift {
          animation: gradient-shift 8s ease-in-out infinite;
        }

        .animate-blob {
          animation: blob 7s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.6s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        .animation-delay-600 {
          animation-delay: 600ms;
        }

        .animation-delay-800 {
          animation-delay: 800ms;
        }

        .animation-delay-1000 {
          animation-delay: 1000ms;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  ) : <Loader/>
}

export default Blog