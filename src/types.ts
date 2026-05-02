export interface GameCategory {
  id: string;
  name: string;
  icon: string;
  gradient: string;
}

export interface GameIcon {
  id: string;
  name: string;
  image: string;
  isHot?: boolean;
}

export interface AccountListing {
  id: string;
  title: string;
  price: number;
  image: string;
  sellerAvatar: string;
  badges: string[];
}
