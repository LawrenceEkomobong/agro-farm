import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sprout, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO, CATEGORIES } from '../data/agriculturalData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1F2933] text-gray-300 border-t border-gray-800">
      {/* Top Banner */}
      <div className="bg-[#14532D] text-white py-6 px-4 sm:px-6 border-b border-green-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded bg-[#4CAF50] text-[#14532D] flex items-center justify-center font-bold shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold">Official Agricultural Input Distributor</h4>
              <p className="text-xs text-green-200">Guaranteed authentic chemical active ingredients and certified hybrid seed lots.</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Link
              to="/products"
              className="px-4 py-2 bg-white text-[#14532D] hover:bg-gray-100 text-xs font-bold rounded shadow-xs transition-colors"
            >
              Browse Agricultural Catalog
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 bg-[#2E7D32] hover:bg-[#256629] text-white text-xs font-bold rounded shadow-xs transition-colors border border-green-500"
            >
              Contact Dispatch
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1: Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded bg-[#2E7D32] flex items-center justify-center text-white">
                <Sprout className="w-5 h-5 text-[#81C784]" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                AgriSupply <span className="text-[#4CAF50]">Co.</span>
              </span>
            </Link>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              {COMPANY_INFO.description}
            </p>

            <div className="pt-2 text-xs text-gray-400 space-y-2">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#4CAF50] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}, {COMPANY_INFO.city}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#4CAF50] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors">{COMPANY_INFO.phone}</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#4CAF50] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">{COMPANY_INFO.email}</a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-3 flex items-center space-x-3">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded bg-gray-800 hover:bg-[#2E7D32] flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded bg-gray-800 hover:bg-[#2E7D32] flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded bg-gray-800 hover:bg-[#2E7D32] flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded bg-gray-800 hover:bg-[#2E7D32] flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-gray-700 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">Products Catalog</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Agricultural Support</Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-white transition-colors">Field Guides & Resources</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact & Locations</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-gray-700 pb-2">
              Product Categories
            </h4>
            <ul className="space-y-1.5 text-xs">
              {CATEGORIES.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/products?category=${encodeURIComponent(cat.id)}`}
                    className="text-gray-400 hover:text-white transition-colors block truncate"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/products"
                  className="text-[#4CAF50] hover:underline font-semibold inline-flex items-center text-[11px] mt-1"
                >
                  <span>All 10 Categories</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Services & Agronomy */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-gray-700 pb-2">
              Support Services
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Crop Protection Advice</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Farm Input Supply</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Fertilizer Recommendations</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Pest & Disease Management</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Soil Improvement Guidance</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Bulk Supply Contracting</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Compliance */}
      <div className="border-t border-gray-800 bg-[#161e27] py-6 px-4 sm:px-6 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            © {currentYear} AgriSupply Co. All rights reserved. Registered Agricultural Supplier & Chemical Stockist.
          </p>
          <div className="flex items-center space-x-4 text-[11px]">
            <span>Safety Data Sheets (SDS) Available Upon Request</span>
            <span>•</span>
            <span>Always Read Label Instructions Before Use</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
