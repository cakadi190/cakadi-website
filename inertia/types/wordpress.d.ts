interface ImageSize {
  readonly width: number;
  readonly height: number;
  readonly url: string;
}

type ImageSizeKey = 'thumbnail' | 'medium' | 'medium_large' | 'large' | '1536x1536' | 'full';

interface ImageSizes extends Record<ImageSizeKey, ImageSize> {}

interface Image {
  readonly original: string;
  readonly sizes: ImageSizes;
}

interface Author {
  readonly name: string;
  readonly avatar: string;
}

interface Taxonomy {
  readonly name: string;
}

interface Post {
  readonly id: number;
  readonly title: string;
  readonly excerpt: string;
  readonly date: string;
  readonly url: string;
  readonly image: Image;
  readonly author: Author;
  readonly tags: readonly Taxonomy[];
  readonly categories: readonly Taxonomy[];
}

interface BaseResponse {
  readonly success: boolean;
  readonly message: string;
}

interface SuccessResponse extends BaseResponse {
  readonly success: true;
  readonly data: readonly Post[];
  readonly error: false;
}

interface ErrorResponse extends BaseResponse {
  readonly success: false;
  readonly error: true;
  readonly data?: never;
}

type PostsResponse = SuccessResponse | ErrorResponse;

export type {
  Post,
  PostsResponse,
  Image,
  ImageSize,
  ImageSizes,
  Author,
  Taxonomy,
  BaseResponse,
  SuccessResponse,
  ErrorResponse
};
