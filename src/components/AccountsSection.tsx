import { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const checkIcon = (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="10" fill="#1d1d24" />
    <path d="m6.5 10 2.5 2.5 4.5-5" stroke="#089981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const xIcon = (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="10" fill="#1d1d24" fillOpacity="0.06" />
    <path d="m7.5 7.5 5 5M12.5 7.5l-5 5" stroke="#1d1d24" strokeOpacity="0.2" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const accounts = [
  {
    nameKey: 'accounts.silver.name' as const,
    priceKey: 'accounts.silver.price' as const,
    descKey: 'accounts.silver.desc' as const,
    popular: false,
    bg: 'bg-[#f5f5f7]',
    benefits: [
      { key: 'accounts.b.spreads.silver' as const, included: true },
      { key: 'accounts.b.leverage.silver' as const, included: true },
      { key: 'accounts.b.instruments' as const, included: true },
      { key: 'accounts.b.support.basic' as const, included: true },
      { key: 'accounts.b.signals' as const, included: false },
      { key: 'accounts.b.manager' as const, included: false },
      { key: 'accounts.b.vps' as const, included: false },
      { key: 'accounts.b.cashback' as const, included: false },
    ],
  },
  {
    nameKey: 'accounts.gold.name' as const,
    priceKey: 'accounts.gold.price' as const,
    descKey: 'accounts.gold.desc' as const,
    popular: true,
    bg: '',
    benefits: [
      { key: 'accounts.b.spreads.gold' as const, included: true },
      { key: 'accounts.b.leverage.gold' as const, included: true },
      { key: 'accounts.b.instruments' as const, included: true },
      { key: 'accounts.b.support.priority' as const, included: true },
      { key: 'accounts.b.signals' as const, included: true },
      { key: 'accounts.b.manager' as const, included: true },
      { key: 'accounts.b.vps' as const, included: false },
      { key: 'accounts.b.cashback' as const, included: false },
    ],
  },
  {
    nameKey: 'accounts.platinum.name' as const,
    priceKey: 'accounts.platinum.price' as const,
    descKey: 'accounts.platinum.desc' as const,
    popular: false,
    bg: 'bg-[#f0f7f5]',
    benefits: [
      { key: 'accounts.b.spreads.platinum' as const, included: true },
      { key: 'accounts.b.leverage.platinum' as const, included: true },
      { key: 'accounts.b.instruments' as const, included: true },
      { key: 'accounts.b.support.vip' as const, included: true },
      { key: 'accounts.b.signals' as const, included: true },
      { key: 'accounts.b.manager' as const, included: true },
      { key: 'accounts.b.vps' as const, included: true },
      { key: 'accounts.b.cashback' as const, included: true },
    ],
  },
];

function AccountCard({ account, t }: { account: typeof accounts[0]; t: (key: any) => string }) {
  return (
    <div className={`relative rounded-2xl p-6 sm:p-7 flex flex-col h-full ${
      account.popular
        ? 'bg-[#1d1d24] text-white'
        : `${account.bg} border border-[#1d1d24]/[0.06]`
    }`}>
      {account.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-accent px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-white font-satoshi">
          {t('accounts.popular')}
        </span>
      )}

      <h3 className={`mt-4 text-sm font-semibold uppercase tracking-wider font-satoshi ${
        account.popular ? 'text-white/60' : 'text-[#1d1d24]/50'
      }`}>
        {t(account.nameKey)}
      </h3>

      <div className="mt-2 flex items-baseline gap-1">
        <span className={`text-3xl sm:text-4xl font-bold font-satoshi ${
          account.popular ? 'text-white' : 'text-[#1d1d24]'
        }`}>
          {t(account.priceKey)}
        </span>
        <span className={`text-sm font-satoshi ${
          account.popular ? 'text-white/40' : 'text-[#1d1d24]/40'
        }`}>
          {t('accounts.min')}
        </span>
      </div>

      <p className={`mt-2 text-xs leading-relaxed font-satoshi ${
        account.popular ? 'text-white/50' : 'text-[#1d1d24]/50'
      }`}>
        {t(account.descKey)}
      </p>

      <div className={`my-5 h-px ${account.popular ? 'bg-white/10' : 'bg-[#1d1d24]/[0.06]'}`} />

      <ul className="flex flex-col gap-3 flex-1">
        {account.benefits.map((b, i) => (
          <li key={i} className="flex items-center gap-2.5">
            {b.included ? checkIcon : xIcon}
            <span className={`text-xs sm:text-sm font-satoshi ${
              b.included
                ? account.popular ? 'text-white/80' : 'text-[#1d1d24]/70'
                : account.popular ? 'text-white/25' : 'text-[#1d1d24]/25'
            }`}>
              {t(b.key)}
            </span>
          </li>
        ))}
      </ul>

      <a
        href="#"
        className={`mt-6 block w-full rounded-full py-3 text-center text-sm font-semibold font-satoshi transition-colors ${
          account.popular
            ? 'bg-brand-accent text-white hover:bg-[#078770]'
            : 'bg-[#1d1d24] text-white hover:bg-[#2a2a32]'
        }`}
      >
        {t('accounts.cta')}
      </a>
    </div>
  );
}

export default function AccountsSection() {
  const { t } = useLanguage();
  const [active, setActive] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.firstElementChild as HTMLElement | null;
    if (!card) return;
    const cardWidth = card.offsetWidth + 12; // width + gap
    setActive(Math.round(scrollRef.current.scrollLeft / cardWidth));
  };

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.firstElementChild as HTMLElement | null;
    if (!card) return;
    const cardWidth = card.offsetWidth + 12;
    scrollRef.current.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
    setActive(index);
  };

  return (
    <section className="bg-white min-h-screen flex items-center py-10 sm:py-12 lg:py-10 overflow-hidden">
      <div className="mx-auto w-full max-w-2xl px-5 sm:px-8 md:px-12 lg:max-w-[1920px] lg:px-16 xl:px-20 2xl:px-24 3xl:px-32">
        <h2 className="mx-auto max-w-2xl text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#1d1d24] leading-[1.1] font-satoshi">
          {t('accounts.title.line1')} <span className="text-brand-accent">{t('accounts.title.accent')}</span>
        </h2>
        <p className="mx-auto mt-2 sm:mt-3 max-w-xl text-center text-sm sm:text-base text-[#1d1d24]/50 leading-relaxed font-satoshi">
          {t('accounts.subtitle')}
        </p>

        {/* Mobile: slider with peek */}
        <div className="md:hidden mt-8">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex snap-x snap-mandatory overflow-x-auto scrollbar-hide -mx-5 px-10 gap-3"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {accounts.map((account, i) => (
              <div key={i} className="snap-center flex-shrink-0 w-[78vw]">
                <AccountCard account={account} t={t} />
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {accounts.map((_, i) => (
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
        <div className="hidden md:grid mt-8 sm:mt-10 lg:mt-12 grid-cols-3 gap-5 max-w-5xl mx-auto items-stretch">
          {accounts.map((account, i) => (
            <AccountCard key={i} account={account} t={t} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-6 sm:mt-8 lg:mt-10 flex items-center justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-[#1d1d24] px-7 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-[#2a2a32] font-satoshi"
          >
            {t('accounts.viewAll')}
            <svg className="h-3.5 w-3.5 rtl:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
