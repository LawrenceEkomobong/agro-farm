import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { ProductCategories } from '../components/ProductCategories';
import { Services } from '../components/Services';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { CropSolutions } from '../components/CropSolutions';
import { Resources } from '../components/Resources';
import { Testimonials } from '../components/Testimonials';
import { CallToAction } from '../components/CallToAction';
import { Contact } from '../components/Contact';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../data/agriculturalData';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Filter } from 'lucide-react';

export const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'featured' | 'fertilizers' | 'chemicals' | 'seeds'>('featured');

  const filteredProducts = PRODUCTS.filter((p) => {
    if (activeTab === 'featured') return p.featured;
    if (activeTab === 'fertilizers') return p.category === 'Fertilizers' || p.category === 'Organic Manure';
    if (activeTab === 'chemicals') return p.category === 'Herbicides' || p.category === 'Insecticides' || p.category === 'Fungicides' || p.category === 'Agro-Chemicals';
    if (activeTab === 'seeds') return p.category === 'Seeds';
    return true;
  }).slice(0, 6);

  return (
    <div>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Us Section */}
      <About />

      {/* 3. Product Categories Section */}
      <ProductCategories />

      {/* 4. Featured Agricultural Products Showcase */}
      <section className="py-16 lg:py-24 bg-white border-b border-gray-200" id="featured-products-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#A67C52]">
                Certified Catalog Highlights
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#14532D] tracking-tight mt-1">
                Featured Agricultural Supplies
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-2xl">
                Immediate dispatch available for compound fertilizers, systemic crop-protection chemistry, high-yield hybrid seed varieties, and field equipment.
              </p>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center text-sm font-bold text-[#2E7D32] hover:text-[#14532D] group shrink-0"
            >
              <span>Explore All Products</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Quick Filter Tabs */}
          <div className="flex items-center space-x-2 border-b border-gray-200 pb-3 mb-8 overflow-x-auto scrollbar-thin">
            <button
              onClick={() => setActiveTab('featured')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-md whitespace-nowrap transition-colors ${
                activeTab === 'featured'
                  ? 'bg-[#14532D] text-white shadow-2xs'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Featured Inputs
            </button>
            <button
              onClick={() => setActiveTab('fertilizers')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-md whitespace-nowrap transition-colors ${
                activeTab === 'fertilizers'
                  ? 'bg-[#14532D] text-white shadow-2xs'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Fertilizers & Manure
            </button>
            <button
              onClick={() => setActiveTab('chemicals')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-md whitespace-nowrap transition-colors ${
                activeTab === 'chemicals'
                  ? 'bg-[#14532D] text-white shadow-2xs'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Crop Protection & Chemicals
            </button>
            <button
              onClick={() => setActiveTab('seeds')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-md whitespace-nowrap transition-colors ${
                activeTab === 'seeds'
                  ? 'bg-[#14532D] text-white shadow-2xs'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Certified Seeds
            </button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#F7F7F2] hover:bg-gray-100 border border-gray-300 text-sm font-bold text-[#14532D] rounded-md shadow-xs transition-colors"
            >
              <span>View All Agricultural Inputs & Filter by Crop</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Services Section */}
      <Services />

      {/* 6. Why Choose Us Section */}
      <WhyChooseUs />

      {/* 7. Crops & Farming Solutions Section */}
      <CropSolutions />

      {/* 8. Agricultural Resources & Guides Section */}
      <Resources limit={3} />

      {/* 9. Testimonials Section */}
      <Testimonials />

      {/* 10. Call to Action Section */}
      <CallToAction />

      {/* 11. Contact Section */}
      <Contact />
    </div>
  );
};
