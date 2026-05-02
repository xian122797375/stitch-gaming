import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, Share2, Heart, MessageSquare, ShieldCheck, Gamepad, AlertCircle } from 'lucide-react';
import { LISTINGS } from '../constants';

export const ListingPage: React.FC<{
  listingId: string;
  onBack: () => void;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
}> = ({ listingId, onBack, isFavorite, onToggleFavorite }) => {
  const listing = LISTINGS.find(l => l.id === listingId) || LISTINGS[0];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="absolute inset-0 bg-slate-50 z-30 flex flex-col"
    >
      <main className="flex-grow overflow-y-auto hide-scrollbar pb-24">
        {/* Images Area */}
        <div className="relative w-full aspect-[4/3] bg-gray-900">
          <img src={listing.image} alt={listing.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
          
          <button 
            onClick={onBack}
            className="absolute top-12 left-4 w-10 h-10 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center text-white active:scale-95 transition-transform"
          >
            <ChevronLeft size={24} className="-ml-0.5" />
          </button>
          
          <div className="absolute top-12 right-4 flex space-x-3">
            <button className="w-10 h-10 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center text-white active:scale-95 transition-transform">
              <Share2 size={18} />
            </button>
            <button 
              onClick={onToggleFavorite}
              className="w-10 h-10 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center text-white active:scale-95 transition-transform"
            >
              <Heart size={18} fill={isFavorite ? '#f43f5e' : 'none'} className={isFavorite ? 'text-rose-500' : ''} />
            </button>
          </div>
          
          <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md px-2 py-1 rounded-full text-white text-[11px] font-medium tracking-widest">
            1 / 8
          </div>
        </div>

        {/* Pricing & Title */}
        <div className="bg-white px-4 py-4 mb-2 shadow-sm relative">
          <div className="flex items-end justify-between mb-2">
            <div className="flex items-baseline space-x-2">
              <span className="text-[#FF2A3F] font-black text-[28px] tracking-tight leading-none flex items-baseline">
                <span className="text-[16px] mr-1">¥</span>
                {listing.price.toLocaleString()}
              </span>
              {listing.originalPrice && (
                <span className="text-[#9CA3AF] text-[13px] font-medium line-through">
                  ¥{listing.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            {listing.soldCount && (
              <span className="text-gray-400 text-[12px] font-medium">热度 {listing.soldCount}</span>
            )}
          </div>

          <div className="flex flex-wrap gap-1.5 mb-3">
             {listing.gameName && (
                <span className="px-2 py-0.5 bg-brand/10 text-brand text-[11px] font-bold rounded-sm flex items-center">
                  <Gamepad size={12} className="mr-1" />
                  {listing.gameName}
                </span>
             )}
             {listing.badges?.map(badge => (
                <span key={badge} className="px-2 py-0.5 bg-[#10B981]/10 text-[#10B981] text-[11px] font-bold rounded-sm flex items-center">
                  <ShieldCheck size={12} className="mr-1" />
                  {badge}
                </span>
             ))}
          </div>

          <h1 className="text-[18px] font-black text-gray-900 leading-snug mb-3">
            {listing.title}
          </h1>
          
          {/* Rank/Stats Bar */}
          <div className="bg-gray-50 border border-gray-100 rounded-lg p-3 flex justify-between divide-x divide-gray-200">
            <div className="flex-1 flex flex-col justify-center items-center">
               <span className="text-gray-400 text-[11px] mb-1">游戏段位</span>
               <span className="text-gray-800 font-bold text-[13px]">{listing.rank || '未知段位'}</span>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center">
               <span className="text-gray-400 text-[11px] mb-1">账号资产</span>
               <span className="text-gray-800 font-bold text-[13px]">{listing.stats || '无数据'}</span>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center">
               <span className="text-gray-400 text-[11px] mb-1">服务器</span>
               <span className="text-gray-800 font-bold text-[13px]">官方服务器</span>
            </div>
          </div>
        </div>

        {/* Security Info */}
        <div className="bg-white px-4 py-4 mb-2 shadow-sm">
           <h3 className="text-[15px] font-black text-gray-900 mb-3 flex items-center">
             <ShieldCheck className="text-[#10B981] mr-1.5" size={18} /> 安全保障
           </h3>
           <div className="grid grid-cols-2 gap-3">
             <div className="flex flex-col bg-[#10B981]/5 rounded-lg p-3 border border-[#10B981]/10">
                <span className="text-[#10B981] font-bold text-[13px] mb-0.5">找回包赔</span>
                <span className="text-gray-500 text-[10px]">卖家找回 全额赔付</span>
             </div>
             <div className="flex flex-col bg-brand/5 rounded-lg p-3 border border-brand/10">
                <span className="text-brand font-bold text-[13px] mb-0.5">实名认证</span>
                <span className="text-gray-500 text-[10px]">身份信息 严格核实</span>
             </div>
           </div>
        </div>

        {/* Product Details */}
        <div className="bg-white px-4 py-4 mb-2 shadow-sm min-h-[200px]">
           <h3 className="text-[15px] font-black text-gray-900 mb-3 flex items-center border-l-4 border-brand pl-2 -ml-4">
             商品详情
           </h3>
           <p className="text-[13px] text-gray-600 leading-relaxed mb-4 whitespace-pre-wrap">
             【极品账号】{listing.title}
             {'\n\n'}详细说明：
             {'\n'}1. 绝对安全，一手账号，支持各种换绑。
             {'\n'}2. 内部资源丰富，金币、钻石等材料充足。
             {'\n'}3. 段位高，皮肤多，有炫酷限定皮肤特效。
           </p>

           {listing.heroes && listing.heroes.length > 0 && (
             <div className="mb-4">
               <span className="text-[12px] font-bold text-gray-900 mb-2 block">包含英雄 ({listing.heroes.length})</span>
               <div className="flex flex-wrap gap-1.5">
                 {listing.heroes.map((hero, i) => (
                   <span key={i} className="text-[11px] text-gray-600 bg-gray-100 px-2 py-0.5 rounded-sm">
                     {hero}
                   </span>
                 ))}
               </div>
             </div>
           )}

           {listing.equipments && listing.equipments.length > 0 && (
             <div className="mb-4">
               <span className="text-[12px] font-bold text-gray-900 mb-2 block">极品装备/道具 ({listing.equipments.length})</span>
               <div className="flex flex-wrap gap-1.5">
                 {listing.equipments.map((eq, i) => (
                   <span key={i} className="text-[11px] text-orange-600 bg-orange-50 px-2 py-0.5 border border-orange-100 rounded-sm">
                     {eq}
                   </span>
                 ))}
               </div>
             </div>
           )}

           <div className="bg-[#FFFBEB] p-3 rounded-lg border border-[#FDE68A] flex items-start text-[#D97706] mb-4">
              <AlertCircle size={16} className="shrink-0 mt-0.5 mr-2" />
              <div className="text-[11px] leading-relaxed">
                交易提醒：请在平台内完成交易，不要脱离平台付款！防诈骗，保安全。
              </div>
           </div>
        </div>
      </main>

      {/* Bottom Action Bar */}
      <footer className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white border-t border-gray-100 px-4 py-2 flex items-center justify-between pb-safe z-40">
        <div className="flex space-x-4">
           <button className="flex flex-col items-center justify-center text-gray-500 hover:text-gray-900">
             <MessageSquare size={22} className="mb-1" />
             <span className="text-[10px] font-medium">客服</span>
           </button>
           <button 
             onClick={onToggleFavorite}
             className={`flex flex-col items-center justify-center ${isFavorite ? 'text-rose-500' : 'text-gray-500 hover:text-gray-900'}`}
           >
             <Heart size={22} className="mb-1" fill={isFavorite ? 'currentColor' : 'none'} />
             <span className="text-[10px] font-medium">{isFavorite ? '已收藏' : '收藏'}</span>
           </button>
        </div>
        <div className="flex space-x-2 flex-grow ml-6">
           <button className="flex-1 bg-gray-900 text-white font-bold text-[14px] py-3 rounded-full active:scale-95 transition-transform flex items-center justify-center">
             全款购买
           </button>
           <button className="flex-1 bg-[#FF2A3F] text-white font-bold text-[14px] py-3 rounded-full active:scale-95 transition-transform flex items-center justify-center shadow-lg shadow-[#FF2A3F]/30">
             分期购买
           </button>
        </div>
      </footer>
    </motion.div>
  );
};
