/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, Compass, MessageSquare, User, ChevronLeft, Filter, ArrowUpDown } from 'lucide-react';
import { Header } from './components/Layout';
import { 
  SearchBar, 
  CategoryNav, 
  PromoBanner, 
  HotGames, 
  AccountCard 
} from './components/HomeComponents';
import { CATEGORIES, HOT_GAMES, LISTINGS } from './constants';
import { GamePage } from './pages/GamePage';
import { ListingPage } from './pages/ListingPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { AllGamesPage } from './pages/AllGamesPage';
import { DiscoverPage } from './pages/DiscoverPage';
import { MessagesPage } from './pages/MessagesPage';
import { ProfilePage } from './pages/ProfilePage';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'discover' | 'messages' | 'profile' | 'game' | 'listing' | 'favorites' | 'all_games'>('home');
  const [selectedGameId, setSelectedGameId] = useState<string | null>(null);
  const [selectedListingId, setSelectedListingId] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>(['l1']); // Add one default favorite to show

  const handleCategoryClick = (id: string) => {
    if (id === '1') { // '全部游戏'
      setCurrentView('all_games');
    } else if (id === '4') { // '我的收藏'
      setCurrentView('favorites');
    } else if (id === '5') { // '订单中心'
      setCurrentView('profile');
    }
  };

  const handleGameClick = (id: string) => {
    setSelectedGameId(id);
    setCurrentView('game');
  };

  const handleListingClick = (id: string) => {
    setSelectedListingId(id);
    setCurrentView('listing');
  };

  const handleToggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const handleBack = () => {
    setCurrentView('home');
    setSelectedGameId(null);
    setSelectedListingId(null);
  };

  const tabs = [
    { id: 'home', label: '首页', Icon: Home },
    { id: 'discover', label: '发现', Icon: Compass },
    { id: 'messages', label: '消息', Icon: MessageSquare, badge: true },
    { id: 'profile', label: '我的', Icon: User },
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center">
      <div className="w-full max-w-[430px] bg-surface relative min-h-screen pb-24 shadow-2xl overflow-hidden">
        <AnimatePresence mode="wait">
          {currentView === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full h-full"
            >
              <Header />
              
              <main className="pt-16 px-4">
                <SearchBar />
                <CategoryNav categories={CATEGORIES} onCategoryClick={handleCategoryClick} />
                <PromoBanner />
                <HotGames games={HOT_GAMES} onGameClick={handleGameClick} />

                <section className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-[19px] font-black text-gray-900 tracking-tight flex items-center">推荐商品</h2>
                    <button className="text-xs text-brand font-bold bg-brand/10 px-2 py-1 rounded">查看更多</button>
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
                          <AccountCard listing={item} onClick={handleListingClick} />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </section>
              </main>
            </motion.div>
          )}

          {currentView === 'discover' && <DiscoverPage key="discover" />}
          {currentView === 'messages' && <MessagesPage key="messages" />}
          {currentView === 'profile' && <ProfilePage key="profile" />}

          {currentView === 'game' && selectedGameId && (
            <GamePage 
              key="game" 
              gameId={selectedGameId} 
              onBack={handleBack} 
              onListingClick={handleListingClick} 
            />
          )}

          {currentView === 'listing' && selectedListingId && (
            <ListingPage 
              key="listing" 
              listingId={selectedListingId} 
              onBack={handleBack} 
              isFavorite={favorites.includes(selectedListingId)}
              onToggleFavorite={() => handleToggleFavorite(selectedListingId)}
            />
          )}

          {currentView === 'favorites' && (
            <FavoritesPage 
              key="favorites" 
              favorites={favorites} 
              onBack={handleBack} 
              onListingClick={handleListingClick} 
            />
          )}

          {currentView === 'all_games' && (
            <AllGamesPage 
              key="all_games"
              onBack={handleBack} 
              onListingClick={handleListingClick} 
            />
          )}
        </AnimatePresence>

        {/* Bottom Navigation */}
        {['home', 'discover', 'messages', 'profile'].includes(currentView) && (
          <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white/80 backdrop-blur-xl border-t border-gray-100 flex justify-around items-center h-[65px] pb-safe z-50 shadow-lg shadow-black/5">
            {tabs.map(({ id, label, Icon, badge }) => {
              const active = currentView === id || (id === 'home' && ['game', 'listing', 'favorites', 'all_games'].includes(currentView));
              return (
                <button 
                  key={id} 
                  onClick={() => {
                    setCurrentView(id as any);
                  }}
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
              );
            })}
          </nav>
        )}
      </div>
    </div>
  );
}

