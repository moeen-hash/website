import { useLanguage } from '../context/LanguageContext';

const steps = [
  {
    num: '01',
    titleKey: 'referral.step1.title' as const,
    descKey: 'referral.step1.desc' as const,
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <circle cx="18" cy="16" r="8" fill="#1d1d24" />
        <path d="M4 40c0-7.732 6.268-14 14-14s14 6.268 14 14" fill="#1d1d24" />
        <circle cx="36" cy="16" r="5" fill="#089981" />
        <rect x="34.5" y="13" width="3" height="6" rx="1" fill="white" />
        <rect x="33" y="14.5" width="6" height="3" rx="1" fill="white" />
      </svg>
    ),
  },
  {
    num: '02',
    titleKey: 'referral.step2.title' as const,
    descKey: 'referral.step2.desc' as const,
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <rect x="4" y="10" width="40" height="28" rx="4" fill="#1d1d24" />
        <rect x="4" y="16" width="40" height="6" fill="#089981" />
        <rect x="10" y="28" width="12" height="3" rx="1.5" fill="#089981" />
        <rect x="10" y="33" width="8" height="2" rx="1" fill="white" fillOpacity="0.2" />
        <circle cx="36" cy="31" r="4" fill="#089981" />
      </svg>
    ),
  },
  {
    num: '03',
    titleKey: 'referral.step3.title' as const,
    descKey: 'referral.step3.desc' as const,
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="20" fill="#1d1d24" />
        <path d="M24 12a4 4 0 0 1 4 4v2h-8v-2a4 4 0 0 1 4-4Z" fill="#089981" />
        <rect x="14" y="18" width="20" height="20" rx="2" fill="#089981" />
        <path d="M24 24v6M21 27h6" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function ReferralSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#1d1d24] min-h-screen lg:h-screen flex items-center py-10 sm:py-12 lg:py-10 overflow-hidden relative">
      {/* Grid background */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-2xl px-5 sm:px-8 md:px-12 lg:max-w-[1920px] lg:px-16 xl:px-20 2xl:px-24 3xl:px-32">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-20 items-center">
          {/* Left - Content */}
          <div className="max-lg:text-center">
            <p className="text-xs sm:text-sm font-semibold text-brand-accent uppercase tracking-[0.15em] font-satoshi">
              {t('referral.tag')}
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1] font-satoshi">
              {t('referral.title.line1')} <span className="text-brand-accent">{t('referral.title.accent')}</span> {t('referral.title.line2')}
            </h2>
            <p className="mt-4 max-w-md text-sm sm:text-base text-white/45 leading-relaxed font-satoshi max-lg:mx-auto">
              {t('referral.subtitle')}
            </p>

            {/* Reward highlight */}
            <div className="mt-6 sm:mt-8 inline-flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 sm:px-8 py-4 sm:py-5 max-lg:mx-auto">
              <span className="text-4xl sm:text-5xl font-bold text-brand-accent font-satoshi">50%</span>
              <div className="text-left">
                <p className="text-sm sm:text-base font-semibold text-white font-satoshi">{t('referral.reward.line1')}</p>
                <p className="text-xs sm:text-sm text-white/40 font-satoshi">{t('referral.reward.line2')}</p>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 max-lg:justify-center">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-7 py-3 text-sm font-semibold text-white font-satoshi hover:bg-[#078770] transition-colors"
              >
                {t('referral.cta')}
                <svg className="h-4 w-4 rtl:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right - Steps */}
          <div className="max-lg:mt-10 flex flex-col gap-6 sm:gap-8">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-5 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 sm:p-6">
                <div className="flex-shrink-0">
                  {step.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-bold text-brand-accent font-satoshi">{step.num}</span>
                    <div className="h-px w-5 bg-brand-accent/30" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-satoshi">
                    {t(step.titleKey)}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-white/40 leading-relaxed font-satoshi">
                    {t(step.descKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
