import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Replace with your actual GA4 measurement ID when deploying to production
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

declare global {
  interface Window {
    gtag: (command: string, action: string, params?: Record<string, unknown>) => void;
  }
}

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', { page_path: '${location.pathname}' });
    `;
    
    document.head.appendChild(script1);
    document.head.appendChild(script2);

    return () => {
      // Clean up scripts when component unmounts
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, [location.pathname]);

  // Track page views when route changes
  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname,
      });
    }
  }, [location.pathname]);

  return null;
};

export default Analytics;
