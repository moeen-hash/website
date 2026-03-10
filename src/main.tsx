import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { LanguageProvider } from './context/LanguageContext'
import { PageProvider } from './context/PageContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <PageProvider>
        <App />
      </PageProvider>
    </LanguageProvider>
  </StrictMode>,
)
