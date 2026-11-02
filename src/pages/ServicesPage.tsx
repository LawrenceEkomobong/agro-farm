import React, { useState } from 'react';
import { SERVICES } from '../data/agriculturalData';
import { 
  ShieldCheck, 
  PackageCheck, 
  Sprout, 
  Bug, 
  Layers, 
  Users, 
  Truck, 
  CheckCircle2, 
  Calendar,
  Send,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServicesPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState(SERVICES[0].id);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [formData, setFormData] = useState({
    farmName: '',
    contactPerson: '',
    phone: '',
    email: '',
    crops: '',
    hectares: '',
    serviceRequired: SERVICES[0].title,
    message: ''
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#2E7D32]" />;
      case 'PackageCheck': return <PackageCheck className="w-6 h-6 text-[#2E7D32]" />;
      case 'Sprout': return <Sprout className="w-6 h-6 text-[#2E7D32]" />;
      case 'Bug': return <Bug className="w-6 h-6 text-[#2E7D32]" />;
      case 'Layers': return <Layers className="w-6 h-6 text-[#2E7D32]" />;
      case 'UsersCheck': return <Users className="w-6 h-6 text-[#2E7D32]" />;
      case 'Truck': return <Truck className="w-6 h-6 text-[#2E7D32]" />;
      default: return <Sprout className="w-6 h-6 text-[#2E7D32]" />;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
  };

  return (
    <div className="bg-[#F7F7F2] min-h-screen">
      {/* Header Banner */}
      <section className="bg-[#14532D] text-white py-16 lg:py-20 border-b border-[#0f3e22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#A67C52] bg-white/10 px-3 py-1 rounded inline-block mb-3">
              Professional Agronomic Advisory
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Agricultural Support & Services
            </h1>
            <p className="text-sm sm:text-base text-gray-200 mt-4 leading-relaxed">
              From soil testing and fertilizer calibration to pest scouting and bulk input procurement, our field agronomists provide actionable guidance to elevate your farm yield.
            </p>
          </div>
        </div>
      </section>

      {/* Services Listing Section */}
      <section className="py-16 lg:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Service Navigation Buttons (Left) */}
            <div className="lg:col-span-4 space-y-2 sticky top-28">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 px-1">
                Select Service Program
              </h3>
              {SERVICES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setSelectedService(s.id);
                    setFormData(prev => ({ ...prev, serviceRequired: s.title }));
                  }}
                  className={`w-full p-3.5 rounded-md text-left transition-all flex items-center justify-between border ${
                    selectedService === s.id
                      ? 'bg-[#14532D] text-white border-[#14532D] shadow-xs'
                      : 'bg-gray-50 text-gray-800 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-xs sm:text-sm font-bold">{s.title}</span>
                  <ArrowRight className={`w-4 h-4 ${selectedService === s.id ? 'text-white' : 'text-gray-400'}`} />
                </button>
              ))}
            </div>

            {/* Selected Service Detailed View (Right) */}
            <div className="lg:col-span-8">
              {SERVICES.filter(s => s.id === selectedService).map((s) => (
                <div key={s.id} className="bg-[#F7F7F2] p-6 sm:p-8 rounded-lg border border-gray-200 shadow-xs space-y-6">
                  <div className="flex items-center space-x-3 border-b border-gray-200 pb-4">
                    <div className="w-12 h-12 rounded bg-white border border-gray-200 flex items-center justify-center shadow-xs">
                      {getIcon(s.icon)}
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-extrabold text-[#14532D]">
                        {s.title}
                      </h2>
                      <span className="text-xs text-[#A67C52] font-semibold">
                        Suitable For: {s.suitableFor}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {s.fullDescription}
                  </p>

                  <div className="bg-white p-5 rounded border border-gray-200 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#14532D]">
                      Core Deliverables & Field Actions
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {s.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-2 text-xs text-gray-800">
                          <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200 flex flex-wrap items-center justify-between gap-3">
                    <p className="text-xs text-gray-600">
                      Looking to schedule an on-farm evaluation or bulk quotation?
                    </p>
                    <a
                      href="#service-booking-form"
                      className="px-4 py-2 bg-[#2E7D32] hover:bg-[#256629] text-white text-xs font-bold rounded shadow-xs transition-colors"
                    >
                      Book Consultation Below
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Agronomic Engagement Process */}
      <section className="py-16 bg-[#F7F7F2] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#A67C52]">
              How We Partner With Farms
            </span>
            <h3 className="text-2xl font-extrabold text-[#14532D] tracking-tight mt-1">
              Our 5-Stage Seasonal Crop Advisory Framework
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { num: '01', title: 'Soil & Field Audit', desc: 'Representative soil sampling for pH, organic matter, and macronutrient reserves.' },
              { num: '02', title: 'Crop Plan & Budget', desc: 'Calibrating certified hybrid seed varieties and basal fertilizer ratios.' },
              { num: '03', title: 'Timely Input Supply', desc: 'Scheduled delivery of chemicals, fertilizers, and PPE before planting dates.' },
              { num: '04', title: 'In-Season Scouting', desc: 'Weekly monitoring for early pest thresholds and timely protectant spraying.' },
              { num: '05', title: 'Yield & Soil Review', desc: 'Post-harvest grain weighing, soil fertility audit, and next season planning.' }
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-5 rounded border border-gray-200 shadow-xs flex flex-col justify-between">
                <span className="text-2xl font-black text-[#2E7D32]/30 mb-2">{step.num}</span>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">{step.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking / Service Request Form */}
      <section className="py-16 lg:py-20 bg-white" id="service-booking-form">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-[#F7F7F2] p-6 sm:p-10 rounded-lg border border-gray-200 shadow-xs">
            <div className="text-center mb-8">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#14532D]">
                Request Agronomic Service or On-Farm Visit
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1.5">
                Provide your farm location and acreage details. An agronomist will review your request and get in touch.
              </p>
            </div>

            {bookingSuccess ? (
              <div className="p-6 bg-green-50 border border-green-200 rounded-md text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-green-100 text-[#2E7D32] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-gray-900">Consultation Request Confirmed</h4>
                <p className="text-xs sm:text-sm text-gray-600">
                  Thank you, {formData.contactPerson}. We have scheduled your inquiry for "{formData.serviceRequired}". An agronomist from our regional branch will reach you at {formData.phone} within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setBookingSuccess(false)}
                  className="px-4 py-2 bg-[#2E7D32] text-white text-xs font-semibold rounded"
                >
                  Submit Another Consultation Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Farm or Enterprise Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.farmName}
                      onChange={(e) => setFormData({ ...formData, farmName: e.target.value })}
                      placeholder="e.g. Apex Grain Estates"
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#2E7D32] focus:border-[#2E7D32] outline-hidden bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#2E7D32] focus:border-[#2E7D32] outline-hidden bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (800) 000-0000"
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#2E7D32] focus:border-[#2E7D32] outline-hidden bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="manager@farm.com"
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#2E7D32] focus:border-[#2E7D32] outline-hidden bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Target Crops Grown
                    </label>
                    <input
                      type="text"
                      value={formData.crops}
                      onChange={(e) => setFormData({ ...formData, crops: e.target.value })}
                      placeholder="e.g. Maize, Tomatoes, Rice"
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#2E7D32] focus:border-[#2E7D32] outline-hidden bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Service Required *
                    </label>
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#2E7D32] focus:border-[#2E7D32] outline-hidden bg-white"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Specific Farm Needs or Disease Details
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe specific field symptoms, acreage size, previous fertilizer history, or desired visit dates."
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#2E7D32] focus:border-[#2E7D32] outline-hidden bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#2E7D32] hover:bg-[#256629] text-white text-sm font-bold rounded-md shadow-xs transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Service Booking Request</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
