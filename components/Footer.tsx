
import React from 'react';
import { LOGO_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-right">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img className="h-10 w-auto bg-white p-1 rounded" src={LOGO_URL} alt="صرافی امروز" />
              <div>
                <h3 className="text-white font-bold text-lg">صرافی امروز</h3>
                <p className="text-slate-500 text-xs">Today Exchange London</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              ارائه‌دهنده خدمات ارزی ایمن، سریع و با بهترین نرخ در قلب لندن. ما همراه شما در تمامی نقل و انتقالات پولی و پرداخت‌های شهریه هستیم.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">لینک‌های سریع</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">قیمت پوند و دلار</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">پرداخت شهریه دانشگاه</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">درباره ما</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">سوالات متداول</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">ساعت کاری</h4>
            <ul className="space-y-2 text-sm">
              <li>دوشنبه - جمعه: ۹:۰۰ تا ۱۷:۰۰</li>
              <li>شنبه: ۱۰:۰۰ تا ۱۴:۰۰</li>
              <li>یکشنبه: تعطیل</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">تماس با ما</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 justify-end">
                <span>London, United Kingdom (Paddington Area)</span>
                <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </li>
              <li className="flex items-center gap-2 justify-end">
                <span>+44 20 1234 5678</span>
                <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </li>
              <li className="flex items-center gap-2 justify-end">
                <span>info@todayexchange.co.uk</span>
                <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 012-2V7a2 2 0 01-2-2H5a2 2 0 01-2 2v10a2 2 0 012 2z" />
                </svg>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
          <p>© ۲۰۲۴ صرافی امروز لندن. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
