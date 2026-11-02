import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall, ShoppingBag } from 'lucide-react';
import { COMPANY_INFO } from '../data/agriculturalData';

export const CallToAction: React.FC = () => {
  return (
    <section className="bg-[#14532D] text-white py-16 lg:py-20 border-b border-[#0f3e22]" id="cta-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#A67C52] bg-white/10 px-3 py-1 rounded inline-block">
            Direct Farm Consultation & Order Desk
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            Need the Right Agricultural Products for Your Farm?
          </h2>

          <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
            Speak with our team about the products and agricultural solutions suitable for your crops.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              id="cta-contact-us-btn"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-bold text-[#14532D] bg-white hover:bg-gray-100 shadow-xs transition-colors"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>

            <Link
              to="/products"
              id="cta-browse-products-btn"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-bold text-white bg-[#2E7D32] hover:bg-[#256629] border border-green-600 shadow-xs transition-colors"
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              <span>Browse Products</span>
            </Link>

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center text-sm font-semibold text-gray-200 hover:text-white px-3 py-2"
            >
              <PhoneCall className="w-4 h-4 mr-2 text-[#4CAF50]" />
              <span>Call Dispatch: {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
