import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../lib/analytics';

/**
 * AnalyticsTracker tracks SPA routing changes using React Router's useLocation hook.
 * It ensures page_view events are dispatched exactly once per unique path transition,
 * including page title and query arguments.
 */
export default function AnalyticsTracker({ children }) {
  const location = useLocation();
  const lastTrackedPathRef = useRef('');

  useEffect(() => {
    // Construct full path with search parameters to differentiate between dynamic query routes
    const currentPath = location.pathname + location.search;

    // Deduplicate: avoid triggering page_view if pathname/search hasn't actually changed
    // (Helps avoid duplicate fires during React 18 StrictMode mount/unmount cycles)
    if (lastTrackedPathRef.current !== currentPath) {
      lastTrackedPathRef.current = currentPath;

      // Small timeout ensures document.title has updated to target page's title before logging
      const trackTimeout = setTimeout(() => {
        trackPageView(document.title, currentPath);
      }, 150);

      return () => clearTimeout(trackTimeout);
    }
  }, [location]);

  return children;
}
