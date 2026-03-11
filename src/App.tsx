import HeroSection from './components/HeroSection'
import InstrumentsSection from './components/InstrumentsSection'
import FeaturesSection from './components/FeaturesSection'
import AccountsSection from './components/AccountsSection'
import BlogSection from './components/BlogSection'
import StepsSection from './components/StepsSection'
import FAQSection from './components/FAQSection'
import ContactPage from './components/ContactPage'
import { usePage } from './context/PageContext'

function App() {
  const { page } = usePage();

  if (page === 'contact') {
    return <ContactPage />;
  }

  return (
    <>
      <HeroSection />
      <InstrumentsSection />
      <FeaturesSection />
      <AccountsSection />
      <BlogSection />
      <StepsSection />
      <FAQSection />
    </>
  )
}

export default App
