import Header from './Header';
import { useLanguage } from '../context/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div>
      {/* Hero Banner with Header */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#1d1d24' }}>
        {/* Grid background — same as hero */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] sm:w-full md:w-[90%] lg:w-[800px] xl:w-[1000px] 2xl:w-[1200px] h-[400px]"
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

        <div className="relative z-10 pb-16 sm:pb-20 md:pb-24 pt-8 sm:pt-12 md:pt-16">
          <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-white leading-[1.1] font-satoshi">
              {t('contact.title')} <span className="text-brand-accent">{t('contact.title.accent')}</span>
            </h1>
            <p className="mt-4 max-w-lg mx-auto text-sm sm:text-base md:text-lg text-white/45 leading-relaxed font-satoshi">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info on white background */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="mx-auto w-full max-w-2xl px-5 sm:px-8 md:px-12 lg:max-w-[1920px] lg:px-16 xl:px-20 2xl:px-24 3xl:px-32">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 lg:gap-10 max-w-5xl mx-auto">
            {/* Left — Form */}
            <div className="rounded-2xl border border-[#1d1d24]/[0.06] bg-[#f5f5f7] p-5 sm:p-6">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-medium text-[#1d1d24]/45 mb-1 font-satoshi">
                      {t('contact.firstName')}
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-accent/50">
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0" /></svg>
                      </span>
                      <input
                        type="text"
                        className="w-full rounded-lg border border-[#1d1d24]/[0.08] bg-white pl-8 pr-3 py-2 text-xs text-[#1d1d24] placeholder-[#1d1d24]/25 outline-none focus:border-brand-accent/50 transition-colors font-satoshi"
                        placeholder="John"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-[#1d1d24]/45 mb-1 font-satoshi">
                      {t('contact.lastName')}
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-accent/50">
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0" /></svg>
                      </span>
                      <input
                        type="text"
                        className="w-full rounded-lg border border-[#1d1d24]/[0.08] bg-white pl-8 pr-3 py-2 text-xs text-[#1d1d24] placeholder-[#1d1d24]/25 outline-none focus:border-brand-accent/50 transition-colors font-satoshi"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-[#1d1d24]/45 mb-1 font-satoshi">
                    {t('contact.email')}
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-accent/50">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                    </span>
                    <input
                      type="email"
                      className="w-full rounded-lg border border-[#1d1d24]/[0.08] bg-white pl-8 pr-3 py-2 text-xs text-[#1d1d24] placeholder-[#1d1d24]/25 outline-none focus:border-brand-accent/50 transition-colors font-satoshi"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-[#1d1d24]/45 mb-1 font-satoshi">
                    {t('contact.phone')}
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-accent/50">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
                    </span>
                    <input
                      type="tel"
                      className="w-full rounded-lg border border-[#1d1d24]/[0.08] bg-white pl-8 pr-3 py-2 text-xs text-[#1d1d24] placeholder-[#1d1d24]/25 outline-none focus:border-brand-accent/50 transition-colors font-satoshi"
                      placeholder="+966 5XX XXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-[#1d1d24]/45 mb-1 font-satoshi">
                    {t('contact.subject')}
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-accent/50">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" /></svg>
                    </span>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-[#1d1d24]/[0.08] bg-white pl-8 pr-3 py-2 text-xs text-[#1d1d24] placeholder-[#1d1d24]/25 outline-none focus:border-brand-accent/50 transition-colors font-satoshi"
                      placeholder="How can we help?"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-[#1d1d24]/45 mb-1 font-satoshi">
                    {t('contact.message')}
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-brand-accent/50">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg>
                    </span>
                    <textarea
                      rows={3}
                      className="w-full rounded-lg border border-[#1d1d24]/[0.08] bg-white pl-8 pr-3 py-2 text-xs text-[#1d1d24] placeholder-[#1d1d24]/25 outline-none focus:border-brand-accent/50 transition-colors resize-none font-satoshi"
                      placeholder="Tell us more..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-brand-accent py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:scale-[1.01] cursor-pointer font-satoshi"
                >
                  {t('contact.send')}
                </button>
              </form>
            </div>

            {/* Right — Contact info */}
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl border border-[#1d1d24]/[0.06] bg-[#f5f5f7] p-5 sm:p-6">
                <h3 className="text-sm font-bold text-[#1d1d24] font-satoshi">
                  {t('contact.info.title')}
                </h3>
                <p className="mt-1 text-xs text-[#1d1d24]/50 font-satoshi">
                  {t('contact.info.subtitle')}
                </p>

                <div className="mt-4 space-y-3">
                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-accent/10 flex-shrink-0">
                      <svg className="h-4 w-4 text-brand-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[11px] text-[#1d1d24]/40 font-satoshi">{t('contact.email')}</p>
                      <p className="text-xs text-[#1d1d24] font-medium font-satoshi">{t('contact.info.email')}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-accent/10 flex-shrink-0">
                      <svg className="h-4 w-4 text-brand-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[11px] text-[#1d1d24]/40 font-satoshi">{t('contact.phone')}</p>
                      <p className="text-xs text-[#1d1d24] font-medium font-satoshi" dir="ltr">{t('contact.info.phone')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social media */}
              <div className="rounded-2xl border border-[#1d1d24]/[0.06] bg-[#f5f5f7] p-5 sm:p-6">
                <h3 className="text-xs font-semibold text-[#1d1d24]/50 uppercase tracking-wider font-satoshi">
                  {t('contact.info.social')}
                </h3>
                <div className="mt-4 flex gap-3">
                  {/* X/Twitter */}
                  <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1d1d24]/[0.08] bg-white text-[#1d1d24]/40 hover:text-brand-accent hover:border-brand-accent/30 transition-all duration-200">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  {/* Instagram */}
                  <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1d1d24]/[0.08] bg-white text-[#1d1d24]/40 hover:text-brand-accent hover:border-brand-accent/30 transition-all duration-200">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  {/* LinkedIn */}
                  <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1d1d24]/[0.08] bg-white text-[#1d1d24]/40 hover:text-brand-accent hover:border-brand-accent/30 transition-all duration-200">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  {/* Facebook */}
                  <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1d1d24]/[0.08] bg-white text-[#1d1d24]/40 hover:text-brand-accent hover:border-brand-accent/30 transition-all duration-200">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  {/* Telegram */}
                  <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1d1d24]/[0.08] bg-white text-[#1d1d24]/40 hover:text-brand-accent hover:border-brand-accent/30 transition-all duration-200">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
