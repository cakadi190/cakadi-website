export interface Link {
  href: string;
  targetHints?: {
    allow: string[];
  };
}

export interface RenderedContent {
  rendered: string;
  protected?: boolean;
}

export interface MediaSize {
  file: string;
  width: number;
  height: number;
  filesize: number;
  mime_type: string;
  source_url: string;
}

export interface MediaDetails {
  width: number;
  height: number;
  file: string;
  filesize: number;
  sizes: {
    medium: MediaSize;
    large: MediaSize;
    thumbnail: MediaSize;
    medium_large: MediaSize;
    "1536x1536": MediaSize;
    "2048x2048": MediaSize;
    full: MediaSize;
  };
}

export interface ImageMeta {
  aperture: string;
  credit: string;
  camera: string;
  caption: string;
  created_timestamp: string;
  copyright: string;
  focal_length: string;
  iso: string;
  shutter_speed: string;
  title: string;
  orientation: string;
  keywords: string[];
}

interface BaseContent {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  template: string;
  class_list: string[];
}

export interface Post extends BaseContent {
  content: RenderedContent;
  excerpt: RenderedContent;
  sticky: boolean;
  format: string;
  meta: {
    footnotes: string;
  };
  categories: number[];
  tags: number[];
  _links: {
    self: Link[];
    collection: Link[];
    about: Link[];
    author: Array<{
      embeddable: boolean;
      href: string;
    }>;
    replies: Array<{
      embeddable: boolean;
      href: string;
    }>;
    'version-history': Array<{
      count: number;
      href: string;
    }>;
    'predecessor-version': Array<{
      id: number;
      href: string;
    }>;
    'wp:featuredmedia': Array<{
      embeddable: boolean;
      href: string;
    }>;
    'wp:attachment': Link[];
    'wp:term': Array<{
      taxonomy: string;
      embeddable: boolean;
      href: string;
    }>;
    curies: Array<{
      name: string;
      href: string;
      templated: boolean;
    }>;
  };
}

export interface Media extends BaseContent {
  meta: any[];
  description: RenderedContent;
  caption: RenderedContent;
  alt_text: string;
  media_type: string;
  mime_type: string;
  media_details: MediaDetails;
  image_meta: ImageMeta;
  original_image: string;
  post: number;
  source_url: string;
  _links: {
    self: Link[];
    collection: Link[];
    about: Link[];
    author: Array<{
      embeddable: boolean;
      href: string;
    }>;
    replies: Array<{
      embeddable: boolean;
      href: string;
    }>;
  };
}

export interface User {
  id: number;
  name: string;
  url: string;
  description: string;
  link: string;
  slug: string;
  avatar_urls: {
    [key: string]: string;
  };
  meta: any[];
  _links: {
    self: Link[];
    collection: Link[];
  };
}

interface BaseTaxonomy {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  meta: any[];
  _links: {
    self: Link[];
    collection: Link[];
    about: Link[];
    'wp:post_type': Link[];
    curies: Array<{
      name: string;
      href: string;
      templated: boolean;
    }>;
  };
}

export interface Tag extends BaseTaxonomy {}

export interface Category extends BaseTaxonomy {
  parent: number;
}

export type PostsResponse = Post[];
export type TagsResponse = Tag[];
export type CategoriesResponse = Category[];

