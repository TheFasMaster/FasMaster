
import { City, JobCategory, UserRole, User } from './types';

export const APP_NAME = "Raznorabochie Connect";
export const MESSAGE_PRICE = 99; // in rubles

export const CITIES: City[] = [
  City.MOSCOW,
  City.SAINT_PETERSBURG,
];

export const JOB_CATEGORIES: JobCategory[] = [
  JobCategory.LOADER,
  JobCategory.HELPER,
  JobCategory.ELECTRICIAN,
  JobCategory.PLUMBER,
  JobCategory.CARPENTER,
  JobCategory.GENERAL,
];

export const MOCK_USERS_KEY = 'raznorabochie_users';
export const MOCK_CHATS_KEY = 'raznorabochie_chats';
export const LOGGED_IN_USER_ID_KEY = 'raznorabochie_logged_in_user_id';


export const INITIAL_HANDYMEN: User[] = [
  {
    id: 'handyman1',
    email: 'ivan.ivanov@example.com',
    role: UserRole.HANDYMAN,
    city: City.MOSCOW,
    name: 'Иван Иванов',
    photoUrl: 'https://picsum.photos/seed/ivan/200/200',
    description: 'Опытный электрик, стаж 10 лет. Качественно и быстро выполню электромонтажные работы любой сложности.',
    specialties: [JobCategory.ELECTRICIAN, JobCategory.HELPER],
    rating: 4.8,
    contactInfo: '+7 (916) 123-45-67',
    referralCode: 'IVANREF123',
  },
  {
    id: 'handyman2',
    email: 'petr.petrov@example.com',
    role: UserRole.HANDYMAN,
    city: City.SAINT_PETERSBURG,
    name: 'Петр Петров',
    photoUrl: 'https://picsum.photos/seed/petr/200/200',
    description: 'Профессиональный грузчик. Аккуратно и оперативно перевезу ваши вещи.',
    specialties: [JobCategory.LOADER],
    rating: 4.5,
    contactInfo: '+7 (921) 987-65-43',
    referralCode: 'PETRREF456',
  },
  {
    id: 'handyman3',
    email: 'sidor.sidorov@example.com',
    role: UserRole.HANDYMAN,
    city: City.MOSCOW,
    name: 'Сидор Сидоров',
    photoUrl: 'https://picsum.photos/seed/sidor/200/200',
    description: 'Универсальный подсобный рабочий. Помогу с любыми задачами на стройке или на даче.',
    specialties: [JobCategory.HELPER, JobCategory.GENERAL],
    rating: 4.2,
    contactInfo: '+7 (903) 111-22-33',
    referralCode: 'SIDORREF789',
  },
    {
    id: 'handyman4',
    email: 'elena.smirnova@example.com',
    role: UserRole.HANDYMAN,
    city: City.SAINT_PETERSBURG,
    name: 'Елена Смирнова',
    photoUrl: 'https://picsum.photos/seed/elenaS/200/200',
    description: 'Квалифицированный сантехник. Установка и ремонт сантехники, устранение протечек.',
    specialties: [JobCategory.PLUMBER, JobCategory.HELPER],
    rating: 4.9,
    contactInfo: '+7 (999) 555-44-33',
    referralCode: 'ELENAREF001',
  },
];

export const INITIAL_EMPLOYERS: User[] = [
   {
    id: 'employer1',
    email: 'boss@company.com',
    role: UserRole.EMPLOYER,
    city: City.MOSCOW,
    name: 'ООО "СтройМастер"',
    photoUrl: 'https://picsum.photos/seed/boss/200/200',
    description: 'Крупная строительная компания, ищем надежных работников.',
    contactInfo: 'office@stroymaster.com',
    referralCode: 'BOSSREF101',
  },
];
