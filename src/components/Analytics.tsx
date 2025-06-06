import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Replace with your actual GA4 measurement ID when deploying to production
const GA_MEASUREMENT_ID = 'G-D68K1YV939';

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
    script1.id = 'ga-gtag-script';
    
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', { page_path: '${location.pathname}' });
    `;
    script2.id = 'ga-inline-script';
    
    document.head.appendChild(script1);
    document.head.appendChild(script2);

    return () => {
      // Clean up scripts when component unmounts - safely remove only if they exist
      const scriptElement1 = document.getElementById('ga-gtag-script');
      const scriptElement2 = document.getElementById('ga-inline-script');
      
      if (scriptElement1 && scriptElement1.parentNode) {
        scriptElement1.parentNode.removeChild(scriptElement1);
      }
      
      if (scriptElement2 && scriptElement2.parentNode) {
        scriptElement2.parentNode.removeChild(scriptElement2);
      }
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
