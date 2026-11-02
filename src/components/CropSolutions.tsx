import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, AlertTriangle, CheckCircle2, ChevronRight } from 'lucide-react';
import { CROPS } from '../data/agriculturalData';

export const CropSolutions: React.FC = () => {
  const [selectedCrop, setSelectedCrop] = useState(CROPS[0]);

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-gray-200" id="crop-solutions-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#A67C52]">
            Targeted Agronomy
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#14532D] tracking-tight mt-1">
            Farming Solutions by Crop Enterprise
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            Every crop presents distinct nutrient uptake dynamics, weed competition windows, and pest pressures. Explore our tailored crop input protocols.
          </p>
        </div>

        {/* Crops Navigation Pill List (Horizontal scrollable or flex wrap) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-thin">
          {CROPS.map((crop) => (
            <button
              key={crop.id}
              onClick={() => setSelectedCrop(crop)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-colors shrink-0 ${
                selectedCrop.id === crop.id
                  ? 'bg-[#14532D] text-white shadow-xs'
                  : 'bg-[#F7F7F2] text-gray-700 hover:bg-gray-200 border border-gray-200'
              }`}
            >
              {crop.name}
            </button>
          ))}
        </div>

        {/* Selected Crop Interactive Detail Box */}
        <div className="bg-[#F7F7F2] rounded-lg border border-gray-200 overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Image Side */}
            <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-auto bg-gray-200">
              <img
                src={selectedCrop.image}
                alt={selectedCrop.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-black/60 backdrop-blur-xs text-white text-xs font-semibold rounded">
                  {selectedCrop.scientificOrType}
                </span>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-extrabold text-[#14532D]">
                    {selectedCrop.name} Protocol
                  </h3>
                  <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                    {selectedCrop.description}
                  </p>
                </div>

                {/* Key Agronomic Challenges */}
                <div className="bg-white p-4 rounded border border-gray-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center space-x-1.5 mb-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                    <span>Primary Field Challenges & Yield Reducers</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-gray-700">
                    {selectedCrop.keyChallenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-amber-600 font-bold">•</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recommended Input Solutions */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#14532D] flex items-center space-x-1.5 mb-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32]" />
                    <span>Verified Input Program</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedCrop.recommendedProducts.map((prod, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-white text-gray-800 border border-gray-300 px-2.5 py-1 rounded font-medium shadow-2xs"
                      >
                        {prod}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-gray-200 flex flex-wrap items-center justify-between gap-3">
                <Link
                  to={`/products?crop=${encodeURIComponent(selectedCrop.name.split(' ')[0])}`}
                  className="inline-flex items-center text-xs font-bold text-white bg-[#2E7D32] hover:bg-[#256629] px-4 py-2.5 rounded shadow-xs transition-colors"
                >
                  <span>Filter Products for {selectedCrop.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>

                <Link
                  to="/contact"
                  className="text-xs font-bold text-[#14532D] hover:underline"
                >
                  Request Custom Crop Schedule
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Grid of all 10 crops for instant overview */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-5 gap-3">
          {CROPS.map((crop) => (
            <button
              key={`grid-${crop.id}`}
              onClick={() => setSelectedCrop(crop)}
              className={`p-3 rounded border text-left transition-all flex items-center space-x-2.5 ${
                selectedCrop.id === crop.id
                  ? 'bg-green-50 border-[#2E7D32] ring-1 ring-[#2E7D32]'
                  : 'bg-white border-gray-200 hover:border-gray-300'
              }`}
            >
              <img
                src={crop.image}
                alt={crop.name}
                className="w-10 h-10 rounded object-cover shrink-0"
              />
              <div className="min-w-0">
                <h4 className="text-xs font-bold text-gray-900 truncate">
                  {crop.name.split(' ')[0]}
                </h4>
                <span className="text-[10px] text-gray-500 block truncate">
                  {selectedCrop.id === crop.id ? 'Viewing' : 'Inspect'}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
