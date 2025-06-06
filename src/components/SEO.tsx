import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
}

const SEO = ({
  title = 'Bartek Ciba | Professional Personal Trainer in Galway',
  description = 'Transform your fitness journey with Bartek Ciba, certified personal trainer specializing in strength training, weight loss, and personalized fitness plans in Galway.',
  keywords = 'personal trainer, fitness coach, strength training, weight loss, Galway personal trainer, Bartek Ciba, fitness expert',
  image = '/assets/images/bartek_pose_side.webp',
  type = 'website'
}: SEOProps) => {
  const location = useLocation();
  const url = `https://bartekciba.com${location.pathname}`;

  useEffect(() => {
    // Update page title
    document.title = title;

    // Update meta tags
    updateMetaTag('name', 'description', description);
    updateMetaTag('name', 'keywords', keywords);
    
    // Update Open Graph tags
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:url', url);
    updateMetaTag('property', 'og:image', image);
    updateMetaTag('property', 'og:type', type);
    
    // Update Twitter tags
    updateMetaTag('property', 'twitter:title', title);
    updateMetaTag('property', 'twitter:description', description);
    updateMetaTag('property', 'twitter:url', url);
    updateMetaTag('property', 'twitter:image', image);
    
    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', url);
  }, [title, description, keywords, image, type, url]);

  const updateMetaTag = (attribute: string, name: string, content: string) => {
    let metaTag = document.querySelector(`meta[${attribute}="${name}"]`);
    
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute(attribute, name);
      document.head.appendChild(metaTag);
    }
    
    metaTag.setAttribute('content', content);
  };

  // This component doesn't render anything
  return null;
};

export default SEO;
