import React from 'react';
import { Quote, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/agriculturalData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-gray-200" id="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#A67C52]">
            Field Proven Experience
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#14532D] tracking-tight mt-1">
            Feedback from Commercial Growers & Farming Cooperatives
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            Real experiences from commercial crop producers, plantation enterprises, and farm cooperatives who rely on our supply lines and field technical support.
          </p>
        </div>

        {/* 4 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#F7F7F2] p-6 sm:p-7 rounded-lg border border-gray-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-[#A67C52]/40 mb-3" />
                <p className="text-sm sm:text-base text-gray-800 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-200 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-[#14532D] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 leading-tight">
                      {t.name}
                    </h3>
                    <p className="text-xs text-gray-600 mt-0.5">
                      {t.role}
                    </p>
                    <p className="text-[11px] text-gray-500 font-medium">
                      {t.farmName} • {t.location}
                    </p>
                  </div>
                </div>

                <div className="hidden sm:block text-right">
                  <span className="inline-flex items-center text-[11px] font-semibold text-[#2E7D32] bg-green-50 px-2 py-0.5 rounded border border-green-200">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    <span>Verified Grower</span>
                  </span>
                  <p className="text-[10px] text-gray-500 mt-1">
                    Crops: {t.cropsGrown}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
