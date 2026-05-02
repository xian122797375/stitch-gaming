import React from 'react';
import { Search, Gamepad, Flame, HandCoins, Headset, ClipboardList, HelpCircle } from 'lucide-react';
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
};

export const CategoryNav: React.FC<{ categories: GameCategory[] }> = ({ categories }) => (
  <div className="grid grid-cols-6 gap-2 mb-8 text-center">
    {categories.map((cat) => {
      const Icon = iconMap[cat.icon] || Gamepad;
      return (
        <motion.div 
          key={cat.id} 
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center cursor-pointer"
        >
          <div className={`w-11 h-11 rounded-[14px] bg-gradient-to-br ${cat.gradient} flex items-center justify-center text-white shadow-sm relative overflow-hidden`}>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Icon size={20} className="relative z-10" />
          </div>
          <span className="text-xs text-gray-600 mt-2 font-medium">{cat.name}</span>
        </motion.div>
      );
    })}
  </div>
);

export const PromoBanner: React.FC = () => (
  <div className="rounded-2xl overflow-hidden mb-8 shadow-sm relative aspect-[3/1] bg-gray-900 border border-gray-100">
    <div className="absolute inset-0">
      <img 
        alt="Promotional Banner" 
        className="w-full h-full object-cover mix-blend-lighten opacity-80" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoU55bj8_iXFV8cvgzByP_ismr2y39_LRtqg0_4yHhOyMjKmiz67kF9uUL1Q5G84Vf4zT5q1z9dtgWni4tQkbLzfq--Z3MBAerS1yqchg_IS8s4qNdQclNsODG9glkvCWEiLK1S0_3zB0jJRjG_HmAKSIs_Sh80zTupvq7QjXOXB0GyxLgllDF_tvdGlaIPqbjUSdm1rf0EvZye0UZcM4PVQ7afc7e3REqizsonpas-MK6f2TOcREsVDpnGB6jPp-vR4fRUl5Myb0"
      />
      {/* Dark gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
    </div>
    <div className="absolute inset-0 p-4 flex flex-col justify-center">
      <h2 className="text-[#f1d092] text-xl font-bold tracking-wider mb-1" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>王者荣耀</h2>
      <p className="text-white text-sm font-medium mb-3" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>热门神装账号 <span className="text-[#facc15]">低至3折</span></p>
      <button className="bg-gradient-to-r from-[#f1d092] to-[#e4b353] text-[#3e2723] text-[11px] font-bold px-3 py-1 rounded-full w-fit shadow-md">
        查看详情
      </button>
    </div>
    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1.5 backdrop-blur-sm bg-black/20 px-2 py-1 rounded-full">
      <div className="w-3 h-1 bg-white rounded-full"></div>
      <div className="w-1 h-1 bg-white/50 rounded-full"></div>
      <div className="w-1 h-1 bg-white/50 rounded-full"></div>
    </div>
  </div>
);

export const HotGames: React.FC<{ games: GameIcon[] }> = ({ games }) => (
  <section className="mb-8">
    <h2 className="text-lg font-bold mb-4 text-gray-900 flex items-center">
      热门游戏 
    </h2>
    <div className="flex overflow-x-auto hide-scrollbar space-x-4 pb-2 -mx-1 px-1">
      {games.map((game) => (
        <motion.div 
          key={game.id} 
          whileTap={{ scale: 0.9 }}
          className="flex flex-col items-center flex-shrink-0 cursor-pointer w-[54px] relative"
        >
          {game.isHot && (
            <span className="absolute -top-1.5 -right-2 bg-yellow-400 text-white text-[9px] px-1 py-0.5 rounded-br-lg rounded-tl-lg z-10 font-bold shadow-sm shadow-yellow-400/20">NEW</span>
          )}
          <div className="w-[50px] h-[50px] rounded-[18px] overflow-hidden shadow-sm bg-white mb-2 border border-gray-100 flex items-center justify-center">
             {game.image ? (
               <img alt={game.name} className="w-full h-full object-cover" src={game.image} />
             ) : (
               <Gamepad size={24} className="text-gray-300" />
             )}
          </div>
          <span className="text-[11px] text-gray-600 font-medium truncate w-full text-center">{game.name}</span>
        </motion.div>
      ))}
    </div>
  </section>
);

export const AccountCard: React.FC<{ listing: AccountListing }> = ({ listing }) => (
  <motion.article 
    whileHover={{ y: -4 }}
    className="bg-white rounded-xl overflow-hidden flex flex-col cursor-pointer border border-gray-100/80 shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
  >
    <div className="relative w-full aspect-[4/3] bg-gray-50">
      <img alt={listing.title} className="w-full h-full object-cover" src={listing.image} />
      <div className="absolute bottom-1.5 left-1.5 flex flex-wrap gap-1">
        {listing.badges.map((badge, idx) => (
          <span 
            key={idx} 
            className={`${idx === 0 ? 'bg-[#3A7CFF]' : 'bg-[#FFA000]'} text-white text-[10px] px-1.5 py-0.5 rounded shadow-sm font-medium tracking-wide`}
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
    <div className="p-2.5 flex flex-col flex-grow bg-white">
      <h3 className="text-[13px] font-medium text-gray-800 leading-snug mb-2 line-clamp-2">
        {listing.title}
      </h3>
      <div className="flex items-center justify-between mt-auto pt-1">
        <span className="text-[#E53935] font-semibold text-lg flex items-baseline">
          <span className="text-xs mr-0.5 font-normal">¥</span>
          {listing.price}
        </span>
      </div>
    </div>
  </motion.article>
);
