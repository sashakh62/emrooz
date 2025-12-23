
import React from 'react';
import ExchangeForm from '../components/ExchangeForm';

const Universities: React.FC = () => {
  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-5xl font-black text-slate-900">پرداخت شهریه دانشگاه‌های انگلستان</h2>
        <p className="text-lg text-slate-500 max-w-3xl mx-auto">
          تسهیل در امور دانشجویی با پرداخت مستقیم و آنی شهریه، خوابگاه و هزینه‌های ثبت‌نام در کوتاه‌ترین زمان ممکن.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-blue-600 mb-6 flex items-center gap-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.232.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              چرا صرافی امروز را انتخاب کنید؟
            </h3>
            <ul className="space-y-4">
              {[
                "نرخ ارز ویژه برای دانشجویان و پرداخت‌های تحصیلی",
                "ارائه رسید رسمی (Transfer Confirmation) جهت ارائه به دانشگاه",
                "پشتیبانی از تمامی دانشگاه‌های معتبر بریتانیا",
                "امکان پرداخت مستقیم از طریق سیستم بانکی محلی بریتانیا",
                "بدون کارمزدهای پنهان و هزینه‌های اضافی بانکی"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700">
                  <svg className="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-amber-50 p-8 rounded-2xl border border-amber-100">
            <h4 className="font-bold text-amber-800 mb-2">دانشگاه‌های تحت پوشش</h4>
            <p className="text-sm text-amber-700 leading-relaxed">
              ما با سیستم‌های مالی اکثر دانشگاه‌های معتبر لندن و کل انگلستان از جمله UCL، LSE، Imperial College و King's College آشنایی کامل داریم و مبالغ شما را مستقیماً به حساب دانشگاه واریز می‌کنیم.
            </p>
          </div>
        </div>

        <div>
          <ExchangeForm />
        </div>
      </div>
    </div>
  );
};

export default Universities;
