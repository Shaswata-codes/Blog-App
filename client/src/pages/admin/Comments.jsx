import React, { useEffect, useState } from 'react'
import { comments_data } from '../../assets/assets';
import CommentTableItem from '../../components/admin/CommentTableItem';
import { useAppContext } from '../../context/AppContext';

const Comments = () => {

  const[comments, setComments] = useState([]);
  const [filter, setFilter] = useState("Not Approved");
  const {axios} = useAppContext();

  const fetchComments = async () => {
    try {
      const { data } = await axios.get('/api/admin/comments');
      
      if (data.success) {
        setComments(data.comments);
      } else {
        toast.error(data.message);
      }

    } catch (error) {
      toast.error(error.message);
    }
  };

  
  useEffect(() => {
    fetchComments();
  }, []);

  const filteredComments = comments.filter((comment)=>{
    if(filter === "Approved") return comment.isApproved === true;
    return comment.isApproved === false;
  });

  return (
    <div className='flex-1 pt-8 px-6 sm:pt-12 sm:pl-16 sm:pr-10 bg-gradient-to-br from-blue-50 via-indigo-50/30 to-purple-50/20 min-h-screen'>
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8 max-w-5xl'>
        <div>
          <h1 className='text-3xl md:text-4xl font-bold text-gray-800 tracking-tight mb-2'>Comments</h1>
          <p className='text-gray-600 text-sm md:text-base'>Review and manage blog comments</p>
        </div>
        <div className='flex gap-3'>
          <button 
            onClick={()=>setFilter('Approved')} 
            className={`relative shadow-md border-2 rounded-full px-6 py-2.5 cursor-pointer text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95 ${filter === 'Approved'?'bg-gradient-to-r from-primary to-purple-600 text-white border-transparent shadow-lg' : 'text-gray-700 border-gray-200 bg-white hover:border-gray-300'}`}
          >
            Approved
          </button>
          <button 
            onClick={()=>setFilter('Not Approved')} 
            className={`relative shadow-md border-2 rounded-full px-6 py-2.5 cursor-pointer text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95 ${filter === 'Not Approved'?'bg-gradient-to-r from-primary to-purple-600 text-white border-transparent shadow-lg' : 'text-gray-700 border-gray-200 bg-white hover:border-gray-300'}`}
          >
            Not Approved
          </button>
        </div>
      </div>
      
      <div className='bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden max-w-5xl'>
        <div className='relative overflow-x-auto scrollbar-hide'>
          <table className='w-full text-sm text-gray-500'>
            <thead className='text-xs text-gray-700 text-left uppercase bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200'>
              <tr>
                <th scope='col' className='px-6 py-5 font-bold text-gray-800'>Blog Title & Comment</th>
                <th scope='col' className='px-6 py-5 font-bold text-gray-800 max-sm:hidden'>Date</th>
                <th scope='col' className='px-6 py-5 font-bold text-gray-800'>Action</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-100'>
              {filteredComments.length === 0 ? (
                <tr>
                  <td colSpan="3" className='px-6 py-16 text-center'>
                    <div className='flex flex-col items-center justify-center'>
                      <div className='w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-5 shadow-inner'>
                        <svg className='w-12 h-12 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z' />
                        </svg>
                      </div>
                      <p className='text-gray-700 font-semibold text-lg mb-2'>No {filter.toLowerCase()} comments</p>
                      <p className='text-gray-500 text-sm'>Comments will appear here once available</p>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredComments.map((comment, index)=><CommentTableItem key={comment._id} comment={comment} index={index+1} fetchComments={fetchComments}/>)
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Comments