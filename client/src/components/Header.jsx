import { assets } from "../assets/assets"
import { useState, useEffect, useRef } from "react"
import { useAppContext } from "../context/AppContext";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [inputValue, setInputValue] = useState('');
  const { setInput, input } = useAppContext();
  const inputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    setInput(inputValue);
  };

  const onClear = () => {
    setInputValue('');
    setInput('');
  };

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>

      <div
        className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-green-900 to-teal-950"
        style={{
          backgroundPosition: `${mousePosition.x * 0.05}% ${mousePosition.y * 0.05}%`
        }}
      />

      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(ellipse at ${mousePosition.x}% ${mousePosition.y}%, rgba(16,185,129,0.3) 0%, transparent 60%)`
        }}
      />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-emerald-400 rounded-full opacity-30 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        />
      ))}

      {/* Badge */}
      <div className={`relative z-10 flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-8 backdrop-blur-sm transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
        <span className="text-emerald-300 text-sm font-medium">New: AI features integrated</span>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent animate-pulse" />
      </div>

      {/* Main Heading */}
      <div className={`relative z-10 text-center mb-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1 className="text-5xl sm:text-7xl font-black text-white leading-tight tracking-tight">
          Your{' '}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-teal-400 bg-clip-text text-transparent">
              Blogging
            </span>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full" />
          </span>
          {' '}Platform
          <span className="inline-block ml-3 animate-spin" style={{ animationDuration: '8s' }}>✦</span>
        </h1>
      </div>

      {/* Subtitle */}
      <p className={`relative z-10 text-center text-emerald-200/80 text-lg sm:text-xl max-w-2xl mb-12 leading-relaxed transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        Discover, create, and share amazing stories with our AI-powered blogging platform
      </p>

      {/* Search Form */}
      <form
        onSubmit={onSubmit}
        className={`relative z-10 w-full max-w-2xl mx-auto px-4 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className={`relative flex items-center bg-white rounded-2xl shadow-2xl transition-all duration-300 ${searchFocused ? 'shadow-emerald-500/25 scale-105' : ''}`}>

          {/* Animated Border */}
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-400 transition-opacity duration-300 ${searchFocused ? 'opacity-100' : 'opacity-0'}`}
            style={{ padding: '2px', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor' }}
          />

          {/* Search Icon */}
          <div className="absolute left-4 sm:left-5 z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 transition-colors duration-300 ${searchFocused ? 'text-emerald-500' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
          </div>

          {/* Ripple Effect on Focus */}
          {searchFocused && (
            <div className="absolute inset-0 rounded-2xl bg-emerald-50/50 animate-pulse pointer-events-none" />
          )}

          {/* Input */}
          <input
            type="text"
            placeholder="Search blogs, topics, authors..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            className="flex-1 pl-14 sm:pl-16 pr-4 py-4 sm:py-5 outline-none text-gray-700 placeholder:text-gray-400 bg-transparent relative z-10 font-semibold text-sm sm:text-base rounded-2xl"
          />

          {/* Clear Button */}
          {inputValue && (
            <button
              type="button"
              onClick={onClear}
              className="relative z-10 flex items-center justify-center w-8 h-8 mr-1 rounded-full text-gray-400 hover:text-red-400 hover:bg-red-50 transition-all duration-200 group"
              aria-label="Clear search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}

          {/* Search Button */}
          <button
            type="submit"
            className="relative m-2 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/40 hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 hidden sm:block">Search Now</span>
            <span className="relative z-10 sm:hidden">Search</span>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
          </button>
        </div>

        {/* Quick Search Tags */}
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {['Technology', 'Design', 'Business', 'Lifestyle'].map((tag, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                setInputValue(tag);
                setInput(tag);
              }}
              className="px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-emerald-400/50 text-emerald-200 hover:text-white text-xs font-medium rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-105"
            >
              {tag}
            </button>
          ))}
        </div>
      </form>

      {/* Floating Stats */}
      <div className={`relative z-10 flex flex-wrap justify-center gap-6 mt-16 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {[
          { count: '10K+', label: 'Blogs', gradient: 'from-emerald-500 to-teal-500', shadow: 'emerald' },
          { count: '5K+', label: 'Authors', gradient: 'from-green-500 to-emerald-500', shadow: 'green' },
          { count: '50K+', label: 'Readers', gradient: 'from-teal-500 to-green-500', shadow: 'teal' }
        ].map((stat, index) => (
          <div
            key={index}
            className="relative group flex flex-col items-center bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/40 rounded-2xl px-8 py-5 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-default"
          >
            <span className={`text-2xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
              {stat.count}
            </span>
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
            <div className="absolute inset-0 rounded-2xl -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
            <span className="text-emerald-300/70 text-sm font-medium mt-1">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </div>
  );
};

export default Header;