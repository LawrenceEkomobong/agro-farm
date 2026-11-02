import React, { useState } from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { LayoutGrid, List, ArrowUpDown, PackageOpen } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  onResetFilters?: () => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, onResetFilters }) => {
  const [sortBy, setSortBy] = useState<'featured' | 'name' | 'price-asc' | 'price-desc'>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'compact'>('grid');

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === 'price-asc') {
      return (a.price || 9999) - (b.price || 9999);
    }
    if (sortBy === 'price-desc') {
      return (b.price || 0) - (a.price || 0);
    }
    // 'featured'
    return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
  });

  return (
    <div className="space-y-4">
      {/* Control Bar */}
      <div className="bg-white p-3 rounded-lg border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="text-gray-600 font-medium">
          Showing <span className="font-bold text-gray-900">{products.length}</span> agricultural items
        </div>

        <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
          {/* Sorting */}
          <div className="flex items-center space-x-1.5">
            <ArrowUpDown className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-gray-500 hidden sm:inline">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="border border-gray-300 rounded px-2.5 py-1 text-xs text-gray-700 bg-white focus:ring-1 focus:ring-[#2E7D32] focus:border-[#2E7D32] outline-hidden"
            >
              <option value="featured">Featured First</option>
              <option value="name">Product Name (A-Z)</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>

          {/* View toggle */}
          <div className="flex items-center border border-gray-200 rounded overflow-hidden">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 ${viewMode === 'grid' ? 'bg-gray-100 text-[#2E7D32]' : 'text-gray-400 hover:text-gray-700'}`}
              title="Grid View"
              aria-label="Grid View"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setViewMode('compact')}
              className={`p-1.5 ${viewMode === 'compact' ? 'bg-gray-100 text-[#2E7D32]' : 'text-gray-400 hover:text-gray-700'}`}
              title="Compact View"
              aria-label="Compact View"
            >
              <List className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {sortedProducts.length === 0 ? (
        <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
          <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-3">
            <PackageOpen className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-gray-900 mb-1">No agricultural products found</h3>
          <p className="text-xs text-gray-500 max-w-sm mx-auto mb-4">
            We couldn’t find products matching your current search and filter combination. Try clearing filters or searching for terms like "NPK", "herbicide", or "seeds".
          </p>
          {onResetFilters && (
            <button
              onClick={onResetFilters}
              className="px-4 py-2 bg-[#2E7D32] hover:bg-[#256629] text-white text-xs font-semibold rounded transition-colors"
            >
              Clear All Filters
            </button>
          )}
        </div>
      ) : (
        <div className={`grid gap-5 ${
          viewMode === 'grid'
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
            : 'grid-cols-1 sm:grid-cols-2'
        }`}>
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};
