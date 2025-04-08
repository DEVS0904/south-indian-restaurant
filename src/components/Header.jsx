import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-amber-700 text-white shadow-md">
      <div className="container py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="font-bold text-2xl md:text-3xl tracking-tight">Dakshin Delight</span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white focus:outline-none"
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
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-bold border-b-2 border-white pb-1" : "hover:text-amber-200 transition-colors"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              isActive ? "font-bold border-b-2 border-white pb-1" : "hover:text-amber-200 transition-colors"
            }
          >
            Menu
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "font-bold border-b-2 border-white pb-1" : "hover:text-amber-200 transition-colors"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "font-bold border-b-2 border-white pb-1" : "hover:text-amber-200 transition-colors"
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-amber-800 py-2">
          <div className="container flex flex-col space-y-4 py-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "font-bold border-l-4 border-white pl-2" : "pl-3 hover:text-amber-200 transition-colors"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive ? "font-bold border-l-4 border-white pl-2" : "pl-3 hover:text-amber-200 transition-colors"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "font-bold border-l-4 border-white pl-2" : "pl-3 hover:text-amber-200 transition-colors"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "font-bold border-l-4 border-white pl-2" : "pl-3 hover:text-amber-200 transition-colors"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
