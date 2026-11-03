import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  /** e.g. `noindex, nofollow` for private routes */
  robots?: string;
}

const SEOHead = ({ 
  title = "Haleo | Safe AI for small business",
  description = "Haleo helps small businesses use AI without putting client information at risk: a written AI policy, the right tools, and a team that knows the rules.",
  keywords = "AI policy for small business, safe AI adoption, AI governance consultant, AI acceptable use policy, Raleigh, Durham, Research Triangle",
  canonicalUrl,
  ogImage = "https://onehaleo.com/social-preview.jpg",
  robots,
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

    if (robots) {
      updateMeta('robots', robots);
    }

  }, [title, description, keywords, fullUrl, ogImage, robots]);

  return null;
};

export default SEOHead;