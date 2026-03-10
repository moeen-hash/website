import { createContext, useContext, useState, type ReactNode } from 'react';

type Page = 'home' | 'contact';

interface PageContextType {
  page: Page;
  setPage: (page: Page) => void;
}

const PageContext = createContext<PageContextType | null>(null);

export function PageProvider({ children }: { children: ReactNode }) {
  const [page, setPage] = useState<Page>('home');
  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
}

export function usePage() {
  const context = useContext(PageContext);
  if (!context) throw new Error('usePage must be used within PageProvider');
  return context;
}
