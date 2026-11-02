import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Award, Users, Sprout, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/agriculturalData';

export const About: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-gray-200" id="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Professional Imagery Side */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-lg overflow-hidden border border-gray-200 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1000&q=80"
                alt="Agricultural specialist evaluating field health and input performance"
                className="w-full h-72 sm:h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 bg-[#14532D]/90 text-white px-3 py-1.5 rounded text-xs font-semibold backdrop-blur-xs flex items-center space-x-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#4CAF50]" />
                <span>Licensed Agronomic Practitioners</span>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {COMPANY_INFO.stats.map((stat, idx) => (
                <div key={idx} className="bg-[#F7F7F2] p-3 rounded border border-gray-200 text-center">
                  <span className="block text-xl font-extrabold text-[#14532D]">{stat.value}</span>
                  <span className="block text-[11px] text-gray-600 font-medium leading-tight mt-0.5">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#A67C52]">
                About AgriSupply Co.
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14532D] tracking-tight mt-1">
                Dedicated Partners in Modern Agricultural Productivity
              </h2>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Founded to bridge the critical gap between certified chemical manufacturers and hardworking commercial growers, AgriSupply Co. supplies genuine agricultural inputs engineered for tangible field results. We work alongside smallholder farms, cooperatives, and commercial farming operations to safeguard crop health from planting through harvest.
            </p>

            <div className="space-y-4 text-sm text-gray-700">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded bg-green-100 text-[#2E7D32] flex items-center justify-center shrink-0 mt-0.5">
                  <Sprout className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1F2933]">Our Mission</h3>
                  <p className="text-gray-600 text-xs sm:text-sm mt-0.5">
                    To sustainably enhance crop yields and farm profitability by delivering authentic agro-chemicals, soil conditioners, and seeds backed by practical agronomic guidance.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded bg-green-100 text-[#2E7D32] flex items-center justify-center shrink-0 mt-0.5">
                  <Users className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1F2933]">Commitment to Farmers</h3>
                  <p className="text-gray-600 text-xs sm:text-sm mt-0.5">
                    We treat every farm as a long-term commercial partnership. Our pricing is transparent, supply lines are reliable, and our recommendations strictly serve the farmer’s economic interests.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded bg-green-100 text-[#2E7D32] flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1F2933]">Product Quality & Expertise</h3>
                  <p className="text-gray-600 text-xs sm:text-sm mt-0.5">
                    Every batch in our warehouse is certified for active ingredient purity. Our technical team conducts soil audits and sprayer calibration so inputs perform safely and effectively.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                id="about-learn-more-btn"
                className="inline-flex items-center text-sm font-bold text-[#2E7D32] hover:text-[#14532D] group"
              >
                <span>Learn More About Our Company & Agronomy Team</span>
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
