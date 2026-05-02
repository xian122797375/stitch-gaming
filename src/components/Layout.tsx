import React from 'react';
import { ChevronLeft, MoreHorizontal, Circle } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white z-50 px-4 py-3 flex items-center justify-between border-b border-gray-50 shadow-sm/5">
      <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
        <ChevronLeft size={24} className="text-gray-800" />
      </button>
      <h1 className="text-lg font-bold text-gray-900">悠悠游戏交易</h1>
      <div className="flex items-center space-x-2 border border-gray-200 rounded-full px-2 py-1 bg-surface-container">
        <button className="p-1 hover:text-brand transition-colors"><MoreHorizontal size={16} /></button>
        <div className="h-3 w-px bg-gray-300"></div>
        <button className="p-1 hover:text-brand transition-colors"><Circle size={14} /></button>
      </div>
    </div>
  );
};

export const BottomNav: React.FC = () => {
  const tabs = [
    { label: '首页', icon: 'home', active: true },
    { label: '发现', icon: 'compass', active: false },
    { label: '消息', icon: 'message-square', active: false, badge: true },
    { label: '我的', icon: 'user', active: false },
  ];

  return (
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-100 flex justify-around items-center h-[60px] pb-safe z-50">
      {tabs.map((tab) => (
        <button key={tab.label} className={`flex flex-col items-center justify-center w-full h-full relative ${tab.active ? 'text-brand' : 'text-gray-400'}`}>
          <div className="relative">
            <span className="material-icons-outlined text-2xl mb-0.5">
              {/* Replace with Lucide icons in the actual App.tsx implementation */}
            </span>
            {tab.badge && <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>}
          </div>
          <span className={`text-[10px] ${tab.active ? 'font-bold' : 'font-medium'}`}>{tab.label}</span>
        </button>
      ))}
    </nav>
  );
};
