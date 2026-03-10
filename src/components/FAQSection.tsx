import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const faqKeys = [
  { q: 'faq.q1' as const, a: 'faq.a1' as const },
  { q: 'faq.q2' as const, a: 'faq.a2' as const },
  { q: 'faq.q3' as const, a: 'faq.a3' as const },
  { q: 'faq.q4' as const, a: 'faq.a4' as const },
  { q: 'faq.q5' as const, a: 'faq.a5' as const },
  { q: 'faq.q6' as const, a: 'faq.a6' as const },
  { q: 'faq.q7' as const, a: 'faq.a7' as const },
];

export default function FAQSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-[#1d1d24] min-h-screen lg:h-screen flex items-center py-10 sm:py-12 lg:py-10 overflow-hidden">
      <div className="mx-auto w-full max-w-2xl px-5 sm:px-8 md:px-12 lg:max-w-[1920px] lg:px-16 xl:px-20 2xl:px-24 3xl:px-32">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-16 xl:gap-20 items-center">
          {/* Left — headline, subtitle, CTA */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-start">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1] font-satoshi">
              {t('faq.title.line1')} <span className="text-brand-accent">{t('faq.title.accent')}</span>
            </h2>
            <p className="mt-3 max-w-md text-sm sm:text-base text-white/40 leading-relaxed font-satoshi">
              {t('faq.subtitle')}
            </p>
            <a
              href="#"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-accent px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] font-satoshi"
            >
              {t('faq.cta')}
              <svg className="h-4 w-4 rtl:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* Right — FAQ accordion */}
          <div
            className="space-y-2 max-h-[50vh] lg:max-h-[70vh] overflow-y-auto pe-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {faqKeys.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`rounded-xl border transition-colors duration-200 ${
                    isOpen
                      ? 'border-brand-accent/20 bg-white/[0.04]'
                      : 'border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04]'
                  }`}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="flex w-full items-center justify-between px-4 sm:px-5 py-3 sm:py-4 cursor-pointer text-start"
                  >
                    <span className="text-sm sm:text-base font-medium text-white font-satoshi pe-4">
                      {t(faq.q)}
                    </span>
                    <span
                      className={`flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? 'border-brand-accent/40 bg-brand-accent/10 rotate-45'
                          : 'border-white/10 bg-white/[0.04]'
                      }`}
                    >
                      <svg className="h-3 w-3 text-white/60" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="1.5">
                        <path d="M6 1v10M1 6h10" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-4 sm:px-5 pb-3 sm:pb-4 text-sm text-white/40 leading-relaxed font-satoshi">
                        {t(faq.a)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
