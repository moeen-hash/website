import { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const blogKeys = [
  { img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop', titleKey: 'blog.post1.title' as const, descKey: 'blog.post1.desc' as const, catKey: 'blog.post1.cat' as const },
  { img: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=600&h=400&fit=crop', titleKey: 'blog.post2.title' as const, descKey: 'blog.post2.desc' as const, catKey: 'blog.post2.cat' as const },
  { img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop', titleKey: 'blog.post3.title' as const, descKey: 'blog.post3.desc' as const, catKey: 'blog.post3.cat' as const },
];

function BlogCard({ post, t }: { post: typeof blogKeys[0]; t: (key: string) => string }) {
  return (
    <a href="#" className="group block">
      <div className="rounded-2xl border border-[#1d1d24]/[0.06] bg-white overflow-hidden transition-all duration-300 hover:border-brand-accent/20 hover:shadow-lg hover:shadow-brand-accent/5">
        <div className="relative h-40 sm:h-44 lg:h-48 overflow-hidden">
          <img
            src={post.img}
            alt={t(post.titleKey)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <span className="inline-block rounded-full bg-brand-accent/90 px-2.5 py-0.5 text-[10px] font-semibold text-white font-satoshi">
              {t(post.catKey)}
            </span>
          </div>
        </div>
        <div className="p-4 sm:p-5">
          <h3 className="text-sm sm:text-base font-bold text-[#1d1d24] leading-snug font-satoshi line-clamp-2 group-hover:text-brand-accent transition-colors">
            {t(post.titleKey)}
          </h3>
          <p className="mt-2 text-xs text-[#1d1d24]/45 leading-relaxed font-satoshi line-clamp-2">
            {t(post.descKey)}
          </p>
          <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-brand-accent font-satoshi group-hover:gap-2.5 transition-all">
            {t('blog.readMore')}
            <svg className="h-3 w-3 rtl:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </div>
      </div>
    </a>
  );
}

export default function BlogSection() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    setActive(Math.round(scrollLeft / clientWidth));
  };

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({ left: scrollRef.current.clientWidth * index, behavior: 'smooth' });
    setActive(index);
  };

  return (
    <section className="bg-[#f0f0f3] min-h-screen lg:h-screen flex items-center py-10 sm:py-12 lg:py-10 overflow-hidden">
      <div className="mx-auto w-full max-w-2xl px-5 sm:px-8 md:px-12 lg:max-w-[1920px] lg:px-16 xl:px-20 2xl:px-24 3xl:px-32">
        <h2 className="mx-auto max-w-2xl text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#1d1d24] leading-[1.1] font-satoshi">
          {t('blog.title')} <span className="text-brand-accent">{t('blog.title.accent')}</span>
        </h2>
        <p className="mx-auto mt-2 sm:mt-3 max-w-xl text-center text-sm sm:text-base text-[#1d1d24]/50 leading-relaxed font-satoshi">
          {t('blog.subtitle')}
        </p>

        {/* Mobile: horizontal slide */}
        <div className="md:hidden mt-8">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex snap-x snap-mandatory overflow-x-auto scrollbar-hide gap-4 -mx-5 px-5"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {blogKeys.map((post, i) => (
              <div key={i} className="snap-center flex-shrink-0 w-[85vw]">
                <BlogCard post={post} t={t} />
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {blogKeys.map((_, i) => (
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
        <div className="hidden md:grid mt-8 sm:mt-10 lg:mt-12 gap-5 grid-cols-3 max-w-6xl mx-auto">
          {blogKeys.map((post, i) => (
            <BlogCard key={i} post={post} t={t} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-6 sm:mt-8 lg:mt-10 flex items-center justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-[#1d1d24] px-7 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-[#2a2a32] font-satoshi"
          >
            {t('blog.viewAll')}
            <svg className="h-3.5 w-3.5 rtl:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
