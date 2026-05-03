import yaml from "js-yaml";

type StringList = string[];

export interface HomeProcessStep {
  title: string;
  description: string;
}

export interface HomeContent {
  hero_headline: string;
  hero_subheadline: string;
  primary_cta_text: string;
  primary_cta_link: string;
  secondary_cta_text: string;
  secondary_cta_link: string;
  hero_trust_line: string;
  services_section_title: string;
  services_section_intro: string;
  built_from_heading: string;
  built_from_body: string;
  built_from_bullets: StringList;
  scope_section_title: string;
  scope_bullets: StringList;
  who_for_section_title: string;
  who_for_good_heading: string;
  who_for_not_heading: string;
  who_for_good: StringList;
  who_for_not: StringList;
  problem_section_title: string;
  problem_points: StringList;
  before_after_title: string;
  before_points: StringList;
  after_points: StringList;
  process_title: string;
  process_steps: HomeProcessStep[];
  final_cta_headline: string;
  final_cta_subheadline: string;
  final_cta_text: string;
  final_cta_link: string;
}

export interface DemoContent {
  title: string;
  slug: string;
  agency_type: string;
  short_description: string;
  problem_summary: string;
  modules: StringList;
  before_state: string;
  after_state: string;
  cta_text: string;
  cta_link: string;
  featured_image?: string;
}

export interface ServiceContent {
  title: string;
  slug: string;
  short_description: string;
  replaces: string;
  helps_with: string;
  best_for: string;
  features: StringList;
}

export interface SiteLink {
  label: string;
  url: string;
}

export interface SettingsContent {
  site_name: string;
  logo_text: string;
  contact_email: string;
  footer_description: string;
  logo_path: string;
  social_links: { platform: string; url: string }[];
  newsletter?: { description: string; placeholder: string; cta: string };
  copyright: string;
  license_text: string;
  nav_links: SiteLink[];
  nav_cta: { text: string; url: string };
  footer_cta: { text: string; url: string };
  footer_links: {
    company: { title: string; items: SiteLink[] };
    legal: { title: string; items: SiteLink[] };
  };
}

const rawYamlFiles = import.meta.glob("/content/**/*.yml", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

const parseYaml = <T>(filePath: string): T => {
  const raw = rawYamlFiles[filePath];
  if (!raw) throw new Error(`Missing CMS content file: ${filePath}`);
  return yaml.load(raw) as T;
};

const parseYamlFolder = <T>(prefix: string): T[] => {
  return Object.entries(rawYamlFiles)
    .filter(([path]) => path.startsWith(prefix))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, raw]) => yaml.load(raw) as T);
};

export const cmsContent = {
  home: parseYaml<HomeContent>("/content/home.yml"),
  settings: parseYaml<SettingsContent>("/content/settings.yml"),
  demos: parseYamlFolder<DemoContent>("/content/demos/"),
  services: parseYamlFolder<ServiceContent>("/content/services/"),
};

export const getDemoBySlug = (slug: string) =>
  cmsContent.demos.find((demo) => demo.slug === slug);
