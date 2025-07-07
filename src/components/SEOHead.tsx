import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

const SEOHead = ({ 
  title = "Haleo - Automation Systems for Solopreneurs",
  description = "Build scalable automation systems that work while you don't. Custom templates, AI agents, and business workflows for growing solopreneurs.",
  keywords = "automation systems, solopreneurs, business automation, AI agents, workflow automation, small business tools, productivity systems, custom templates",
  canonicalUrl,
  ogImage = "https://onehaleo.com/lovable-uploads/8bf9a199-52de-4152-9751-1a25c3bd7e0d.png"
}: SEOHeadProps) => {
  const location = useLocation();
  const baseUrl = "https://onehaleo.com";
  const fullUrl = canonicalUrl || `${baseUrl}${location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMeta = (name: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

    // Basic meta tags
    updateMeta('description', description);
    updateMeta('keywords', keywords);

    // Open Graph tags
    updateMeta('og:title', title, true);
    updateMeta('og:description', description, true);
    updateMeta('og:url', fullUrl, true);
    updateMeta('og:image', ogImage, true);

    // Twitter tags
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', ogImage);

  }, [title, description, keywords, fullUrl, ogImage]);

  return null;
};

export default SEOHead;