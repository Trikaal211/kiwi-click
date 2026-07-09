import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import Chatbot from './components/Chatbot';
import HomePage from './pages/HomePage';
import AnalyticsTracker from './components/AnalyticsTracker';

// Lazy loaded client pages
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogArticlePage = lazy(() => import('./pages/BlogArticlePage'));
const TeamPage = lazy(() => import('./pages/TeamPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ClientResultsPage = lazy(() => import('./pages/ClientResultsPage'));

// Lazy loaded admin pages
const Login = lazy(() => import('./pages/admin/Login'));
const DashboardLayout = lazy(() => import('./pages/admin/DashboardLayout'));
const Dashboard = lazy(() => import('./pages/admin/Dashboard'));
const BlogManagement = lazy(() => import('./pages/admin/BlogManagement'));
const BlogEditorPage = lazy(() => import('./pages/admin/BlogEditorPage'));
const ServiceManagement = lazy(() => import('./pages/admin/ServiceManagement'));
const LeadManagement = lazy(() => import('./pages/admin/LeadManagement'));
const TeamManagement = lazy(() => import('./pages/admin/TeamManagement'));
const FAQManagement = lazy(() => import('./pages/admin/FAQManagement'));
const TestimonialManagement = lazy(() => import('./pages/admin/TestimonialManagement'));
const MediaLibrary = lazy(() => import('./pages/admin/MediaLibrary'));
const SettingsPage = lazy(() => import('./pages/admin/SettingsPage'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const LoadingFallback = () => (
  <div className="min-h-screen bg-page-bg flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-accent-orange border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <div className={`relative min-h-screen bg-page-bg text-text-primary overflow-x-hidden transition-theme${isAdmin ? ' admin-panel' : ''}`}>
      <ScrollToTop />
      {!isAdmin && <Navbar />}
      {!isAdmin && <WhatsAppButton />}
      {!isAdmin && <Chatbot />}
      <main className="relative z-10 w-full">
        <Suspense fallback={<LoadingFallback />}>
          <AnalyticsTracker>
            <Routes>
              {/* Client facing routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/index.html" element={<Navigate to="/" replace />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogArticlePage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/faq" element={<FAQPage />} />
              
              {/* Dedicated Contact Page */}
              <Route path="/contact" element={<ContactPage />} />

              {/* Client Results Page */}
              <Route path="/results" element={<ClientResultsPage />} />

              {/* Dynamic Services Ecosystem */}
              <Route path="/services/:slug" element={<ServiceDetailPage />} />
              
              {/* Legacy Redirections */}
              <Route path="/seo-local-seo" element={<Navigate to="/services/seo" replace />} />
              <Route path="/social-media-marketing" element={<Navigate to="/services/meta-ads" replace />} />
              <Route path="/web-development" element={<Navigate to="/services/business-web-dev" replace />} />
              <Route path="/ai-automation" element={<Navigate to="/services/ai-chatbots" replace />} />

              {/* Administrative panel routes */}
              <Route path="/admin/login" element={<Login />} />
              <Route path="/admin" element={<DashboardLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="blogs" element={<BlogManagement />} />
                <Route path="blogs/new" element={<BlogEditorPage />} />
                <Route path="blogs/edit/:id" element={<BlogEditorPage />} />
                <Route path="services" element={<ServiceManagement />} />
                <Route path="leads" element={<LeadManagement />} />
                <Route path="team" element={<TeamManagement />} />
                <Route path="faqs" element={<FAQManagement />} />
                <Route path="testimonials" element={<TestimonialManagement />} />
                <Route path="media" element={<MediaLibrary />} />
                <Route path="settings" element={<SettingsPage />} />
              </Route>
            </Routes>
          </AnalyticsTracker>
        </Suspense>
      </main>
    </div>
  );
}
