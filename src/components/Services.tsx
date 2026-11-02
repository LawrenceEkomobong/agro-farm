import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  PackageCheck, 
  Sprout, 
  Bug, 
  Layers, 
  Users, 
  Truck, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { SERVICES } from '../data/agriculturalData';

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#2E7D32]" />;
      case 'PackageCheck':
        return <PackageCheck className="w-5 h-5 text-[#2E7D32]" />;
      case 'Sprout':
        return <Sprout className="w-5 h-5 text-[#2E7D32]" />;
      case 'Bug':
        return <Bug className="w-5 h-5 text-[#2E7D32]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#2E7D32]" />;
      case 'UsersCheck':
        return <Users className="w-5 h-5 text-[#2E7D32]" />;
      case 'Truck':
        return <Truck className="w-5 h-5 text-[#2E7D32]" />;
      default:
        return <Sprout className="w-5 h-5 text-[#2E7D32]" />;
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-gray-200" id="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#A67C52]">
              Technical Agronomy
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#14532D] tracking-tight mt-1">
              Agricultural Support & Services
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-2xl">
              Practical, field-tested technical support programs designed to optimize input investment, eradicate crop pathogens, and ensure sustainable harvest profitability.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center px-4 py-2 bg-white hover:bg-gray-50 border border-gray-300 text-xs font-bold text-[#14532D] rounded shadow-xs transition-colors shrink-0"
          >
            <span>Request Agronomic Consultation</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Link>
        </div>

        {/* 7 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-[#F7F7F2] p-6 rounded-lg border border-gray-200 shadow-xs hover:border-[#2E7D32]/50 hover:bg-white transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-md bg-white border border-gray-200 flex items-center justify-center mb-4 group-hover:border-[#2E7D32] transition-colors shadow-xs">
                  {getIcon(service.icon)}
                </div>

                <h3 className="text-base font-bold text-[#14532D] group-hover:text-[#2E7D32] transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Key Deliverables Bullet Points */}
                <div className="mt-4 pt-3 border-t border-gray-200/70 space-y-1.5">
                  {service.deliverables.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-[11px] text-gray-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-4 mt-4 border-t border-gray-200/50 flex items-center justify-between">
                <span className="text-[10px] text-gray-500 font-medium">
                  {service.suitableFor.split(',')[0]}
                </span>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-xs font-bold text-[#2E7D32] hover:text-[#14532D] group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
