
import React, { useState } from 'react';
import { INITIAL_RATES } from '../constants';

const ExchangeForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isUniversity, setIsUniversity] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="bg-white p-12 rounded-2xl shadow-xl text-center border-t-4 border-emerald-500 animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-4">درخواست شما با موفقیت ثبت شد</h2>
        <p className="text-slate-600 mb-8 max-w-md mx-auto leading-relaxed">
          یک ایمیل تأیید برای شما ارسال گردید. همکاران ما در بخش عملیات صرافی امروز به‌زودی با شما تماس خواهند گرفت.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-blue-600 font-semibold hover:underline"
        >
          ثبت درخواست جدید
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="bg-slate-800 p-8 text-white">
        <h2 className="text-2xl font-bold mb-2">فرم درخواست آنلاین</h2>
        <p className="text-slate-400 text-sm">جهت تسریع در امور، اطلاعات خود را با دقت وارد نمایید.</p>
      </div>

      <form onSubmit={handleSubmit} className="p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">نام و نام خانوادگی</label>
            <input required type="text" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="مثال: علی حسینی" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">شماره تماس (واتس‌اپ)</label>
            <input required type="tel" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="۰۹۱۲XXXXXXX" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">آدرس ایمیل</label>
          <input required type="email" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="yourname@example.com" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">نوع ارز</label>
            <select className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none bg-no-repeat bg-[left_1rem_center]">
              {INITIAL_RATES.map(r => <option key={r.code} value={r.code}>{r.name} ({r.code})</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">مبلغ مورد نظر</label>
            <input required type="number" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="مثال: ۱۰۰۰" />
          </div>
        </div>

        <div className="pt-4">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input 
              type="checkbox" 
              className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500" 
              checked={isUniversity}
              onChange={(e) => setIsUniversity(e.target.checked)}
            />
            <span className="text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors">این یک پرداخت شهریه دانشگاهی است</span>
          </label>
        </div>

        {isUniversity && (
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 space-y-4 animate-in slide-in-from-top-4 duration-300">
            <h4 className="text-sm font-bold text-slate-800 border-b border-slate-200 pb-2 mb-4">جزئیات دانشگاه</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-500 mb-1">نام دانشگاه</label>
                <input type="text" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none" placeholder="مثال: Imperial College London" />
              </div>
              <div>
                <label className="block text-xs text-slate-500 mb-1">مقطع تحصیلی</label>
                <select className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none">
                  <option>کارشناسی (Bachelors)</option>
                  <option>کارشناسی ارشد (Masters)</option>
                  <option>دکترا (PhD)</option>
                  <option>سایر موارد</option>
                </select>
              </div>
            </div>
          </div>
        )}

        <button 
          disabled={loading}
          type="submit" 
          className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2"
        >
          {loading ? (
            <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : 'ارسال درخواست نهایی'}
        </button>
      </form>
    </div>
  );
};

export default ExchangeForm;
