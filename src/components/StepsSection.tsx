import { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const steps = [
  { num: '01', img: '/step1.png', titleKey: 'steps.step1.title' as const, descKey: 'steps.step1.desc' as const },
  { num: '02', img: '/step2.png', titleKey: 'steps.step2.title' as const, descKey: 'steps.step2.desc' as const },
  { num: '03', img: '/step3.png', titleKey: 'steps.step3.title' as const, descKey: 'steps.step3.desc' as const },
];

export default function StepsSection() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const index = Math.round(scrollLeft / clientWidth);
    setActive(index);
  };

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return;
    const { clientWidth } = scrollRef.current;
    scrollRef.current.scrollTo({ left: clientWidth * index, behavior: 'smooth' });
    setActive(index);
  };

  return (
    <section className="bg-white h-screen flex items-center py-8 sm:py-10 lg:py-10 overflow-hidden">
      <div className="mx-auto w-full max-w-2xl px-5 sm:px-8 md:px-12 lg:max-w-[1920px] lg:px-16 xl:px-20 2xl:px-24 3xl:px-32">
        <h2 className="mx-auto max-w-2xl text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#1d1d24] leading-[1.1] font-satoshi">
          {t('steps.title.line1')} <span className="text-brand-accent">{t('steps.title.accent')}</span> {t('steps.title.line2')}
        </h2>
        <p className="mx-auto mt-2 sm:mt-3 max-w-xl text-center text-sm sm:text-base text-[#1d1d24]/50 leading-relaxed font-satoshi">
          {t('steps.subtitle')}
        </p>

        {/* Mobile: horizontal slide */}
        <div className="md:hidden mt-6">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex snap-x snap-mandatory overflow-x-auto scrollbar-hide gap-4 -mx-5 px-5"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {steps.map((step) => (
              <div key={step.num} className="snap-center flex-shrink-0 w-[85vw]">
                <div className="rounded-2xl bg-[#f5f5f7] border border-[#1d1d24]/[0.06] p-4">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-accent/10 text-xs font-bold text-brand-accent font-satoshi">
                      {step.num}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-brand-accent/20 to-transparent rtl:bg-gradient-to-l" />
                  </div>
                  <div className="relative mx-auto mb-3 w-[140px] h-[35vh] max-h-[220px] overflow-hidden rounded-t-[1.5rem] border-[3px] border-b-0 border-[#1d1d24]/10">
                    <img
                      src={step.img}
                      alt={t(step.titleKey)}
                      className="w-full object-cover object-top"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#f5f5f7] to-transparent" />
                  </div>
                  <h3 className="text-base font-bold text-[#1d1d24] font-satoshi text-center">
                    {t(step.titleKey)}
                  </h3>
                  <p className="mt-1 text-xs text-[#1d1d24]/50 leading-relaxed font-satoshi text-center">
                    {t(step.descKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {steps.map((_, i) => (
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

        {/* Desktop: 3-col grid */}
        <div className="hidden md:grid mt-6 lg:mt-10 gap-4 sm:gap-5 grid-cols-3 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div key={step.num} className="group relative">
              <div className="relative rounded-2xl bg-[#f5f5f7] border border-[#1d1d24]/[0.06] p-4 transition-all duration-300 hover:border-brand-accent/20 hover:shadow-lg hover:shadow-brand-accent/5">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-accent/10 text-xs font-bold text-brand-accent font-satoshi">
                    {step.num}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-brand-accent/20 to-transparent rtl:bg-gradient-to-l" />
                </div>
                <div className="relative mx-auto mb-3 w-[140px] sm:w-[150px] h-[28vh] max-h-[200px] overflow-hidden rounded-t-[1.5rem] border-[3px] border-b-0 border-[#1d1d24]/10 shadow-xl shadow-black/10">
                  <img
                    src={step.img}
                    alt={t(step.titleKey)}
                    className="w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#f5f5f7] to-transparent" />
                </div>
                <h3 className="text-base font-bold text-[#1d1d24] font-satoshi text-center">
                  {t(step.titleKey)}
                </h3>
                <p className="mt-1 text-xs text-[#1d1d24]/50 leading-relaxed font-satoshi text-center line-clamp-2">
                  {t(step.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-5 sm:mt-6 lg:mt-8 flex items-center justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] font-satoshi"
          >
            {t('steps.cta')}
            <svg className="h-4 w-4 rtl:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
