import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePage } from '../context/PageContext';

const languages = [
  { code: 'en' as const, label: 'English', flag: '/english.png' },
  { code: 'ar' as const, label: 'العربية', flag: '/arabic.png' },
];

const marketSublinks = [
  {
    key: 'market.forex' as const,
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
  {
    key: 'market.commodities' as const,
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    key: 'market.stocks' as const,
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    key: 'market.etfs' as const,
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    key: 'market.crypto' as const,
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M9.5 8h5a2.5 2.5 0 010 5H9v3.5h6" /><line x1="12" y1="6" x2="12" y2="8" /><line x1="12" y1="16.5" x2="12" y2="18.5" />
      </svg>
    ),
  },
  {
    key: 'market.indices' as const,
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" /><path d="M7 16l4-8 4 4 4-6" />
      </svg>
    ),
  },
];

const navLinks = [
  {
    key: 'nav.home' as const,
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
  },
  {
    key: 'nav.markets' as const,
    hasSubmenu: true,
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    key: 'nav.about' as const,
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4M12 8h.01" />
      </svg>
    ),
  },
  {
    key: 'nav.blogs' as const,
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" />
        <path d="M6 8h12M6 12h12M6 16h8" />
      </svg>
    ),
  },
  {
    key: 'nav.tradingTools' as const,
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 10l3-3 2 2 5-5" />
      </svg>
    ),
  },
  {
    key: 'nav.contactUs' as const,
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    ),
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { setPage } = usePage();

  const handleClose = () => {
    setIsOpen(false);
    setExpandedMenu(null);
  };

  return (
    <>
      <header className="relative z-50 w-full">
        <div className="w-full max-w-[1920px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 3xl:px-32 py-4 sm:py-5 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-white text-2xl sm:text-[26px] md:text-[28px] lg:text-3xl xl:text-[32px] font-bold tracking-tight font-satoshi">
            equitix<span className="text-brand-accent">.</span>
          </a>

          {/* Right side: login, signup, language toggle, hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Login & Sign up - visible on md+ */}
            <button className="hidden md:inline-flex bg-brand-accent text-white text-sm font-medium font-satoshi px-5 py-2.5 rounded-full hover:bg-[#078770] transition-colors cursor-pointer">
              {t('nav.login')}
            </button>
            <button className="hidden md:inline-flex bg-white text-[#1d1d24] text-sm font-semibold font-satoshi px-5 py-2.5 rounded-full hover:bg-white/90 transition-colors cursor-pointer">
              {t('nav.signup')}
            </button>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-white/[0.06] rounded-full p-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`flex items-center justify-center rounded-full transition-all duration-200 cursor-pointer ${
                    language === lang.code
                      ? 'ring-2 ring-brand-accent ring-offset-1 ring-offset-transparent'
                      : 'opacity-40 hover:opacity-70'
                  }`}
                >
                  <img
                    src={lang.flag}
                    alt={lang.label}
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50 w-11 h-11 sm:w-12 sm:h-12 flex flex-col items-center justify-center gap-[6px] cursor-pointer"
            >
              <span className={`block w-7 h-[2px] bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
              <span className={`block w-7 h-[2px] bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-7 h-[2px] bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Full Page Drawer */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 backdrop-blur-2xl bg-[#1d1d24]/70" />
        <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(8,153,129,0.08),inset_0_1px_0_rgba(8,153,129,0.15),inset_0_-1px_0_rgba(8,153,129,0.15),inset_1px_0_0_rgba(8,153,129,0.15),inset_-1px_0_0_rgba(8,153,129,0.15)]" />

        <div className="relative z-10 h-full flex flex-col px-5 sm:px-8 md:px-12 py-6 sm:py-8">
          {/* Drawer Header */}
          <div className="flex items-center justify-between mb-12 sm:mb-16 md:mb-20">
            <a href="/" className="text-white text-2xl sm:text-[26px] md:text-[28px] font-bold tracking-tight font-satoshi">
              equitix<span className="text-brand-accent">.</span>
            </a>
            <button
              onClick={handleClose}
              className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-white/[0.06] hover:bg-white/[0.1] transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4 sm:w-[18px] sm:h-[18px]" viewBox="0 0 18 18" fill="none">
                <path d="M1 1L17 17M17 1L1 17" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Main content area - nav + submenu */}
          <div className="flex flex-1 gap-8 sm:gap-12 md:gap-16 overflow-y-auto">
            {/* Nav Links */}
            <nav className="flex flex-col gap-2">
              {navLinks.map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    if (item.key === 'nav.contactUs') {
                      handleClose();
                      setPage('contact');
                      window.scrollTo(0, 0);
                    } else if (item.hasSubmenu) {
                      setExpandedMenu(expandedMenu === item.key ? null : item.key);
                    } else {
                      handleClose();
                    }
                  }}
                  className={`inline-flex items-center gap-4 sm:gap-5 md:gap-6 text-2xl sm:text-3xl md:text-4xl font-semibold font-satoshi transition-colors py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl hover:bg-white/[0.06] w-fit cursor-pointer text-start ${
                    item.hasSubmenu && expandedMenu === item.key ? 'text-brand-accent' : 'text-white hover:text-brand-accent'
                  }`}
                >
                  <span className={`transition-colors ${item.hasSubmenu && expandedMenu === item.key ? 'text-brand-accent' : 'text-white/20'}`}>
                    {item.icon}
                  </span>
                  {t(item.key)}
                </button>
              ))}
            </nav>

            {/* Market sub-links */}
            <div
              className={`hidden sm:flex flex-col justify-center transition-opacity duration-300 ${
                expandedMenu === 'nav.markets' ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <h3 className="text-white/20 text-xs sm:text-sm font-semibold font-satoshi uppercase tracking-widest mb-4 sm:mb-6">
                {t('nav.markets')}
              </h3>
              <div className="flex flex-col gap-1">
                {marketSublinks.map((sub) => (
                  <a
                    key={sub.key}
                    href={`#${t(sub.key).toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={handleClose}
                    className="inline-flex items-center gap-3 sm:gap-4 text-white/35 text-base sm:text-lg md:text-xl font-medium font-satoshi hover:text-white transition-colors py-2 sm:py-2.5 px-3 sm:px-4 rounded-xl hover:bg-white/[0.06] w-fit"
                  >
                    <span className="text-white/20">{sub.icon}</span>
                    {t(sub.key)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Buttons - mobile only (hidden on md+ since they're in the header) */}
          <div className="flex md:hidden items-center gap-3 pt-6">
            <button className="bg-white/[0.06] text-white text-sm font-medium font-satoshi px-6 py-3.5 rounded-xl hover:bg-white/[0.12] transition-colors cursor-pointer flex-1">
              {t('nav.login')}
            </button>
            <button className="bg-white text-[#1d1d24] text-sm font-semibold font-satoshi px-6 py-3.5 rounded-xl hover:bg-white/90 transition-colors cursor-pointer flex-1">
              {t('nav.signup')}
            </button>
          </div>
        </div>
      </div>
      {/* Language Modal */}
      {langOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center" onClick={() => setLangOpen(false)}>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div
            className="relative bg-[#2a2a32] border border-white/10 rounded-2xl shadow-[0_16px_50px_rgba(0,0,0,0.5)] p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-white/40 text-xs font-semibold font-satoshi uppercase tracking-widest px-4 pt-3 pb-2">
              Language
            </h3>
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setLangOpen(false);
                }}
                className={`flex items-center gap-3 w-full px-4 py-3 text-sm font-medium font-satoshi cursor-pointer transition-colors rounded-xl ${
                  language === lang.code
                    ? 'text-brand-accent bg-white/[0.06]'
                    : 'text-white/70 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                <img src={lang.flag} alt={lang.label} className="w-6 h-6 rounded-full object-cover" />
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
