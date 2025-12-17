import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3">
      
      {/* Top footer content */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-400/20 text-gray-500">
        
        {/* Left section */}
        <div>
          <img
            src={assets.logo}
            alt="Logo"
            className="w-32 sm:w-44"
          />
          <p className="max-w-[410px] mt-6">
            Subscribe to get latest infos about tech and news
          </p>
        </div>

        {/* Right section */}
        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {footer_data.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
                {section.title}
              </h3>

              <ul className="text-sm space-y-1">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="hover:underline transition"
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
      <p className="text-center py-4 text-sm text-gray-500">
        © 2026 Shas Codes — All Rights Reserved
      </p>
    </div>
  )
}

export default Footer
