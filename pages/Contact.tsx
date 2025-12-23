
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-5xl font-black text-slate-900">با ما در ارتباط باشید</h2>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          تیم پشتیبانی صرافی امروز آماده پاسخگویی به سوالات شما در تمامی ساعات کاری می‌باشد.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <div className="text-right">
                <h4 className="font-bold text-slate-800">آدرس دفتر لندن</h4>
                <p className="text-slate-500 text-sm mt-1">
                  123 Praed Street, Paddington, <br/> London W2 1RL, United Kingdom
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="text-right">
                <h4 className="font-bold text-slate-800">تماس تلفنی و واتس‌اپ</h4>
                <p className="text-slate-500 text-sm mt-1" dir="ltr">+44 77 1234 5678</p>
                <p className="text-slate-500 text-sm" dir="ltr">+44 20 8765 4321</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center shrink-0">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 012-2V7a2 2 0 01-2-2H5a2 2 0 01-2 2v10a2 2 0 012 2z" />
                </svg>
              </div>
              <div className="text-right">
                <h4 className="font-bold text-slate-800">ایمیل پشتیبانی</h4>
                <p className="text-slate-500 text-sm mt-1">support@todayexchange.co.uk</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-200 rounded-2xl h-[400px] relative overflow-hidden shadow-inner flex items-center justify-center">
            {/* Mock Map View */}
             <div className="absolute inset-0 opacity-40 grayscale pointer-events-none">
                <img src="https://images.unsplash.com/photo-1524850041227-63d2ad14fe33?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover" alt="Map Placeholder" />
             </div>
             <div className="relative z-10 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3">
                <div className="w-4 h-4 bg-red-600 rounded-full animate-pulse"></div>
                <span className="font-bold text-slate-800">دفتر مرکزی صرافی امروز (لندن)</span>
             </div>
             <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded text-[10px] text-slate-500">
               Interactive Map Simulation
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-600 text-white p-4 rounded-xl text-center">
              <p className="text-xs opacity-80 mb-1">تلگرام</p>
              <p className="font-bold">@TodayEx_London</p>
            </div>
            <div className="bg-slate-900 text-white p-4 rounded-xl text-center">
              <p className="text-xs opacity-80 mb-1">اینستاگرام</p>
              <p className="font-bold">today_exchange</p>
            </div>
            <div className="bg-emerald-500 text-white p-4 rounded-xl text-center">
              <p className="text-xs opacity-80 mb-1">واتس‌اپ</p>
              <p className="font-bold">بخش معاملات</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
