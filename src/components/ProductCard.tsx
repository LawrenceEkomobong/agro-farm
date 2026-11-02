import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { 
  ShoppingBag, 
  Eye, 
  ShieldAlert, 
  CheckCircle, 
  Clock, 
  Layers, 
  Scale 
} from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const isChemical = product.category === 'Agro-Chemicals' || 
                    product.category === 'Herbicides' || 
                    product.category === 'Insecticides' || 
                    product.category === 'Fungicides';

  return (
    <div 
      className="bg-white rounded-lg border border-gray-200 shadow-xs hover:shadow-md transition-shadow flex flex-col overflow-hidden group"
      id={`product-card-${product.id}`}
    >
      {/* Product Image & Badges */}
      <div className="relative h-48 sm:h-52 bg-gray-100 overflow-hidden">
        <Link to={`/products/${product.id}`} className="block w-full h-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </Link>

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1">
          <span className="px-2 py-0.5 bg-[#14532D] text-white text-[10px] font-bold uppercase tracking-wider rounded">
            {product.category}
          </span>
          {isChemical && (
            <span className="px-2 py-0.5 bg-amber-600 text-white text-[10px] font-bold rounded flex items-center space-x-1 shadow-xs">
              <ShieldAlert className="w-3 h-3" />
              <span>Restricted Use</span>
            </span>
          )}
        </div>

        {/* Availability Badge */}
        <div className="absolute bottom-2.5 right-2.5">
          <span className={`px-2 py-0.5 text-[11px] font-semibold rounded backdrop-blur-xs ${
            product.availability === 'In Stock'
              ? 'bg-green-100/90 text-green-800 border border-green-300'
              : 'bg-amber-100/90 text-amber-800 border border-amber-300'
          }`}>
            {product.availability}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Pack size indicator */}
          <div className="flex items-center space-x-1 text-xs text-gray-500 mb-1">
            <Scale className="w-3.5 h-3.5 text-[#A67C52]" />
            <span>Standard Pack: <strong className="text-gray-700">{product.packSize}</strong></span>
          </div>

          <Link to={`/products/${product.id}`}>
            <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#2E7D32] transition-colors line-clamp-2 leading-tight">
              {product.name}
            </h3>
          </Link>

          <p className="text-xs text-gray-600 mt-1.5 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Suitable Crops Tags */}
          <div className="mt-3 flex flex-wrap gap-1">
            {product.suitableCrops.slice(0, 3).map((crop) => (
              <span 
                key={crop} 
                className="text-[10px] bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded font-medium"
              >
                {crop}
              </span>
            ))}
            {product.suitableCrops.length > 3 && (
              <span className="text-[10px] text-gray-500 px-1 py-0.5">
                +{product.suitableCrops.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Pricing & Actions */}
        <div className="pt-4 mt-3 border-t border-gray-100">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold block">Commercial Price</span>
              <span className="text-base font-extrabold text-[#14532D]">
                {product.priceDisplay}
              </span>
            </div>
            <span className="text-[11px] text-gray-500">Per {product.packSize}</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Link
              to={`/products/${product.id}`}
              id={`view-details-${product.id}`}
              className="inline-flex items-center justify-center px-3 py-2 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded transition-colors"
            >
              <Eye className="w-3.5 h-3.5 mr-1 text-gray-600" />
              <span>Details</span>
            </Link>

            <button
              type="button"
              id={`add-to-cart-${product.id}`}
              onClick={() => addToCart(product, product.packSize, 1)}
              className="inline-flex items-center justify-center px-3 py-2 text-xs font-semibold text-white bg-[#2E7D32] hover:bg-[#256629] rounded transition-colors shadow-xs"
            >
              <ShoppingBag className="w-3.5 h-3.5 mr-1" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
