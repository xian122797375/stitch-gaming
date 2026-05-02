import React, { useState, useEffect, useRef } from 'react';
import { Search, Gamepad, Flame, HandCoins, Headset, ClipboardList, HelpCircle, ShieldCheck, Zap, Gift, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { GameCategory, GameIcon, AccountListing } from '../types';

export const SearchBar: React.FC = () => (
  <div className="mt-4 mb-6">
    <div className="relative flex items-center w-full h-11 rounded-full bg-surface-container overflow-hidden group focus-within:shadow-sm transition-all border border-transparent focus-within:border-brand/20">
      <div className="pl-4 text-gray-400 group-focus-within:text-brand transition-colors">
        <Search size={18} />
      </div>
      <input 
        className="peer h-full w-full outline-none text-sm text-gray-700 pr-4 bg-transparent border-none focus:ring-0" 
        placeholder="请输入游戏名称" 
        type="text"
      />
    </div>
  </div>
);

const iconMap: Record<string, any> = {
  'gamepad': Gamepad,
  'fire': Flame,
  'hand-holding-usd': HandCoins,
  'headset': Headset,
  'clipboard-list': ClipboardList,
  'question-circle': HelpCircle,
  'heart': Heart,
};

export const CategoryNav: React.FC<{ categories: GameCategory[], onCategoryClick?: (id: string) => void }> = ({ categories, onCategoryClick }) => (
  <div className="grid grid-cols-5 gap-2 mb-4 text-center">
    {categories.map((cat) => {
      const Icon = iconMap[cat.icon] || Gamepad;
      return (
        <motion.div 
          key={cat.id} 
          whileTap={{ scale: 0.95 }}
          onClick={() => onCategoryClick?.(cat.id)}
          className="flex flex-col items-center cursor-pointer group"
        >
          <div className={`w-12 h-12 rounded-[16px] bg-gradient-to-br ${cat.gradient} flex items-center justify-center text-white shadow-sm relative overflow-hidden`}>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Icon size={24} className="relative z-10" />
          </div>
          <span className="text-[13px] text-gray-800 mt-2 font-bold">{cat.name}</span>
        </motion.div>
      );
    })}
  </div>
);

export const PromoBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        let nextIndex = currentIndex + 1;
        if (nextIndex >= 3) {
          nextIndex = 0;
        }
        
        const child = scrollRef.current.children[nextIndex] as HTMLElement;
        if (child) {
            scrollRef.current.scrollTo({
               left: child.offsetLeft - 16,
               behavior: 'smooth'
            });
        }
        setCurrentIndex(nextIndex);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleScroll = () => {
    if (scrollRef.current) {
       const scrollLeft = scrollRef.current.scrollLeft;
       const width = scrollRef.current.clientWidth;
       const index = Math.round(scrollLeft / (width * 0.9));
       if (index !== currentIndex && index >= 0 && index < 3) {
           setCurrentIndex(index);
       }
    }
  };

  return (
  <div className="mb-4 relative w-full overflow-hidden">
    <div 
      ref={scrollRef}
      onScroll={handleScroll}
      className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar space-x-3 pb-2 pt-1 -mx-4 px-4"
    >
      {/* Banner 1: Blue - Safety */}
      <div className="snap-center shrink-0 w-[90vw] max-w-[340px] rounded-2xl overflow-hidden shadow-sm relative aspect-[2.7/1] bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 border border-blue-400/30">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/micro-carbon.png')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
           <div className="flex flex-col justify-center z-10 w-[70%]">
             <div className="flex items-center mb-1.5">
                <span className="text-blue-900 text-[10px] font-black bg-white px-1.5 py-0.5 rounded-sm flex items-center shadow-sm">
                  悠悠游戏
                </span>
             </div>
             <h2 className="text-white text-[22px] font-black tracking-wide mb-1 italic transform -skew-x-6">安全交易 账号无忧</h2>
             <p className="text-blue-100 text-[12px] font-bold mb-2.5 flex items-center tracking-wider text-shadow-sm">
               <span className="w-2 h-[1px] bg-blue-300 mr-1.5 opacity-60"></span>
               专业游戏账号交易平台
               <span className="w-2 h-[1px] bg-blue-300 ml-1.5 opacity-60"></span>
             </p>
             <div className="flex space-x-1 mt-auto">
               <span className="text-[9px] text-blue-50 border border-blue-300/40 rounded px-1 py-0.5 bg-blue-900/30 flex items-center"><ShieldCheck size={10} className="mr-0.5"/>终身包赔</span>
               <span className="text-[9px] text-blue-50 border border-blue-300/40 rounded px-1 py-0.5 bg-blue-900/30 flex items-center"><ShieldCheck size={10} className="mr-0.5"/>7天包退</span>
             </div>
           </div>
           <div className="absolute right-0 top-0 bottom-0 w-[45%] bg-gradient-to-l from-blue-400/40 to-transparent flex items-center justify-center">
              <ShieldCheck className="w-[72px] h-[72px] text-blue-100 opacity-90 drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]" strokeWidth={1.5} />
           </div>
        </div>
      </div>
      
      {/* Banner 2: Purple - Hot */}
      <div className="snap-center shrink-0 w-[90vw] max-w-[340px] rounded-2xl overflow-hidden shadow-sm relative aspect-[2.7/1] bg-gradient-to-br from-[#2D1B4E] via-[#4A2580] to-[#7B3AC6] border border-purple-400/30">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay"></div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
           <div className="flex flex-col justify-center z-10 w-[70%]">
             <div className="flex items-center mb-1.5">
                <span className="text-purple-900 text-[10px] font-black bg-white px-1.5 py-0.5 rounded-sm flex items-center shadow-sm">
                  悠悠游戏
                </span>
             </div>
             <h2 className="text-white text-[22px] font-black tracking-wide mb-1 italic transform -skew-x-6">热门账号推荐</h2>
             <p className="text-purple-100 text-[12px] font-bold mb-2.5 flex items-center tracking-wider text-shadow-sm">
               <span className="w-2 h-[1px] bg-purple-300 mr-1.5 opacity-60"></span>
               精选优质账号 低价秒杀
               <span className="w-2 h-[1px] bg-purple-300 ml-1.5 opacity-60"></span>
             </p>
             <div className="flex space-x-1 mt-auto">
               <span className="text-[9px] text-purple-50 border border-purple-400/40 rounded px-1 py-0.5 bg-purple-900/40">优质账号</span>
               <span className="text-[9px] text-purple-50 border border-purple-400/40 rounded px-1 py-0.5 bg-purple-900/40">高性价比</span>
             </div>
           </div>
           <div className="absolute right-0 top-0 bottom-0 w-[45%] bg-gradient-to-l from-purple-500/30 to-transparent flex items-center justify-center">
              <Zap className="w-[72px] h-[72px] text-[#FFE066] opacity-90 drop-shadow-[0_0_12px_rgba(255,224,102,0.5)] fill-[#FFE066]/20" strokeWidth={1.5} />
           </div>
        </div>
      </div>

      {/* Banner 3: Red - Discount */}
      <div className="snap-center shrink-0 w-[90vw] max-w-[340px] rounded-2xl overflow-hidden shadow-sm relative aspect-[2.7/1] bg-gradient-to-br from-red-900 via-red-600 to-orange-500 border border-red-400/30">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/micro-carbon.png')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
           <div className="flex flex-col justify-center z-10 w-[70%]">
             <div className="flex items-center mb-1.5">
                <span className="text-red-900 text-[10px] font-black bg-white px-1.5 py-0.5 rounded-sm flex items-center shadow-sm">
                  悠悠游戏
                </span>
             </div>
             <h2 className="text-white text-[22px] font-black tracking-wide mb-1.5 italic transform -skew-x-6">限时特惠活动</h2>
             <div className="bg-gradient-to-r from-[#FFE066] to-[#FFB300] text-[#7F1D1D] text-[11px] font-black px-2 py-0.5 rounded-sm w-fit mb-2 shadow-sm">
               超值折扣 低至5折起
             </div>
             <div className="flex space-x-1 mt-auto">
               <span className="text-[9px] text-red-50 border border-red-300/40 rounded px-1 py-0.5 bg-red-900/30 flex items-center"><ShieldCheck size={10} className="mr-0.5"/>官方保障</span>
               <span className="text-[9px] text-red-50 border border-red-300/40 rounded px-1 py-0.5 bg-red-900/30 flex items-center"><Zap size={10} className="mr-0.5"/>极速发货</span>
             </div>
           </div>
           <div className="absolute right-0 top-0 bottom-0 w-[45%] bg-gradient-to-l from-orange-400/40 to-transparent flex items-center justify-center">
              <Gift className="w-[72px] h-[72px] text-[#FFE066] opacity-95 drop-shadow-[0_0_12px_rgba(255,160,0,0.6)] fill-[#FFE066]/20" strokeWidth={1.5} />
           </div>
        </div>
      </div>
    </div>
    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1.5 backdrop-blur-sm bg-black/20 px-2 py-1 rounded-full pointer-events-none">
      {[0, 1, 2].map((i) => (
        <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/50'}`}></div>
      ))}
    </div>
  </div>
  );
};

export const HotGames: React.FC<{ games: GameIcon[], onGameClick?: (id: string) => void }> = ({ games, onGameClick }) => (
  <section className="mb-4">
    <h2 className="text-[19px] font-black mb-4 text-gray-900 flex items-center">
      热门游戏 
    </h2>
    <div className="overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-2 -mx-4 px-4 flex space-x-3 after:content-[''] after:w-1 after:flex-shrink-0">
        {games.map((game) => (
          <motion.div 
            key={game.id} 
            whileTap={{ scale: 0.95 }}
            onClick={() => onGameClick?.(game.id)}
            className="snap-center flex-shrink-0 relative w-[130px] aspect-[1/1] rounded-2xl overflow-hidden shadow-sm border border-gray-200/50 cursor-pointer group"
          >
            {game.image ? (
              <img alt={game.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src={game.image} />
            ) : (
              <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                <Gamepad size={32} className="text-slate-300" />
              </div>
            )}
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-3 text-left">
              <span className="text-[16px] text-white font-black tracking-wider drop-shadow-md">
                {game.name}
              </span>
              {game.subtitle && (
                <span className="text-[11px] text-gray-300 font-bold opacity-90 drop-shadow-md mt-0.5">
                  {game.subtitle}
                </span>
              )}
            </div>

            {game.isHot && (
              <span className="absolute top-0 right-0 bg-gradient-to-l from-yellow-500 to-yellow-400 text-white text-[10px] px-2 py-0.5 rounded-bl-[12px] font-black shadow-sm">
                HOT
              </span>
            )}
          </motion.div>
        ))}
    </div>
  </section>
);

export const AccountCard: React.FC<{ listing: AccountListing, onClick?: (id: string) => void }> = ({ listing, onClick }) => (
  <motion.article 
    whileHover={{ y: -4 }}
    onClick={() => onClick?.(listing.id)}
    className="bg-white rounded-[16px] overflow-hidden flex flex-col cursor-pointer border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all active:scale-[0.98]"
  >
    <div className="relative w-full aspect-[4/3] bg-gray-50 border-b border-gray-100/50">
      <img alt={listing.title} className="w-full h-full object-cover" src={listing.image} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
      
      {/* Top Left Game Name Pill */}
      {listing.gameName && (
        <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-bold text-white shadow-sm flex items-center bg-gradient-to-r from-amber-500 to-amber-400">
          {listing.gameName}
        </div>
      )}
      
      {/* Top Right Tag Badge */}
      {listing.tagBadge && (
        <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-bold text-white shadow-sm bg-gradient-to-r from-red-500 to-red-400">
          {listing.tagBadge}
        </div>
      )}

      {/* Bottom Left Rank */}
      {listing.rank && (
        <div className="absolute bottom-2 left-3 text-[14px] font-black text-white tracking-wide drop-shadow-md">
          {listing.rank}
        </div>
      )}
    </div>

    <div className="p-3.5 flex flex-col flex-grow bg-white">
      <h3 className="text-[14px] font-black text-gray-900 leading-snug mb-2 line-clamp-2 min-h-[42px] tracking-tight">
        {listing.title}
      </h3>
      
      {/* Stats and Guarantee Row */}
      <div className="flex items-center space-x-2 mb-2.5">
        {listing.stats && (
          <span className="text-[11px] text-gray-500 font-medium tracking-tight">
            {listing.stats}
          </span>
        )}
        {listing.badges && listing.badges.map(badge => (
          <span key={badge} className="flex items-center text-[#10B981] text-[11px] font-bold">
            <ShieldCheck size={12} className="mr-0.5 stroke-[2.5]" />
            {badge}
          </span>
        ))}
      </div>

      <div className="flex items-end justify-between mt-auto mb-1">
        <div className="flex items-baseline space-x-1.5">
          <span className="text-[#FF2A3F] font-black text-[20px] tracking-tight leading-none">
            <span className="text-[13px] mr-0.5">¥</span>
            {listing.price.toLocaleString()}
          </span>
          {listing.originalPrice && (
            <span className="text-[#9CA3AF] text-[11px] font-medium line-through">
              ¥{listing.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
        {listing.discount && (
          <span className="text-[#D97706] bg-[#FEF3C7] px-1.5 py-0.5 rounded text-[10px] font-black">
             {listing.discount}
          </span>
        )}
      </div>

      {listing.soldCount && (
        <div className="text-[11px] text-gray-400 font-medium">
          热度 {listing.soldCount}
        </div>
      )}
    </div>
  </motion.article>
);
