import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Building2 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/agriculturalData';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    subject: 'Bulk Agricultural Supply Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 lg:py-24 bg-white" id="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#A67C52]">
            Connect With Our Agronomy Team
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#14532D] tracking-tight mt-1">
            Get in Touch With AgriSupply Co.
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            Whether you need bulk input quotations, custom fertilizer blending, or diagnosis for crop leaf damage, our agronomy and dispatch desk is ready to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details & Operating Logistics */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#F7F7F2] p-6 sm:p-7 rounded-lg border border-gray-200 shadow-xs space-y-6">
              <h3 className="text-base font-bold text-[#14532D] border-b border-gray-200 pb-3">
                Regional Distribution & Agronomy Headquarters
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-gray-700">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#2E7D32] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900 font-semibold">Warehouse & Depot Address</strong>
                    <p className="text-gray-600 mt-0.5">{COMPANY_INFO.address}</p>
                    <p className="text-gray-600">{COMPANY_INFO.city}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-[#2E7D32] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900 font-semibold">Phone Lines</strong>
                    <p className="text-gray-600 mt-0.5">Orders: <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-[#2E7D32]">{COMPANY_INFO.phone}</a></p>
                    <p className="text-gray-600">Direct Sales: <a href={`tel:${COMPANY_INFO.directSales}`} className="hover:text-[#2E7D32]">{COMPANY_INFO.directSales}</a></p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-[#2E7D32] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900 font-semibold">Email Enquiries</strong>
                    <p className="text-gray-600 mt-0.5">Orders: <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#2E7D32]">{COMPANY_INFO.email}</a></p>
                    <p className="text-gray-600">Agronomy: <a href={`mailto:${COMPANY_INFO.supportEmail}`} className="hover:text-[#2E7D32]">{COMPANY_INFO.supportEmail}</a></p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-[#2E7D32] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900 font-semibold">Depot Operating Hours</strong>
                    <p className="text-gray-600 mt-0.5">{COMPANY_INFO.hours.weekdays}</p>
                    <p className="text-gray-600">{COMPANY_INFO.hours.saturday}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{COMPANY_INFO.hours.sunday}</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-200">
                <div className="p-3 bg-white rounded border border-gray-200 text-xs text-gray-600 flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-[#2E7D32] shrink-0" />
                  <span>EPA & Ministry of Agriculture Certified Chemical Storage Facility</span>
                </div>
              </div>
            </div>

            {/* Map / Location Graphic Area */}
            <div className="bg-[#F7F7F2] rounded-lg border border-gray-200 p-4 shadow-xs">
              <div className="flex items-center justify-between text-xs font-bold text-[#14532D] mb-2">
                <span className="flex items-center space-x-1.5">
                  <Building2 className="w-4 h-4 text-[#2E7D32]" />
                  <span>Central Depot Location</span>
                </span>
                <span className="text-gray-500 font-medium">Truck Scale & Offloading Bay</span>
              </div>
              <div className="relative rounded overflow-hidden h-44 bg-gray-200 border border-gray-300">
                <img
                  src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80"
                  alt="Aerial agricultural supply depot entrance"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-3 text-center">
                  <div className="bg-white/95 backdrop-blur-xs px-3 py-2 rounded shadow-xs text-xs font-semibold text-gray-900">
                    <MapPin className="w-4 h-4 text-red-600 inline mr-1" />
                    AgriSupply Hub • 14 Industrial Parkway, Sector 4
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-gray-500 mt-2">
                Convenient articulated truck turning bay and certified 60-tonne weighbridge on premises.
              </p>
            </div>
          </div>

          {/* Contact Form Side */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-200 shadow-xs">
              <h3 className="text-lg font-bold text-[#14532D] mb-1">
                Send an Inquiry or Request a Quote
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-6">
                Fill in your farm requirements below and our agronomist on duty will reply promptly.
              </p>

              {submitted ? (
                <div className="p-6 bg-green-50 border border-green-200 rounded-lg text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-gray-900">Inquiry Dispatched Successfully</h4>
                  <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
                    Thank you, {formData.fullName}. Our commercial dispatch team has received your message regarding "{formData.subject}". We will contact you at {formData.phoneNumber || formData.email} within 2 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phoneNumber: '',
                        subject: 'Bulk Agricultural Supply Inquiry',
                        message: ''
                      });
                    }}
                    className="inline-flex items-center px-4 py-2 bg-[#2E7D32] hover:bg-[#256629] text-white text-xs font-semibold rounded transition-colors"
                  >
                    Submit Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" id="general-contact-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#2E7D32] focus:border-[#2E7D32] outline-hidden"
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
                        placeholder="grower@farmcorp.com"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#2E7D32] focus:border-[#2E7D32] outline-hidden"
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
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        placeholder="+1 (800) 000-0000"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#2E7D32] focus:border-[#2E7D32] outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Subject / Department *
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#2E7D32] focus:border-[#2E7D32] outline-hidden bg-white"
                      >
                        <option value="Bulk Agricultural Supply Inquiry">Bulk Input & Pallet Quotation</option>
                        <option value="Agronomy Consultation Request">Agronomy & Soil Consultation</option>
                        <option value="Crop Protection / Disease Emergency">Crop Disease / Pest Advisory</option>
                        <option value="Fertilizer Blend Recommendation">Fertilizer Recommendation</option>
                        <option value="General Customer Service">General Warehouse & Delivery Query</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Message & Farm Requirements *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify your crop type, cultivated acreage/hectares, target planting date, or the specific chemical/fertilizer quantities you require."
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#2E7D32] focus:border-[#2E7D32] outline-hidden"
                    />
                  </div>

                  <button
                    type="submit"
                    id="submit-contact-form-btn"
                    className="w-full sm:w-auto px-6 py-2.5 bg-[#2E7D32] hover:bg-[#256629] text-white text-sm font-bold rounded-md shadow-xs transition-colors flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmit Farm Inquiry</span>
                  </button>
                  <p className="text-[11px] text-gray-500">
                    We maintain strict grower confidentiality. Your contact information is never shared with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
