import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import WhyKiwiClicks from './components/WhyKiwiClicks';
import FeaturedWork from './components/FeaturedWork';
import Process from './components/Process';
import Results from './components/Results';
import Technology from './components/Technology';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen bg-page-bg text-text-primary overflow-x-hidden transition-theme">
      {/* Brand Customized Cursor Trailing */}
      <CustomCursor />
      
      {/* Dynamic Header Navigation */}
      <Navbar />

      {/* 10-Section Agency Architecture */}
      <main className="relative z-10 w-full">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Trust Marquee */}
        <TrustBar />

        {/* Section 3: Services Grid */}
        <Services />

        {/* Section 4: Behavioral Strategy Flow */}
        <WhyKiwiClicks />

        {/* Section 5: Featured Work Case Studies */}
        <FeaturedWork />

        {/* Section 6: Process Milestones */}
        <Process />

        {/* Section 7: Counters Stats */}
        <Results />

        {/* Section 8: Tech Stack Floating Grid */}
        <Technology />

        {/* Section 9: Testimonial Carousel */}
        <Testimonials />

        {/* Section 10: Connection Form & Footer */}
        <Contact />
      </main>
    </div>
  );
}
