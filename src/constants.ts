import { GameCategory, GameIcon, AccountListing } from './types';

export const CATEGORIES: GameCategory[] = [
  { id: '1', name: '全部游戏', icon: 'gamepad', gradient: 'from-blue-400 to-blue-600' },
  { id: '2', name: '热门账号', icon: 'fire', gradient: 'from-orange-400 to-red-500' },
  { id: '3', name: '我要卖号', icon: 'hand-holding-usd', gradient: 'from-yellow-400 to-orange-400' },
  { id: '4', name: '联系客服', icon: 'headset', gradient: 'from-cyan-400 to-blue-500' },
  { id: '5', name: '订单中心', icon: 'clipboard-list', gradient: 'from-teal-300 to-emerald-400' },
  { id: '6', name: '帮助中心', icon: 'question-circle', gradient: 'from-rose-400 to-pink-500' },
];

export const HOT_GAMES: GameIcon[] = [
  { 
    id: 'g1', 
    name: '王者荣耀', 
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKPK8-FZlwdI0QtxpKittodtb7NTzrKZFod7BdU4BBAjLx9VZMrqwFBZey59EFreawYWjLVuoMVBgwJSXR-oEThIoR5L_326z-YYfJsLACrkrrTMHi9nBp2MG51gZr09_Qna697V9PmXhBNOk8F82oM-7ajsXaMNCr2I0XQ3rVpaWgvHpPlmBtfCiRNg1GhKBlrcorpxvN4pQu2GBQyrFx5y0XfRyGMMqnxCOob06Q1k0jAhtuaAGyYy9E3bSeOdrEy6NVkf6jvUs'
  },
  { 
    id: 'g2', 
    name: '和平精英', 
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD69hgMjEuQxc1RnnXa1Wu9PqFAeTbj_7IKUB3VcByhzy5wvIo91mB7eCItwehxAWF1smZIEnoW99q7Tic49F1vmIQQSbrixNqMNNzEXFMJ-BnLopCKPHDEJONjlFS1NNcttQDJCT4C9vV7ge7HpYYREa097fpb7EFuNDg8eg5L9zI6LipeVM_sbugyN_gzsW0_FbUgtLh41flT95w4-8RnBB570X2beRPpRpkylHV1Fsphl-zphYGBcgGdo4ZTqLO_l06moMvqxwA',
    isHot: true
  },
  { 
    id: 'g3', 
    name: '原神', 
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApvP_8317--1dCwKz1UfVCSk7HcE9tIsqLs4hkbp7nxQcDSzfDqG0PJJ9OebsL06RzNBXIKk3g8AC013tCgRB2dwgt-Ma1W1TyAzFuA2q_dxV9ttnxmD5iAKR1J0UcBB54ak2Fz-K3ldA2pUe9TfsZSYDpN_RFR-jCdhKebvwbE4fYQQSuPGvLEZe-kj24RfT9igBYGPHjrgEcDbSozpRK0gqdf6ZAWoVjsMsnd1MuNEI3ZCW4BAdarZzUv5SP9ZTTT2h3T24GYjc'
  },
  { 
    id: 'g4', 
    name: '英雄联盟手游', 
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8zdQo_Uoq9y5rHe4UoMfu6mwiR6ON4QjYDDTH2rDxhOJ8_O2CRQ9xt_carWF1Hn-lZFThwl-S6Dd1VOeoxh9zul1law2sVZfjKadQMcAtOVB7ZqdVhFijFn_NfG28OuxoN0BMRwCZ540XutSKLlgFQfyAk7TiF2bu-js5Iex_s-flVaWnTkgOyoFLokAKD1g83CPRnDGPEEVGxyatbQuVP2WlYR9fJVTH6ELks4bhrn3vvUj3-LP-mfxG6XQfXQsKBbJPzJKJDlI'
  },
  { 
    id: 'g5', 
    name: '穿越火线', 
    image: '' // Fallback to icon
  },
  { 
    id: 'g6', 
    name: '梦幻西游', 
    image: '' // Fallback to icon
  }
];

export const LISTINGS: AccountListing[] = [
  {
    id: 'l1',
    title: '王者荣耀 V10 满英雄 120款传说皮肤/30款限定',
    price: 3500,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7VbKOePMoYPSW6wfuvcDDH2MA3Q4ip4u-olUNhk8ZXQZfOlj9CE0_thiBhW8yPHFbRzgyPPx49omZlmDXCAXkIcWzEHW_KIA_c4rBU7l36eBBA3Dm0phbe5h1H_gC8TR_uYPYuxy7BzBnCmzx-Z38_nhB9kxuJM0uvjeTDxYDZvPlYLDegY2pw4IzQm6OpVdUWxiIV3-soLkxLRj5U7Qsc55iKjoRFJCoY0_qSfIhcfYfZ4o9Q2HrYpwduOF7qGGg3zCz5u8_f7Y',
    sellerAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeSeDkog-G_YiBsJY0KTJpx2KTJkgPUlw83428l6JoYD7z80yuoVaT9irdPRXTpomU8cSDuWGWU7G0Hcj4T1c9SpEphIqVdZp_I4GfRiqPz2dxm0lmRfQdbtXQmnqOXZwTYfe53I-UB4K0jJoiVeb-kdy4Uvn1EItl0z1l_lqARz_L28fArAX4CWA4-uxrxecGcHAtbzHeajRwWrnT-I-bpA-PDxQeENB7gTfg6w8GuyrYHtoa1Lg4xFZNPKVxx23IYhmcX6RGIjc',
    badges: ['官方验证', '找回包赔']
  },
  {
    id: 'l2',
    title: '和平精英 满级账号 88套时装 玛莎拉蒂/特斯拉载具皮肤',
    price: 3000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7VbKOePMoYPSW6wfuvcDDH2MA3Q4ip4u-olUNhk8ZXQZfOlj9CE0_thiBhW8yPHFbRzgyPPx49omZlmDXCAXkIcWzEHW_KIA_c4rBU7l36eBBA3Dm0phbe5h1H_gC8TR_uYPYuxy7BzBnCmzx-Z38_nhB9kxuJM0uvjeTDxYDZvPlYLDegY2pw4IzQm6OpVdUWxiIV3-soLkxLRj5U7Qsc55iKjoRFJCoY0_qSfIhcfYfZ4o9Q2HrYpwduOF7qGGg3zCz5u8_f7Y',
    sellerAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhPZ4bFeScgRaiTHVE49Ku7ZXmVRW6Zi01nDmmztOIvbRNl0de6iAq5SQskM8et4cKl-Fwf9fgtCUPOHQu-XbS_mimt8LD-a4Hl8deNc3ndlbn7ILxWFH8q8aNni8c5mXAszCINtP52SwU8FnKTtQUwsNhvOH0ju9DvF8b_JVMwmBeOCCxxQ6jODHWZLEd_hID9JCEV8iJbos9TdL5LDeH2RJGJbPu0frx9COrbk8CvLV42H4o-Z5jFMooi1Ywg7nN5hR_vfCSzEg',
    badges: ['官方验证', '找回包赔']
  },
  {
    id: 'l3',
    title: '原神 58级 满命雷神 专武 胡桃 钟离 夜兰 多金多肝',
    price: 1850,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7VbKOePMoYPSW6wfuvcDDH2MA3Q4ip4u-olUNhk8ZXQZfOlj9CE0_thiBhW8yPHFbRzgyPPx49omZlmDXCAXkIcWzEHW_KIA_c4rBU7l36eBBA3Dm0phbe5h1H_gC8TR_uYPYuxy7BzBnCmzx-Z38_nhB9kxuJM0uvjeTDxYDZvPlYLDegY2pw4IzQm6OpVdUWxiIV3-soLkxLRj5U7Qsc55iKjoRFJCoY0_qSfIhcfYfZ4o9Q2HrYpwduOF7qGGg3zCz5u8_f7Y',
    sellerAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2O1f1vtqWOgP3bg_YIasUQoI3vmBgXX9dWI8vRziMy0WPIppiCL2TTTogbB4hZnqXCXUdw35m7Vb5AywRlKhcHlGw5B48PIkfPKgTV8CuNUfL159PLNt8To10U6Isq4hgB8Sjuga0Ub4d3eyWLbSh1-K1cQQO0DBQvWX78tvphndKjvJ9R4910-AkybjxT_hJzyi7JNr7GyrR6EEceWkuukNUe7gEsHT-uAGdtgTGnheJ5m-0PV8ibDr5ghOwe7bFCQlMcnsivig',
    badges: ['官方验证', '找回包赔']
  },
  {
    id: 'l4',
    title: '英雄联盟手游 全英雄 80皮肤 绝版限定段位框',
    price: 550,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7VbKOePMoYPSW6wfuvcDDH2MA3Q4ip4u-olUNhk8ZXQZfOlj9CE0_thiBhW8yPHFbRzgyPPx49omZlmDXCAXkIcWzEHW_KIA_c4rBU7l36eBBA3Dm0phbe5h1H_gC8TR_uYPYuxy7BzBnCmzx-Z38_nhB9kxuJM0uvjeTDxYDZvPlYLDegY2pw4IzQm6OpVdUWxiIV3-soLkxLRj5U7Qsc55iKjoRFJCoY0_qSfIhcfYfZ4o9Q2HrYpwduOF7qGGg3zCz5u8_f7Y',
    sellerAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXVAEKbOiV4BCDeTl3G9RdIqRvR9wD9Lp30asER_4vQUpm4-sj6qLDtuk571tebO_6VzOSBa9-66sOzkEPjsqNzuRC-MBYPyOu-48Sg45t2ODMA8X7TTWI0KeLNF71dNuY_YZxEk-2JwbKxj1OIdFaZYSg-Jnlebtmh4UmlE1T4aLmS6jarxlF8gmYa69IdX9y8g-90TTYw7WTE4DRqC7t5_VQRIYQnAcrgN503JrPvpY1AJKat1SYGckZuJX0OV1s4BFYzU4KpPU',
    badges: ['官方验证', '找回包赔']
  }
];
