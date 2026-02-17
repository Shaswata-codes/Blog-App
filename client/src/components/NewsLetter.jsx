import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NewsLetter = () => {
  const [email, setEmail] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setEmail('')
    }, 3000)
  }

  return (
    <div className='relative flex flex-col items-center justify-center text-center my-24 sm:my-32 md:my-40 px-4 overflow-hidden'>
      
      {/* Animated Background Elements */}
      <div className='absolute inset-0 -z-10 overflow-hidden pointer-events-none'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-br from-emerald-200/20 via-green-200/15 to-teal-200/20 rounded-full blur-3xl animate-blob-float'></div>
        <div className='absolute top-0 left-1/4 w-64 h-64 bg-emerald-300/10 rounded-full blur-3xl animate-float-slow'></div>
        <div className='absolute bottom-0 right-1/4 w-72 h-72 bg-teal-300/10 rounded-full blur-3xl animate-float-slow animation-delay-2000'></div>
      </div>

      {/* Decorative Elements */}
      <div className='absolute top-10 left-10 sm:left-20 w-16 h-16 border-4 border-emerald-200/30 rounded-full animate-pulse-rotate'></div>
      <div className='absolute bottom-10 right-10 sm:right-20 w-20 h-20 border-4 border-teal-200/30 rounded-2xl animate-rotate-slow'></div>
      
      {/* Floating Particles */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className='absolute top-1/4 left-1/3 w-2 h-2 bg-emerald-400 rounded-full'
      />
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className='absolute top-1/3 right-1/3 w-3 h-3 bg-teal-400 rounded-full'
      />

      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='relative z-10 max-w-4xl w-full bg-white/60 backdrop-blur-xl rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl border-2 border-emerald-100/50'
      >
        {/* Gradient Border Animation */}
        <div className='absolute inset-0 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 opacity-0 hover:opacity-20 blur-xl transition-opacity duration-500 rounded-3xl -z-10'></div>

        {/* Badge */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-gradient-to-r from-emerald-100 via-green-100 to-teal-100 rounded-full border-2 border-emerald-200/50 shadow-lg'
        >
          <span className='relative flex items-center justify-center'>
            <span className='absolute w-3 h-3 bg-emerald-500 rounded-full animate-ping'></span>
            <span className='relative w-2 h-2 bg-emerald-600 rounded-full'></span>
          </span>
          <span className='text-sm font-bold text-emerald-700'>Stay Updated</span>
        </motion.div>

        {/* Heading with Gradient Text */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight'
        >
          <span className='text-gray-800'>Never Miss</span>{' '}
          <span className='relative inline-block'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-500 to-teal-600 animate-gradient-flow bg-[length:200%_auto]'>
              Shas Blog
            </span>
            <motion.span 
              className='absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 rounded-full'
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='text-base sm:text-lg md:text-xl text-gray-600 pb-8 sm:pb-10 max-w-2xl mx-auto font-medium leading-relaxed'
        >
          Join <span className='text-emerald-600 font-bold'>10,000+</span> subscribers and get the latest insights on technology, design, and innovation delivered straight to your inbox
        </motion.p>

        {/* Subscription Form */}
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form 
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className='flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0 max-w-2xl w-full mx-auto relative'
            >
              {/* Input Container */}
              <div className={`relative flex-1 group transition-all duration-500 ${isFocused ? 'scale-105' : ''}`}>
                {/* Animated Border */}
                <div className={`absolute inset-0 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 rounded-xl sm:rounded-r-none transition-all duration-500 ${
                  isFocused ? 'opacity-20 blur-md' : 'opacity-0'
                }`}></div>

                {/* Email Icon */}
                <div className='absolute left-5 top-1/2 -translate-y-1/2 z-20'>
                  <svg 
                    className={`w-5 h-5 transition-all duration-500 ${
                      isFocused ? 'text-emerald-600 scale-110' : 'text-gray-400'
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>

                <input 
                  className={`w-full h-14 sm:h-16 pl-14 pr-5 border-2 rounded-xl sm:rounded-r-none outline-none font-semibold text-sm sm:text-base transition-all duration-300 relative z-10 bg-white/90 backdrop-blur-sm ${
                    isFocused 
                      ? 'border-emerald-400 ring-4 ring-emerald-100 text-gray-800' 
                      : 'border-emerald-200/50 text-gray-600'
                  }`}
                  type="email" 
                  placeholder='Enter your email address' 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  required
                />

                {/* Typing Animation Indicator */}
                {email && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className='absolute right-5 top-1/2 -translate-y-1/2 z-20'
                  >
                    <svg className='w-5 h-5 text-green-500' fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                )}
              </div>

              {/* Submit Button */}
              <motion.button 
                type='submit'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='h-14 sm:h-16 px-8 sm:px-12 text-white font-black text-sm sm:text-base bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-600 hover:via-green-600 hover:to-teal-600 transition-all duration-300 cursor-pointer rounded-xl sm:rounded-l-none shadow-xl hover:shadow-2xl hover:shadow-emerald-500/50 relative overflow-hidden group z-10'
              >
                <span className='relative z-10 flex items-center justify-center gap-2'>
                  Subscribe Now
                  <svg className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>

                {/* Shimmer Effect */}
                <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000'></div>

                {/* Pulsing Glow */}
                <div className='absolute inset-0 bg-emerald-400 opacity-0 group-hover:opacity-20 blur-xl animate-pulse-glow'></div>
              </motion.button>
            </motion.form>
          ) : (
            // Success Message
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className='max-w-md mx-auto'
            >
              <div className='bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-2xl p-8 text-center shadow-xl'>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  className='w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg'
                >
                  <svg className='w-10 h-10 text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <h3 className='text-2xl font-black text-gray-800 mb-2'>Successfully Subscribed! 🎉</h3>
                <p className='text-gray-600 font-medium'>Check your inbox for a confirmation email</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className='flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-8 sm:mt-10 text-sm'
        >
          {[
            { icon: 'M5 13l4 4L19 7', text: 'No spam, ever' },
            { icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z', text: 'Secure & private' },
            { icon: 'M13 10V3L4 14h7v7l9-11h-7z', text: 'Instant updates' }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8 + idx * 0.1 }}
              className='flex items-center gap-2 text-gray-600 font-semibold'
            >
              <div className='w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center'>
                <svg className='w-4 h-4 text-emerald-600' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
              </div>
              {item.text}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes blob-float {
          0%, 100% { 
            transform: translate(0, 0) scale(1) rotate(0deg);
          }
          33% { 
            transform: translate(30px, -30px) scale(1.05) rotate(120deg);
          }
          66% { 
            transform: translate(-20px, 20px) scale(0.95) rotate(240deg);
          }
        }

        @keyframes float-slow {
          0%, 100% { 
            transform: translateY(0);
          }
          50% { 
            transform: translateY(-20px);
          }
        }

        @keyframes pulse-rotate {
          0%, 100% { 
            transform: scale(1) rotate(0deg);
            opacity: 0.3;
          }
          50% { 
            transform: scale(1.1) rotate(180deg);
            opacity: 0.15;
          }
        }

        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.3; }
        }

        .animate-blob-float {
          animation: blob-float 10s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .animate-pulse-rotate {
          animation: pulse-rotate 6s ease-in-out infinite;
        }

        .animate-rotate-slow {
          animation: rotate-slow 20s linear infinite;
        }

        .animate-gradient-flow {
          animation: gradient-flow 4s ease infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  )
}

export default NewsLetter