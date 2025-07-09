import AboutCards from './sections/AboutCards';
import AboutSection from './sections/AboutSection';
import { BottomBar, Navbar, CustomCursor } from './components';
import FAQSection from './sections/FaqSection';
import HeroSection from './sections/HeroSection';
import TestimonialCarousel from './sections/TestimonialCarousel';
import { useScholarshipStore } from './state/scholarshipStore';
import { useEffect } from 'react';

function App() {
  const { fetchData } = useScholarshipStore();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AboutCards />
      <TestimonialCarousel />
      <FAQSection />
      <BottomBar />
      <CustomCursor />
    </>
  );
}

export default App;
