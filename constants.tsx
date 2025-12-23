
import { CurrencyRate, Landmark } from './types';

export const INITIAL_RATES: CurrencyRate[] = [
  { code: 'GBP', name: 'پوند انگلیس', buy: 82500, sell: 83100, change: 0.5, flag: '🇬🇧' },
  { code: 'USD', name: 'دلار آمریکا', buy: 65200, sell: 65800, change: -0.2, flag: '🇺🇸' },
  { code: 'EUR', name: 'یورو', buy: 71100, sell: 71700, change: 0.1, flag: '🇪🇺' },
  { code: 'IRR', name: 'ریال ایران', buy: 0.1, sell: 0.1, change: 0, flag: '🇮🇷' },
  { code: 'CAD', name: 'دلار کانادا', buy: 48500, sell: 49100, change: 0.3, flag: '🇨🇦' },
  { code: 'AUD', name: 'دلار استرالیا', buy: 43200, sell: 43800, change: -0.1, flag: '🇦🇺' },
  { code: 'AED', name: 'درهم امارات', buy: 17800, sell: 18100, change: 0.05, flag: '🇦🇪' },
];

export const LONDON_LANDMARKS: Landmark[] = [
  {
    id: 1,
    title: "بیگ بن و پارلمان",
    description: "نماد تپنده قلب لندن؛ صرافی امروز در نزدیکی مراکز مالی مهم شهر همراه شماست.",
    imageUrl: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "پل برج (Tower Bridge)",
    description: "پیوند دهنده سنت و مدرنیته؛ ما پل ارتباط مالی شما بین ایران و بریتانیا هستیم.",
    imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "چشم لندن (London Eye)",
    description: "چشم‌اندازی وسیع به بازارهای جهانی؛ با ما دقیق‌ترین نرخ‌ها را رصد کنید.",
    imageUrl: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "منطقه سیتی لندن",
    description: "مرکز مالی جهان؛ تخصص ما در قلب تپنده اقتصاد انگلستان نهفته است.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
  }
];

export const LOGO_URL = "https://storage.googleapis.com/msgs-pub-data/1740324869877-V9SBCPDRV399.png";
