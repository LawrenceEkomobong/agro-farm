import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../data/agriculturalData';
import { useCart } from '../context/CartContext';
import { 
  ArrowLeft, 
  ShoppingBag, 
  ShieldAlert, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  Scale, 
  FileText, 
  Warehouse, 
  ShieldCheck, 
  Plus, 
  Minus,
  Sparkles,
  Layers
} from 'lucide-react';
import { ProductCard } from '../components/ProductCard';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = PRODUCTS.find((p) => p.id === id);

  const [selectedSize, setSelectedSize] = useState(product ? product.packSize : '');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'benefits' | 'instructions' | 'safety' | 'storage'>('benefits');

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Product Not Found</h2>
        <p className="text-sm text-gray-600 mb-6">The agricultural input you requested does not exist in our catalog.</p>
        <Link
          to="/products"
          className="px-4 py-2 bg-[#2E7D32] text-white text-xs font-semibold rounded"
        >
          Return to Products Catalog
        </Link>
      </div>
    );
  }

  const isChemical = 
    product.category === 'Agro-Chemicals' || 
    product.category === 'Herbicides' || 
    product.category === 'Insecticides' || 
    product.category === 'Fungicides';

  const relatedProducts = PRODUCTS.filter(
    p => p.id !== product.id && (p.category === product.category || p.suitableCrops.some(c => product.suitableCrops.includes(c)))
  ).slice(0, 3);

  const handleAddToCart = () => {
    addToCart(product, selectedSize || product.packSize, quantity);
  };

  return (
    <div className="bg-[#F7F7F2] min-h-screen py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center space-x-2 text-xs text-gray-500">
          <Link to="/" className="hover:text-gray-900">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-gray-900">Products</Link>
          <span>/</span>
          <Link to={`/products?category=${encodeURIComponent(product.category)}`} className="hover:text-gray-900">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold truncate max-w-xs">{product.name}</span>
        </div>

        {/* Main Product Container */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-xs overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-10">
            {/* Image Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 sm:h-[420px] object-cover"
                />
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  <span className="px-2.5 py-1 bg-[#14532D] text-white text-xs font-bold uppercase tracking-wider rounded shadow-xs">
                    {product.category}
                  </span>
                  {isChemical && (
                    <span className="px-2.5 py-1 bg-amber-600 text-white text-xs font-bold rounded shadow-xs flex items-center space-x-1">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      <span>Regulated Agricultural Chemical</span>
                    </span>
                  )}
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className={`px-2.5 py-1 text-xs font-bold rounded backdrop-blur-xs shadow-xs ${
                    product.availability === 'In Stock'
                      ? 'bg-green-100 text-green-900 border border-green-300'
                      : 'bg-amber-100 text-amber-900 border border-amber-300'
                  }`}>
                    {product.availability}
                  </span>
                </div>
              </div>

              {/* Technical Specifications Quick Grid */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-gray-50 rounded border border-gray-200">
                  <span className="text-gray-500 block text-[11px] font-semibold uppercase">Product Formulation</span>
                  <span className="font-bold text-gray-900 mt-0.5 block">{product.productType}</span>
                </div>
                <div className="p-3 bg-gray-50 rounded border border-gray-200">
                  <span className="text-gray-500 block text-[11px] font-semibold uppercase">Application Method</span>
                  <span className="font-bold text-gray-900 mt-0.5 block line-clamp-1">{product.application.split(' ')[0]}</span>
                </div>
              </div>
            </div>

            {/* Product Details Column */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#A67C52]">
                  {product.productType} Grade Agricultural Solution
                </span>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#14532D] tracking-tight mt-1 leading-snug">
                  {product.name}
                </h1>

                {/* Price Display */}
                <div className="mt-4 p-3.5 bg-[#F7F7F2] rounded-md border border-gray-200 flex items-baseline justify-between">
                  <div>
                    <span className="text-[11px] uppercase font-bold text-gray-500 block">Unit Price (ex-depot)</span>
                    <span className="text-2xl font-extrabold text-[#14532D]">
                      {product.priceDisplay}
                    </span>
                  </div>
                  <span className="text-xs text-gray-600 font-medium">
                    Standard Pack: <strong className="text-gray-900">{product.packSize}</strong>
                  </span>
                </div>

                {/* Short & Long Description */}
                <p className="text-sm text-gray-700 mt-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Available Packaging Sizes Selector */}
                <div className="mt-6">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-900 mb-2">
                    Select Packaging Size
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.availableSizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`px-3.5 py-2 rounded text-xs font-semibold border transition-all ${
                          (selectedSize || product.packSize) === size
                            ? 'bg-[#14532D] text-white border-[#14532D] shadow-xs'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Application Rate & Suitable Crops */}
                <div className="mt-6 space-y-3">
                  <div className="text-xs text-gray-700">
                    <span className="font-bold text-gray-900">Standard Application Rate: </span>
                    <span className="text-[#2E7D32] font-semibold">{product.applicationRate}</span>
                  </div>

                  <div>
                    <span className="block text-xs font-bold text-gray-900 mb-1.5">Suitable Crops & Target Agriculture:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {product.suitableCrops.map((crop) => (
                        <Link
                          key={crop}
                          to={`/products?crop=${encodeURIComponent(crop)}`}
                          className="text-xs bg-green-50 text-green-800 hover:bg-green-100 border border-green-200 px-2.5 py-1 rounded font-medium transition-colors"
                        >
                          {crop}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quantity & Add to Cart / Order CTA */}
              <div className="pt-6 border-t border-gray-200 space-y-4">
                <div className="flex flex-wrap items-center gap-4">
                  {/* Quantity selector */}
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 text-gray-600 hover:bg-gray-100 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 text-sm font-bold text-gray-900">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 text-gray-600 hover:bg-gray-100 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Add to Cart button */}
                  <button
                    type="button"
                    id="add-to-cart-detail-btn"
                    onClick={handleAddToCart}
                    className="flex-1 min-w-[200px] py-3 px-6 bg-[#2E7D32] hover:bg-[#256629] text-white text-sm font-bold rounded-md shadow-xs transition-colors flex items-center justify-center space-x-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add {quantity} to Supply Order</span>
                  </button>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500 pt-1">
                  <span>Pallet volume discounts available on orders &gt; 10 units.</span>
                  <Link to="/contact" className="text-[#2E7D32] font-semibold hover:underline">
                    Inquire for Bulk Delivery
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Technical Tabs: Benefits, Instructions, Safety & Storage */}
          <div className="border-t border-gray-200 bg-[#F7F7F2]">
            {/* Tab navigation */}
            <div className="flex border-b border-gray-200 px-6 sm:px-10 overflow-x-auto scrollbar-thin">
              <button
                onClick={() => setActiveTab('benefits')}
                className={`py-3.5 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === 'benefits'
                    ? 'border-[#2E7D32] text-[#14532D] bg-white'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Key Agronomic Benefits
              </button>
              <button
                onClick={() => setActiveTab('instructions')}
                className={`py-3.5 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === 'instructions'
                    ? 'border-[#2E7D32] text-[#14532D] bg-white'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Usage & Application Guide
              </button>
              <button
                onClick={() => setActiveTab('safety')}
                className={`py-3.5 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === 'safety'
                    ? 'border-[#2E7D32] text-[#14532D] bg-white'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Safety & Regulatory Data
              </button>
              <button
                onClick={() => setActiveTab('storage')}
                className={`py-3.5 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === 'storage'
                    ? 'border-[#2E7D32] text-[#14532D] bg-white'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Warehouse Storage & Handling
              </button>
            </div>

            {/* Tab Body */}
            <div className="p-6 sm:p-10 bg-white">
              {activeTab === 'benefits' && (
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2">
                    Agronomic & Economic Advantages
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.keyBenefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start space-x-2.5 p-3 rounded bg-gray-50 border border-gray-200">
                        <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-800 leading-relaxed">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'instructions' && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2">
                    Field Application Protocol
                  </h3>
                  <div className="space-y-2">
                    {product.usageInstructions.map((instruction, idx) => (
                      <div key={idx} className="flex items-start space-x-3 p-3 rounded bg-gray-50 border border-gray-200">
                        <span className="w-5 h-5 rounded-full bg-[#14532D] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="text-xs text-gray-800 leading-relaxed">{instruction}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 bg-amber-50 rounded border border-amber-200 text-xs text-amber-800 flex items-center space-x-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Always calibrate knapsack or tractor boom sprayers with clean water prior to chemical tank mixing.</span>
                  </div>
                </div>
              )}

              {activeTab === 'safety' && (
                <div className="space-y-6">
                  {/* Safety Alert Header */}
                  <div className="p-4 bg-amber-50/70 border border-amber-300 rounded-md flex items-start space-x-3">
                    <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900">
                        Chemical Stewardship & Safety Classification: {product.safetyInformation.hazardLevel}
                      </h4>
                      <p className="text-xs text-amber-800">
                        Active Ingredient Formulation: <strong>{product.safetyInformation.activeIngredient || 'Agricultural Grade Spec'}</strong>
                      </p>
                    </div>
                  </div>

                  {/* Safety Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* PPE Required */}
                    <div className="p-4 rounded bg-gray-50 border border-gray-200">
                      <h5 className="text-xs font-bold text-gray-900 uppercase mb-2 flex items-center space-x-1.5">
                        <ShieldCheck className="w-4 h-4 text-[#2E7D32]" />
                        <span>Mandatory PPE</span>
                      </h5>
                      <ul className="space-y-1 text-xs text-gray-700">
                        {product.safetyInformation.ppeRequired.map((item, idx) => (
                          <li key={idx} className="flex items-center space-x-1.5">
                            <span className="text-[#2E7D32]">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Re-entry Interval */}
                    <div className="p-4 rounded bg-gray-50 border border-gray-200">
                      <h5 className="text-xs font-bold text-gray-900 uppercase mb-2 flex items-center space-x-1.5">
                        <Clock className="w-4 h-4 text-[#2E7D32]" />
                        <span>Re-Entry Interval (REI)</span>
                      </h5>
                      <p className="text-xs text-gray-800 font-semibold">
                        {product.safetyInformation.reentryInterval}
                      </p>
                      <p className="text-[11px] text-gray-500 mt-1">
                        Do not enter treated field rows without protective footwear until spray residue has dried completely.
                      </p>
                    </div>

                    {/* Withholding Period */}
                    <div className="p-4 rounded bg-gray-50 border border-gray-200">
                      <h5 className="text-xs font-bold text-gray-900 uppercase mb-2 flex items-center space-x-1.5">
                        <Scale className="w-4 h-4 text-[#2E7D32]" />
                        <span>Pre-Harvest Interval (PHI)</span>
                      </h5>
                      <p className="text-xs text-gray-800 font-semibold">
                        {product.safetyInformation.withholdingPeriod}
                      </p>
                      <p className="text-[11px] text-gray-500 mt-1">
                        Ensure strict adherence to withhold periods to guarantee residue compliance at harvest.
                      </p>
                    </div>
                  </div>

                  {/* Disposal */}
                  <div className="p-3 bg-gray-50 rounded border border-gray-200 text-xs text-gray-700">
                    <strong className="text-gray-900 block mb-0.5">Container Disposal & Environmental Protection:</strong>
                    <p>{product.safetyInformation.disposalInstructions}</p>
                  </div>
                </div>
              )}

              {activeTab === 'storage' && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2 flex items-center space-x-2">
                    <Warehouse className="w-4 h-4 text-[#2E7D32]" />
                    <span>Warehouse Storage Protocols</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed bg-gray-50 p-4 rounded border border-gray-200">
                    {product.storageInformation}
                  </p>
                  <div className="text-xs text-gray-500 space-y-1">
                    <p>• Keep bags and containers securely sealed to prevent moisture absorption and volatility losses.</p>
                    <p>• Elevate minimum 15 cm above ground using wooden or plastic pallets.</p>
                    <p>• Keep locked away from unauthorized personnel, children, food items, and animal feed stores.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Products Grid */}
        {relatedProducts.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-extrabold text-[#14532D]">
                Compatible Crop Solutions
              </h3>
              <Link to="/products" className="text-xs font-bold text-[#2E7D32] hover:underline">
                View Full Catalog
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
