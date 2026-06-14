import TrustBar from '../components/TrustBar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyKiwiClicks from '../components/WhyKiwiClicks';
import FeaturedWork from '../components/FeaturedWork';
import Process from '../components/Process';
import Results from '../components/Results';
import Technology from '../components/Technology';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <WhyKiwiClicks />
      <FeaturedWork />
      <Process />
      <Results />
      <Technology />
      <Testimonials />
      <Blog />
      <FAQ />
      <Contact />
    </>
  );
}
