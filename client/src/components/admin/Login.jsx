// import React, { useState } from 'react'

// const Login = () => {
//   const [focusedField, setFocusedField] = useState(null)
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//   }

//   return (
//     <div className='flex items-center justify-center min-h-screen p-4'>
//       <div className='w-full max-w-md p-8 bg-white border border-primary/30 shadow-xl rounded-2xl backdrop-blur-sm transform transition-all duration-300 hover:shadow-primary/15'>
        
//         {/* Header Section */}
//         <div className='flex flex-col items-center justify-center mb-8'>
//           <div className='w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mb-4 shadow-lg'>
//             <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
//               <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
//             </svg>
//           </div>
          
//           <h1 className='text-3xl font-bold mb-2'>
//             <span className='bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent'>
//               Admin Login
//             </span>
//           </h1>
//           <p className='text-gray-500 text-sm text-center font-light'>
//             Enter your credentials to access the dashboard
//           </p>
//         </div>

//         {/* Form Section */}
//         <div className='space-y-6'>
          
//           {/* Email Field */}
//           <div className='relative'>
//             <label className={`block text-sm font-medium mb-2 transition-colors duration-200 ${focusedField === 'email' ? 'text-primary' : 'text-gray-700'}`}>
//               Email Address
//             </label>
//             <div className='relative'>
//               <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
//                 <svg className={`w-5 h-5 transition-colors duration-200 ${focusedField === 'email' ? 'text-primary' : 'text-gray-400'}`} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
//                   <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207' />
//                 </svg>
//               </div>
//               <input 
//                 type='email'
//                 onChange={e=>setEmail(e.target.value)} value={email}
//                 required 
//                 placeholder='Enter your Email' 
//                 onFocus={() => setFocusedField('email')}
//                 onBlur={() => setFocusedField(null)}
//                 className='w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 hover:border-gray-300'
//               />
//             </div>
//           </div>

//           {/* Password Field */}
//           <div className='relative'>
//             <label className={`block text-sm font-medium mb-2 transition-colors duration-200 ${focusedField === 'password' ? 'text-primary' : 'text-gray-700'}`}>
//               Password
//             </label>
//             <div className='relative'>
//               <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
//                 <svg className={`w-5 h-5 transition-colors duration-200 ${focusedField === 'password' ? 'text-primary' : 'text-gray-400'}`} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
//                   <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
//                 </svg>
//               </div>
//               <input 
//                 type='password' 
//                 onChange={e=>setPassword(e.target.value)} value={password}
//                 required 
//                 placeholder='Enter your Password' 
//                 onFocus={() => setFocusedField('password')}
//                 onBlur={() => setFocusedField(null)}
//                 className='w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 hover:border-gray-300'
//               />
//             </div>
//           </div>

//           {/* Remember Me & Forgot Password */}
//           <div className='flex items-center justify-between text-sm'>
//             <label className='flex items-center cursor-pointer group'>
//               <input type='checkbox' className='w-4 h-4 text-primary border-gray-300 rounded focus:ring-2 focus:ring-primary/20 cursor-pointer' />
//               <span className='ml-2 text-gray-600 group-hover:text-gray-900 transition-colors duration-200'>Remember me</span>
//             </label>
//             <button className='text-primary hover:text-primary/80 font-medium transition-colors duration-200 hover:underline'>
//               Forgot password?
//             </button>
//           </div>

//           {/* Submit Button */}
//           <button 
//             onClick={handleSubmit}
//             className='w-full bg-gradient-to-r from-primary to-primary/80 text-white py-3 rounded-lg font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transform hover:-translate-y-0.5 transition-all duration-200 active:scale-95'
//           >
//             Sign In
//           </button>
//         </div>

//         {/* Footer */}
//         <div className='mt-6 text-center'>
//           <p className='text-sm text-gray-500'>
//             Protected by enterprise-grade security
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Login = () => {
  const [focusedField, setFocusedField] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className='relative flex items-center justify-center min-h-screen p-4 overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50'>
      
      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-20 left-20 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl animate-blob-float'></div>
        <div className='absolute bottom-20 right-20 w-80 h-80 bg-teal-300/20 rounded-full blur-3xl animate-blob-float animation-delay-2000'></div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-300/10 rounded-full blur-3xl animate-pulse-slow'></div>
      </div>

      {/* Floating Particles */}
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          x: [0, 15, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 6, repeat: Infinity }}
        className='absolute top-1/4 left-1/4 w-4 h-4 bg-emerald-400 rounded-full shadow-lg'
      />
      <motion.div
        animate={{ 
          y: [0, -40, 0],
          x: [0, -20, 0],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{ duration: 7, repeat: Infinity, delay: 1 }}
        className='absolute top-1/3 right-1/3 w-3 h-3 bg-teal-400 rounded-full shadow-lg'
      />
      <motion.div
        animate={{ 
          y: [0, -35, 0],
          x: [0, 10, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 5.5, repeat: Infinity, delay: 2 }}
        className='absolute bottom-1/4 right-1/4 w-3.5 h-3.5 bg-green-400 rounded-full shadow-lg'
      />

      {/* Login Card */}
      <motion.div 
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className='relative w-full max-w-md'
      >
        <div className='relative p-8 sm:p-10 bg-white/80 backdrop-blur-2xl border-2 border-emerald-100/50 shadow-2xl rounded-3xl transform transition-all duration-300 hover:shadow-emerald-500/20 overflow-hidden'>
          
          {/* Gradient Border Animation */}
          <div className='absolute inset-0 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 opacity-0 hover:opacity-10 blur-2xl transition-opacity duration-500 rounded-3xl -z-10'></div>

          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='flex flex-col items-center justify-center mb-10'
          >
            {/* Logo Icon */}
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className='relative w-20 h-20 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-5 shadow-xl shadow-emerald-500/30'
            >
              <svg className='w-10 h-10 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
              </svg>
              
              {/* Pulsing Glow */}
              <div className='absolute inset-0 bg-emerald-400 opacity-30 blur-xl rounded-2xl animate-pulse-glow'></div>
            </motion.div>
            
            <h1 className='text-3xl sm:text-4xl font-black mb-2'>
              <span className='bg-gradient-to-r from-emerald-600 via-green-500 to-teal-600 bg-clip-text text-transparent'>
                Admin Login
              </span>
            </h1>
            <p className='text-gray-600 text-sm text-center font-semibold'>
              Enter your credentials to access the dashboard
            </p>
          </motion.div>

          {/* Form Section */}
          <motion.form 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onSubmit={handleSubmit}
            className='space-y-6'
          >
            
            {/* Email Field */}
            <div className='relative'>
              <label className={`block text-sm font-bold mb-2 transition-colors duration-300 ${focusedField === 'email' ? 'text-emerald-600' : 'text-gray-700'}`}>
                Email Address
              </label>
              <div className='relative group'>
                {/* Animated Border Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 rounded-xl transition-all duration-500 ${
                  focusedField === 'email' ? 'opacity-25 blur-lg' : 'opacity-0'
                }`}></div>

                {/* Icon */}
                <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10'>
                  <motion.svg 
                    animate={{ 
                      scale: focusedField === 'email' ? 1.1 : 1,
                      rotate: focusedField === 'email' ? 10 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className={`w-5 h-5 transition-colors duration-300 ${focusedField === 'email' ? 'text-emerald-600' : 'text-gray-400'}`} 
                    fill='none' 
                    stroke='currentColor' 
                    viewBox='0 0 24 24'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                  </motion.svg>
                </div>

                <input 
                  type='email'
                  onChange={e => setEmail(e.target.value)} 
                  value={email}
                  required 
                  placeholder='admin@shascodes.com' 
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className={`relative w-full pl-12 pr-4 py-3.5 border-2 rounded-xl outline-none transition-all duration-300 font-semibold text-sm bg-white/80 backdrop-blur-sm ${
                    focusedField === 'email' 
                      ? 'border-emerald-400 ring-4 ring-emerald-100 shadow-lg' 
                      : 'border-emerald-200/50 hover:border-emerald-300'
                  }`}
                />

                {/* Validation Check */}
                {email && email.includes('@') && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    className='absolute right-4 top-1/2 -translate-y-1/2'
                  >
                    <div className='w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shadow-lg'>
                      <svg className='w-4 h-4 text-white' fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Password Field */}
            <div className='relative'>
              <label className={`block text-sm font-bold mb-2 transition-colors duration-300 ${focusedField === 'password' ? 'text-emerald-600' : 'text-gray-700'}`}>
                Password
              </label>
              <div className='relative group'>
                {/* Animated Border Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 rounded-xl transition-all duration-500 ${
                  focusedField === 'password' ? 'opacity-25 blur-lg' : 'opacity-0'
                }`}></div>

                {/* Icon */}
                <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10'>
                  <motion.svg 
                    animate={{ 
                      scale: focusedField === 'password' ? 1.1 : 1,
                      rotate: focusedField === 'password' ? -10 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className={`w-5 h-5 transition-colors duration-300 ${focusedField === 'password' ? 'text-emerald-600' : 'text-gray-400'}`} 
                    fill='none' 
                    stroke='currentColor' 
                    viewBox='0 0 24 24'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
                  </motion.svg>
                </div>

                <input 
                  type={showPassword ? 'text' : 'password'}
                  onChange={e => setPassword(e.target.value)} 
                  value={password}
                  required 
                  placeholder='Enter your password' 
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                  className={`relative w-full pl-12 pr-12 py-3.5 border-2 rounded-xl outline-none transition-all duration-300 font-semibold text-sm bg-white/80 backdrop-blur-sm ${
                    focusedField === 'password' 
                      ? 'border-emerald-400 ring-4 ring-emerald-100 shadow-lg' 
                      : 'border-emerald-200/50 hover:border-emerald-300'
                  }`}
                />

                {/* Show/Hide Password Toggle */}
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-emerald-600 transition-colors duration-300 z-10'
                >
                  {showPassword ? (
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21' />
                    </svg>
                  ) : (
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className='flex items-center justify-between text-sm'>
              <label className='flex items-center cursor-pointer group'>
                <input 
                  type='checkbox' 
                  className='w-4 h-4 text-emerald-600 border-emerald-300 rounded focus:ring-2 focus:ring-emerald-100 cursor-pointer transition-all duration-300' 
                />
                <span className='ml-2 text-gray-600 group-hover:text-emerald-700 font-semibold transition-colors duration-300'>
                  Remember me
                </span>
              </label>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type='button'
                className='text-emerald-600 hover:text-emerald-700 font-bold transition-colors duration-300 hover:underline'
              >
                Forgot password?
              </motion.button>
            </div>

            {/* Submit Button */}
            <motion.button 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              type='submit'
              disabled={isLoading}
              className='relative w-full bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 text-white py-4 rounded-xl font-black text-base shadow-xl shadow-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed'
            >
              <span className='relative z-10 flex items-center justify-center gap-2'>
                {isLoading ? (
                  <>
                    <svg className='animate-spin w-5 h-5' fill='none' viewBox='0 0 24 24'>
                      <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                      <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                    </svg>
                    Signing In...
                  </>
                ) : (
                  <>
                    Sign In
                    <svg className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                    </svg>
                  </>
                )}
              </span>

              {/* Multi-Layer Shimmer Effect */}
              <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000'></div>
              <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 delay-150'></div>

              {/* Hover Gradient Overlay */}
              <div className='absolute inset-0 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </motion.button>
          </motion.form>

          {/* Footer */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className='mt-8 text-center'
          >
            <div className='flex items-center justify-center gap-2 text-xs text-gray-500 font-semibold'>
              <svg className='w-4 h-4 text-emerald-600' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
              </svg>
              Protected by enterprise-grade security
            </div>
          </motion.div>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes blob-float {
          0%, 100% { 
            transform: translate(0, 0) scale(1) rotate(0deg);
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          25% { 
            transform: translate(30px, -40px) scale(1.05) rotate(90deg);
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
          50% { 
            transform: translate(-25px, 25px) scale(0.95) rotate(180deg);
            border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%;
          }
          75% { 
            transform: translate(35px, 15px) scale(1.02) rotate(270deg);
            border-radius: 60% 40% 60% 40% / 70% 30% 50% 60%;
          }
        }

        @keyframes pulse-slow {
          0%, 100% { 
            opacity: 0.1;
            transform: scale(1);
          }
          50% { 
            opacity: 0.15;
            transform: scale(1.05);
          }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }

        .animate-blob-float {
          animation: blob-float 12s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
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

export default Login