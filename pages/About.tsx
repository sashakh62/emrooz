
import React from 'react';
import { LONDON_LANDMARKS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="py-12 space-y-20">
      {/* Intro section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
              داستان ما در <span className="text-blue-600">قلب لندن</span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              صرافی امروز فعالیت خود را با هدف ایجاد یک پل ارتباطی امن و شفاف برای ایرانیان مقیم بریتانیا و مسافران عزیز آغاز کرد. ما با سال‌ها تجربه در بازار مالی لندن، اهمیت سرعت و اعتماد را در تبادلات ارزی به خوبی درک می‌کنیم.
            </p>
            <p className="text-slate-600 leading-relaxed">
              تیم ما متشکل از متخصصین مالی است که به صورت شبانه‌روزی تحولات بازار جهانی را رصد کرده تا بهترین نرخ‌های ممکن را به مشتریان ارائه دهند. تعهد ما، ارائه خدماتی فراتر از یک صرافی معمولی است.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80" 
              className="rounded-3xl shadow-2xl" 
              alt="لندن" 
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
              <p className="text-blue-600 font-bold text-2xl">+۱۰ سال</p>
              <p className="text-slate-400 text-sm">تجربه در بازارهای مالی</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery section */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">لندن؛ شهر فرصت‌ها و مقر صرافی امروز</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">گالری تصاویر منتخب از زیبایی‌های شهری که ما در آن با افتخار به شما خدمت‌رسانی می‌کنیم.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LONDON_LANDMARKS.map((landmark) => (
              <div key={landmark.id} className="group relative overflow-hidden rounded-2xl bg-slate-800 transition-all hover:scale-[1.02]">
                <img 
                  src={landmark.imageUrl} 
                  alt={landmark.title} 
                  className="h-64 w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent flex flex-col justify-end p-6">
                  <h4 className="text-lg font-bold mb-2">{landmark.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {landmark.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "مشتری راضی", value: "۵۰۰۰+" },
            { label: "تراکنش سالانه", value: "۱۲۰۰۰+" },
            { label: "پشتیبانی شبانه‌روزی", value: "۲۴/۷" },
            { label: "کشورهای تحت پوشش", value: "۱۵+" }
          ].map((stat, i) => (
            <div key={i} className="text-center p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-3xl font-black text-blue-600 mb-2">{stat.value}</p>
              <p className="text-slate-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
