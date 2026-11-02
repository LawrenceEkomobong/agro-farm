import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../data/agriculturalData';
import { ProductFilters, FilterState } from '../components/ProductFilters';
import { ProductGrid } from '../components/ProductGrid';
import { SlidersHorizontal, X } from 'lucide-react';

const initialFilters: FilterState = {
  searchTerm: '',
  category: 'All',
  productType: 'All',
  cropType: 'All',
  application: 'All',
  priceRange: 'all'
};

export const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Sync URL parameters into filter state on mount / change
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const cropParam = searchParams.get('crop');
    const searchParam = searchParams.get('search');

    setFilters(prev => ({
      ...prev,
      category: categoryParam || prev.category,
      cropType: cropParam || prev.cropType,
      searchTerm: searchParam || prev.searchTerm
    }));
  }, [searchParams]);

  // Filter products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Search term
      if (filters.searchTerm) {
        const term = filters.searchTerm.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(term);
        const matchesDesc = product.description.toLowerCase().includes(term);
        const matchesCat = product.category.toLowerCase().includes(term);
        const matchesCrop = product.suitableCrops.some(c => c.toLowerCase().includes(term));
        const matchesActive = product.safetyInformation.activeIngredient?.toLowerCase().includes(term);
        if (!matchesName && !matchesDesc && !matchesCat && !matchesCrop && !matchesActive) {
          return false;
        }
      }

      // Category
      if (filters.category !== 'All' && product.category !== filters.category) {
        return false;
      }

      // Product Type
      if (filters.productType !== 'All' && product.productType !== filters.productType) {
        return false;
      }

      // Crop Type
      if (filters.cropType !== 'All') {
        const match = product.suitableCrops.some(
          c => c.toLowerCase().includes(filters.cropType.toLowerCase()) || c === 'All Field Crops'
        );
        if (!match) return false;
      }

      // Application method
      if (filters.application !== 'All') {
        if (!product.application.toLowerCase().includes(filters.application.toLowerCase().split(' ')[0])) {
          return false;
        }
      }

      // Price range
      if (filters.priceRange !== 'all') {
        const price = product.price || 0;
        if (filters.priceRange === 'under-20' && price >= 20) return false;
        if (filters.priceRange === '20-35' && (price < 20 || price > 35)) return false;
        if (filters.priceRange === '35-50' && (price < 35 || price > 50)) return false;
        if (filters.priceRange === 'above-50' && price <= 50) return false;
      }

      return true;
    });
  }, [filters]);

  const handleResetFilters = () => {
    setFilters(initialFilters);
    setSearchParams({});
  };

  return (
    <div className="bg-[#F7F7F2] min-h-screen py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb & Header */}
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#A67C52]">
            Certified Agricultural Supplies Catalog
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#14532D] tracking-tight mt-1">
            Agricultural Products & Chemical Store
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-3xl">
            Browse our complete inventory of mineral and organic fertilizers, selective herbicides, systemic fungicides, knock-down insecticides, certified seeds, and specialized application equipment.
          </p>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="w-full py-2.5 px-4 bg-white border border-gray-300 rounded-md text-xs font-bold text-gray-800 flex items-center justify-between shadow-2xs"
          >
            <span className="flex items-center space-x-2">
              <SlidersHorizontal className="w-4 h-4 text-[#2E7D32]" />
              <span>Filter & Search Products ({filteredProducts.length} results)</span>
            </span>
            <span className="text-gray-500 text-[11px]">
              {mobileFilterOpen ? 'Close' : 'Adjust'}
            </span>
          </button>
        </div>

        {/* Main Layout: Filters Sidebar + Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Desktop Filter Sidebar */}
          <div className="hidden lg:block lg:col-span-3 sticky top-28">
            <ProductFilters
              filters={filters}
              onFilterChange={setFilters}
              onReset={handleResetFilters}
              totalFiltered={filteredProducts.length}
            />
          </div>

          {/* Mobile Filter Modal / Drawer */}
          {mobileFilterOpen && (
            <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 p-4 flex items-center justify-center lg:hidden">
              <div className="bg-white w-full max-w-md rounded-lg p-5 max-h-[85vh] overflow-y-auto space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <h3 className="font-bold text-sm text-gray-900">Filter Products</h3>
                  <button onClick={() => setMobileFilterOpen(false)} className="text-gray-500 p-1">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <ProductFilters
                  filters={filters}
                  onFilterChange={(f) => {
                    setFilters(f);
                  }}
                  onReset={handleResetFilters}
                  totalFiltered={filteredProducts.length}
                />
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="w-full py-2.5 bg-[#2E7D32] text-white font-bold text-xs rounded"
                >
                  Apply Filters ({filteredProducts.length} Products)
                </button>
              </div>
            </div>
          )}

          {/* Products Content Area */}
          <div className="lg:col-span-9">
            <ProductGrid
              products={filteredProducts}
              onResetFilters={handleResetFilters}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
