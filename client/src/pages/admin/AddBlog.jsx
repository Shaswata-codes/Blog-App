import React, { useEffect, useRef, useState } from 'react'
import { assets, blogCategories } from '../../assets/assets'
import { motion, AnimatePresence } from 'framer-motion'
import Quill from 'quill'
import { useAppContext } from '../../context/AppContext'
import toast from "react-hot-toast";
import {parse} from 'marked'

const AddBlog = () => {
  const editorRef = useRef(null)
  const quillRef = useRef(null)
  const {axios} = useAppContext();
  const [isAdding, setIsAdding] = useState(false);

  const [image, setImage] = useState(false)
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [category, setCategory] = useState('Startup')
  const [isPublished, setIsPublished] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [focusedField, setFocusedField] = useState(null)
  const [dragActive, setDragActive] = useState(false)
  const [loading, setLoading] = useState(false)


  const generateContent = async () => {
    setLoading(true);
    if(!title) return toast.error("Please enter a title to generate content");
    try {
      setIsGenerating(true)
      const { data } = await axios.post('/api/blog/generateContent',{prompt : title});
      if(data.success){
        quillRef.current.root.innerHTML = parse(data.content);
      }
      else{
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
    finally{
      setLoading(false);
    }
  }

  const onSubmitHandler = async (e) => {
  e.preventDefault();

  try {
    setIsAdding(true);

    const blog = {
      title,
      subTitle: subtitle,
      description: quillRef.current.root.innerHTML,
      category,
      isPublished
    };

    const formData = new FormData();
    formData.append('blog', JSON.stringify(blog));
    formData.append('image', image);

    const { data } = await axios.post('/api/blog/add', formData);

    if (data.success) {
      toast.success(data.message);

      setImage(null);
      setTitle('');
      setSubtitle('');
      setCategory('Startup');
      setIsPublished(false);
      quillRef.current.root.innerHTML = '';
    } else {
      toast.error(data.message);
    }

  } catch (error) {
    console.log(error);
    toast.error(error.response?.data?.message || "Upload failed");
  } finally {
    setIsAdding(false);
  }
};

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setImage(e.dataTransfer.files[0])
    }
  }

  useEffect(() => {
    setMounted(true)
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { 
        theme: 'snow',
        placeholder: 'Start writing your amazing blog post...'
      })
    }
  }, [])

  return (
    <form
      onSubmit={onSubmitHandler}
      className={`flex-1 bg-gradient-to-br from-emerald-50 via-green-50/40 to-teal-50/50 text-gray-600 h-full overflow-scroll transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'} relative`}
    >
      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-20 left-20 w-80 h-80 bg-emerald-300/10 rounded-full blur-3xl animate-float-slow'></div>
        <div className='absolute bottom-20 right-20 w-96 h-96 bg-teal-300/10 rounded-full blur-3xl animate-float-slow animation-delay-2000'></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className="relative bg-white/80 backdrop-blur-xl w-full max-w-4xl p-8 md:p-12 sm:m-10 shadow-2xl rounded-3xl border-2 border-emerald-100/50"
      >
        {/* Gradient Border Animation */}
        <div className='absolute inset-0 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 opacity-0 hover:opacity-10 blur-2xl transition-opacity duration-500 rounded-3xl -z-10'></div>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-500 to-teal-600">
              Create New Blog
            </h1>
          </div>
          <p className="text-gray-600 font-semibold ml-16">Share your thoughts with the world</p>
        </motion.div>

        {/* Upload Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="group mb-8"
        >
          <label className="flex items-center gap-2 text-sm font-black text-emerald-700 mb-4 tracking-wide uppercase">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Upload Thumbnail
          </label>
          <label 
            htmlFor='image' 
            className="block"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <div className={`relative overflow-hidden rounded-2xl transition-all duration-500 border-4 ${
              dragActive 
                ? 'border-emerald-500 border-dashed scale-[1.02]' 
                : 'border-emerald-200/50 border-solid'
            } group-hover:shadow-2xl group-hover:shadow-emerald-500/20 group-hover:scale-[1.01]`}>
              <img
                src={!image ? assets.upload_area : URL.createObjectURL(image)}
                className='w-full h-64 object-cover cursor-pointer transition-all duration-500 group-hover:brightness-110'
                alt='Upload thumbnail'
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-green-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <span className="text-white font-black text-lg">
                    {!image ? 'Click or drag to upload' : 'Change image'}
                  </span>
                  <p className="text-emerald-200 text-sm mt-1 font-semibold">PNG, JPG up to 10MB</p>
                </motion.div>
              </div>
            </div>
          </label>
          <input
            type='file'
            id='image'
            hidden
            required
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </motion.div>

        {/* Title Input */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-6"
        >
          <label className="flex items-center gap-2 text-sm font-black text-emerald-700 mb-4 tracking-wide uppercase">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
            Blog Title
          </label>
          <div className="relative">
            <div className={`absolute inset-0 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 rounded-2xl transition-all duration-500 ${
              focusedField === 'title' ? 'opacity-20 blur-lg' : 'opacity-0'
            }`}></div>
            <input
              type='text'
              placeholder='Enter an engaging title...'
              required
              className={`relative w-full px-5 py-4 border-2 outline-none rounded-2xl transition-all duration-300 font-bold bg-white/80 backdrop-blur-sm ${
                focusedField === 'title'
                  ? 'border-emerald-400 ring-4 ring-emerald-100 shadow-lg'
                  : 'border-emerald-200/50 hover:border-emerald-300'
              }`}
              onChange={e => setTitle(e.target.value)}
              value={title}
              onFocus={() => setFocusedField('title')}
              onBlur={() => setFocusedField(null)}
            />
            {title && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-500"
              >
                {title.length} chars
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Subtitle Input */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-6"
        >
          <label className="flex items-center gap-2 text-sm font-black text-emerald-700 mb-4 tracking-wide uppercase">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Subtitle
          </label>
          <div className="relative">
            <div className={`absolute inset-0 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 rounded-2xl transition-all duration-500 ${
              focusedField === 'subtitle' ? 'opacity-20 blur-lg' : 'opacity-0'
            }`}></div>
            <input
              type='text'
              placeholder='Add a compelling subtitle...'
              required
              className={`relative w-full px-5 py-4 border-2 outline-none rounded-2xl transition-all duration-300 font-bold bg-white/80 backdrop-blur-sm ${
                focusedField === 'subtitle'
                  ? 'border-emerald-400 ring-4 ring-emerald-100 shadow-lg'
                  : 'border-emerald-200/50 hover:border-emerald-300'
              }`}
              onChange={e => setSubtitle(e.target.value)}
              value={subtitle}
              onFocus={() => setFocusedField('subtitle')}
              onBlur={() => setFocusedField(null)}
            />
          </div>
        </motion.div>

        {/* Editor Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-6"
        >
          <label className="flex items-center gap-2 text-sm font-black text-emerald-700 mb-4 tracking-wide uppercase">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Blog Content
          </label>
          <div className='relative border-2 border-emerald-200/50 rounded-2xl overflow-hidden transition-all duration-300 hover:border-emerald-300 focus-within:border-emerald-400 focus-within:ring-4 focus-within:ring-emerald-100 focus-within:shadow-lg bg-white/80 backdrop-blur-sm'>
            <div ref={editorRef} className="min-h-[300px] pb-20"></div>
            <motion.button
              disabled={loading}
              type='button'
              onClick={generateContent}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className='absolute bottom-4 right-4 text-xs text-white bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 px-6 py-3 rounded-xl hover:shadow-xl hover:shadow-emerald-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-black overflow-hidden group'
            >
              <span className="relative z-10 flex items-center gap-2">
                {isGenerating ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating...
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Generate with AI
                  </>
                )}
              </span>
              <div className='absolute inset-0 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </motion.button>
          </div>
        </motion.div>

        {/* Category Select */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-6"
        >
          <label className="flex items-center gap-2 text-sm font-black text-emerald-700 mb-4 tracking-wide uppercase">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            Category
          </label>
          <div className="relative">
            <div className={`absolute inset-0 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 rounded-2xl transition-all duration-500 ${
              focusedField === 'category' ? 'opacity-20 blur-lg' : 'opacity-0'
            }`}></div>
            <select
              onChange={e => setCategory(e.target.value)}
              name="category"
              onFocus={() => setFocusedField('category')}
              onBlur={() => setFocusedField(null)}
              className={`relative w-full px-5 py-4 border-2 outline-none rounded-2xl transition-all duration-300 cursor-pointer font-bold bg-white/80 backdrop-blur-sm appearance-none ${
                focusedField === 'category'
                  ? 'border-emerald-400 ring-4 ring-emerald-100 shadow-lg'
                  : 'border-emerald-200/50 hover:border-emerald-300'
              }`}
            >
              <option value="">Select a category</option>
              {blogCategories.map((item, index) => (
                <option key={index} value={item}>{item}</option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Publish Toggle */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex items-center justify-between p-5 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border-2 border-emerald-200/50 mb-8"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <div>
              <span className="block text-sm font-black text-emerald-700 tracking-wide uppercase">Publish Immediately</span>
              <span className="text-xs text-gray-600 font-semibold">Make your blog visible to everyone</span>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type='checkbox'
              className='sr-only peer'
              onChange={e => setIsPublished(e.target.checked)}
              checked={isPublished}
            />
            <div className="w-16 h-8 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-emerald-500 peer-checked:to-teal-500 shadow-inner"></div>
          </label>
        </motion.div>

        {/* Submit Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.button
            type='submit'
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className='w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 text-white rounded-2xl hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 font-black text-lg tracking-wide relative overflow-hidden group'
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Create Blog Post
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000'></div>
          </motion.button>
        </motion.div>
      </motion.div>

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
        form::-webkit-scrollbar {
          width: 10px;
        }

        form::-webkit-scrollbar-track {
          background: linear-gradient(to bottom, #f0fdf4, #ecfdf5);
        }

        form::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #10b981, #14b8a6);
          border-radius: 5px;
        }

        form::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #059669, #0d9488);
        }

        /* Quill editor customization */
        .ql-toolbar {
          border-top-left-radius: 1rem;
          border-top-right-radius: 1rem;
          border-color: rgb(209 250 229 / 0.5) !important;
          background: rgb(255 255 255 / 0.8) !important;
        }

        .ql-container {
          border-bottom-left-radius: 1rem;
          border-bottom-right-radius: 1rem;
          border-color: rgb(209 250 229 / 0.5) !important;
          background: rgb(255 255 255 / 0.8) !important;
        }

        .ql-editor::before {
          color: #9ca3af;
          font-style: italic;
        }
      `}</style>
    </form>
  )
}

export default AddBlog