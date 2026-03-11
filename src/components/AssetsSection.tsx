import { useLanguage } from '../context/LanguageContext';

const logos = [
  { src: '/Bitcoin.png', name: 'Bitcoin' },
  { src: '/eth.png', name: 'Ethereum' },
  { src: '/bnb 1.png', name: 'BNB' },
  { src: '/apple.png', name: 'Apple' },
  { src: '/Microsoft.png', name: 'Microsoft' },
  { src: '/meta.png', name: 'Meta' },
  { src: '/tesla.png', name: 'Tesla' },
  { src: '/gold.png', name: 'Gold' },
  { src: '/oil.png', name: 'Oil' },
  { src: '/usa.png', name: 'USD' },
  { src: '/gbp.png', name: 'GBP' },
];

export default function AssetsSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-white h-screen flex items-center py-8 sm:py-10 lg:py-10 overflow-hidden">
      <div className="mx-auto w-full max-w-2xl px-5 sm:px-8 md:px-12 lg:max-w-[1920px] lg:px-16 xl:px-20 2xl:px-24 3xl:px-32">
        <h2 className="mx-auto max-w-3xl text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#1d1d24] leading-[1.1] font-satoshi">
          {t('assets.title')} <span className="text-brand-accent">{t('assets.title.accent')}</span>
        </h2>
        <p className="mx-auto mt-2 sm:mt-3 max-w-xl text-center text-sm sm:text-base text-[#1d1d24]/50 leading-relaxed font-satoshi">
          {t('assets.subtitle')}
        </p>

        {/* Logo grid */}
        <div className="mt-10 sm:mt-12 lg:mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 gap-x-6 gap-y-8 sm:gap-x-8 sm:gap-y-10 md:gap-x-10 md:gap-y-12 place-items-center">
            {logos.map((logo) => (
              <div key={logo.name} className="group flex flex-col items-center gap-2">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl bg-[#f5f5f7] border border-[#1d1d24]/[0.04] flex items-center justify-center transition-all duration-300 group-hover:border-brand-accent/20 group-hover:shadow-lg group-hover:shadow-brand-accent/5 group-hover:scale-105">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="w-10 h-10 sm:w-11 sm:h-11 md:w-14 md:h-14 object-contain"
                  />
                </div>
                <span className="text-[10px] sm:text-xs font-medium text-[#1d1d24]/40 font-satoshi group-hover:text-[#1d1d24]/70 transition-colors">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>

          {/* Counter strip */}
          <div className="mt-10 sm:mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-16">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1d1d24] font-satoshi">1,500+</p>
              <p className="mt-1 text-[11px] sm:text-xs text-[#1d1d24]/40 font-satoshi">{t('assets.stat1')}</p>
            </div>
            <div className="h-8 w-px bg-[#1d1d24]/10 hidden sm:block" />
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1d1d24] font-satoshi">6</p>
              <p className="mt-1 text-[11px] sm:text-xs text-[#1d1d24]/40 font-satoshi">{t('assets.stat2')}</p>
            </div>
            <div className="h-8 w-px bg-[#1d1d24]/10 hidden sm:block" />
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-accent font-satoshi">24/7</p>
              <p className="mt-1 text-[11px] sm:text-xs text-[#1d1d24]/40 font-satoshi">{t('assets.stat3')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
