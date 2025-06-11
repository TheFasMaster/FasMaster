
export enum UserRole {
  EMPLOYER = 'employer',
  HANDYMAN = 'handyman',
}

export enum City {
  MOSCOW = 'Москва',
  SAINT_PETERSBURG = 'Санкт-Петербург',
}

export enum JobCategory {
  LOADER = 'Грузчики',
  HELPER = 'Подсобники',
  ELECTRICIAN = 'Электрики',
  PLUMBER = 'Сантехники',
  CARPENTER = 'Плотники',
  GENERAL = 'Разнорабочие (общие)',
}

export interface User {
  id: string;
  email: string; // Can be phone as well, simplified to email for now
  password?: string; // Should not be stored plaintext or sent to client after auth
  role: UserRole;
  city: City;
  name: string;
  photoUrl: string;
  description: string;
  specialties?: JobCategory[];
  rating?: number; // 0-5 for handymen
  contactInfo?: string; // e.g. phone display
  referralCode?: string;
  referredBy?: string;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  receiverId: string;
  text: string;
  timestamp: number;
  isPaid?: boolean; // To mark if the payment simulation was "successful"
}

export interface ChatSession {
  id: string; // e.g., user1Id_user2Id
  participants: [string, string];
  messages: ChatMessage[];
  lastMessageTimestamp?: number;
}
