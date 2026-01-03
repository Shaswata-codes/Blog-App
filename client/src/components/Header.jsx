import { assets } from "../assets/assets"

const Header = () => {
    return (
        <div className="mx-4 sm:mx-8 md:mx-16 xl:mx-24 relative overflow-hidden">
            <div className="text-center mt-16 sm:mt-20 mb-12 relative z-10">

                <div className="inline-flex items-center justify-center gap-3 px-5 py-2
                mb-6 border border-primary/30 bg-gradient-to-r from-primary/10 via-primary/15 to-primary/10 rounded-full text-sm font-medium text-primary shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default">
                    <p className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                        New: AI features integrated
                    </p>
                    <img src={assets.star_icon} className='w-3 animate-spin-slow' alt="" />
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold sm:leading-tight md:leading-tight
                text-gray-800 mb-4 tracking-tight">
                    Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-pink-600 inline-block">Blogging</span> <br/>
                    <span className="text-gray-700">platform</span>
                </h1>

                <p className="my-6 sm:my-8 max-w-2xl mx-auto text-base sm:text-lg
                text-gray-600 leading-relaxed px-4">
                    This is the best place to write blogs
                </p>

                <form className="flex justify-between max-w-xl mx-auto mt-8 sm:mt-10
                border-2 border-gray-200 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 focus-within:border-primary/50 focus-within:ring-4 focus-within:ring-primary/10 max-sm:scale-90">
                    <input type="text" placeholder="Search for blogs..." required 
                    className="w-full pl-6 py-4 outline-none text-gray-700 placeholder:text-gray-400"/>
                    <button type="submit" className="bg-gradient-to-r from-primary to-purple-600 text-white px-8 sm:px-10 py-4 m-2
                    rounded-xl font-semibold hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-200 cursor-pointer whitespace-nowrap">
                        Search
                    </button>
                </form>

            </div>
            <img src={assets.gradientBackground} alt="" className="absolute -top-20 left-1/2 -translate-x-1/2 -z-10 opacity-40 w-full max-w-4xl pointer-events-none" />
        </div>
    )
}
export default Header