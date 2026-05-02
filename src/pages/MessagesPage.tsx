import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Bell, Settings } from 'lucide-react';

export const MessagesPage: React.FC = () => {
  const messages = [
    {
      id: 1,
      avatar: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=100&h=100',
      name: '交易小助手',
      lastMessage: '您的订单 [英雄联盟 账号] 已发货，请注意查收并验号。',
      time: '14:20',
      unread: 2,
      isSystem: true
    },
    {
      id: 2,
      avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100&h=100',
      name: '王牌卖家',
      lastMessage: '老板，号还在的，可以刀一点，诚心要的话直接拍。',
      time: '昨天',
      unread: 0,
    },
    {
      id: 3,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100',
      name: '活动通知',
      lastMessage: '【周末狂欢】全场账号满500减50，快来选购你的心仪账号！',
      time: '星期三',
      unread: 0,
      isSystem: true
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-white z-10 flex flex-col pt-12 pb-20"
    >
      <header className="px-4 pb-4 flex items-center justify-between border-b border-gray-50">
        <h1 className="text-xl font-black text-gray-900 flex items-center">
          消息
        </h1>
        <div className="flex space-x-3">
          <button className="text-gray-600"><Settings size={20} /></button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto">
        <ul className="divide-y divide-gray-50">
          {messages.map(msg => (
            <li key={msg.id} className="p-4 flex items-center active:bg-gray-50 transition-colors cursor-pointer">
              <div className="relative mr-4">
                <img src={msg.avatar} alt={msg.name} className="w-12 h-12 rounded-full object-cover" />
                {msg.unread > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border-2 border-white">
                    {msg.unread}
                  </span>
                )}
                {msg.isSystem && (
                  <div className="absolute -bottom-1 -right-1 bg-brand text-white text-[8px] font-bold px-1 rounded-sm border border-white">
                    官方
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-[15px] font-bold text-gray-900 truncate pr-2">{msg.name}</h3>
                  <span className="text-[11px] text-gray-400 shrink-0">{msg.time}</span>
                </div>
                <p className="text-[13px] text-gray-500 truncate">{msg.lastMessage}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
