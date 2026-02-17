import { assets } from "../assets/assets"
import { useState, useEffect } from "react"

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [searchFocused, setSearchFocused] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
        <div className="mx-4 sm:mx-8 md:mx-16 xl:mx-24 relative overflow-hidden py-8 sm:py-12">
            {/* Dynamic Animated Background with Mouse Parallax */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div 
                    className="absolute w-[600px] h-[600px] bg-gradient-to-br from-emerald-400/30 to-teal-400/20 rounded-full blur-3xl animate-blob-float"
                    style={{
                        top: `${10 + mousePosition.y * 0.05}%`,
                        left: `${5 + mousePosition.x * 0.03}%`,
                    }}
                ></div>
                <div 
                    className="absolute w-[500px] h-[500px] bg-gradient-to-br from-green-400/25 to-emerald-400/20 rounded-full blur-3xl animate-blob-float animation-delay-2000"
                    style={{
                        top: `${15 + mousePosition.y * 0.04}%`,
                        right: `${5 + mousePosition.x * 0.02}%`,
                    }}
                ></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-t from-teal-300/20 to-transparent rounded-full blur-3xl animate-blob-float animation-delay-4000"></div>
                
                {/* Mesh Gradient Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)] animate-pulse-slow"></div>
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-[10%] w-2 h-2 bg-emerald-400 rounded-full animate-float-particle"></div>
                <div className="absolute top-40 right-[15%] w-3 h-3 bg-teal-400 rounded-full animate-float-particle animation-delay-1000"></div>
                <div className="absolute bottom-40 left-[20%] w-2.5 h-2.5 bg-green-400 rounded-full animate-float-particle animation-delay-2000"></div>
                <div className="absolute top-60 right-[25%] w-2 h-2 bg-emerald-300 rounded-full animate-float-particle animation-delay-3000"></div>
            </div>

            <div className={`text-center mt-8 sm:mt-12 mb-16 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                {/* Badge with Enhanced Animations */}
                <div className="inline-flex items-center justify-center gap-3 px-7 py-3.5
                mb-8 border-2 border-emerald-400/50 bg-gradient-to-r from-emerald-50 via-green-50 to-teal-50 rounded-full text-sm font-bold text-emerald-700 shadow-xl hover:shadow-2xl hover:shadow-emerald-200/50 hover:scale-110 transition-all duration-500 cursor-default animate-fade-in-down group relative overflow-hidden backdrop-blur-sm">
                    
                    {/* Animated Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 via-green-100 to-teal-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <p className="flex items-center gap-2.5 relative z-10">
                        <span className="relative flex items-center justify-center">
                            <span className="absolute w-3 h-3 bg-emerald-500 rounded-full animate-ping"></span>
                            <span className="absolute w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
                            <span className="relative w-2.5 h-2.5 bg-emerald-600 rounded-full"></span>
                        </span>
                        <span className="animate-text-shimmer bg-gradient-to-r from-emerald-700 via-green-600 to-emerald-700 bg-clip-text text-transparent bg-[length:200%_100%]">
                            New: AI features integrated
                        </span>
                    </p>
                    <img src={assets.star_icon} className='w-5 relative z-10 animate-spin-slow group-hover:animate-wiggle' alt="" />
                    
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>

                {/* Main Heading with Advanced Text Animations */}
                <div className="relative mb-6">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black sm:leading-tight md:leading-tight
                    text-gray-800 tracking-tight animate-fade-in-up animation-delay-200 relative">
                        <span className="inline-block animate-slide-up">Your</span>{' '}
                        <span className="relative inline-block group/blogging">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-500 to-teal-600 animate-gradient-flow bg-[length:200%_auto]">
                                Blogging
                            </span>
                            
                            {/* Multiple Underline Effects */}
                            <span className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 rounded-full animate-expand shadow-lg shadow-emerald-400/50"></span>
                            <span className="absolute -bottom-4 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-300 via-green-300 to-teal-300 rounded-full animate-expand animation-delay-200 opacity-60"></span>
                            
                            {/* Floating Sparkles */}
                            <span className="absolute -top-8 -right-4 w-3 h-3 bg-emerald-400 rounded-full animate-sparkle opacity-0"></span>
                            <span className="absolute -top-6 right-8 w-2 h-2 bg-teal-400 rounded-full animate-sparkle animation-delay-500 opacity-0"></span>
                        </span>
                        <br className="hidden sm:block"/>
                        <span className="relative inline-block mt-2 animate-slide-up animation-delay-400">
                            <span className="text-gray-700">Platform</span>
                            
                            {/* Animated Star Icon */}
                            <svg className="absolute -top-6 sm:-top-8 -right-8 sm:-right-12 w-12 h-12 sm:w-16 sm:h-16 text-emerald-400 opacity-60 animate-float-rotate" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                            
                            {/* Decorative Lines */}
                            <span className="absolute top-1/2 -left-20 sm:-left-28 w-12 sm:w-20 h-0.5 bg-gradient-to-r from-transparent to-emerald-300 animate-expand-horizontal"></span>
                            <span className="absolute top-1/2 -right-20 sm:-right-28 w-12 sm:w-20 h-0.5 bg-gradient-to-l from-transparent to-teal-300 animate-expand-horizontal animation-delay-200"></span>
                        </span>
                    </h1>
                </div>

                {/* Enhanced Subtitle with Typewriter Effect */}
                <p className="my-8 sm:my-10 max-w-3xl mx-auto text-base sm:text-lg md:text-xl
                text-gray-600 leading-relaxed px-6 animate-fade-in-up animation-delay-500 font-medium">
                    <span className="inline-block animate-slide-up animation-delay-600">Discover,</span>{' '}
                    <span className="inline-block animate-slide-up animation-delay-700">create,</span>{' '}
                    <span className="inline-block animate-slide-up animation-delay-800">and</span>{' '}
                    <span className="inline-block animate-slide-up animation-delay-900">share</span>{' '}
                    <span className="inline-block animate-slide-up animation-delay-1000">amazing</span>{' '}
                    <span className="inline-block animate-slide-up animation-delay-1100">stories</span>{' '}
                    <span className="inline-block animate-slide-up animation-delay-1200">with</span>{' '}
                    <span className="inline-block animate-slide-up animation-delay-1300">our</span>{' '}
                    <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 font-bold animate-slide-up animation-delay-1400">AI-powered</span>{' '}
                    <span className="inline-block animate-slide-up animation-delay-1500">blogging</span>{' '}
                    <span className="inline-block animate-slide-up animation-delay-1600">platform</span>
                </p>

                {/* Super Enhanced Search Form */}
                <div className="max-w-2xl mx-auto mt-10 sm:mt-12 px-4 animate-fade-in-up animation-delay-700">
                    <form className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0 p-1.5
                    border-2 bg-white/80 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 relative group
                    ${searchFocused ? 'border-emerald-400 ring-8 ring-emerald-100/50 scale-105 shadow-emerald-500/30' : 'border-emerald-200/50'}`}>
                        
                        {/* Animated Multi-Layer Border */}
                        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 animate-border-flow"></div>
                        <div className={`absolute inset-0 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 opacity-0 transition-opacity duration-500 ${searchFocused ? 'opacity-10' : ''}`}></div>
                        
                        {/* Search Icon with Enhanced Animation */}
                        <div className={`absolute left-5 sm:left-6 top-1/2 -translate-y-1/2 text-emerald-500 transition-all duration-500 z-20 ${searchFocused ? 'scale-125 rotate-90' : ''}`}>
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            
                            {/* Ripple Effect */}
                            {searchFocused && (
                                <span className="absolute inset-0 -m-2 border-2 border-emerald-400 rounded-full animate-ping"></span>
                            )}
                        </div>

                        <input 
                            type="text" 
                            placeholder="Search for inspiring blogs..." 
                            required 
                            onFocus={() => setSearchFocused(true)}
                            onBlur={() => setSearchFocused(false)}
                            className="flex-1 pl-14 sm:pl-16 pr-4 py-4 sm:py-5 outline-none text-gray-700 placeholder:text-gray-400 bg-transparent relative z-10 font-semibold text-sm sm:text-base"
                        />
                        
                        <button 
                            type="submit" 
                            className="bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 text-white px-8 sm:px-12 py-4 sm:py-5
                            rounded-xl font-black text-sm sm:text-base hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/60 active:scale-95 transition-all duration-300 cursor-pointer whitespace-nowrap relative overflow-hidden group/btn z-10">
                            
                            {/* Button Content */}
                            <span className="relative z-10 flex items-center gap-2.5">
                                <span className="hidden sm:inline">Search Now</span>
                                <span className="sm:hidden">Search</span>
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                            
                            {/* Animated Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                            
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                            
                            {/* Pulsing Glow */}
                            <div className="absolute inset-0 bg-emerald-400 opacity-0 group-hover/btn:opacity-20 blur-xl animate-pulse-glow"></div>
                        </button>
                    </form>
                    
                    {/* Quick Search Tags */}
                    <div className="flex flex-wrap justify-center gap-2 mt-6 animate-fade-in animation-delay-1000">
                        {['Technology', 'Design', 'Business', 'Lifestyle'].map((tag, index) => (
                            <button 
                                key={tag}
                                className="px-4 py-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full hover:bg-emerald-100 hover:border-emerald-300 hover:scale-110 hover:shadow-lg transition-all duration-300 animate-fade-in"
                                style={{ animationDelay: `${1200 + index * 100}ms` }}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Enhanced Floating Stats with 3D Effect */}
                <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-16 sm:mt-20 animate-fade-in animation-delay-1000">
                    {[
                        { count: '10K+', label: 'Blogs', gradient: 'from-emerald-500 to-teal-500', shadow: 'emerald' },
                        { count: '5K+', label: 'Authors', gradient: 'from-green-500 to-emerald-500', shadow: 'green' },
                        { count: '50K+', label: 'Readers', gradient: 'from-teal-500 to-green-500', shadow: 'teal' }
                    ].map((stat, index) => (
                        <div 
                            key={stat.label}
                            className="flex flex-col items-center gap-2 group cursor-default animate-fade-in-up perspective-1000"
                            style={{ animationDelay: `${1200 + index * 150}ms` }}
                        >
                            <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center text-white font-black text-lg sm:text-xl shadow-xl group-hover:shadow-2xl group-hover:shadow-${stat.shadow}-500/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 transform-gpu relative overflow-hidden`}>
                                <span className="relative z-10">{stat.count}</span>
                                
                                {/* Animated Background */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                {/* Shine Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            </div>
                            <p className="text-sm sm:text-base font-bold text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

            </div>

            {/* Enhanced Decorative Elements */}
            <div className="absolute top-40 left-8 w-24 h-24 border-4 border-emerald-200/40 rounded-full animate-pulse-rotate opacity-40"></div>
            <div className="absolute bottom-32 right-12 w-20 h-20 border-4 border-teal-200/40 rounded-full animate-bounce-slow opacity-40"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border-4 border-green-200/30 rounded-2xl animate-rotate-slow opacity-30"></div>
            
            {/* Gradient Background Image */}
            <img src={assets.gradientBackground} alt="" className="absolute -top-32 left-1/2 -translate-x-1/2 -z-20 opacity-15 w-full max-w-5xl pointer-events-none animate-pulse-slow scale-110" />

            <style jsx>{`
                @keyframes blob-float {
                    0%, 100% { 
                        transform: translate(0, 0) scale(1) rotate(0deg);
                        border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
                    }
                    25% { 
                        transform: translate(20px, -30px) scale(1.05) rotate(90deg);
                        border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
                    }
                    50% { 
                        transform: translate(-20px, 20px) scale(0.95) rotate(180deg);
                        border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%;
                    }
                    75% { 
                        transform: translate(30px, 10px) scale(1.02) rotate(270deg);
                        border-radius: 60% 40% 60% 40% / 70% 30% 50% 60%;
                    }
                }

                @keyframes float-particle {
                    0%, 100% { 
                        transform: translateY(0) translateX(0);
                        opacity: 0.3;
                    }
                    25% { 
                        transform: translateY(-40px) translateX(20px);
                        opacity: 0.6;
                    }
                    50% { 
                        transform: translateY(-80px) translateX(-10px);
                        opacity: 1;
                    }
                    75% { 
                        transform: translateY(-120px) translateX(15px);
                        opacity: 0.4;
                    }
                    100% { 
                        transform: translateY(-160px) translateX(0);
                        opacity: 0;
                    }
                }

                @keyframes text-shimmer {
                    0% { background-position: 0% 50%; }
                    100% { background-position: 200% 50%; }
                }

                @keyframes gradient-flow {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }

                @keyframes border-flow {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                @keyframes sparkle {
                    0%, 100% { 
                        opacity: 0;
                        transform: scale(0) rotate(0deg);
                    }
                    50% { 
                        opacity: 1;
                        transform: scale(1) rotate(180deg);
                    }
                }

                @keyframes float-rotate {
                    0%, 100% { 
                        transform: translateY(0) rotate(0deg);
                    }
                    50% { 
                        transform: translateY(-15px) rotate(10deg);
                    }
                }

                @keyframes expand-horizontal {
                    from {
                        width: 0;
                        opacity: 0;
                    }
                    to {
                        width: 100%;
                        opacity: 1;
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

                @keyframes pulse-glow {
                    0%, 100% { opacity: 0; }
                    50% { opacity: 0.3; }
                }

                @keyframes pulse-rotate {
                    0%, 100% { 
                        transform: scale(1) rotate(0deg);
                        opacity: 0.4;
                    }
                    50% { 
                        transform: scale(1.1) rotate(180deg);
                        opacity: 0.2;
                    }
                }

                @keyframes rotate-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                @keyframes wiggle {
                    0%, 100% { transform: rotate(0deg); }
                    25% { transform: rotate(-10deg); }
                    75% { transform: rotate(10deg); }
                }

                @keyframes fade-in-down {
                    from {
                        opacity: 0;
                        transform: translateY(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
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

                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes expand {
                    from {
                        width: 0;
                        opacity: 0;
                    }
                    to {
                        width: 100%;
                        opacity: 1;
                    }
                }

                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-25px); }
                }

                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.15; }
                    50% { opacity: 0.3; }
                }

                .animate-blob-float {
                    animation: blob-float 8s ease-in-out infinite;
                }

                .animate-float-particle {
                    animation: float-particle 6s ease-in-out infinite;
                }

                .animate-text-shimmer {
                    animation: text-shimmer 3s linear infinite;
                }

                .animate-gradient-flow {
                    animation: gradient-flow 4s ease infinite;
                }

                .animate-border-flow {
                    animation: border-flow 3s linear infinite;
                }

                .animate-sparkle {
                    animation: sparkle 2s ease-in-out infinite;
                }

                .animate-float-rotate {
                    animation: float-rotate 4s ease-in-out infinite;
                }

                .animate-expand-horizontal {
                    animation: expand-horizontal 1s ease-out forwards;
                }

                .animate-slide-up {
                    animation: slide-up 0.6s ease-out forwards;
                }

                .animate-pulse-glow {
                    animation: pulse-glow 2s ease-in-out infinite;
                }

                .animate-pulse-rotate {
                    animation: pulse-rotate 4s ease-in-out infinite;
                }

                .animate-rotate-slow {
                    animation: rotate-slow 20s linear infinite;
                }

                .animate-wiggle {
                    animation: wiggle 0.5s ease-in-out infinite;
                }

                .animate-fade-in-down {
                    animation: fade-in-down 0.8s ease-out forwards;
                }

                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                }

                .animate-fade-in {
                    animation: fade-in 1s ease-out forwards;
                }

                .animate-expand {
                    animation: expand 1s ease-out forwards;
                }

                .animate-bounce-slow {
                    animation: bounce-slow 3s ease-in-out infinite;
                }

                .animate-pulse-slow {
                    animation: pulse-slow 4s ease-in-out infinite;
                }

                .perspective-1000 {
                    perspective: 1000px;
                }

                .transform-gpu {
                    transform: translateZ(0);
                    will-change: transform;
                }

                /* Staggered Animation Delays */
                .animation-delay-200 { animation-delay: 200ms; }
                .animation-delay-400 { animation-delay: 400ms; }
                .animation-delay-500 { animation-delay: 500ms; }
                .animation-delay-600 { animation-delay: 600ms; }
                .animation-delay-700 { animation-delay: 700ms; }
                .animation-delay-800 { animation-delay: 800ms; }
                .animation-delay-900 { animation-delay: 900ms; }
                .animation-delay-1000 { animation-delay: 1000ms; }
                .animation-delay-1100 { animation-delay: 1100ms; }
                .animation-delay-1200 { animation-delay: 1200ms; }
                .animation-delay-1300 { animation-delay: 1300ms; }
                .animation-delay-1400 { animation-delay: 1400ms; }
                .animation-delay-1500 { animation-delay: 1500ms; }
                .animation-delay-1600 { animation-delay: 1600ms; }
                .animation-delay-2000 { animation-delay: 2s; }
                .animation-delay-3000 { animation-delay: 3s; }
                .animation-delay-4000 { animation-delay: 4s; }
            `}</style>
        </div>
    )
}

export default Header