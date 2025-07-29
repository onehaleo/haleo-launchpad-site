import { useEffect, useState } from 'react';
import yaml from 'js-yaml';

// Content cache for performance optimization
let contentCache: any = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export const useContent = () => {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        // Check cache first for performance
        const now = Date.now();
        if (contentCache && (now - cacheTimestamp) < CACHE_DURATION) {
          setContent(contentCache);
          setLoading(false);
          return;
        }

        // Load from file system (works with Decap CMS)
        const response = await fetch('/content/site.yaml?' + now); // Cache busting
        if (!response.ok) {
          throw new Error(`Failed to load content: ${response.status}`);
        }
        
        const yamlText = await response.text();
        const parsedContent = yaml.load(yamlText);
        
        // Update cache
        contentCache = parsedContent;
        cacheTimestamp = now;
        
        setContent(parsedContent);
      } catch (err) {
        console.error('Error loading content:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  return { content, loading, error };
};

// Utility to refresh content cache (useful for CMS updates)
export const refreshContentCache = () => {
  contentCache = null;
  cacheTimestamp = 0;
};

// Utility to scroll to top of page
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};