import Header from './Header';
import { useLanguage } from '../context/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen flex flex-col overflow-hidden" style={{ backgroundColor: '#1d1d24' }}>
      {/* Grid - centered and faded */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] sm:w-full md:w-[90%] lg:w-[800px] xl:w-[1000px] 2xl:w-[1200px] h-[400px] sm:h-[450px] md:h-[500px] xl:h-[600px] 2xl:h-[700px]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black 10%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 10%, transparent 70%)',
        }}
      />

      <Header />

      <div className="relative z-10 flex-1 flex items-center justify-center w-full">
        <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 3xl:px-32">
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 max-w-[700px]">
            <h1 className="text-white text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[58px] font-bold leading-[1.12] font-satoshi">
              {t('hero.title.before')}<span className="text-brand-accent">{t('hero.title.accent')}</span>{t('hero.title.after')}
            </h1>
            <p className="text-white/45 text-sm sm:text-base md:text-lg leading-relaxed font-satoshi max-w-[500px]">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <button className="bg-brand-accent text-white text-sm sm:text-base font-semibold font-satoshi px-6 sm:px-8 py-3 sm:py-3.5 rounded-full hover:bg-[#078770] transition-colors cursor-pointer">
                {t('hero.getStarted')}
              </button>
              <button className="bg-white text-[#1d1d24] text-sm sm:text-base font-medium font-satoshi px-6 sm:px-8 py-3 sm:py-3.5 rounded-full hover:bg-white/90 transition-colors cursor-pointer">
                {t('hero.learnMore')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 w-full">
        <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 3xl:px-32">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-4 sm:gap-0 py-8 sm:py-10">
            {([
              { value: 'hero.stat1.value' as const, label: 'hero.stat1.label' as const },
              { value: 'hero.stat2.value' as const, label: 'hero.stat2.label' as const },
              { value: 'hero.stat4.value' as const, label: 'hero.stat4.label' as const },
              { value: 'hero.stat5.value' as const, label: 'hero.stat5.label' as const },
            ]).map((stat, i) => (
              <div key={i} className="relative flex items-center justify-center">
                {i % 2 !== 0 && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-10 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                )}
                {i >= 2 && (
                  <div className="sm:hidden absolute top-0 left-1/2 -translate-x-1/2 h-px w-10 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                )}
                <div className="text-center">
                  <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-bold font-satoshi leading-tight tracking-tight">
                    {t(stat.value)}
                  </p>
                  <p className="text-white/50 text-[10px] sm:text-xs md:text-sm font-medium font-satoshi uppercase tracking-[0.15em] mt-2">
                    {t(stat.label)}
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
