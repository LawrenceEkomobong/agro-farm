import React from 'react';
import { ResourceArticle } from '../types';
import { X, Clock, Calendar, User, BookOpen, CheckCircle } from 'lucide-react';

interface ArticleModalProps {
  article: ResourceArticle | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="relative bg-white w-full max-w-3xl rounded-lg shadow-xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-4 bg-[#F7F7F2] border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#2E7D32]">
            <BookOpen className="w-4 h-4" />
            <span className="uppercase tracking-wider">{article.category}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-gray-500 hover:text-gray-900 transition-colors"
            aria-label="Close article modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Container */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-6">
          {/* Title & Metadata */}
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#14532D] leading-tight">
              {article.title}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mt-2">
              <span className="flex items-center space-x-1">
                <User className="w-3.5 h-3.5 text-gray-400" />
                <span>{article.author}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5 text-gray-400" />
                <span>{article.date}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-gray-400" />
                <span>{article.readTime}</span>
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="rounded-md overflow-hidden h-60 bg-gray-100 border border-gray-200">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Key Takeaways Box */}
          <div className="p-4 bg-green-50/70 border border-green-200 rounded-md">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#14532D] mb-2 flex items-center space-x-1.5">
              <CheckCircle className="w-4 h-4 text-[#2E7D32]" />
              <span>Key Agronomic Takeaways</span>
            </h3>
            <ul className="space-y-1.5 text-xs text-gray-800">
              {article.keyTakeaways.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="text-[#2E7D32] font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Text Paragraphs */}
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Practical Disclaimer */}
          <div className="pt-4 border-t border-gray-200 text-[11px] text-gray-500 italic">
            Note: Application rates and pest control programs should always be cross-referenced with your specific regional soil classification, local climatic forecasts, and product label instructions.
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#2E7D32] hover:bg-[#256629] text-white text-xs font-semibold rounded transition-colors"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
