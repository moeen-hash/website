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
    </section>
  );
}
