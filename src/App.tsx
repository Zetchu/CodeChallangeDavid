import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
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
    </>
  );
}

export default App;
