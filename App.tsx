
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Universities from './pages/Universities';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <Home />;
      case 'about': return <About />;
      case 'universities': return <Universities />;
      case 'contact': return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-['Vazirmatn']">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      
      <main className="flex-grow bg-slate-50">
        <div className="animate-in fade-in duration-700">
          {renderPage()}
        </div>
      </main>

      {/* Quick Access Mobile Bar */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-40">
        <div className="bg-slate-900/90 backdrop-blur-md rounded-2xl p-4 shadow-2xl flex justify-around items-center border border-slate-700">
           <button onClick={() => setActivePage('home')} className={`p-2 rounded-lg ${activePage === 'home' ? 'text-blue-400' : 'text-slate-400'}`}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
           </button>
           <button onClick={() => setActivePage('universities')} className={`p-2 rounded-lg ${activePage === 'universities' ? 'text-blue-400' : 'text-slate-400'}`}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
           </button>
           <button onClick={() => setActivePage('contact')} className={`p-2 rounded-lg ${activePage === 'contact' ? 'text-blue-400' : 'text-slate-400'}`}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 012-2V7a2 2 0 01-2-2H5a2 2 0 01-2 2v10a2 2 0 012 2z" />
              </svg>
           </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
