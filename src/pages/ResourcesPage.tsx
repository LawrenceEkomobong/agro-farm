import React, { useState } from 'react';
import { RESOURCES } from '../data/agriculturalData';
import { ResourceArticle } from '../types';
import { ArticleModal } from '../components/ArticleModal';
import { BookOpen, Clock, Calendar, Search, ArrowRight, CheckCircle2 } from 'lucide-react';

export const ResourcesPage: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<ResourceArticle | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Soil Science', 'Pathology', 'Plant Nutrition', 'Weed Science', 'Entomology', 'Agronomy'];

  const filteredArticles = RESOURCES.filter((article) => {
    if (activeCategory !== 'All' && article.category !== activeCategory) {
      return false;
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchTitle = article.title.toLowerCase().includes(q);
      const matchDesc = article.shortDescription.toLowerCase().includes(q);
      const matchKey = article.keyTakeaways.some(k => k.toLowerCase().includes(q));
      if (!matchTitle && !matchDesc && !matchKey) return false;
    }
    return true;
  });

  return (
    <div className="bg-[#F7F7F2] min-h-screen py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#A67C52]">
            Technical Knowledge Base
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#14532D] tracking-tight mt-1">
            Agricultural Field Guides & Technical Resources
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 mt-2">
            Field-tested manuals, spray timing recommendations, soil correction protocols, and pest management procedures written by certified agronomists.
          </p>
        </div>

        {/* Controls: Category Filter + Search Bar */}
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-xs mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-thin">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded text-xs font-semibold whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? 'bg-[#14532D] text-white shadow-2xs'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search field guides..."
              className="w-full pl-9 pr-3 py-1.5 text-xs border border-gray-300 rounded-md focus:ring-1 focus:ring-[#2E7D32] focus:border-[#2E7D32] outline-hidden"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-2.5 top-2" />
          </div>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg border border-gray-200 shadow-xs hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div 
                  className="relative h-48 bg-gray-100 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedArticle(article)}
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2.5 py-1 bg-[#14532D]/90 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider rounded">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center space-x-2 text-[11px] text-gray-500 mb-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>

                  <h2 
                    onClick={() => setSelectedArticle(article)}
                    className="text-base font-bold text-gray-900 group-hover:text-[#2E7D32] transition-colors leading-snug cursor-pointer"
                  >
                    {article.title}
                  </h2>

                  <p className="text-xs text-gray-600 mt-2 line-clamp-3 leading-relaxed">
                    {article.shortDescription}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] text-gray-500">
                  By {article.author}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedArticle(article)}
                  className="inline-flex items-center text-xs font-bold text-[#2E7D32] hover:text-[#14532D] transition-colors group-hover:translate-x-0.5"
                >
                  <BookOpen className="w-3.5 h-3.5 mr-1.5" />
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Modal Reader */}
        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      </div>
    </div>
  );
};
