import AboutCards from './components/AboutCards';
import AboutSection from './components/AboutSection';
import StickyBottomBar from './components/BottomBar';
import FAQSection from './components/FaqSection';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import TestimonialCarousel from './components/TestimonialCarousel';
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
      <StickyBottomBar />
    </>
  );
}

export default App;
