export type SeoType = {
  title: string;
  description: string;
  keywords?: string;
  robots: 'index, follow' | 'noindex, nofollow';
  author?: string;
  themeColor?: string;
  url?: string;

  // Open Graph
  ogType: string;
  ogTitle: string;
  siteName?: string;
  ogDescription: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  ogLocale?: string;
  ogSiteName?: string;

  // Twitter
  twitterCard: 'summary_large_image' | 'summary';
  twitterSite?: string;
  twitterCreator?: string;

  // WhatsApp
  imageAlt?: string;
  imageType?: string;

  // Pinterest
  pinterestRichPin: 'true' | 'false';

  // LinkedIn
  linkedinTitle?: string;
  linkedinDescription?: string;
  linkedinImage?: string;

  // Apple Mobile Web App
  appleMobileWebAppCapable: 'yes' | 'no';
  appleMobileWebAppStatusBarStyle: 'black' | 'default';
  appleMobileWebAppTitle?: string;

  // Microsoft Tiles
  msapplicationTileColor?: string;
  msapplicationTileImage?: string;

  // Schema.org
  schema: {
    '@context': string;
    '@type': string;
    name?: string;
    url?: string;
    description: string;
    author: {
      '@type': string;
      name: string;
    };
  };
};
