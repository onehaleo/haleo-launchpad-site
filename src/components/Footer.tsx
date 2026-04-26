
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Linkedin, Music } from 'lucide-react';
import { useContent } from '../hooks/useContent';

const Footer = () => {
  const { content, loading, error } = useContent();

  if (loading || error || !content) return null;

  const resolveAssetUrl = (assetPath) => {
    if (!assetPath) return assetPath;
    if (/^(https?:)?\/\//.test(assetPath)) return assetPath;
    const normalized = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath;
    return `${import.meta.env.BASE_URL}${normalized}`;
  };

  const getSocialIcon = (platform) => {
    switch (platform) {
      case 'instagram': return <Instagram className="h-6 w-6" />;
      case 'tiktok': return <Music className="h-6 w-6" />;
      case 'youtube': return <Youtube className="h-6 w-6" />;
      case 'linkedin': return <Linkedin className="h-6 w-6" />;
      default: return null;
    }
  };

  const renderFooterLink = (item, index) => {
    const isInternalRoute = item.url.startsWith('/') && !item.url.includes('#');

    if (isInternalRoute) {
      return (
        <Link to={item.url} className="text-gray-300 hover:text-white transition-colors">
          {item.text}
        </Link>
      );
    }

    return (
      <a href={item.url} className="text-gray-300 hover:text-white transition-colors">
        {item.text}
      </a>
    );
  };

  return (
    <footer className="bg-haleo-ink text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="inline-block mb-5">
              <img 
                src={resolveAssetUrl(content.footer.logo)}
                alt={content.site.name}
                className="h-16 w-16 sm:h-20 sm:w-20 rounded-xl object-cover"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {content.footer.description}
            </p>
            <Link
              to="/workflow-review"
              className="gradient-bg text-white px-6 py-3 rounded-full font-semibold inline-flex justify-center items-center hover:opacity-90 transition-all duration-300 mb-6 w-full sm:w-auto"
            >
              Start With a Workflow Review
            </Link>
            <div className="flex space-x-4">
              {content.footer.social_links.map((social, index) => (
                <a key={index} href={social.url} className="text-gray-400 hover:text-haleo-violet transition-colors">
                  {getSocialIcon(social.platform)}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{content.footer.links.company.title}</h4>
            <ul className="space-y-2">
              {content.footer.links.company.items.map((item, index) => (
                <li key={index}>
                  {renderFooterLink(item, index)}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{content.footer.links.legal.title}</h4>
            <ul className="space-y-2">
              {content.footer.links.legal.items.map((item, index) => (
                <li key={index}>
                  {renderFooterLink(item, index)}
                </li>
              ))}
            </ul>
            {content.footer.newsletter && (
              <div className="mt-6">
                <p className="text-gray-400 text-sm">{content.footer.newsletter.description}</p>
                <div className="flex flex-col gap-3 mt-3">
                  <input 
                    type="email" 
                    placeholder={content.footer.newsletter.placeholder}
                    className="bg-haleo-gray text-white px-3 py-3 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-haleo-violet text-sm min-w-0"
                  />
                  <button className="gradient-bg px-4 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm whitespace-nowrap">
                    {content.footer.newsletter.cta}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-haleo-gray mt-10 sm:mt-12 pt-7 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-gray-400 mb-4 md:mb-0">{content.footer.copyright}</p>
            <p className="text-gray-400 text-sm">{content.footer.license_text}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
