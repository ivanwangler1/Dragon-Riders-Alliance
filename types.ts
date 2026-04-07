

export interface GameClass {
  id: string;
  name: string;
  role: string;
  description: string;
  difficulty: number; // 1-5
  imageUrl: string;
}

export interface GameRegion {
  id: string;
  name: string;
  levelRange: string;
  description: string;
  imageUrl: string;
  detailedMapUrl?: string;
  locked?: boolean;
}

export interface BestiaryEntry {
  id: string;
  regionName: string;
  levelRange: string;
  description: string;
  imageUrl: string;
  bestiaryImages?: string[]; // Array de URLs para as imagens do bestiário
  isLocked?: boolean;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: 'Update' | 'Event' | 'Maintenance' | 'Novidades';
  summary: string;
  imageUrl: string;
}

export interface ProductItem {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discountLabel?: string;
  currency: 'Elluns' | 'Gold';
  category: 'consumable' | 'costume' | 'pet' | 'vip';
  imageUrl: string;
  rarity: 'common' | 'elite' | 'heroic' | 'legendary';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}