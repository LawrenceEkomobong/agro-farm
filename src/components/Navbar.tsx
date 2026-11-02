import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Sprout, 
  Menu, 
  X, 
  ShoppingBag, 
  Phone, 
  Clock, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { COMPANY_INFO } from '../data/agriculturalData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xs border-b border-gray-200">
      {/* Top Utility Bar */}
      <div className="bg-[#14532D] text-gray-200 text-xs py-1.5 px-4 sm:px-6 border-b border-[#0f3e22]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4">
          <div className="flex items-center space-x-4 text-[11px] sm:text-xs">
            <span className="flex items-center space-x-1">
              <Phone className="w-3.5 h-3.5 text-[#4CAF50]" />
              <span className="text-gray-300">Sales & Agronomy Hotline:</span>
              <a href={`tel:${COMPANY_INFO.phone}`} className="font-semibold text-white hover:underline">
                {COMPANY_INFO.phone}
              </a>
            </span>
            <span className="hidden md:flex items-center space-x-1 text-gray-300">
              <Clock className="w-3.5 h-3.5 text-[#4CAF50]" />
              <span>{COMPANY_INFO.hours.weekdays}</span>
            </span>
          </div>

          <div className="flex items-center space-x-3 text-[11px] sm:text-xs text-gray-300">
            <span className="flex items-center space-x-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#4CAF50]" />
              <span>Certified Agricultural Distributor</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Company Brand Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
            id="navbar-brand-logo"
          >
            <div className="w-11 h-11 rounded-md bg-[#14532D] flex items-center justify-center text-white shadow-xs group-hover:bg-[#2E7D32] transition-colors">
              <Sprout className="w-6 h-6 text-[#4CAF50]" />
            </div>
            <div>
              <span className="block text-xl font-extrabold tracking-tight text-[#14532D] leading-none">
                AgriSupply <span className="text-[#2E7D32]">Co.</span>
              </span>
              <span className="block text-[11px] font-medium tracking-wider uppercase text-[#A67C52] mt-1">
                Inputs & Crop Protection
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                className={`text-sm font-medium transition-colors hover:text-[#2E7D32] relative py-2 ${
                  isActive(link.path)
                    ? 'text-[#2E7D32] font-semibold'
                    : 'text-[#1F2933]'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2E7D32] rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center space-x-4">
            {/* View / Shop Products CTA Button */}
            <Link
              to="/products"
              id="nav-shop-products-btn"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-md text-white bg-[#2E7D32] hover:bg-[#256629] shadow-xs transition-colors"
            >
              Shop Products
            </Link>

            {/* Cart Trigger */}
            <button
              id="navbar-cart-btn"
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-gray-700 hover:text-[#2E7D32] hover:bg-gray-100 rounded-md transition-colors"
              aria-label={`Open supply cart with ${totalItems} items`}
            >
              <ShoppingBag className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute top-1 right-1 w-5 h-5 bg-[#14532D] text-white text-[11px] font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-[#2E7D32] hover:bg-gray-100 rounded-md transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-green-50 text-[#2E7D32] font-semibold'
                    : 'text-[#1F2933] hover:bg-gray-50'
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-gray-100 space-y-2">
            <Link
              to="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-2.5 px-4 rounded-md text-sm font-semibold text-white bg-[#2E7D32] hover:bg-[#256629]"
            >
              Browse Agricultural Products
            </Link>
            <div className="text-xs text-gray-500 pt-2 px-1 space-y-1">
              <p className="font-semibold text-gray-700">Direct Agronomy Hotline:</p>
              <p>{COMPANY_INFO.phone}</p>
              <p>{COMPANY_INFO.hours.weekdays}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
