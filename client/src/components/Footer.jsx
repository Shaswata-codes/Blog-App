import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-b from-primary/5 via-primary/3 to-white">
      
      {/* Top footer content */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-12 md:gap-16 py-12 md:py-16 border-b border-gray-300/30">
        
        {/* Left section */}
        <div className="max-w-md">
          <img
            src={assets.logo}
            alt="Logo"
            className="w-36 sm:w-48 mb-6 hover:scale-105 transition-transform duration-300"
          />
          <p className="text-gray-600 leading-relaxed text-base">
            Subscribe to get latest infos about tech and news
          </p>
        </div>

        {/* Right section */}
        <div className="flex flex-wrap justify-between w-full md:w-[50%] gap-8 md:gap-12">
          {footer_data.map((section, index) => (
            <div key={index} className="min-w-[120px]">
              <h3 className="font-bold text-base md:text-lg text-gray-900 mb-4 md:mb-6 tracking-tight">
                {section.title}
              </h3>

              <ul className="text-sm space-y-3">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-primary hover:translate-x-1 inline-block transition-all duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom copyright */}
      <p className="text-center py-6 text-sm text-gray-500 font-medium">
        © 2026 Shas Codes — All Rights Reserved
      </p>
    </div>
  )
}

export default Footer