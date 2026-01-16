import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Stats } from './components/Stats';
import { Download } from './components/Download';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#101720] text-white">
      <Hero />
      {/* <Stats /> */}
      <Features />
      <HowItWorks />
      <Download />
      <Footer />
    </div>
  );
}
