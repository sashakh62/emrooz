
import React, { useState, useEffect } from 'react';
import { INITIAL_RATES } from '../constants';
import { CurrencyRate } from '../types';

const CurrencyRates: React.FC = () => {
  const [rates, setRates] = useState<CurrencyRate[]>(INITIAL_RATES);
  const [lastUpdate, setLastUpdate] = useState<string>(new Date().toLocaleTimeString('fa-IR'));
  const [compareA, setCompareA] = useState<string>('GBP');
  const [compareB, setCompareB] = useState<string>('USD');

  // Simulate dynamic rate updates using percentage to handle small values (IRR) correctly
  useEffect(() => {
    const interval = setInterval(() => {
      setRates(prevRates => prevRates.map(rate => {
        // Apply a small random percentage change (max 0.1%)
        const fluctuation = 1 + (Math.random() * 0.002 - 0.001);
        return {
          ...rate,
          buy: rate.buy * fluctuation,
          sell: rate.sell * fluctuation,
          change: Number((Math.random() * 2 - 1).toFixed(2))
        };
      }));
      setLastUpdate(new Date().toLocaleTimeString('fa-IR'));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const rateA = rates.find(r => r.code === compareA);
  const rateB = rates.find(r => r.code === compareB);

  // Helper to format currency values (handling IRR small values)
  const formatValue = (val: number) => {
    if (val < 1) return val.toFixed(4); // Keep precision for IRR
    return Math.round(val).toLocaleString();
  };

  return (
    <div className="space-y-8">
      {/* Rate Table */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
        <div className="bg-blue-600 px-6 py-4 flex justify-between items-center text-white">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            نرخ لحظه‌ای ارزها
          </h2>
          <span className="text-xs text-blue-100">آخرین بروزرسانی: {lastUpdate}</span>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead className="bg-slate-50 text-slate-500 text-sm uppercase">
              <tr>
                <th className="px-6 py-4">ارز</th>
                <th className="px-6 py-4">خرید (تومان)</th>
                <th className="px-6 py-4">فروش (تومان)</th>
                <th className="px-6 py-4">تغییرات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rates.map((rate) => (
                <tr key={rate.code} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 flex items-center gap-3">
                    <span className="text-2xl">{rate.flag}</span>
                    <div>
                      <div className="font-bold text-slate-800">{rate.name}</div>
                      <div className="text-xs text-slate-400">{rate.code} / IRR</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-mono text-lg text-slate-700">{formatValue(rate.buy)}</td>
                  <td className="px-6 py-4 font-mono text-lg text-blue-600 font-semibold">{formatValue(rate.sell)}</td>
                  <td className={`px-6 py-4 font-medium ${rate.change >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                    {rate.change >= 0 ? '+' : ''}{rate.change}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Comparison Tool */}
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
        <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
          <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
          مقایسه هوشمند نرخ‌ها
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-xs text-slate-400 mb-1">ارز اول</label>
                <select 
                  value={compareA} 
                  onChange={(e) => setCompareA(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {rates.map(r => <option key={r.code} value={r.code}>{r.name}</option>)}
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-xs text-slate-400 mb-1">ارز دوم</label>
                <select 
                  value={compareB} 
                  onChange={(e) => setCompareB(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {rates.map(r => <option key={r.code} value={r.code}>{r.name}</option>)}
                </select>
              </div>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-xs text-blue-500 mb-2">تفاوت نرخ فروش فعلی:</p>
              <div className="flex justify-between items-baseline">
                <span className="text-2xl font-bold text-blue-700">
                  {rateA && rateB ? Math.abs(rateA.sell - rateB.sell).toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 2}) : 0}
                </span>
                <span className="text-sm text-blue-600">تومان اختلاف در واحد</span>
              </div>
            </div>
          </div>

          <div className="relative h-40 flex items-center justify-center bg-slate-50 rounded-xl overflow-hidden">
             {/* Visual Comparison Representation */}
             <div className="flex gap-8 items-end">
                <div className="flex flex-col items-center gap-2">
                   <div className="w-12 bg-blue-600 rounded-t-lg transition-all duration-500" style={{ height: '100px' }}></div>
                   <span className="font-bold text-sm">{compareA}</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                   <div className="w-12 bg-blue-300 rounded-t-lg transition-all duration-500" style={{ height: `${Math.min(100, (rateB?.sell! / rateA?.sell!) * 100)}px` }}></div>
                   <span className="font-bold text-sm">{compareB}</span>
                </div>
             </div>
             <div className="absolute top-2 right-2 text-[10px] text-slate-400 uppercase tracking-widest">Visual Index</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyRates;
