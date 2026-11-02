import React from 'react';
import { 
  Award, 
  Truck, 
  GraduationCap, 
  Boxes, 
  Handshake, 
  Headphones, 
  Check 
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/agriculturalData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'AwardCheck':
        return <Award className="w-6 h-6 text-[#2E7D32]" />;
      case 'Truck':
        return <Truck className="w-6 h-6 text-[#2E7D32]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-[#2E7D32]" />;
      case 'Boxes':
        return <Boxes className="w-6 h-6 text-[#2E7D32]" />;
      case 'Handshake':
        return <Handshake className="w-6 h-6 text-[#2E7D32]" />;
      case 'Headphones':
        return <Headphones className="w-6 h-6 text-[#2E7D32]" />;
      default:
        return <Check className="w-6 h-6 text-[#2E7D32]" />;
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-[#F7F7F2] border-b border-gray-200" id="why-choose-us-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#A67C52]">
            Field Proven Standard
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#14532D] tracking-tight mt-1">
            Why Farmers and Commercial Growers Trust AgriSupply Co.
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-3">
            In modern agriculture, counterfeit or degraded inputs lead to catastrophic seasonal losses. We provide dependable, laboratory-verified inputs combined with licensed field support.
          </p>
        </div>

        {/* 6 Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg border border-gray-200 shadow-xs hover:border-[#2E7D32]/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-md bg-green-50 border border-green-100 flex items-center justify-center mb-4">
                {getIcon(item.icon)}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
