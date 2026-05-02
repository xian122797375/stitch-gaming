import React from 'react';
import { motion } from 'motion/react';
import { Search, Compass, Flame, MessageCircle, Heart } from 'lucide-react';

export const DiscoverPage: React.FC = () => {
  const trendingTopics = ['#英雄联盟S14#', '#原神4.2版本#', '#和平精英捏脸#', '#无畏契约上分#'];
  const posts = [
    {
      id: 1,
      author: '游戏鉴赏家',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100',
      content: '今天这套上分阵容简直无敌了！兄弟们快去试试，趁着还没削弱赶紧冲分。附上出装和思路供大家参考。',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=400&h=300',
      likes: 1245,
      comments: 328,
    },
    {
      id: 2,
      author: '欧气满满',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100',
      content: '单抽出了！难道我就是传说中的天命之子？这几天准备把这个号出掉，有老板看上吗？满命带专武，绝对极品！',
      image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&w=400&h=300',
      likes: 892,
      comments: 156,
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-slate-50 z-10 flex flex-col pt-12 pb-20"
    >
      <header className="px-4 pb-3 flex items-center justify-between sticky top-0 bg-slate-50/80 backdrop-blur-md z-20">
        <h1 className="text-xl font-black text-gray-900 flex items-center">
          <Compass className="mr-2 text-brand" /> 发现圈子
        </h1>
        <button className="p-2 text-gray-700 bg-white rounded-full shadow-sm">
          <Search size={20} />
        </button>
      </header>

      <div className="flex-1 overflow-y-auto hide-scrollbar px-4">
        {/* Trending */}
        <section className="mb-6">
          <h2 className="text-[15px] font-bold text-gray-900 mb-3 flex items-center">
            <Flame className="mr-1 text-red-500" size={18} /> 热门话题
          </h2>
          <div className="flex overflow-x-auto hide-scrollbar space-x-2 pb-2 -mx-4 px-4">
            {trendingTopics.map(topic => (
              <div key={topic} className="bg-white px-3 py-1.5 rounded-full text-[13px] text-brand font-medium whitespace-nowrap shadow-sm border border-gray-100 flex-shrink-0 active:scale-95 transition-transform cursor-pointer">
                {topic}
              </div>
            ))}
          </div>
        </section>

        {/* Feed */}
        <div className="space-y-4">
          {posts.map(post => (
            <motion.article 
              key={post.id}
              whileHover={{ y: -2 }}
              className="bg-white rounded-[16px] p-4 shadow-sm border border-gray-100"
            >
              <div className="flex items-center mb-3">
                <img src={post.avatar} alt={post.author} className="w-10 h-10 rounded-full object-cover mr-3" />
                <div>
                  <h3 className="text-[14px] font-bold text-gray-900">{post.author}</h3>
                  <span className="text-[11px] text-gray-400">刚刚发布</span>
                </div>
              </div>
              <p className="text-[13px] text-gray-700 leading-relaxed mb-3">
                {post.content}
              </p>
              <div className="rounded-xl overflow-hidden mb-3">
                <img src={post.image} alt="post media" className="w-full h-48 object-cover" />
              </div>
              <div className="flex items-center space-x-6 text-gray-500">
                <button className="flex items-center text-[12px] font-medium hover:text-brand transition-colors">
                  <Heart size={16} className="mr-1.5" />
                  {post.likes}
                </button>
                <button className="flex items-center text-[12px] font-medium hover:text-brand transition-colors">
                  <MessageCircle size={16} className="mr-1.5" />
                  {post.comments}
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
