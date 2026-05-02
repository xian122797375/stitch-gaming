import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, Search, Filter, ArrowUpDown, ChevronDown } from 'lucide-react';
import { LISTINGS } from '../constants';

const SIDEBAR_GAMES = [
  { id: 'all', name: '全部游戏' },
  { id: 'g1', name: '王者荣耀' },
  { id: 'g2', name: '和平精英' },
  { id: 'g7', name: '原神' },
  { id: 'cf', name: '穿越火线' },
  { id: 'cs2', name: 'CS2' },
  { id: 'g8', name: '英雄联盟' },
  { id: 'more', name: '更多游戏' },
];

export const AllGamesPage: React.FC<{
  onBack: () => void;
  onListingClick: (id: string) => void;
}> = ({ onBack, onListingClick }) => {
  const [activeTab, setActiveTab] = useState('all');

  const displayListings = activeTab === 'all' 
    ? [...LISTINGS, ...LISTINGS].slice(0, 10) 
    : LISTINGS.filter(l => l.gameId === activeTab || l.gameName === SIDEBAR_GAMES.find(g => g.id === activeTab)?.name);

  // If no listings for selected game, fallback to showing all but sorted/randomized for demo
  const finalListings = displayListings.length > 0 ? displayListings : LISTINGS;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="absolute inset-0 bg-[#F4F5F9] z-20 flex flex-col h-full overflow-hidden"
    >
      {/* Header */}
      <div className="bg-white pt-12 pb-3 px-4 shadow-sm z-30 shrink-0">
        <div className="flex items-center mb-4">
          <button onClick={onBack} className="p-1 -ml-1 mr-2 text-gray-700 active:scale-95 transition-transform">
            <ChevronLeft size={28} />
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded shrink-0 bg-gradient-to-br from-[#775AF6] to-[#9B77FF] flex items-center justify-center text-white">
              <span className="font-bold text-[13px] leading-tight text-center">账号<br/>交易</span>
            </div>
            <div>
              <div className="text-[17px] font-black text-gray-900 leading-tight">账号交易</div>
              <div className="text-[11px] text-gray-500">海量优质账号，安全交易放心购</div>
            </div>
          </div>
        </div>
        
        <div className="relative">
           <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
           <input 
             type="text" 
             placeholder="搜索游戏/账号/关键词" 
             className="w-full bg-[#F4F5F9] rounded-full py-2 pl-9 pr-4 text-[13px] outline-none border border-transparent focus:border-brand/30 transition-colors"
           />
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white border-b border-gray-100 flex items-center justify-between px-4 py-3 z-20 shrink-0">
        <button className="text-[13px] font-medium text-brand flex items-center">
          全部游戏 <ChevronDown size={14} className="ml-0.5 text-brand" />
        </button>
        <button className="text-[13px] text-gray-600 flex items-center">
          综合排序 <ChevronDown size={14} className="ml-0.5 text-gray-400" />
        </button>
        <button className="text-[13px] text-gray-600 flex items-center">
          价格 <ArrowUpDown size={12} className="ml-0.5 text-gray-400" />
        </button>
        <button className="text-[13px] text-gray-600 flex items-center">
          筛选 <Filter size={12} className="ml-0.5 text-gray-400" />
        </button>
      </div>

      {/* Main Content: Sidebar + List */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-[85px] bg-[#F8F9FE] overflow-y-auto hide-scrollbar flex-shrink-0 z-10">
          <div className="py-2">
            {SIDEBAR_GAMES.map(game => (
              <button
                key={game.id}
                onClick={() => setActiveTab(game.id)}
                className={`w-full py-4 px-2 text-[13px] text-center transition-all relative ${
                  activeTab === game.id 
                    ? 'font-bold text-gray-900 bg-white' 
                    : 'font-medium text-gray-500 hover:bg-white/50'
                }`}
              >
                {activeTab === game.id && (
                  <div className="absolute left-0 top-[15%] bottom-[15%] w-[3px] bg-[#2B60FF] rounded-r-full" />
                )}
                {game.name}
              </button>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 bg-white p-3 overflow-y-auto hide-scrollbar pb-24">
          <AnimatePresence mode="popLayout">
            {finalListings.map((listing, i) => (
              <motion.div
                key={listing.id + i}
                onClick={() => onListingClick(listing.id)}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="bg-white p-3 mb-3 shrink-0 rounded-[14px] flex border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.03)] active:scale-[0.98] transition-transform cursor-pointer"
              >
                <div className="w-[88px] h-[88px] rounded-xl overflow-hidden relative shrink-0 bg-gray-50 border border-gray-100/50">
                  <img src={listing.image} alt={listing.title} className="w-full h-full object-cover" />
                  {listing.isTop && (
                    <span className="absolute top-0 right-0 bg-gradient-to-r from-orange-400 to-[#FF6B2C] text-white text-[10px] px-1.5 py-0.5 rounded-bl-[10px] font-bold shadow-sm">
                      置顶
                    </span>
                  )}
                  {listing.isNew && (
                    <span className="absolute top-0 right-0 bg-gradient-to-r from-emerald-400 to-[#10B981] text-white text-[10px] px-1.5 py-0.5 rounded-bl-[10px] font-bold shadow-sm">
                      NEW
                    </span>
                  )}
                </div>
                
                <div className="ml-3 flex flex-col justify-between flex-1 py-0.5 min-w-0">
                  <div>
                    <h3 className="text-[15px] font-bold text-gray-900 leading-tight mb-1 truncate">{listing.gameName}</h3>
                    <p className="text-[12px] text-gray-500 line-clamp-2 leading-tight">
                      {listing.stats || listing.title}
                    </p>
                  </div>
                  
                  <div className="flex items-baseline mt-1 mb-1.5">
                    <span className="text-[#FF2A3F] font-bold text-[13px] mr-0.5">¥</span>
                    <span className="text-[#FF2A3F] font-black text-[18px] tracking-tight">{listing.price.toLocaleString()}.<span className="text-[14px] font-bold">00</span></span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {(listing.platformBadges || ['安卓QQ']).map(b => (
                      <span key={b} className="text-[10px] text-blue-500 border border-blue-200/50 px-1 rounded-[4px] leading-tight py-0.5 font-medium">{b}</span>
                    ))}
                    {listing.badges?.slice(0, 2).map((b, bi) => (
                      <span key={bi} className="text-[10px] text-emerald-500 border border-emerald-200/50 px-1 rounded-[4px] leading-tight py-0.5 font-medium">{b}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};
