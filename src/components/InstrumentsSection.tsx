import { useLanguage } from '../context/LanguageContext';

const row1 = [
  { src: '/BTC.png', name: 'Bitcoin' },
  { src: '/eth.png', name: 'Ethereum' },
  { src: '/apple.png', name: 'Apple' },
  { src: '/nvidia.png', name: 'Nvidia' },
  { src: '/xau.png', name: 'Gold' },
  { src: '/google.png', name: 'Google' },
  { src: '/solana.png', name: 'Solana' },
  { src: '/eurusd.png', name: 'EUR/USD' },
  { src: '/visa.png', name: 'Visa' },
  { src: '/usdchf.png', name: 'USD/CHF' },
  { src: '/dogecoin.png', name: 'Doge' },
];

const row2 = [
  { src: '/Tesla.png', name: 'Tesla' },
  { src: '/oil.png', name: 'Oil' },
  { src: '/amazon.png', name: 'Amazon' },
  { src: '/bnb.png', name: 'BNB' },
  { src: '/gbpusd.png', name: 'GBP/USD' },
  { src: '/Cocacola.png', name: 'Coca-Cola' },
  { src: '/xrp.png', name: 'XRP' },
  { src: '/audusd.png', name: 'AUD/USD' },
  { src: '/nike.png', name: 'Nike' },
  { src: '/usdjpy.png', name: 'USD/JPY' },
  { src: '/litecoin.png', name: 'Litecoin' },
];

const row3 = [
  { src: '/microsoft.png', name: 'Microsoft' },
  { src: '/meta.png', name: 'Meta' },
  { src: '/silver.png', name: 'Silver' },
  { src: '/eur.png', name: 'EUR' },
  { src: '/cardano.png', name: 'Cardano' },
  { src: '/alibaba.png', name: 'Alibaba' },
  { src: '/nzdusd.png', name: 'NZD/USD' },
  { src: '/mcdonalds.png', name: 'McDonalds' },
  { src: '/eurgbp.png', name: 'EUR/GBP' },
  { src: '/usdmxn.png', name: 'USD/MXN' },
  { src: '/chfjpy.png', name: 'CHF/JPY' },
];

const row4 = [
  { src: '/aus.png', name: 'AUD' },
  { src: '/usdcad.png', name: 'USD/CAD' },
  { src: '/eurjpy.png', name: 'EUR/JPY' },
  { src: '/usdtry.png', name: 'USD/TRY' },
  { src: '/gbpcad.png', name: 'GBP/CAD' },
  { src: '/eurtry.png', name: 'EUR/TRY' },
  { src: '/usdzar.png', name: 'USD/ZAR' },
  { src: '/usdsgd.png', name: 'USD/SGD' },
  { src: '/euraud.png', name: 'EUR/AUD' },
  { src: '/gbpjy.png', name: 'GBP/JPY' },
];

const rows = [
  { items: row1, animation: 'scrollLeft', speed: '22s' },
  { items: row2, animation: 'scrollRight', speed: '26s' },
  { items: row3, animation: 'scrollLeft', speed: '24s' },
  { items: row4, animation: 'scrollRight', speed: '28s' },
];

export default function InstrumentsSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-white h-screen flex items-center py-10 sm:py-12 lg:py-10 overflow-hidden">
      <div className="mx-auto w-full max-w-2xl px-5 sm:px-8 md:px-12 lg:max-w-[1920px] lg:px-16 xl:px-20 2xl:px-24 3xl:px-32">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-20 items-center">
          {/* Left - Content */}
          <div className="max-lg:text-center max-lg:mb-10">
            <p className="text-xs sm:text-sm font-semibold text-brand-accent uppercase tracking-[0.15em] font-satoshi">
              {t('instruments.tag')}
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#1d1d24] leading-[1.1] font-satoshi">
              {t('instruments.title.line1')} <span className="text-brand-accent">{t('instruments.title.accent')}</span> {t('instruments.title.line2')}
            </h2>
            <p className="mt-4 max-w-md text-sm sm:text-base text-[#1d1d24]/50 leading-relaxed font-satoshi max-lg:mx-auto">
              {t('instruments.subtitle')}
            </p>
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 max-lg:justify-center">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-7 py-3 text-sm font-semibold text-white font-satoshi hover:bg-[#078770] transition-colors"
              >
                {t('instruments.cta')}
                <svg className="h-4 w-4 rtl:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right - 4 scrolling rows */}
          <div className="relative">
            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="flex flex-col gap-4 sm:gap-5 overflow-hidden py-2">
              {rows.map((row, ri) => (
                <div
                  key={ri}
                  className="flex gap-5 sm:gap-6"
                  style={{ animation: `${row.animation} ${row.speed} linear infinite` }}
                >
                  {[...row.items, ...row.items].map((item, i) => (
                    <div key={`r${ri}-${i}`} className="flex-shrink-0">
                      <img src={item.src} alt={item.name} className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
