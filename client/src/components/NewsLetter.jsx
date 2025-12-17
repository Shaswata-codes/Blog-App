import React from 'react'

const NewsLetter = () => {
  return (
    <div>
      <h1>Never Miss Shas Blog</h1>
      <p>Subscribe to get latest infos about tech and news</p>
      <form>
        <input className='border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500' type="text" placeholder='Enter your Email ID' required/>
        <button type='submit' className='md:px-12 px-8 h-full text-white
        bg-primary/80 hover:bg-primary transition-all cursor-pointer
        rounded-md rounded-l-none'>Subscribe</button>
      </form>
    </div>
  )
}

export default NewsLetter
