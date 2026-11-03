import React from 'react';
import { Link } from 'react-router-dom';
import { useCmsContent } from '../hooks/useCmsContent';
import { resolveAssetUrl } from './Navigation';

type FooterLink = { label: string; url: string };

const FooterItem = ({ item }: { item: FooterLink }) => {
  const internal = item.url.startsWith('/') && !item.url.includes('#');
  const cls = 'text-[15px] text-[#C9D9D3] hover:text-white transition-colors';
  return internal ? (
    <Link to={item.url} className={cls}>{item.label}</Link>
  ) : (
    <a href={item.url} className={cls}>{item.label}</a>
  );
};

const Footer = () => {
  const { content } = useCmsContent();
  if (!content) return null;
  const { settings } = content;
  const reverseLogo = resolveAssetUrl('/brand/haleo-lockup-reverse.svg');

  return (
    <footer className="bg-haleo-vault text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr_1fr]">
          <div className="max-w-sm">
            <img src={reverseLogo} alt="Haleo" className="mb-5 h-10 w-auto" />
            <p className="font-text text-[16px] leading-relaxed text-[#C9D9D3]">{settings.footer_description}</p>
            <Link
              to={settings.footer_cta.url}
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-white px-5 py-2.5 text-[15px] font-semibold text-haleo-vault hover:bg-haleo-sage"
            >
              {settings.footer_cta.text}
            </Link>
          </div>

          {[settings.footer_links.company, settings.footer_links.legal].map((col) => (
            <div key={col.title}>
              <h2 className="mb-4 text-[15px] font-semibold text-white">{col.title}</h2>
              <ul className="space-y-2.5">
                {col.items.map((item) => (
                  <li key={item.url}>
                    <FooterItem item={item} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/15 pt-6 text-sm text-[#A9BDB6] sm:flex-row sm:justify-between">
          <p>{settings.copyright}</p>
          <p>{settings.license_text}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
