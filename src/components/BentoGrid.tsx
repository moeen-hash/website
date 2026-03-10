import { useLanguage } from '../context/LanguageContext';

export default function BentoGrid() {
  const { t } = useLanguage();

  return (
    <section className="bg-white min-h-screen lg:h-screen flex items-center py-10 sm:py-12 lg:py-10">
      <div className="mx-auto w-full max-w-2xl px-5 sm:px-8 md:px-12 lg:max-w-[1920px] lg:px-16 xl:px-20 2xl:px-24 3xl:px-32 lg:flex lg:flex-col lg:h-full lg:max-h-[100vh]">
        <h3 className="mx-auto max-w-2xl text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#1d1d24] leading-[1.1] font-satoshi">
          {t('bento.title.line1')} <span className="text-brand-accent">{t('bento.title.accent')}</span> {t('bento.title.line2')}
        </h3>
        <p className="mx-auto mt-2 sm:mt-3 max-w-xl text-center text-sm sm:text-base text-[#1d1d24]/50 leading-relaxed font-satoshi">
          {t('bento.subtitle')}
        </p>

        <div className="mt-4 sm:mt-6 lg:mt-8 grid gap-3 lg:grid-cols-3 lg:grid-rows-2 lg:flex-1 lg:min-h-0">
          {/* Left tall card - Trade image */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-[#f5f5f7] lg:rounded-l-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg,0.5rem)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-6 pt-5 pb-2 sm:px-8 sm:pt-6">
                <p className="text-base font-medium tracking-tight text-[#1d1d24] max-lg:text-center font-satoshi">
                  {t('bento.card1.title')}
                </p>
                <p className="mt-1 max-w-lg text-xs sm:text-sm/5 text-[#1d1d24]/50 max-lg:text-center font-satoshi">
                  {t('bento.card1.desc')}
                </p>
              </div>
              <div className="relative min-h-[200px] sm:min-h-[240px] lg:min-h-0 lg:flex-1 w-full max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-8 top-6 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-[#1d1d24]/10 bg-[#1d1d24]">
                  <img src="/trade.png" alt="Trading platform" className="size-full object-cover object-top" />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-[#1d1d24]/[0.06] lg:rounded-l-[2rem]" />
          </div>

          {/* Top middle card - Analytics */}
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-[#f5f5f7] max-lg:rounded-t-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg,0.5rem)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-6 pt-5 sm:px-8 sm:pt-6">
                <p className="text-base font-medium tracking-tight text-[#1d1d24] max-lg:text-center font-satoshi">
                  {t('bento.card2.title')}
                </p>
                <p className="mt-1 max-w-lg text-xs sm:text-sm/5 text-[#1d1d24]/50 max-lg:text-center font-satoshi">
                  {t('bento.card2.desc')}
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-6 sm:px-8 py-4 lg:pb-2">
                <svg className="w-full max-w-xs" viewBox="0 0 240 100" fill="none">
                  <line x1="0" y1="20" x2="240" y2="20" stroke="#1d1d24" strokeOpacity="0.06" />
                  <line x1="0" y1="40" x2="240" y2="40" stroke="#1d1d24" strokeOpacity="0.06" />
                  <line x1="0" y1="60" x2="240" y2="60" stroke="#1d1d24" strokeOpacity="0.06" />
                  <line x1="0" y1="80" x2="240" y2="80" stroke="#1d1d24" strokeOpacity="0.06" />
                  <path d="M0,70 30,55 60,60 90,35 120,42 150,20 180,30 210,18 240,12 240,100 0,100Z" fill="#089981" fillOpacity="0.1" />
                  <polyline points="0,70 30,55 60,60 90,35 120,42 150,20 180,30 210,18 240,12" stroke="#089981" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="240" cy="12" r="4" fill="#089981" />
                  <circle cx="240" cy="12" r="8" fill="#089981" fillOpacity="0.2" />
                </svg>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-[#1d1d24]/[0.06] max-lg:rounded-t-[2rem]" />
          </div>

          {/* Bottom middle card - Security */}
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-[#f5f5f7]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg,0.5rem)+1px)] min-h-[140px]">
              <img
                src="/SAFE VAULT 1.png"
                alt="Safe vault"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="relative z-10 px-6 pt-5 pb-5 sm:px-8 sm:pt-6 flex flex-col h-full justify-end">
                <p className="text-base font-medium tracking-tight text-white max-lg:text-center font-satoshi">
                  {t('bento.card3.title')}
                </p>
                <p className="mt-1 max-w-lg text-xs sm:text-sm/5 text-white/80 max-lg:text-center font-satoshi">
                  {t('bento.card3.desc')}
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-[#1d1d24]/[0.06]" />
          </div>

          {/* Right tall card - APIs */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-[#f5f5f7] max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg,0.5rem)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-6 pt-5 pb-2 sm:px-8 sm:pt-6">
                <p className="text-base font-medium tracking-tight text-[#1d1d24] max-lg:text-center font-satoshi">
                  {t('bento.card4.title')}
                </p>
                <p className="mt-1 max-w-lg text-xs sm:text-sm/5 text-[#1d1d24]/50 max-lg:text-center font-satoshi">
                  {t('bento.card4.desc')}
                </p>
              </div>
              <div className="relative min-h-[160px] sm:min-h-[200px] lg:min-h-0 lg:flex-1 w-full">
                <div className="absolute top-6 right-0 bottom-0 left-8 overflow-hidden rounded-tl-xl bg-[#1d1d24] outline outline-[#1d1d24]/10">
                  <div className="flex bg-[#161619] outline outline-white/[0.04]">
                    <div className="-mb-px flex text-sm/6 font-medium text-white/40 font-satoshi">
                      <div className="border-r border-b border-r-white/10 border-b-brand-accent/30 bg-white/5 px-4 py-2 text-white">Dashboard.tsx</div>
                      <div className="border-r border-white/5 px-4 py-2">API.ts</div>
                    </div>
                  </div>
                  <div className="px-6 pt-4 pb-10 text-sm/7 font-mono text-white/30">
                    <p><span className="text-brand-accent/70">const</span> <span className="text-white/60">portfolio</span> = <span className="text-brand-accent/70">await</span></p>
                    <p className="pl-4"><span className="text-white/60">api</span>.<span className="text-brand-accent/50">getPositions</span>();</p>
                    <p className="mt-2"><span className="text-brand-accent/70">const</span> <span className="text-white/60">signals</span> = </p>
                    <p className="pl-4"><span className="text-white/60">analyze</span>(<span className="text-white/60">portfolio</span>);</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-[#1d1d24]/[0.06] max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />
          </div>
        </div>
      </div>
    </section>
  );
}
