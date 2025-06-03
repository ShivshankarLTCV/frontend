import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo3.png";
import {
  Bars3Icon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Equall Logo" className="h-10 w-10" />
            <span className="text-2xl font-bold text-[#0F1C4D]">EQUALL</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-lg text-[#1b1b1f] font-medium">
            <Link to="#" className="hover:text-blue-600">
              Personal Loan
            </Link>
            <Link to="/calculator" className="hover:text-blue-600">
              Calculators
            </Link>
            <Link to="#" className="hover:text-blue-600">
              Download App
            </Link>
            <Link to="#" className="hover:text-blue-600">
              Contact Us
            </Link>
          </div>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center">
            {isAuthenticated ? (
              <div className="flex items-center space-x-2">
                <UserCircleIcon className="h-8 w-8 text-[#0F1C4D]" />
                <span className="text-[#0F1C4D] font-semibold">My Account</span>
              </div>
            ) : (
              <button
                onClick={() => navigate("/journey")}
                className="bg-[#4142C3] text-[#f4f4f6] px-6 py-2 rounded-lg hover:bg-[#D8CCE8] transition"
              >
                Sign In
              </button>
            )}
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-[#0F1C4D]">
              {isOpen ? (
                <XMarkIcon className="h-7 w-7" />
              ) : (
                <Bars3Icon className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Sidebar */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-2/3 max-w-xs bg-white shadow-lg z-50 transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col px-6 py-6 space-y-4 text-lg text-[#1b1b1f] font-medium">
          <Link to="#" className="hover:text-blue-600" onClick={toggleMenu}>
            Personal Loan
          </Link>
          <Link
            to="/calculator"
            className="hover:text-blue-600"
            onClick={toggleMenu}
          >
            Calculators
          </Link>
          <Link to="#" className="hover:text-blue-600" onClick={toggleMenu}>
            Download App
          </Link>
          <Link to="#" className="hover:text-blue-600" onClick={toggleMenu}>
            Contact Us
          </Link>
          {isAuthenticated ? (
            <div className="flex items-center space-x-2 pt-2">
              <UserCircleIcon className="h-7 w-7 text-[#0F1C4D]" />
              <span className="text-[#0F1C4D] font-semibold">My Account</span>
            </div>
          ) : (
            <button
              onClick={() => {
                toggleMenu();
                navigate("/journey");
              }}
              className="w-full text-left bg-[#4142C3] text-[#f4f4f6] px-4 py-2 rounded-lg shadow-md hover:opacity-90 mt-2"
            >
              Sign In
            </button>
          )}
        </div>
      </div>

      {/* Optional Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
