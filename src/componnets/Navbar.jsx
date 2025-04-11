import { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 lg:px-0">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Company Logo" className="h-10" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex gap-[45px] text-[#424352] text-[16px] font-medium tracking-wide">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Blogs</a></li>
          </ul>
          <a
            href="#"
            className="px-5 py-[9px] bg-[#1B99D4] text-white rounded-[5px]"
          >
            Apply Now
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <span>X</span> : <span>O</span>}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden px-4 pb-4">
          <ul className="flex flex-col gap-4 text-[#424352] text-[16px] font-medium tracking-wide">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Blogs</a></li>
          </ul>
          <a
            href="#"
            className="block mt-4 text-center px-5 py-[9px] bg-[#1B99D4] text-white rounded-[5px]"
          >
            Apply Now
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
