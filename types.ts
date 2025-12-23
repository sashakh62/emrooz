
export interface CurrencyRate {
  code: string;
  name: string;
  buy: number;
  sell: number;
  change: number;
  flag: string;
}

export interface Landmark {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface FormData {
  fullName: string;
  email: string;
  phone: string;
  currencyType: string;
  amount: string;
  isUniversityPayment: boolean;
  universityName?: string;
  degree?: string;
}
