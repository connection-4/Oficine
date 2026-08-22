import React, { useState } from 'react';
import { Star, ThumbsUp, CheckCircle, ExternalLink, MessageSquare, Award } from 'lucide-react';
import { REVIEWS_LIST, SHOP_INFO } from '../data/shopData';

export const ReviewsSection: React.FC = () => {
  const [filterTag, setFilterTag] = useState<string>('all');

  const filterTags = [
    { id: 'all', label: 'All Reviews (70)' },
    { id: 'Exhaust', label: 'Exhaust & Mufflers (11)' },
    { id: 'Axle', label: 'Ball Joints & Axles (9)' },
    { id: 'Diagnostics', label: 'Diagnostics (14)' },
    { id: 'Mechanic', label: 'Honest Pricing (18)' },
  ];

  const filteredReviews = REVIEWS_LIST.filter((review) => {
    if (filterTag === 'all') return true;
    if (filterTag === 'Exhaust') return review.text.toLowerCase().includes('exhaust');
    if (filterTag === 'Axle') return review.text.toLowerCase().includes('axle') || review.text.toLowerCase().includes('ball joint');
    if (filterTag === 'Diagnostics') return review.text.toLowerCase().includes('diagnos') || review.text.toLowerCase().includes('check engine') || review.text.toLowerCase().includes('alternator');
    if (filterTag === 'Mechanic') return review.text.toLowerCase().includes('honest') || review.text.toLowerCase().includes('price') || review.text.toLowerCase().includes('rate');
    return true;
  });

  return (
    <section id="reviews" className="py-20 bg-[#0A0A0A] text-[#F5F5F5] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <p className="text-[10px] font-bold text-[#E63946] uppercase tracking-[0.3em]">
            Verified Feedback
          </p>
          <h2 className="text-3xl sm:text-5xl font-black italic tracking-tighter uppercase text-white">
            What Lyons Drivers Say About FERS
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed">
            Real feedback from drivers who rely on us for their daily commutes, heavy mechanical repairs, and routine maintenance.
          </p>
        </div>

        {/* Rating Breakdown & Summary Card */}
        <div className="rounded-sm bg-zinc-950/80 border border-white/10 p-6 sm:p-8 mb-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Overall Score */}
            <div className="lg:col-span-4 text-center lg:text-left lg:border-r border-white/10 lg:pr-8 space-y-2">
              <div className="text-5xl sm:text-6xl font-black italic tracking-tighter text-[#E63946] font-mono">
                4.7
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-1 text-[#E63946]">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < 4 ? 'fill-[#E63946] text-[#E63946]' : 'fill-[#E63946]/50 text-[#E63946]'}`}
                  />
                ))}
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-white/80">Based on 70 Google Reviews</p>
              <div className="pt-2">
                <a
                  href={SHOP_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E63946] hover:text-white uppercase tracking-wider transition-colors"
                >
                  <span>Verify on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Star Distribution Progress Bars */}
            <div className="lg:col-span-5 space-y-2 text-xs">
              {[
                { stars: 5, count: 56, pct: '80%' },
                { stars: 4, count: 8, pct: '12%' },
                { stars: 3, count: 2, pct: '3%' },
                { stars: 2, count: 2, pct: '3%' },
                { stars: 1, count: 2, pct: '3%' },
              ].map((item) => (
                <div key={item.stars} className="flex items-center gap-3">
                  <div className="flex items-center gap-1 w-12 text-white/50 font-bold">
                    <span>{item.stars}</span>
                    <Star className="w-3 h-3 fill-[#E63946] text-[#E63946]" />
                  </div>
                  <div className="flex-1 h-1.5 bg-white/10 rounded-none overflow-hidden">
                    <div
                      className="h-full bg-[#E63946]"
                      style={{ width: item.pct }}
                    ></div>
                  </div>
                  <span className="w-8 text-right text-white/40 font-mono text-xs">{item.count}</span>
                </div>
              ))}
            </div>

            {/* Google Badge CTA */}
            <div className="lg:col-span-3 text-center lg:text-right space-y-3">
              <div className="inline-flex flex-col items-center lg:items-end">
                <div className="flex items-center gap-2 text-white text-xs font-black uppercase tracking-wider">
                  <Award className="w-4 h-4 text-[#E63946]" />
                  <span>Google Top Rated</span>
                </div>
                <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Lyons & Chicagoland, IL</p>
              </div>

              <div>
                <a
                  href={SHOP_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-sm bg-white hover:bg-[#E63946] text-black hover:text-white text-xs font-black uppercase tracking-widest transition-all shadow-md"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Read 70 Reviews</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 scrollbar-none">
          {filterTags.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterTag(tab.id)}
              className={`px-3.5 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors ${
                filterTag === tab.id
                  ? 'bg-[#E63946] text-white'
                  : 'bg-white/5 text-white/60 hover:text-white border border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="flex flex-col justify-between rounded-sm bg-zinc-950/80 border border-white/10 border-l-2 border-l-[#E63946] p-6 sm:p-7 shadow-lg hover:border-white/20 transition-all duration-200"
            >
              <div className="space-y-4">
                {/* Author Info */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-sm bg-white/10 text-white font-black text-xs flex items-center justify-center border border-white/10">
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-xs uppercase tracking-tight">{rev.author}</h4>
                      <p className="text-[10px] text-white/40 uppercase tracking-wider">{rev.authorBadge}</p>
                    </div>
                  </div>

                  {rev.isGoogleVerified && (
                    <div className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-[#E63946] bg-[#E63946]/10 border border-[#E63946]/30 px-2 py-0.5 rounded-sm">
                      <CheckCircle className="w-3 h-3" />
                      <span>Verified</span>
                    </div>
                  )}
                </div>

                {/* Stars & Date */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1 text-[#E63946]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#E63946] text-[#E63946]" />
                    ))}
                  </div>
                  <span className="text-white/40 font-mono text-[11px]">{rev.date}</span>
                </div>

                {/* Review Text */}
                <p className="text-xs text-white/70 leading-relaxed italic">
                  "{rev.text}"
                </p>

                {/* Services Mentioned */}
                {rev.servicesMentioned && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {rev.servicesMentioned.map((s, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-sm bg-white/5 text-white/60 text-[10px] font-mono uppercase tracking-wider border border-white/10"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Likes & Helpful */}
              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/40">
                <span className="flex items-center gap-1.5 text-[11px]">
                  <ThumbsUp className="w-3.5 h-3.5 text-[#E63946]" />
                  <span>{rev.likesCount || 5} people found helpful</span>
                </span>
                <span className="text-white/30 font-mono text-[10px]">Google Review</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
