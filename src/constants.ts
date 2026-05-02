import { GameCategory, GameIcon, AccountListing } from './types';

export const CATEGORIES: GameCategory[] = [
  { id: '1', name: '全部游戏', icon: 'gamepad', gradient: 'from-blue-400 to-blue-600' },
  { id: '2', name: '热门账号', icon: 'fire', gradient: 'from-orange-400 to-red-500' },
  { id: '3', name: '我要卖号', icon: 'hand-holding-usd', gradient: 'from-yellow-400 to-orange-400' },
  { id: '4', name: '联系客服', icon: 'headset', gradient: 'from-cyan-400 to-blue-500' },
  { id: '5', name: '订单中心', icon: 'clipboard-list', gradient: 'from-teal-300 to-emerald-400' },
];

export const HOT_GAMES: GameIcon[] = [
  { 
    id: 'g1', 
    name: '王者荣耀', 
    subtitle: 'MOBA 竞技游戏',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKPK8-FZlwdI0QtxpKittodtb7NTzrKZFod7BdU4BBAjLx9VZMrqwFBZey59EFreawYWjLVuoMVBgwJSXR-oEThIoR5L_326z-YYfJsLACrkrrTMHi9nBp2MG51gZr09_Qna697V9PmXhBNOk8F82oM-7ajsXaMNCr2I0XQ3rVpaWgvHpPlmBtfCiRNg1GhKBlrcorpxvN4pQu2GBQyrFx5y0XfRyGMMqnxCOob06Q1k0jAhtuaAGyYy9E3bSeOdrEy6NVkf6jvUs',
    isHot: true
  },
  { 
    id: 'g2', 
    name: '和平精英', 
    subtitle: '射击 竞技游戏',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD69hgMjEuQxc1RnnXa1Wu9PqFAeTbj_7IKUB3VcByhzy5wvIo91mB7eCItwehxAWF1smZIEnoW99q7Tic49F1vmIQQSbrixNqMNNzEXFMJ-BnLopCKPHDEJONjlFS1NNcttQDJCT4C9vV7ge7HpYYREa097fpb7EFuNDg8eg5L9zI6LipeVM_sbugyN_gzsW0_FbUgtLh41flT95w4-8RnBB570X2beRPpRpkylHV1Fsphl-zphYGBcgGdo4ZTqLO_l06moMvqxwA',
  },
  { 
    id: 'g7', 
    name: '原神', 
    subtitle: '开放世界 RPG',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApvP_8317--1dCwKz1UfVCSk7HcE9tIsqLs4hkbp7nxQcDSzfDqG0PJJ9OebsL06RzNBXIKk3g8AC013tCgRB2dwgt-Ma1W1TyAzFuA2q_dxV9ttnxmD5iAKR1J0UcBB54ak2Fz-K3ldA2pUe9TfsZSYDpN_RFR-jCdhKebvwbE4fYQQSuPGvLEZe-kj24RfT9igBYGPHjrgEcDbSozpRK0gqdf6ZAWoVjsMsnd1MuNEI3ZCW4BAdarZzUv5SP9ZTTT2h3T24GYjc'
  },
  { 
    id: 'g3', 
    name: '三角洲行动', 
    subtitle: '战术射击游戏',
    image: 'https://images.unsplash.com/photo-1585620385456-4759f3d53956?auto=format&fit=crop&w=200&h=200'
  },
  { 
    id: 'g8', 
    name: '英雄联盟', 
    subtitle: 'MOBA 竞技游戏',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8zdQo_Uoq9y5rHe4UoMfu6mwiR6ON4QjYDDTH2rDxhOJ8_O2CRQ9xt_carWF1Hn-lZFThwl-S6Dd1VOeoxh9zul1law2sVZfjKadQMcAtOVB7ZqdVhFijFn_NfG28OuxoN0BMRwCZ540XutSKLlgFQfyAk7TiF2bu-js5Iex_s-flVaWnTkgOyoFLokAKD1g83CPRnDGPEEVGxyatbQuVP2WlYR9fJVTH6ELks4bhrn3vvUj3-LP-mfxG6XQfXQsKBbJPzJKJDlI'
  },
  { 
    id: 'g13', 
    name: '火影忍者', 
    subtitle: '正版火影格斗手游',
    image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&w=200&h=200'
  },
  { 
    id: 'g4', 
    name: '绝地求生', 
    subtitle: '战术竞技',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=200&h=200'
  },
  { 
    id: 'g5', 
    name: '地下城与勇士', 
    subtitle: '动作 角色扮演',
    image: 'https://images.unsplash.com/photo-1538481199005-271041d50325?auto=format&fit=crop&w=200&h=200'
  },
  { 
    id: 'g6', 
    name: '梦幻西游', 
    subtitle: '回合制 RPG',
    image: 'https://images.unsplash.com/photo-1580234797602-22c37b4a6217?auto=format&fit=crop&w=200&h=200'
  }
];

export const LISTINGS: AccountListing[] = [
  {
    id: 'l1',
    title: '最强王者 全皮肤典藏 限定皮185+',
    price: 1288,
    originalPrice: 2000,
    discount: '6折',
    soldCount: 156,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7VbKOePMoYPSW6wfuvcDDH2MA3Q4ip4u-olUNhk8ZXQZfOlj9CE0_thiBhW8yPHFbRzgyPPx49omZlmDXCAXkIcWzEHW_KIA_c4rBU7l36eBBA3Dm0phbe5h1H_gC8TR_uYPYuxy7BzBnCmzx-Z38_nhB9kxuJM0uvjeTDxYDZvPlYLDegY2pw4IzQm6OpVdUWxiIV3-soLkxLRj5U7Qsc55iKjoRFJCoY0_qSfIhcfYfZ4o9Q2HrYpwduOF7qGGg3zCz5u8_f7Y',
    gameName: '王者荣耀',
    tagBadge: '热卖',
    rank: '最强王者',
    stats: '98英雄 247皮肤',
    badges: ['包赔'],
  },
  {
    id: 'l2',
    title: 'AR60 8个5星满命 神里+胡桃+刻晴',
    price: 688,
    originalPrice: 1200,
    discount: '6折',
    soldCount: 89,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7VbKOePMoYPSW6wfuvcDDH2MA3Q4ip4u-olUNhk8ZXQZfOlj9CE0_thiBhW8yPHFbRzgyPPx49omZlmDXCAXkIcWzEHW_KIA_c4rBU7l36eBBA3Dm0phbe5h1H_gC8TR_uYPYuxy7BzBnCmzx-Z38_nhB9kxuJM0uvjeTDxYDZvPlYLDegY2pw4IzQm6OpVdUWxiIV3-soLkxLRj5U7Qsc55iKjoRFJCoY0_qSfIhcfYfZ4o9Q2HrYpwduOF7qGGg3zCz5u8_f7Y',
    gameName: '原神',
    tagBadge: '精品',
    rank: 'AR60',
    stats: '8英雄 15皮肤',
    badges: ['包赔'],
  },
  {
    id: 'l3',
    title: '最强者段位 稀有套装56+ 炸弹人',
    price: 388,
    originalPrice: 600,
    discount: '6折',
    soldCount: 234,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7VbKOePMoYPSW6wfuvcDDH2MA3Q4ip4u-olUNhk8ZXQZfOlj9CE0_thiBhW8yPHFbRzgyPPx49omZlmDXCAXkIcWzEHW_KIA_c4rBU7l36eBBA3Dm0phbe5h1H_gC8TR_uYPYuxy7BzBnCmzx-Z38_nhB9kxuJM0uvjeTDxYDZvPlYLDegY2pw4IzQm6OpVdUWxiIV3-soLkxLRj5U7Qsc55iKjoRFJCoY0_qSfIhcfYfZ4o9Q2HrYpwduOF7qGGg3zCz5u8_f7Y',
    gameName: '和平精英',
    tagBadge: '实名',
    rank: '最强者',
    stats: '56皮肤',
    badges: ['包赔'],
  },
  {
    id: 'l4',
    title: 'SS+段位 全忍者100+ 多限定特效',
    price: 488,
    originalPrice: 800,
    discount: '6折',
    soldCount: 45,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7VbKOePMoYPSW6wfuvcDDH2MA3Q4ip4u-olUNhk8ZXQZfOlj9CE0_thiBhW8yPHFbRzgyPPx49omZlmDXCAXkIcWzEHW_KIA_c4rBU7l36eBBA3Dm0phbe5h1H_gC8TR_uYPYuxy7BzBnCmzx-Z38_nhB9kxuJM0uvjeTDxYDZvPlYLDegY2pw4IzQm6OpVdUWxiIV3-soLkxLRj5U7Qsc55iKjoRFJCoY0_qSfIhcfYfZ4o9Q2HrYpwduOF7qGGg3zCz5u8_f7Y',
    gameName: '火影忍者',
    tagBadge: '新品',
    rank: 'SS+',
    stats: '100英雄 78皮肤',
    badges: ['包赔'],
  }
];
