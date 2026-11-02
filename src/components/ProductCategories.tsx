import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers } from 'lucide-react';
import { CATEGORIES } from '../data/agriculturalData';

export const ProductCategories: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#F7F7F2] border-b border-gray-200" id="product-categories-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#A67C52]">
              Comprehensive Inventory
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#14532D] tracking-tight mt-1">
              Agricultural Products & Solutions
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-2xl">
              Engineered crop inputs, plant nutrition compounds, certified seeds, and specialized field supplies designed to maximize seasonal farm yields.
            </p>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center text-sm font-bold text-[#2E7D32] hover:text-[#14532D] group shrink-0"
          >
            <span>View Full Product Catalog</span>
            <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Categories Grid (10 categories) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg border border-gray-200 shadow-xs hover:shadow-md transition-shadow flex flex-col overflow-hidden group"
            >
              {/* Category Image */}
              <div className="relative h-44 overflow-hidden bg-gray-100">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute top-2.5 right-2.5 px-2 py-0.5 bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium rounded">
                  {category.itemCount} Items
                </span>
              </div>

              {/* Card Body */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#14532D] group-hover:text-[#2E7D32] transition-colors leading-snug">
                    {category.name}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1.5 line-clamp-3 leading-relaxed">
                    {category.shortDescription}
                  </p>
                </div>

                {/* View Products Link */}
                <div className="pt-4 mt-2 border-t border-gray-100">
                  <Link
                    to={`/products?category=${encodeURIComponent(category.id)}`}
                    className="inline-flex items-center text-xs font-bold text-[#2E7D32] hover:text-[#14532D] transition-colors group-hover:underline"
                  >
                    <span>View Products</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
