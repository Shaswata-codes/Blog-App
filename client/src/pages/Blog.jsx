import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, blog_data } from '../assets/assets';
import Navbar from '../components/Navbar';
import Moment from 'moment';

const Blog = () => {
  const {id} = useParams();
  const [data, setData] = useState(null);
  const fetchBlogData = () => {
  const blog = blog_data.find(item => item._id === id);
  setData(blog);
};

  useEffect(()=>{
    fetchBlogData();
  },[])
  return data?(
    <div className='relative'>
      <img src={assets.gradientBackground} className='absolute -top-50 -z-1 opacity-50'/>
      <Navbar/>
      <div>
        <p>Published On {Moment(data.createdAt).format('')}</p>
      </div>
      <div></div>

    </div>
  )
  :<div>Loading...</div>
}
export default Blog