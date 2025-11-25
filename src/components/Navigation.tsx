import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../public/logo.png';

interface NavItem {
  label: string;
  path?: string;
  dropdown?: { label: string; path: string }[];
}

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Services',
    dropdown: [
      { label: 'Open Access Parks', path: '/services/open-access' },
      { label: 'Solar Installation', path: '/services/installation' },
      { label: 'Operations & Maintenance', path: '/services/maintenance' },
      { label: 'Solar Plant Audit', path: '/services/audit' },
      { label: 'Green Ammonia & Hydrogen', path: '/services/green-energy' },
      { label: 'Project Management & Consultancy', path: '/services/consultancy' },
    ],
  },
  { label: 'Projects', path: '/projects' },
  { label: 'Safety', path: '/safety' },
  { label: 'Channel Partner', path: '/channel-partner' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export const Navigation: React.FC = () => {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar with Contact Info */}
      {/* <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center py-2 text-sm">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-6 mb-2 md:mb-0">
              <a href="tel:+917827110601" className="text-gray-700 hover:text-orange-500 flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91-7827110601
              </a>
              <span className="text-gray-600 hidden md:inline">|</span>
              <span className="text-gray-700 text-center md:text-left">
                JMD Megapolis, 4th Floor, 419-424, Sohna Road, Sector - 48, Gurugram.
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/news" className="text-gray-700 hover:text-orange-500 font-medium">
                News & Media
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Sunvatsa Logo" className="w-12 h-12" />
            <div>
              <div className="text-2xl font-bold text-gray-900 font-display">Sunvatsa</div>
              <div className="text-xs text-gray-600 font-medium">INVESTING IN A BETTER FUTURE</div>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.path ? (
                  <Link
                    to={item.path}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${location.pathname === item.path
                        ? 'text-orange-500 bg-orange-50'
                        : 'text-gray-700 hover:text-orange-500 hover:bg-gray-50'
                      }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center ${activeDropdown === item.label
                        ? 'text-orange-500 bg-orange-50'
                        : 'text-gray-700 hover:text-orange-500 hover:bg-gray-50'
                      }`}
                  >
                    {item.label}
                    {/* <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg> */}
                  </button>
                )}

                {/* Dropdown Menu */}
                {/* {item.dropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.path}
                        to={dropdownItem.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )} */}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-gray-700 hover:text-orange-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

