import React from 'react';
import { Contact } from '../components/Contact';
import { Truck, ShieldCheck, Warehouse, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/agriculturalData';

export const ContactPage: React.FC = () => {
  return (
    <div className="bg-[#F7F7F2] min-h-screen">
      {/* Header Banner */}
      <section className="bg-[#14532D] text-white py-16 lg:py-20 border-b border-[#0f3e22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#A67C52] bg-white/10 px-3 py-1 rounded inline-block mb-3">
              Commercial Order Desk & Agronomy Hub
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Contact AgriSupply Co.
            </h1>
            <p className="text-sm sm:text-base text-gray-200 mt-4 leading-relaxed">
              Reach our central order desk for bulk agricultural supply quotations, product technical inquiries, or to coordinate truck pickups at our certified chemical depot.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Form & Location */}
      <Contact />

      {/* Commercial Logistics & Truck Dispatch Protocol */}
      <section className="py-14 bg-[#F7F7F2] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-8">
            <h3 className="text-xl font-extrabold text-[#14532D]">
              Depot Logistics & Bulk Collection Procedures
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Important information for haulage contractors, farm trucks, and bulk purchasers collecting ex-warehouse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-xs space-y-2">
              <Truck className="w-6 h-6 text-[#2E7D32]" />
              <h4 className="text-sm font-bold text-gray-900">Truck Scale & Loading Bays</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Our depot features a certified 60-tonne electronic weighbridge and four covered high-speed loading bays for articulated trailers and flatbed farm trucks.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-xs space-y-2">
              <ShieldCheck className="w-6 h-6 text-[#2E7D32]" />
              <h4 className="text-sm font-bold text-gray-900">Hazardous Chemical Transport</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Drivers collecting Category II/III agro-chemicals must present valid transport permits, secure tarpaulins, and carry mandatory spill-kit containment gear.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-xs space-y-2">
              <Warehouse className="w-6 h-6 text-[#2E7D32]" />
              <h4 className="text-sm font-bold text-gray-900">Pre-Order Call-In Requirement</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                For order quantities exceeding 200 bags (10 tonnes) of granular fertilizer, please call dispatch 24 hours in advance to secure staging bay priority.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
