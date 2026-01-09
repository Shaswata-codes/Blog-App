import React, { useEffect, useRef, useState } from 'react'
import { assets, blogCategories } from '../../assets/assets'
import Quill from 'quill';

const AddBlog = () => {
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const [image, setImage] = useState(false)
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [category, setCategory] = useState('Startup')
  const [isPublished, setIsPublished] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [mounted, setMounted] = useState(false)

  const generateContent = async () => {
    setIsGenerating(true)
    // Simulate AI generation
    setTimeout(() => setIsGenerating(false), 2000)
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    setMounted(true)
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: 'snow' })
    }
  }, [])

  return (
    <form
      onSubmit={onSubmitHandler}
      className={`flex-1 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 text-gray-600 h-full overflow-scroll transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className={`bg-white/80 backdrop-blur-sm w-full max-w-3xl p-6 md:p-12 sm:m-10 shadow-2xl rounded-2xl border border-white/20 transition-all duration-700 transform ${mounted ? 'translate-y-0 scale-100' : 'translate-y-8 scale-95'}`}>
        
        {/* Upload Section */}
        <div className="group mb-8 animate-fade-in">
          <p className="text-sm font-semibold text-gray-700 mb-3 tracking-wide uppercase">Upload Thumbnail</p>
          <label htmlFor='image' className="block">
            <div className="relative overflow-hidden rounded-xl transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.02]">
              <img
                src={!image ? assets.upload_area : URL.createObjectURL(image)}
                className='w-full h-48 object-cover rounded-xl cursor-pointer transition-all duration-500 group-hover:brightness-110'
                alt='Upload thumbnail'
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <span className="text-white font-semibold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {!image ? 'Click to upload' : 'Change image'}
                </span>
              </div>
            </div>
          </label>
          <input
            type='file'
            id='image'
            hidden
            required
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        {/* Title Input */}
        <div className="mb-6 animate-slide-up" style={{ animationDelay: '100ms' }}>
          <label className="block text-sm font-semibold text-gray-700 mb-3 tracking-wide uppercase">
            Title
          </label>
          <input
            type='text'
            placeholder='Enter your blog title...'
            required
            className='w-full px-4 py-3 border-2 border-gray-200 outline-none rounded-xl transition-all duration-300 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-100 hover:border-gray-300 bg-white/50'
            onChange={e => setTitle(e.target.value)}
            value={title}
          />
        </div>

        {/* Subtitle Input */}
        <div className="mb-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
          <label className="block text-sm font-semibold text-gray-700 mb-3 tracking-wide uppercase">
            Subtitle
          </label>
          <input
            type='text'
            placeholder='Enter a compelling subtitle...'
            required
            className='w-full px-4 py-3 border-2 border-gray-200 outline-none rounded-xl transition-all duration-300 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-100 hover:border-gray-300 bg-white/50'
            onChange={e => setSubtitle(e.target.value)}
            value={subtitle}
          />
        </div>

        {/* Editor Section */}
        <div className="mb-6 animate-slide-up" style={{ animationDelay: '300ms' }}>
          <label className="block text-sm font-semibold text-gray-700 mb-3 tracking-wide uppercase">
            Blog Description
          </label>
          <div className='relative border-2 border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-gray-300 focus-within:border-blue-500 focus-within:shadow-lg focus-within:shadow-blue-100 bg-white/50'>
            <div ref={editorRef} className="min-h-[200px] pb-14"></div>
            <button
              type='button'
              onClick={generateContent}
              disabled={isGenerating}
              className='absolute bottom-3 right-3 text-xs text-white bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-2.5 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed font-medium'
            >
              {isGenerating ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating...
                </span>
              ) : (
                '✨ Generate with AI'
              )}
            </button>
          </div>
        </div>

        {/* Category Select */}
        <div className="mb-6 animate-slide-up" style={{ animationDelay: '400ms' }}>
          <label className="block text-sm font-semibold text-gray-700 mb-3 tracking-wide uppercase">
            Blog Category
          </label>
          <select
            onChange={e => setCategory(e.target.value)}
            name="category"
            className='w-full px-4 py-3 border-2 border-gray-200 outline-none rounded-xl transition-all duration-300 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-100 hover:border-gray-300 cursor-pointer bg-white/50 appearance-none bg-no-repeat bg-right pr-10'
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
              backgroundSize: '1.5rem',
              backgroundPosition: 'right 0.75rem center'
            }}
          >
            <option value="">Select Category</option>
            {blogCategories.map((item, index) => {
              return <option key={index} value={item}>{item}</option>
            })}
          </select>
        </div>

        {/* Publish Toggle */}
        <div className="flex items-center gap-3 mb-8 animate-slide-up" style={{ animationDelay: '500ms' }}>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type='checkbox'
              className='sr-only peer'
              onChange={e => setIsPublished(e.target.checked)}
              checked={isPublished}
            />
            <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-blue-600 peer-checked:to-blue-500"></div>
          </label>
          <span className="text-sm font-semibold text-gray-700 tracking-wide uppercase">
            Publish Now
          </span>
        </div>

        {/* Submit Button */}
        <div className="animate-slide-up" style={{ animationDelay: '600ms' }}>
          <button
            type='submit'
            className='w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-[1.02] active:scale-95 font-semibold text-lg tracking-wide relative overflow-hidden group'
          >
            <span className="relative z-10">Add Blog</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
        }

        input::placeholder,
        select option:first-child {
          color: #9ca3af;
        }

        /* Smooth scroll */
        form {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        form::-webkit-scrollbar {
          width: 8px;
        }

        form::-webkit-scrollbar-track {
          background: #f1f5f9;
        }

        form::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #6366f1);
          border-radius: 4px;
        }

        form::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #4f46e5);
        }
      `}</style>
    </form>
  )
}

export default AddBlog