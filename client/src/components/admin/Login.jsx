import React, { useState } from 'react'

const Login = () => {
  const [focusedField, setFocusedField] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  return (
    <div className='flex items-center justify-center min-h-screen p-4'>
      <div className='w-full max-w-md p-8 bg-white border border-primary/30 shadow-xl rounded-2xl backdrop-blur-sm transform transition-all duration-300 hover:shadow-primary/15'>
        
        {/* Header Section */}
        <div className='flex flex-col items-center justify-center mb-8'>
          <div className='w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mb-4 shadow-lg'>
            <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
            </svg>
          </div>
          
          <h1 className='text-3xl font-bold mb-2'>
            <span className='bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent'>
              Admin Login
            </span>
          </h1>
          <p className='text-gray-500 text-sm text-center font-light'>
            Enter your credentials to access the dashboard
          </p>
        </div>

        {/* Form Section */}
        <div className='space-y-6'>
          
          {/* Email Field */}
          <div className='relative'>
            <label className={`block text-sm font-medium mb-2 transition-colors duration-200 ${focusedField === 'email' ? 'text-primary' : 'text-gray-700'}`}>
              Email Address
            </label>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <svg className={`w-5 h-5 transition-colors duration-200 ${focusedField === 'email' ? 'text-primary' : 'text-gray-400'}`} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207' />
                </svg>
              </div>
              <input 
                type='email'
                onChange={e=>setEmail(e.target.value)} value={email}
                required 
                placeholder='Enter your Email' 
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className='w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 hover:border-gray-300'
              />
            </div>
          </div>

          {/* Password Field */}
          <div className='relative'>
            <label className={`block text-sm font-medium mb-2 transition-colors duration-200 ${focusedField === 'password' ? 'text-primary' : 'text-gray-700'}`}>
              Password
            </label>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <svg className={`w-5 h-5 transition-colors duration-200 ${focusedField === 'password' ? 'text-primary' : 'text-gray-400'}`} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
                </svg>
              </div>
              <input 
                type='password' 
                onChange={e=>setPassword(e.target.value)} value={password}
                required 
                placeholder='Enter your Password' 
                onFocus={() => setFocusedField('password')}
                onBlur={() => setFocusedField(null)}
                className='w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 hover:border-gray-300'
              />
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className='flex items-center justify-between text-sm'>
            <label className='flex items-center cursor-pointer group'>
              <input type='checkbox' className='w-4 h-4 text-primary border-gray-300 rounded focus:ring-2 focus:ring-primary/20 cursor-pointer' />
              <span className='ml-2 text-gray-600 group-hover:text-gray-900 transition-colors duration-200'>Remember me</span>
            </label>
            <button className='text-primary hover:text-primary/80 font-medium transition-colors duration-200 hover:underline'>
              Forgot password?
            </button>
          </div>

          {/* Submit Button */}
          <button 
            onClick={handleSubmit}
            className='w-full bg-gradient-to-r from-primary to-primary/80 text-white py-3 rounded-lg font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transform hover:-translate-y-0.5 transition-all duration-200 active:scale-95'
          >
            Sign In
          </button>
        </div>

        {/* Footer */}
        <div className='mt-6 text-center'>
          <p className='text-sm text-gray-500'>
            Protected by enterprise-grade security
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login