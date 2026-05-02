/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, Compass, MessageSquare, User } from 'lucide-react';
import { Header } from './components/Layout';
import { 
  SearchBar, 
  CategoryNav, 
  PromoBanner, 
  HotGames, 
  AccountCard 
} from './components/HomeComponents';
import { CATEGORIES, HOT_GAMES, LISTINGS } from './constants';

export default function App() {
  const tabs = [
    { label: '首页', Icon: Home, active: true },
    { label: '发现', Icon: Compass, active: false },
    { label: '消息', Icon: MessageSquare, active: false, badge: true },
    { label: '我的', Icon: User, active: false },
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center">
      <div className="w-full max-w-[430px] bg-surface relative min-h-screen pb-24 shadow-2xl">
        <Header />
        
        <main className="pt-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SearchBar />
            
            <CategoryNav categories={CATEGORIES} />
            
            <PromoBanner />
            
            <HotGames games={HOT_GAMES} />

            <section className="pb-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-900">推荐商品</h2>
                <button className="text-xs text-brand font-medium">查看更多</button>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <AnimatePresence mode="popLayout">
                  {LISTINGS.map((item, idx) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <AccountCard listing={item} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </section>
          </motion.div>
        </main>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white/80 backdrop-blur-xl border-t border-gray-100 flex justify-around items-center h-[65px] pb-safe z-50 shadow-lg shadow-black/5">
          {tabs.map(({ label, Icon, active, badge }) => (
            <button 
              key={label} 
              className={`flex flex-col items-center justify-center w-full h-full relative transition-all active:scale-90 ${active ? 'text-brand' : 'text-gray-400'}`}
            >
              <div className="relative mb-1">
                <Icon size={active ? 24 : 22} />
                {badge && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white ring-1 ring-red-500/20"></span>
                )}
              </div>
              <span className={`text-[10px] ${active ? 'font-bold' : 'font-medium'}`}>
                {label}
              </span>
              {active && (
                <motion.div 
                  layoutId="nav-dot"
                  className="absolute -bottom-1 w-1 h-1 bg-brand rounded-full"
                />
              )}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}

