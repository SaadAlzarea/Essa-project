import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-3 text-purple-400">MyHousing</h2>
          <p className="text-sm text-gray-300">
            Providing trusted real estate listings and rental services across Saudi Arabia.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-md font-semibold mb-3 text-purple-300">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/payment">Payment</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-md font-semibold mb-3 text-purple-300">Services</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Buy Property</li>
            <li>Rent Property</li>
            <li>Property Management</li>
            <li>Legal Support</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-md font-semibold mb-3 text-purple-300">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Email: support@myhousing.com</li>
            <li>Phone: +966 123 456 789</li>
            <li>Location: Riyadh, KSA</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
        ©  MyHousing. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
