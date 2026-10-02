import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '../content';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export default function SEO({ title, description, image, url }: SEOProps) {
  const { pathname } = useLocation();
  useEffect(() => {
    const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
    const finalDescription = description || siteConfig.description;
    const finalImage = image || 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200';
    const finalUrl = `${siteConfig.url}${url || pathname}`;

    document.title = fullTitle;
    
    const setMeta = (selector: string, content: string) => {
      let el = document.querySelector(selector);
      if (el) {
        el.setAttribute('content', content);
      } else {
        // If meta doesn't exist, create it (basic fallback)
        el = document.createElement('meta');
        if (selector.includes('property=')) {
          el.setAttribute('property', selector.match(/property="([^"]+)"/)?.[1] || '');
        } else if (selector.includes('name=')) {
          el.setAttribute('name', selector.match(/name="([^"]+)"/)?.[1] || '');
        }
        el.setAttribute('content', content);
        document.head.appendChild(el);
      }
    };

    setMeta('meta[name="description"]', finalDescription);
    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', finalDescription);
    setMeta('meta[property="og:image"]', finalImage);
    setMeta('meta[property="og:url"]', finalUrl);
    
    setMeta('meta[name="twitter:card"]', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', finalDescription);
    setMeta('meta[name="twitter:image"]', finalImage);

    let link = document.querySelector('link[rel="canonical"]');
    if (link) {
      link.setAttribute('href', finalUrl);
    } else {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', finalUrl);
      document.head.appendChild(link);
    }
  }, [title, description, image, url, pathname]);

  return null;
}

