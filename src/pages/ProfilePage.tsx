import React from 'react';
import { motion } from 'motion/react';
import { Settings, User, Wallet, ClipboardList, ShieldCheck, HeadphonesIcon, Gift, Settings as SettingsIcon, Heart, ChevronRight } from 'lucide-react';

export const ProfilePage: React.FC = () => {
  const tools = [
    { icon: ClipboardList, name: '我要卖号', color: 'text-orange-500', bg: 'bg-orange-50' },
    { icon: Wallet, name: '我的钱包', color: 'text-brand', bg: 'bg-brand/10' },
    { icon: ShieldCheck, name: '安全中心', color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { icon: Gift, name: '卡券包', color: 'text-pink-500', bg: 'bg-pink-50' },
    { icon: HeadphonesIcon, name: '专属客服', color: 'text-cyan-500', bg: 'bg-cyan-50' },
    { icon: SettingsIcon, name: '设置', color: 'text-gray-500', bg: 'bg-gray-100' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-slate-50 z-10 flex flex-col pt-12 pb-20 overflow-y-auto hide-scrollbar"
    >
      {/* Header Info */}
      <div className="px-4 pb-6 pt-4 bg-white relative shadow-sm">
        <div className="flex justify-end mb-2">
          <button className="p-2 text-gray-600"><SettingsIcon size={20} /></button>
        </div>
        <div className="flex items-center">
          <div className="w-16 h-16 rounded-full bg-gray-200 border-2 border-white shadow-md overflow-hidden mr-4">
            <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&h=150" alt="Avatar" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-black text-gray-900 mb-1">游戏高玩_889</h1>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-0.5 bg-brand/10 text-brand text-[10px] font-bold rounded-full">已实名验证</span>
              <span className="px-2 py-0.5 bg-gray-100 text-gray-500 text-[10px] font-medium rounded-full">信用极好</span>
            </div>
          </div>
        </div>
      </div>

      {/* Orders Grid */}
      <div className="px-4 mt-4">
        <div className="bg-white rounded-[16px] p-4 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[15px] font-bold text-gray-900">我的订单</h2>
            <button className="text-[12px] text-gray-400 flex items-center">查看全部 <ChevronRight size={14} /></button>
          </div>
          <div className="flex justify-between px-2">
            {[
              { name: '待付款', icon: Wallet },
              { name: '交易中', icon: ClipboardList },
              { name: '待收货', icon: Gift },
              { name: '退款/售后', icon: ShieldCheck }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center cursor-pointer active:scale-95 transition-transform">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-1 text-gray-700">
                  <item.icon size={20} />
                </div>
                <span className="text-[11px] font-medium text-gray-600">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="px-4 mt-4">
        <div className="bg-white rounded-[16px] p-4 shadow-sm border border-gray-100">
          <h2 className="text-[15px] font-bold text-gray-900 mb-4">常用工具</h2>
          <div className="grid grid-cols-3 gap-y-6 gap-x-4">
            {tools.map((tool, idx) => (
              <div key={idx} className="flex flex-col items-center cursor-pointer active:scale-95 transition-transform">
                <div className={`w-10 h-10 rounded-xl ${tool.bg} ${tool.color} flex items-center justify-center mb-2`}>
                  <tool.icon size={20} />
                </div>
                <span className="text-[11px] font-medium text-gray-700">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Banner ad */}
      <div className="px-4 mt-4">
         <div className="w-full h-20 rounded-[16px] bg-gradient-to-r from-[#2B60FF] to-[#0A3DFF] flex items-center pr-4 pl-6 relative overflow-hidden">
            <div className="relative z-10 text-white">
               <div className="font-black text-[16px] mb-0.5">邀请好友 赚赏金</div>
               <div className="font-medium text-[11px] opacity-80">最高可得¥88现金大礼包</div>
            </div>
            <Gift className="absolute -right-4 -bottom-4 text-white opacity-20 w-32 h-32" />
         </div>
      </div>
    </motion.div>
  );
};
