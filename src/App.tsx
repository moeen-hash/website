import HeroSection from './components/HeroSection'
import BentoGrid from './components/BentoGrid'
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
      <BentoGrid />
      <BlogSection />
      <StepsSection />
      <FAQSection />
    </>
  )
}

export default App
