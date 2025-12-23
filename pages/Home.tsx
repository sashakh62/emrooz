
import React from 'react';
import CurrencyRates from '../components/CurrencyRates';
import ExchangeForm from '../components/ExchangeForm';

const Home: React.FC = () => {
  return (
    <div className="space-y-16 py-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
              نقل و انتقال ایمن ارز <br/>
              <span className="text-blue-600">در قلب پایتخت انگلستان</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
              صرافی امروز، پل ارتباطی مالی شما در لندن. ارائه بهترین نرخ‌های روز پوند، دلار و یورو همراه با خدمات ویژه پرداخت شهریه دانشگاه‌های بریتانیا.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
               <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-400">سرعت تراکنش</p>
                    <p className="font-bold text-slate-800 text-sm">کمتر از ۳۰ دقیقه</p>
                  </div>
               </div>
               <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04c0 4.833 1.858 10.33 8.618 11.758 6.76-1.428 8.618-6.925 8.618-11.758z" />
                    </svg>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-400">تضمین امنیت</p>
                    <p className="font-bold text-slate-800 text-sm">دارای مجوزهای معتبر</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-12">
            <CurrencyRates />
          </div>
          <div className="lg:col-span-2">
            <div className="sticky top-28">
              <ExchangeForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
