import Logo from "../images/logo.png";
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 mt-12 shadow-inner">
      {/* Top Section */}
      <div className="container mx-auto px-6 pt-4 flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
        
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start ">
          <img src={Logo} alt="CellBay Logo" className="h-20 w-auto" />
          
        </div>

        {/* Social Icons */}
        <div className="flex space-x-5 text-gray-600 text-2xl hover:text-blue-600 transition">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:scale-110 transition-transform" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook className="hover:scale-110 transition-transform" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram className="hover:scale-110 transition-transform" />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub className="hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-300 my-4" />

      {/* Quick Links & Newsletter */}
      <div className="container mx-auto px-6 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="/" className="hover:text-blue-600 transition">Home</a></li>
            <li><a href="/sell" className="hover:text-blue-600 transition">Sell</a></li>
            <li><a href="/pricing" className="hover:text-blue-600 transition">Pricing</a></li>
            <li><a href="/aboutus" className="hover:text-blue-600 transition">About Us</a></li>
            <li><a href="/contactus" className="hover:text-blue-600 transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="lg:col-span-2">
          <h3 className="font-semibold text-lg mb-3">Subscribe to our Newsletter</h3>
          <p className="text-sm text-gray-500 mb-3">
            Get the latest updates and offers directly in your inbox.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-300 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="bg-blue-600 text-white px-5 rounded-r-lg hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-100 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} CellBay. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
