import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Sprout, 
  Award, 
  Users, 
  Truck, 
  Building2, 
  CheckCircle2, 
  ArrowRight,
  FlaskConical,
  GraduationCap
} from 'lucide-react';
import { COMPANY_INFO } from '../data/agriculturalData';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Testimonials } from '../components/Testimonials';
import { CallToAction } from '../components/CallToAction';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#F7F7F2] min-h-screen">
      {/* Header Banner */}
      <section className="bg-[#14532D] text-white py-16 lg:py-20 border-b border-[#0f3e22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#A67C52] bg-white/10 px-3 py-1 rounded inline-block mb-3">
              About AgriSupply Co.
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Empowering Agricultural Productivity Through Reliable Inputs
            </h1>
            <p className="text-sm sm:text-base text-gray-200 mt-4 leading-relaxed">
              We provide commercial growers, farming cooperatives, and agribusinesses with authenticated fertilizers, agro-chemicals, certified seeds, and licensed field agronomy services.
            </p>
          </div>
        </div>
      </section>

      {/* Core Company Background & Split Section */}
      <section className="py-16 lg:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#A67C52]">
                Our Foundation
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14532D] tracking-tight">
                Bridging the Gap Between Chemical Science and Farm-Gate Execution
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Agriculture is an unforgiving endeavor where poor-quality seed or adulterated chemical formulations can wipe out an entire season’s capital. AgriSupply Co. was established to solve this fundamental vulnerability.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                We maintain direct distributorship agreements with world-class manufacturers of crop nutrition and crop protection formulations. Every shipment arriving at our central storage hub undergoes strict quality inspection to verify active chemical concentrations, seed germination percentages, and packaging integrity.
              </p>

              <div className="pt-2 space-y-3">
                <div className="flex items-start space-x-3 text-xs sm:text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                  <span>100% genuine products with manufacturer batch traceability certificates</span>
                </div>
                <div className="flex items-start space-x-3 text-xs sm:text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                  <span>Dedicated fleet of articulated distribution trucks for scheduled rural farm-gate delivery</span>
                </div>
                <div className="flex items-start space-x-3 text-xs sm:text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                  <span>In-house team of licensed agronomists providing field diagnostics and calibration</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-lg overflow-hidden border border-gray-200 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1000&q=80"
                  alt="Agronomist and farmer inspecting crop maturity in commercial field"
                  className="w-full h-80 sm:h-[400px] object-cover"
                />
                <div className="p-4 bg-[#14532D] text-white flex items-center justify-between text-xs font-semibold">
                  <span>Supporting Over 85,000 Commercial Hectares</span>
                  <span className="text-[#81C784]">Certified Agribusiness</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Values & Operational Standards */}
      <section className="py-16 bg-[#F7F7F2] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded bg-green-50 text-[#2E7D32] flex items-center justify-center font-bold">
                <Sprout className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#14532D]">Our Mission</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                To equip farmers with authentic agricultural inputs, science-backed nutritional regimes, and dependable crop protection solutions that maximize economic yield per hectare while sustaining long-term soil health.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded bg-green-50 text-[#2E7D32] flex items-center justify-center font-bold">
                <FlaskConical className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#14532D]">Chemical Integrity</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                We refuse to stock sub-potent, expired, or counterfeit chemicals. Our strict supply chain protocols guarantee that active ingredients match stated label concentrations down to the milligram.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded bg-green-50 text-[#2E7D32] flex items-center justify-center font-bold">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#14532D]">Farmer Stewardship</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Selling a product is only the first step. We prioritize teaching safe handling, accurate pressure sprayer calibration, and mandatory personal protective equipment (PPE) compliance to protect farm workers and ecosystems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Testimonials */}
      <Testimonials />

      {/* Call to action */}
      <CallToAction />
    </div>
  );
};
