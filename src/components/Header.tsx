import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Focus Areas", href: "/focus-areas" },
    { name: "Events", href: "/events" },
    { name: "Publications", href: "/publications" },
    // { name: "Media", href: "/media" },
    { name: "Work with us", href: "/work-with-us" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white border-b-2 border-teal-600 sticky top-0 z-50 shadow-sm">
      {/* Newspaper-style top border */}
      <div className="h-1 bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo - Newspaper masthead style */}
          <Link
            to="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity group flex-shrink-0"
          >
            <img
              src="/logo-min.png"
              alt="logo"
              className="w-28 sm:w-24 lg:w-28 h-auto object-contain hidden sm:block"
            />

            <div className="flex flex-col">
              <h1 className="newspaper-heading text-lg sm:text-xl lg:text-3xl text-navy-800 tracking-wider uppercase">
                SANGAM CENTRE
              </h1>
              {/* <div className="mt-1">
              <div className="text-xs pb-1 newspaper-accent tracking-widest">
                AN INITIATIVE BY
              </div>
              <div className="text-sm sm:text-base whitespace-nowrap newspaper-accent tracking-widest">
                SAMSKRUTI FOUNDATION
              </div>
              </div> */}
            </div>
          </Link>

          {/* Desktop Navigation - Newspaper section style */}
          <nav className="hidden lg:flex space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 xl:px-4 py-2 whitespace-nowrap text-sm font-medium transition-all duration-200 hover-underline uppercase tracking-wide ${isActive(item.href)
                    ? "text-navy-900 bg-teal-50 font-semibold"
                    : "text-navy-700 hover:text-navy-900 hover:bg-teal-25"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-navy-700 hover:text-navy-900 hover:bg-teal-50 transition-colors flex-shrink-0"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-teal-200 bg-white">
            <nav className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 text-sm font-medium rounded-md transition-colors uppercase tracking-wide ${isActive(item.href)
                      ? "text-navy-900 bg-teal-50 font-semibold"
                      : "text-navy-700 hover:text-navy-900 hover:bg-teal-25"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* Newspaper-style bottom border */}
      {/* <div className="h-px bg-teal-300"></div> */}
    </header>
  );
};

export default Header;
