import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Brand and Admin Link */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            Hotel Grove Inn
          </Link>
         
        </div>

        {/* Hamburger menu button (visible on mobile) */}
        <button
          className="lg:hidden p-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Nav Links and Action Buttons (grouped together) */}
        <div className={`lg:flex items-center space-x-6 ${menuOpen ? 'block' : 'hidden'} lg:flex`}>
          {/* Nav Links */}
          <div className="flex space-x-4">
            <NavLink
              to="/"
              className="text-gray-700 hover:text-indigo-600 py-2"
              ClassName="text-indigo-600 font-semibold"
            >
              Home
            </NavLink>
            <NavLink
              to="/rooms"
              className="text-gray-700 hover:text-indigo-600 py-2"
              ClassName="text-indigo-600 font-semibold"
            >
              Rooms
            </NavLink>
            <NavLink
              to="/about-us"
              className="text-gray-700 hover:text-indigo-600 py-2"
              ClassName="text-indigo-600 font-semibold"
            >
             About Us
            </NavLink>
            <NavLink
              to="/contact"
              className="text-gray-700 hover:text-indigo-600 py-2"
              ClassName="text-indigo-600 font-semibold"
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/admin-login"
              className="text-gray-700 hover:text-indigo-600 py-2"
             ClassName="text-indigo-600 font-semibold"
            >
              Admin
            </NavLink>
          </div>

   
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-gray-100 py-2">
          <NavLink
            to="/"
            className="block text-gray-700 hover:bg-indigo-50 py-2 px-4"
            ClassName="bg-indigo-50 text-indigo-600 font-semibold"
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/rooms"
            className="block text-gray-700 hover:bg-indigo-50 py-2 px-4"
          ClassName="bg-indigo-50 text-indigo-600 font-semibold"
            onClick={toggleMenu}
          >
            Rooms
          </NavLink>
          <NavLink
            to="/services"
            className="block text-gray-700 hover:bg-indigo-50 py-2 px-4"
         ClassName="bg-indigo-50 text-indigo-600 font-semibold"
            onClick={toggleMenu}
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className="block text-gray-700 hover:bg-indigo-50 py-2 px-4"
           ClassName="bg-indigo-50 text-indigo-600 font-semibold"
            onClick={toggleMenu}
          >
            Contact Us
          </NavLink>

          
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;
