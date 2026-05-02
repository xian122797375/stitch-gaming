import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, Search, Filter, ArrowUpDown } from 'lucide-react';
import { HOT_GAMES, LISTINGS } from '../constants';
import { AccountCard } from '../components/HomeComponents';

export const GamePage: React.FC<{
  gameId: string;
  onBack: () => void;
  onListingClick: (id: string) => void;
}> = ({ gameId, onBack, onListingClick }) => {
  const game = HOT_GAMES.find(g => g.id === gameId);
  const gameListings = LISTINGS.filter(l => l.gameId === gameId || l.gameName === game?.name);
  // Just mapping the generic listings to this game if none match exactly so it's not empty
  const displayListings = gameListings.length > 0 ? gameListings : LISTINGS;

  const filters = ['默认排序', '价格最低', '最新发布', '包赔商品'];
  const [activeFilter, setActiveFilter] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="absolute inset-0 bg-slate-50 z-20 flex flex-col"
    >
      {/* Header */}
      <header className="bg-white px-4 pt-12 pb-3 flex items-center justify-between shadow-sm sticky top-0 z-30">
        <button onClick={onBack} className="p-1 -ml-1 text-gray-700 active:scale-95 transition-transform">
          <ChevronLeft size={28} />
        </button>
        <h1 className="text-lg font-black text-gray-900 absolute left-1/2 -translate-x-1/2">
          {game?.name || '游戏专区'}
        </h1>
        <button className="p-1 text-gray-700">
          <Search size={22} />
        </button>
      </header>

      {/* Filter Bar */}
      <div className="bg-white border-b border-gray-100 flex items-center px-4 py-3 sticky top-[76px] z-20 space-x-4">
        {filters.map((filter, idx) => (
          <button
            key={idx}
            onClick={() => setActiveFilter(idx)}
            className={`text-[13px] font-bold ${activeFilter === idx ? 'text-brand' : 'text-gray-500'} flex items-center`}
          >
            {filter}
            {idx === 1 && <ArrowUpDown size={12} className="ml-0.5" />}
          </button>
        ))}
        <button className="text-[13px] font-bold text-gray-500 flex items-center ml-auto">
          筛选 <Filter size={12} className="ml-1" />
        </button>
      </div>

      {/* Listings */}
      <main className="flex-grow p-4 overflow-y-auto hide-scrollbar">
        <div className="grid grid-cols-2 gap-3 pb-24">
          <AnimatePresence mode="popLayout">
            {displayListings.map((item, idx) => (
              <motion.div
                key={item.id + idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
              >
                <AccountCard listing={{...item, gameName: game?.name}} onClick={onListingClick} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>
    </motion.div>
  );
};
