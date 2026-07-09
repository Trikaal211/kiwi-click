import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../lib/analytics';

/**
 * AnalyticsTracker tracks SPA routing changes using React Router's useLocation hook.
 * It sends page views to GA4 and prevents duplicate requests on initial mount/re-renders.
 */
export default function AnalyticsTracker({ children }) {
  const location = useLocation();
  const lastPath = useRef('');

  useEffect(() => {
    const currentPath = location.pathname + location.search;

    // Prevent firing duplicate pageview hits for the same path
    if (lastPath.current !== currentPath) {
      lastPath.current = currentPath;
      
      // Delay slightly to allow document.title to update
      setTimeout(() => {
        trackPageView(currentPath, document.title);
      }, 100);
    }
  }, [location]);

  return children;
}
