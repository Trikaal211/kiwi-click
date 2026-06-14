import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import BlogArticlePage from './pages/BlogArticlePage';
import TeamPage from './pages/TeamPage';
import FAQPage from './pages/FAQPage';
import ServiceSEOPage from './pages/ServiceSEOPage';
import ServiceSocialPage from './pages/ServiceSocialPage';
import ServiceWebDevPage from './pages/ServiceWebDevPage';
import ServiceAIPage from './pages/ServiceAIPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-page-bg text-text-primary overflow-x-hidden transition-theme">
      <CustomCursor />
      <ScrollToTop />
      <Navbar />
      <main className="relative z-10 w-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogArticlePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/seo-local-seo" element={<ServiceSEOPage />} />
          <Route path="/social-media-marketing" element={<ServiceSocialPage />} />
          <Route path="/web-development" element={<ServiceWebDevPage />} />
          <Route path="/ai-automation" element={<ServiceAIPage />} />
        </Routes>
      </main>
    </div>
  );
}
