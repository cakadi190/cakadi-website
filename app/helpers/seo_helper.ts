import env from "#start/env";

/**
 * Class untuk membantu menghasilkan elemen-elemen SEO (Search Engine Optimization)
 *
 * Class ini menyediakan helper methods untuk menghasilkan berbagai elemen SEO
 * seperti title tag, meta descriptions, dll untuk meningkatkan SEO website.
 * Menggunakan pattern method chaining untuk memudahkan penggunaan.
 *
 * @class
 * @static
 * @author Catatan Cak Adi <cakadi190@gmail.com>
 * @version 1.0.0
 * @since 1.0.0
 * @package SEO
 *
 * @example
 * ```typescript
 * const seo = SeoHelper
 *   .generateTitle('Homepage')
 *   .generateDesc('Welcome to our website')
 *   .generateKeywords('web, app, technology')
 *   .setAuthor('Cak Adi')
 *   .setimage('/images/og.jpg')
 *   .setCurrentUrl('https://cakadi.id')
 *   .allowRobots(true)
 *   .build();
 * ```
 */
export default class SeoHelper {
  private static title: string;
  private static description: string;
  private static keywords: string;
  private static robots: boolean;
  private static author: string;
  private static image: string;
  private static currentUrl: string;
  private static siteName: string;
  private static locale: string = 'id_ID';
  private static twitterHandle: string;
  private static imageWidth: number = 1200;
  private static imageHeight: number = 630;
  private static imageType: string = 'image/jpeg';
  private static imageAlt: string;
  private static themeColor: string = '#fff';
  private static tileColor: string = '#fff';

  /**
   * Menghasilkan judul halaman yang terformat dengan nama aplikasi
   */
  public static generateTitle(title: string): typeof SeoHelper {
    this.title = `${title} - ${env.get('APP_NAME')}`;
    return this;
  }

  /**
   * Mengatur deskripsi meta untuk halaman
   */
  public static generateDesc(desc: string): typeof SeoHelper {
    this.description = desc;
    return this;
  }

  /**
   * Mengatur keywords meta untuk halaman
   */
  public static generateKeywords(keywords: string): typeof SeoHelper {
    this.keywords = keywords;
    return this;
  }

  /**
   * Mengatur izin robots untuk halaman
   */
  public static allowRobots(allow: boolean): typeof SeoHelper {
    this.robots = allow;
    return this;
  }

  /**
   * Mengatur author meta untuk halaman
   */
  public static setAuthor(author: string): typeof SeoHelper {
    this.author = author;
    return this;
  }

  /**
   * Mengatur Open Graph image untuk halaman
   */
  public static setOgImage(url: string, alt?: string, width?: number, height?: number, type?: string): typeof SeoHelper {
    this.image = url;
    if (alt) this.imageAlt = alt;
    if (width) this.imageWidth = width;
    if (height) this.imageHeight = height;
    if (type) this.imageType = type;
    return this;
  }

  /**
   * Mengatur URL canonical untuk halaman
   */
  public static setCurrentUrl(url: string): typeof SeoHelper {
    this.currentUrl = url;
    return this;
  }

  /**
   * Mengatur nama situs
   */
  public static setSiteName(name: string): typeof SeoHelper {
    this.siteName = name;
    return this;
  }

  /**
   * Mengatur locale untuk Open Graph
   */
  public static setLocale(locale: string): typeof SeoHelper {
    this.locale = locale;
    return this;
  }

  /**
   * Mengatur Twitter handle
   */
  public static setTwitterHandle(handle: string): typeof SeoHelper {
    this.twitterHandle = handle;
    return this;
  }

  /**
   * Mengatur theme color
   */
  public static setThemeColor(color: string): typeof SeoHelper {
    this.themeColor = color;
    return this;
  }

  /**
   * Mengatur tile color untuk Microsoft Tiles
   */
  public static setTileColor(color: string): typeof SeoHelper {
    this.tileColor = color;
    return this;
  }

  /**
   * Membangun dan mengembalikan semua elemen SEO
   */
  public static build(): Record<string, any> {
    // Base meta tags
    const meta = {
      title: this.title,
      description: this.description,
      keywords: this.keywords ?? 'web developer, web designer, teknologi web, jasa web development',
      robots: this.robots ? 'index, follow' : 'noindex, nofollow',
      author: this.author ?? 'Cak Adi',
      themeColor: this.themeColor,
      url: this.currentUrl ?? env.get('APP_URL'),

      // Open Graph
      ogType: 'website',
      ogTitle: this.title,
      siteName: this.siteName,
      ogDescription: this.description,
      image: this.image ?? `${env.get('APP_URL')}/images/og-meta.png`,
      imageWidth: this.imageWidth,
      imageHeight: this.imageHeight,
      ogLocale: this.locale,
      ogSiteName: this.siteName ?? env.get('APP_NAME'),

      // Twitter
      twitterCard: 'summary_large_image',
      twitterSite: this.twitterHandle ?? '@cakadi',
      twitterCreator: this.twitterHandle ?? '@cakadi',

      // WhatsApp
      imageAlt: this.imageAlt ?? this.title,
      imageType: this.imageType,

      // Pinterest
      pinterestRichPin: 'true',

      // LinkedIn
      linkedinTitle: this.title,
      linkedinDescription: this.description,
      linkedinImage: this.image,

      // Apple Mobile Web App
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black',
      appleMobileWebAppTitle: this.title,

      // Microsoft Tiles
      msapplicationTileColor: this.tileColor,
      msapplicationTileImage: '/ms-icon-144x144.png',

      // Schema.org
      schema: {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: this.siteName ?? env.get('APP_NAME'),
        url: this.currentUrl ?? env.get('APP_URL'),
        description: this.description,
        author: {
          '@type': 'Person',
          name: this.author ?? 'Cak Adi'
        }
      }
    };

    return meta;
  }

  /**
   * Reset semua properti static ke nilai default
   */
  public static reset(): void {
    this.title = '';
    this.description = '';
    this.keywords = '';
    this.robots = true;
    this.author = '';
    this.image = '';
    this.currentUrl = '';
    this.siteName = '';
    this.locale = 'id_ID';
    this.twitterHandle = '';
    this.imageWidth = 1200;
    this.imageHeight = 630;
    this.imageType = 'image/jpeg';
    this.imageAlt = '';
    this.themeColor = '#fff';
    this.tileColor = '#fff';
  }
}
