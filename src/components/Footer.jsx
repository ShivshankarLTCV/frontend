import React from "react";
import facebook from "../assets/facebook-icon.png";
import linkedin from "../assets/linkedin-icon.png";
import logo from "../assets/logo3.png";

const Footer = () => {
  return (
    <footer className="bg-[#6750A4] font-arimo text-sm px-4 sm:px-6 py-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & Address */}
        <div className="flex flex-col items-center text-center space-y-3">
          <img src={logo} alt="Equall Logo" className="h-10 w-10 mx-auto" />
          <h2 className="text-lg font-semibold">
            <span className="text-2xl font-bold text-[#f4f4f6]">EQUALL</span>
          </h2>
          <div className="flex justify-center space-x-2 mt-1.5">
            <a href="#">
              <img src={facebook} alt="Facebook" height="24" width="24" />
            </a>
            <a href="#">
              <img src={linkedin} alt="LinkedIn" height="24" width="24" />
            </a>
          </div>
          <div className="mt-2 text-xs text-[#1B1B1F] leading-relaxed font-arimo">
            <p className="font-bold">
              No.10, 1st Floor, 6th Main, 8th B Cross,
              <br />
              Jeevan Bheema Nagar, Bangalore,
              <br />
              Karnataka, India, 560075
            </p>
          </div>
        </div>

        {/* Useful Links */}
        <div className="space-y-4 sm:pl-6 md:pl-12">
          <h2 className="text-lg font-semibold mb-4 text-[#f4f4f6] font-arimo">
            Useful Links
          </h2>
          <ul className="text-[#1B1B1F] font-bold space-y-2">
            <li>
              <a href="#" className="hover:underline hover:text-[#f4f4f6]">
                Disclaimer
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-[#f4f4f6]">
                Fair Practices
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-[#f4f4f6]">
                Cookies Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-[#f4f4f6]">
                Fees and Charges
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-[#f4f4f6]">
                Vendor Agreement
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-[#f4f4f6]">
                Service Agreement
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-[#f4f4f6]">
                Loan Agreement Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-[#f4f4f6]">
                Non-Disclosure Agreement
              </a>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div className="space-y-4 sm:pl-6 md:pl-0">
          <h2 className="text-lg font-semibold mb-4 text-[#f4f4f6]">
            Products
          </h2>
          <ul className="text-[#1B1B1F] space-y-2 font-bold">
            <li>
              <a href="#" className="hover:underline hover:text-[#f4f4f6]">
                Car Loan
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-[#f4f4f6]">
                Personal Loan
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-[#f4f4f6]">
                Emergency Loan
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-[#f4f4f6]">
                Loan Against Security
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-[#f4f4f6]">
                Consumer Durable Loan
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-[#f4f4f6]">
                Debt Consolidation Loan
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div className="space-y-4 sm:pr-6 md:pr-20">
          <h2 className="text-lg font-semibold mb-4 text-[#f4f4f6]">Company</h2>
          <ul className="text-[#1B1B1F] space-y-2 font-bold">
            <li>
              <a href="#" className="hover:underline hover:text-[#f4f4f6]">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-[#f4f4f6]">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-[#f4f4f6]">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-[#f4f4f6]">
                Terms and Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#1b1b1f] mt-8 pt-4 text-center text-[#1B1B1F] font-bold text-xs sm:text-sm">
        © 2025{" "}
        <a
          href="https://www.ltcv.credit/"
          className="hover:underline"
        >
          {" "}
          LTCV Credit Private Limited.{" "}
        </a>
        All rights reserved. | CIN : XXXXXXXXXXXXXXXXX | GSTIN: XXXXXXXXXXXXXXXX
      </div>
    </footer>
  );
};

export default Footer;
