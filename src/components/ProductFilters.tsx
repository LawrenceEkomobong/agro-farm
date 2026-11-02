import React from 'react';
import { Search, X, RotateCcw, Filter } from 'lucide-react';
import { ProductCategoryType } from '../types';
import { CATEGORIES } from '../data/agriculturalData';

export interface FilterState {
  searchTerm: string;
  category: string;
  productType: string;
  cropType: string;
  application: string;
  priceRange: string;
}

interface ProductFiltersProps {
  filters: FilterState;
  onFilterChange: (newFilters: FilterState) => void;
  onReset: () => void;
  totalFiltered: number;
}

const PRODUCT_TYPES = ['All', 'Chemical', 'Organic', 'Granular', 'Liquid', 'Seed', 'Equipment'];
const CROPS = ['All', 'Maize', 'Rice', 'Cassava', 'Vegetables', 'Tomatoes', 'Pepper', 'Cocoa', 'Oil Palm', 'Plantain'];
const APPLICATIONS = [
  'All',
  'Basal / Pre-planting',
  'Foliar Spray',
  'Top-dressing / Side-dressing',
  'Soil Drench / Fertigation',
  'Direct Seeding'
];
const PRICE_RANGES = [
  { label: 'All Prices', value: 'all' },
  { label: 'Under $20', value: 'under-20' },
  { label: '$20 – $35', value: '20-35' },
  { label: '$35 – $50', value: '35-50' },
  { label: '$50 and above', value: 'above-50' }
];

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  filters,
  onFilterChange,
  onReset,
  totalFiltered
}) => {
  const updateField = (key: keyof FilterState, value: string) => {
    onFilterChange({
      ...filters,
      [key]: value
    });
  };

  const hasActiveFilters = 
    filters.searchTerm !== '' ||
    filters.category !== 'All' ||
    filters.productType !== 'All' ||
    filters.cropType !== 'All' ||
    filters.application !== 'All' ||
    filters.priceRange !== 'all';

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-xs space-y-6">
      {/* Top Header & Search Bar */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-[#2E7D32]" />
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
              Filter Catalog
            </h3>
          </div>
          {hasActiveFilters && (
            <button
              onClick={onReset}
              className="inline-flex items-center text-xs text-red-600 hover:text-red-700 font-medium space-x-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}
        </div>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            id="agricultural-product-search"
            value={filters.searchTerm}
            onChange={(e) => updateField('searchTerm', e.target.value)}
            placeholder="Search agricultural products..."
            className="w-full pl-9 pr-8 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#2E7D32] focus:border-[#2E7D32] outline-hidden placeholder-gray-400"
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
          {filters.searchTerm && (
            <button
              onClick={() => updateField('searchTerm', '')}
              className="absolute right-2.5 top-2.5 text-gray-400 hover:text-gray-600"
              aria-label="Clear search text"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Category Filter */}
      <div className="border-t border-gray-100 pt-4">
        <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">
          Category
        </label>
        <div className="space-y-1 max-h-48 overflow-y-auto pr-1">
          <button
            type="button"
            onClick={() => updateField('category', 'All')}
            className={`w-full text-left px-2.5 py-1.5 rounded text-xs transition-colors flex items-center justify-between ${
              filters.category === 'All'
                ? 'bg-green-50 text-[#14532D] font-bold'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <span>All Categories</span>
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => updateField('category', cat.id)}
              className={`w-full text-left px-2.5 py-1.5 rounded text-xs transition-colors flex items-center justify-between ${
                filters.category === cat.id
                  ? 'bg-green-50 text-[#14532D] font-bold'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Product Type Filter */}
      <div className="border-t border-gray-100 pt-4">
        <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">
          Product Type
        </label>
        <select
          value={filters.productType}
          onChange={(e) => updateField('productType', e.target.value)}
          className="w-full px-3 py-2 text-xs border border-gray-300 rounded-md focus:ring-1 focus:ring-[#2E7D32] focus:border-[#2E7D32] outline-hidden bg-white text-gray-800"
        >
          {PRODUCT_TYPES.map((type) => (
            <option key={type} value={type}>
              {type === 'All' ? 'All Types (Chemical, Organic, Granular...)' : type}
            </option>
          ))}
        </select>
      </div>

      {/* Crop Type Filter */}
      <div className="border-t border-gray-100 pt-4">
        <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">
          Suitable Crop
        </label>
        <select
          value={filters.cropType}
          onChange={(e) => updateField('cropType', e.target.value)}
          className="w-full px-3 py-2 text-xs border border-gray-300 rounded-md focus:ring-1 focus:ring-[#2E7D32] focus:border-[#2E7D32] outline-hidden bg-white text-gray-800"
        >
          {CROPS.map((crop) => (
            <option key={crop} value={crop}>
              {crop === 'All' ? 'All Crops (Maize, Rice, Vegetables...)' : crop}
            </option>
          ))}
        </select>
      </div>

      {/* Application Method */}
      <div className="border-t border-gray-100 pt-4">
        <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">
          Application Method
        </label>
        <select
          value={filters.application}
          onChange={(e) => updateField('application', e.target.value)}
          className="w-full px-3 py-2 text-xs border border-gray-300 rounded-md focus:ring-1 focus:ring-[#2E7D32] focus:border-[#2E7D32] outline-hidden bg-white text-gray-800"
        >
          {APPLICATIONS.map((app) => (
            <option key={app} value={app}>
              {app === 'All' ? 'All Application Methods' : app}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range Filter */}
      <div className="border-t border-gray-100 pt-4">
        <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">
          Price Range
        </label>
        <div className="space-y-1">
          {PRICE_RANGES.map((range) => (
            <label key={range.value} className="flex items-center space-x-2 text-xs text-gray-700 cursor-pointer py-0.5">
              <input
                type="radio"
                name="priceRange"
                value={range.value}
                checked={filters.priceRange === range.value}
                onChange={() => updateField('priceRange', range.value)}
                className="text-[#2E7D32] focus:ring-[#2E7D32]"
              />
              <span>{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Result Status */}
      <div className="border-t border-gray-100 pt-4 text-xs text-gray-500 flex items-center justify-between">
        <span>Matching Products:</span>
        <span className="font-bold text-[#14532D] text-sm">{totalFiltered} found</span>
      </div>
    </div>
  );
};
