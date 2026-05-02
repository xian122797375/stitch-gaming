import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft } from 'lucide-react';
import { LISTINGS } from '../constants';
import { AccountCard } from '../components/HomeComponents';

export const FavoritesPage: React.FC<{
  favorites: string[];
  onBack: () => void;
  onListingClick: (id: string) => void;
}> = ({ favorites, onBack, onListingClick }) => {
  const favoriteListings = LISTINGS.filter(l => favorites.includes(l.id));

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="absolute inset-0 bg-slate-50 z-20 flex flex-col"
    >
      <header className="bg-white px-4 pt-12 pb-3 flex items-center justify-between shadow-sm sticky top-0 z-30">
        <button onClick={onBack} className="p-1 -ml-1 text-gray-700 active:scale-95 transition-transform">
          <ChevronLeft size={28} />
        </button>
        <h1 className="text-lg font-black text-gray-900 absolute left-1/2 -translate-x-1/2">
          我的收藏
        </h1>
        <div className="w-8"></div>
      </header>

      <main className="flex-grow p-4 overflow-y-auto hide-scrollbar">
        {favoriteListings.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-48 text-gray-400">
            <span className="text-[14px]">暂无收藏的内容</span>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 pb-24">
            <AnimatePresence mode="popLayout">
              {favoriteListings.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <AccountCard listing={item} onClick={onListingClick} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </main>
    </motion.div>
  );
};
