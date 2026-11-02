import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, CheckCircle2, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/agriculturalData';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#F7F7F2] border-b border-gray-200 overflow-hidden" id="hero-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-green-100/80 border border-green-200 rounded-md text-xs font-semibold text-[#14532D]">
              <ShieldCheck className="w-4 h-4 text-[#2E7D32]" />
              <span>Certified Agricultural Inputs & Agronomic Support</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14532D] tracking-tight leading-[1.15]">
              Reliable Agricultural Solutions for Healthier Crops.
            </h1>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
              AgriSupply Co. supplies quality agro-chemicals, fertilizers, crop-protection products, organic manure, certified seeds, and essential farming inputs to commercial growers and agricultural enterprises. We combine dependable supply lines with verified agronomic expertise to improve crop yield and field productivity.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/products"
                id="hero-explore-products-btn"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-bold text-white bg-[#2E7D32] hover:bg-[#256629] shadow-xs transition-colors group"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/contact"
                id="hero-contact-us-btn"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-bold text-[#14532D] bg-white hover:bg-gray-50 border border-gray-300 shadow-xs transition-colors"
              >
                <span>Contact Us</span>
              </Link>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center space-x-2 text-xs font-semibold text-gray-600 hover:text-[#2E7D32] px-3 py-2"
              >
                <PhoneCall className="w-4 h-4 text-[#2E7D32]" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>

            {/* Subtle Supporting Information Area */}
            <div className="pt-6 border-t border-gray-200">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2.5">
                  <div className="w-7 h-7 rounded bg-green-100 text-[#2E7D32] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-gray-900 leading-tight">Quality Agricultural Products</h3>
                    <p className="text-[11px] text-gray-600 mt-0.5">Laboratory tested batches</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2.5">
                  <div className="w-7 h-7 rounded bg-green-100 text-[#2E7D32] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-gray-900 leading-tight">Crop Protection Solutions</h3>
                    <p className="text-[11px] text-gray-600 mt-0.5">Weed, pest & blight control</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2.5">
                  <div className="w-7 h-7 rounded bg-green-100 text-[#2E7D32] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-gray-900 leading-tight">Trusted Farming Support</h3>
                    <p className="text-[11px] text-gray-600 mt-0.5">Field agronomists on call</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Realistic Agricultural Image with Details Overlay */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden border border-gray-200 shadow-md bg-white">
              <img
                src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1000&q=80"
                alt="Farmer inspecting healthy thriving commercial crop field"
                className="w-full h-80 sm:h-96 lg:h-[460px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-4 rounded-md border border-gray-200 shadow-xs">
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#A67C52]">
                      Direct Supply Network
                    </span>
                    <h3 className="text-sm font-bold text-[#14532D]">Field-Proven Crop Inputs</h3>
                  </div>
                  <span className="px-2.5 py-1 bg-green-50 text-[#2E7D32] font-semibold text-xs rounded border border-green-200">
                    Regional Delivery
                  </span>
                </div>
                <p className="text-xs text-gray-600 mt-1.5 line-clamp-2">
                  Serving grain, tuber, vegetable, and plantation growers across 85,000+ cultivated hectares.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
