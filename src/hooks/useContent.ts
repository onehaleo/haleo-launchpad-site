import { useEffect, useState } from 'react';
import yaml from 'js-yaml';

export const useContent = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await fetch('/content/site.yaml');
        const yamlText = await response.text();
        const parsedContent = yaml.load(yamlText);
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

// Utility to scroll to top of page
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};