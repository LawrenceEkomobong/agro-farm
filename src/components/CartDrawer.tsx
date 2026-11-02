import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, Trash2, Plus, Minus, CheckCircle, FileText, ArrowRight, ShieldAlert, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CartDrawer: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, isCartOpen, setIsCartOpen, totalItems, subtotal } = useCart();
  const [step, setStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [orderRef, setOrderRef] = useState('');
  const [formData, setFormData] = useState({
    farmerName: '',
    phone: '',
    email: '',
    farmLocation: '',
    farmSizeHectares: '',
    preferredDeliveryDate: '',
    specialInstructions: ''
  });

  if (!isCartOpen) return null;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const reference = `AGRI-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderRef(reference);
    setStep('success');
    clearCart();
  };

  const containsAgroChemicals = cart.some(
    item => item.product.category === 'Agro-Chemicals' || 
            item.product.category === 'Herbicides' || 
            item.product.category === 'Insecticides' || 
            item.product.category === 'Fungicides'
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-xl flex flex-col">
          {/* Header */}
          <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between bg-[#F7F7F2]">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-[#2E7D32]" />
              <h2 className="text-lg font-bold text-[#1F2933]">
                {step === 'cart' && `Farm Supply Order (${totalItems})`}
                {step === 'checkout' && 'Commercial Order Request'}
                {step === 'success' && 'Order Inquiry Confirmed'}
              </h2>
            </div>
            <button
              id="close-cart-drawer-btn"
              onClick={() => {
                setIsCartOpen(false);
                setTimeout(() => setStep('cart'), 300);
              }}
              className="text-gray-500 hover:text-gray-800 p-1 rounded-md transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6">
            {step === 'cart' && (
              <>
                {cart.length === 0 ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4 text-gray-400">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <h3 className="text-base font-semibold text-gray-800 mb-1">Your cart is currently empty</h3>
                    <p className="text-sm text-gray-500 mb-6 max-w-xs mx-auto">
                      Explore our fertilizers, certified seeds, crop protection chemicals, and agricultural supplies.
                    </p>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="inline-flex items-center px-4 py-2 bg-[#2E7D32] hover:bg-[#256629] text-white font-medium text-sm rounded-md transition-colors"
                    >
                      Browse Catalog
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {containsAgroChemicals && (
                      <div className="p-3 bg-amber-50 border border-amber-200 rounded-md flex items-start space-x-2 text-xs text-amber-800">
                        <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">Agricultural Chemical Notice</p>
                          <p>Regulated inputs require trained application and mandatory personal protective equipment (PPE).</p>
                        </div>
                      </div>
                    )}

                    <div className="divide-y divide-gray-100">
                      {cart.map((item) => (
                        <div key={`${item.product.id}-${item.selectedSize}`} className="py-3 flex space-x-3">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-16 h-16 object-cover rounded-md border border-gray-200 shrink-0"
                            loading="lazy"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-gray-900 line-clamp-1">
                              {item.product.name}
                            </h4>
                            <p className="text-xs text-gray-500 mt-0.5">
                              Pack: <span className="font-medium text-gray-700">{item.selectedSize}</span>
                            </p>
                            <div className="flex items-center justify-between mt-2">
                              <div className="flex items-center border border-gray-200 rounded">
                                <button
                                  type="button"
                                  onClick={() => updateQuantity(item.product.id, item.selectedSize, item.quantity - 1)}
                                  className="p-1 hover:bg-gray-100 text-gray-600 transition-colors"
                                  aria-label="Decrease quantity"
                                >
                                  <Minus className="w-3.5 h-3.5" />
                                </button>
                                <span className="px-2.5 text-xs font-semibold text-gray-800">
                                  {item.quantity}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => updateQuantity(item.product.id, item.selectedSize, item.quantity + 1)}
                                  className="p-1 hover:bg-gray-100 text-gray-600 transition-colors"
                                  aria-label="Increase quantity"
                                >
                                  <Plus className="w-3.5 h-3.5" />
                                </button>
                              </div>
                              <div className="text-right">
                                <span className="text-sm font-bold text-[#14532D]">
                                  {item.product.price ? `$${(item.product.price * item.quantity).toFixed(2)}` : 'Quote Rate'}
                                </span>
                              </div>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.product.id, item.selectedSize)}
                            className="text-gray-400 hover:text-red-600 transition-colors self-start p-1"
                            title="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}

            {step === 'checkout' && (
              <form id="farm-order-quote-form" onSubmit={handleCheckoutSubmit} className="space-y-4 text-left">
                <div className="bg-gray-50 p-3 rounded-md border border-gray-200 mb-4">
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>Selected Items:</span>
                    <span className="font-semibold text-gray-900">{totalItems} units</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-[#14532D]">
                    <span>Estimated Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <p className="text-[11px] text-gray-500 mt-1">Final invoice includes regional logistics and pallet discounts.</p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Farmer / Farm Enterprise Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.farmerName}
                    onChange={e => setFormData({ ...formData, farmerName: e.target.value })}
                    placeholder="e.g. Green Valley Commercial Farms"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#2E7D32] focus:border-[#2E7D32] outline-hidden"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#2E7D32] focus:border-[#2E7D32] outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="agri@farm.com"
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#2E7D32] focus:border-[#2E7D32] outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Farm Location / Region *</label>
                    <input
                      type="text"
                      required
                      value={formData.farmLocation}
                      onChange={e => setFormData({ ...formData, farmLocation: e.target.value })}
                      placeholder="e.g. Sector 7, North District"
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#2E7D32] focus:border-[#2E7D32] outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Target Hectares</label>
                    <input
                      type="text"
                      value={formData.farmSizeHectares}
                      onChange={e => setFormData({ ...formData, farmSizeHectares: e.target.value })}
                      placeholder="e.g. 45 Hectares"
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#2E7D32] focus:border-[#2E7D32] outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Special Delivery / Packaging Notes</label>
                  <textarea
                    rows={3}
                    value={formData.specialInstructions}
                    onChange={e => setFormData({ ...formData, specialInstructions: e.target.value })}
                    placeholder="Provide gate directions, offloading requirements, or request specific active ingredient certificates."
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#2E7D32] focus:border-[#2E7D32] outline-hidden"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-[#2E7D32] hover:bg-[#256629] text-white font-semibold text-sm rounded-md shadow-xs transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Submit Official Supply Request</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep('cart')}
                    className="w-full mt-2 py-2 text-gray-600 hover:text-gray-900 text-xs font-medium text-center"
                  >
                    Return to item review
                  </button>
                </div>
              </form>
            )}

            {step === 'success' && (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Supply Request Received</h3>
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-md text-xs text-gray-700 space-y-1">
                  <p className="font-semibold text-gray-900">Reference Number: <span className="font-mono text-[#2E7D32]">{orderRef}</span></p>
                  <p>Our regional logistics and agronomy department will contact you within 2 business hours to verify dispatch logistics, batch certificates, and final delivery invoice.</p>
                </div>
                <div className="pt-4 space-y-2">
                  <button
                    onClick={() => {
                      setStep('cart');
                      setIsCartOpen(false);
                    }}
                    className="w-full py-2.5 bg-[#2E7D32] hover:bg-[#256629] text-white font-medium text-sm rounded-md transition-colors"
                  >
                    Continue Browsing Products
                  </button>
                  <Link
                    to="/contact"
                    onClick={() => setIsCartOpen(false)}
                    className="block text-xs text-gray-600 hover:text-gray-900 py-1"
                  >
                    Contact Dispatch Desk Directly
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          {step === 'cart' && cart.length > 0 && (
            <div className="p-6 border-t border-gray-200 bg-[#F7F7F2] space-y-3">
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Items:</span>
                  <span>{totalItems} units</span>
                </div>
                <div className="flex justify-between font-bold text-base text-[#14532D]">
                  <span>Estimated Total:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
              </div>
              <button
                id="proceed-checkout-btn"
                onClick={() => setStep('checkout')}
                className="w-full py-2.5 bg-[#2E7D32] hover:bg-[#256629] text-white font-semibold text-sm rounded-md shadow-xs transition-colors flex items-center justify-center space-x-2"
              >
                <span>Request Quotation & Order</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-[11px] text-gray-500">
                Official batch certificates and Safety Data Sheets (SDS) provided on dispatch.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
