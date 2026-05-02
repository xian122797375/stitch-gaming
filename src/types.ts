export interface GameCategory {
  id: string;
  name: string;
  icon: string;
  gradient: string;
}

export interface GameIcon {
  id: string;
  name: string;
  subtitle?: string;
  image: string;
  isHot?: boolean;
}

export interface AccountListing {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  soldCount?: number;
  image: string;
  sellerAvatar?: string;
  badges?: string[];
  tags?: string[];
  gameName?: string;
  tagBadge?: string;
  rank?: string;
  stats?: string;
  accountsInfo?: string;
}
