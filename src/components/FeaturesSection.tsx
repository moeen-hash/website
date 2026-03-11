import { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const features = [
  {
    titleKey: 'features.card1.title' as const,
    descKey: 'features.card1.desc' as const,
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="12" width="4.5" height="9" rx="1" fill="#1d1d24" />
        <rect x="9.75" y="7.5" width="4.5" height="13.5" rx="1" fill="#089981" />
        <rect x="16.5" y="3" width="4.5" height="18" rx="1" fill="#1d1d24" />
      </svg>
    ),
  },
  {
    titleKey: 'features.card2.title' as const,
    descKey: 'features.card2.desc' as const,
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <path d="M4 4h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H8l-4 3V6a2 2 0 0 1 2-2Z" fill="#1d1d24" />
        <path d="M10 9h10a2 2 0 0 1 2 2v9l-4-3h-6a2 2 0 0 1-2-2v-6Z" fill="#089981" />
      </svg>
    ),
  },
  {
    titleKey: 'features.card3.title' as const,
    descKey: 'features.card3.desc' as const,
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 7v6c0 5.25 3.75 10.15 9 11.25C17.25 23.15 21 18.25 21 13V7l-9-5Z" fill="#1d1d24" />
        <path d="m9 12 2 2 4-4" stroke="#089981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    titleKey: 'features.card4.title' as const,
    descKey: 'features.card4.desc' as const,
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <path d="M13 2 4.5 13H12l-1 9 8.5-11H12l1-9Z" fill="#089981" />
        <path d="M13 2 4.5 13H12" stroke="#1d1d24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    titleKey: 'features.card5.title' as const,
    descKey: 'features.card5.desc' as const,
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <path d="M5 3l-2 8h6l-1 10 11-13h-6l2-5H5Z" fill="#1d1d24" />
        <circle cx="18" cy="18" r="5" fill="#089981" />
        <path d="M16.5 18h3M18 16.5v3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    titleKey: 'features.card6.title' as const,
    descKey: 'features.card6.desc' as const,
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="8" width="20" height="4" rx="1" fill="#1d1d24" />
        <rect x="4" y="12" width="16" height="10" rx="1" fill="#1d1d24" />
        <path d="M12 8V3m0 0c-2 0-3.5 1.5-3.5 3.5S10 8 12 8m0-5c2 0 3.5 1.5 3.5 3.5S14 8 12 8" stroke="#089981" strokeWidth="2" strokeLinecap="round" />
        <line x1="12" y1="12" x2="12" y2="22" stroke="#089981" strokeWidth="2" />
      </svg>
    ),
  },
];

function FeatureCard({ feature, t }: { feature: typeof features[0]; t: (key: any) => string }) {
  return (
    <div className="rounded-2xl bg-white border border-[#1d1d24]/[0.06] p-6 sm:p-7">
      {feature.icon}
      <h3 className="mt-4 text-base sm:text-lg font-bold text-[#1d1d24] font-satoshi">
        {t(feature.titleKey)}
      </h3>
      <p className="mt-2 text-xs sm:text-sm text-[#1d1d24]/50 leading-relaxed font-satoshi">
        {t(feature.descKey)}
      </p>
    </div>
  );
}

export default function FeaturesSection() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft } = scrollRef.current;
    const cardWidth = scrollRef.current.firstElementChild?.getBoundingClientRect().width ?? 0;
    if (cardWidth > 0) setActive(Math.round(scrollLeft / cardWidth));
  };

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.firstElementChild?.getBoundingClientRect().width ?? 0;
    scrollRef.current.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
    setActive(index);
  };

  return (
    <section className="bg-[#f5f5f7] min-h-screen lg:h-screen flex items-center py-10 sm:py-12 lg:py-10 overflow-hidden">
      <div className="mx-auto w-full max-w-2xl px-5 sm:px-8 md:px-12 lg:max-w-[1920px] lg:px-16 xl:px-20 2xl:px-24 3xl:px-32">
        <h2 className="mx-auto max-w-2xl text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#1d1d24] leading-[1.1] font-satoshi">
          {t('features.title.line1')} <span className="text-brand-accent">{t('features.title.accent')}</span>
        </h2>
        <p className="mx-auto mt-2 sm:mt-3 max-w-xl text-center text-sm sm:text-base text-[#1d1d24]/50 leading-relaxed font-satoshi">
          {t('features.subtitle')}
        </p>

        {/* Mobile: horizontal slider with peek */}
        <div className="sm:hidden mt-8">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex snap-x snap-mandatory overflow-x-auto scrollbar-hide -mx-5 px-10 gap-3"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {features.map((feature, i) => (
              <div key={i} className="snap-center flex-shrink-0 w-[75vw]">
                <FeatureCard feature={feature} t={t} />
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {features.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  active === i ? 'w-6 bg-brand-accent' : 'w-2 bg-[#1d1d24]/15'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: grid */}
        <div className="hidden sm:grid mt-8 sm:mt-10 lg:mt-12 grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
