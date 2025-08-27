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
              src="/text_logo.jpg"
              alt="logo"
              className="w-24 lg:w-32 md:w-32 h-auto object-contain"
            />

          </Link>

          {/* Desktop Navigation - Newspaper section style */}
          <nav className="hidden lg:flex space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 xl:px-4 py-2 whitespace-nowrap text-sm font-medium transition-all duration-200 hover-underline uppercase tracking-wide ${
                  isActive(item.href)
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
                  className={`px-4 py-3 text-sm font-medium rounded-md transition-colors uppercase tracking-wide ${
                    isActive(item.href)
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
