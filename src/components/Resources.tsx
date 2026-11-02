import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, BookOpen } from 'lucide-react';
import { RESOURCES } from '../data/agriculturalData';
import { ResourceArticle } from '../types';
import { ArticleModal } from './ArticleModal';

interface ResourcesProps {
  limit?: number;
  showAllButton?: boolean;
}

export const Resources: React.FC<ResourcesProps> = ({ limit, showAllButton = true }) => {
  const [selectedArticle, setSelectedArticle] = useState<ResourceArticle | null>(null);

  const displayArticles = limit ? RESOURCES.slice(0, limit) : RESOURCES;

  return (
    <section className="py-16 lg:py-24 bg-[#F7F7F2] border-b border-gray-200" id="resources-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#A67C52]">
              Agronomic Knowledge Base
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#14532D] tracking-tight mt-1">
              Field Guides & Technical Resources
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-2xl">
              Practical agronomic manuals, spray timing recommendations, and soil fertility strategies prepared by licensed agronomists to safeguard your crop investment.
            </p>
          </div>
          {showAllButton && (
            <Link
              to="/resources"
              className="inline-flex items-center text-sm font-bold text-[#2E7D32] hover:text-[#14532D] group shrink-0"
            >
              <span>Explore All Guides</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>

        {/* 6 Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg border border-gray-200 shadow-xs hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Article Image */}
                <div className="relative h-48 bg-gray-100 overflow-hidden cursor-pointer" onClick={() => setSelectedArticle(article)}>
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

                {/* Article Content */}
                <div className="p-5">
                  <div className="flex items-center space-x-2 text-[11px] text-gray-500 mb-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>

                  <h3 
                    onClick={() => setSelectedArticle(article)}
                    className="text-base font-bold text-gray-900 group-hover:text-[#2E7D32] transition-colors leading-snug cursor-pointer"
                  >
                    {article.title}
                  </h3>

                  <p className="text-xs text-gray-600 mt-2 line-clamp-3 leading-relaxed">
                    {article.shortDescription}
                  </p>
                </div>
              </div>

              {/* Read More Action */}
              <div className="px-5 pb-5 pt-2 border-t border-gray-100">
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
      </div>

      {/* Detail Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </section>
  );
};
