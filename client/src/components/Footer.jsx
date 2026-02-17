import React, { useState } from "react";
import { assets, footer_data } from "../assets/assets";
import { motion } from "framer-motion";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-emerald-50/50 via-green-50/30 to-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-300/10 rounded-full blur-3xl animate-blob-float"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal-300/10 rounded-full blur-3xl animate-blob-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-green-300/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>

      <div className="px-6 md:px-16 lg:px-24 xl:px-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16 py-16 md:py-20 border-b-2 border-emerald-200/50">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-md lg:max-w-lg space-y-6"
          >
            <div className="relative inline-block group">
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-lg opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
              <img
                src={assets.logo}
                alt="Logo"
                className="relative w-36 sm:w-48 mb-4 group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <p className="text-gray-600 leading-relaxed text-base font-medium">
              Join our community and stay updated with the latest insights on
              technology, design, and innovation.
            </p>

            <form onSubmit={handleSubscribe} className="mt-6">
              <p className="text-sm font-bold text-emerald-700 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                Subscribe to our Newsletter
              </p>
              <div className="flex gap-2">
                <div className="relative flex-1 group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-5 py-3 border-2 border-emerald-200 rounded-xl outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 transition-all duration-300 bg-white/80 backdrop-blur-sm font-medium text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Subscribe
                  </span>
                </button>
              </div>
            </form>

            <div className="flex items-center gap-4 pt-4">
              <p className="text-sm font-semibold text-gray-700">Follow Us:</p>
              <div className="flex gap-3">
                {[
                  {
                    icon: "M23 3a10.9 10.9 0 01-3.14 1.53...",
                  },
                  {
                    icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
                  },
                  {
                    icon: "M16 8a6 6 0 016 6v7h-4v-7...",
                  },
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href="#"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 border-2 border-emerald-200/50 text-emerald-700 hover:from-emerald-500 hover:to-teal-500 hover:text-white hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 group"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d={social.icon} />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-between lg:justify-end w-full lg:w-auto gap-8 md:gap-12 lg:gap-16"
          >
            {footer_data.map((section, index) => (
              <motion.div
                key={index}
                className="min-w-[140px]"
              >
                <h3 className="font-black text-base md:text-lg text-gray-900 mb-5 md:mb-6 tracking-tight">
                  {section.title}
                </h3>

                <ul className="text-sm space-y-3">
                  {section.links.map((link, idx) => (
                    <motion.li
                      key={idx}
                      onMouseEnter={() =>
                        setHoveredLink(`${index}-${idx}`)
                      }
                      onMouseLeave={() => setHoveredLink(null)}
                      whileHover={{ x: 5 }}
                    >
                      <a
                        href="#"
                        className="text-gray-600 hover:text-emerald-600 inline-flex items-center gap-2 transition-all duration-300 font-medium"
                      >
                        {link}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center sm:text-left text-sm text-gray-600 font-medium">
            © 2026 Shas Codes — All Rights Reserved
          </p>

          <div className="flex items-center gap-6 text-sm">
            {["Privacy Policy", "Terms of Service", "Cookies"].map(
              (item, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  className="text-gray-600 hover:text-emerald-600 font-medium transition-colors duration-300"
                >
                  {item}
                </motion.a>
              )
            )}
          </div>

          <motion.button
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg"
          >
            ↑
          </motion.button>
        </motion.div>
      </div>

      <style>{`
        @keyframes blob-float {
          0%, 100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(30px,-30px) scale(1.1); }
          66% { transform: translate(-20px,20px) scale(0.9); }
        }
        .animate-blob-float {
          animation: blob-float 8s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default Footer;
