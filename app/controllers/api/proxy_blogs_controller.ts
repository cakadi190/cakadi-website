import type { HttpContext } from '@adonisjs/core/http';
import { CategoriesResponse, Media, PostsResponse, TagsResponse, User } from '../../../types/wordpress.js';

export default class ProxyBlogsController {
  public async index({ response }: HttpContext) {
    try {
      const resPost = await fetch('https://www.catatancakadi.com/wp-json/wp/v2/posts');

      if (!resPost.ok) {
        throw new Error('Failed to fetch posts');
      }

      const posts = await resPost.json() as PostsResponse;

      const data = await Promise.all(
        posts.map(async (post) => {
          const [resFeaturedMedia, resAuthor, resTags, resCats] = await Promise.all([
            fetch(`https://www.catatancakadi.com/wp-json/wp/v2/media/${post.featured_media}`),
            fetch(`https://www.catatancakadi.com/wp-json/wp/v2/users/${post.author}`),
            fetch(`https://www.catatancakadi.com/wp-json/wp/v2/tags?post=${post.id}`),
            fetch(`https://www.catatancakadi.com/wp-json/wp/v2/categories?post=${post.id}`)
          ]);

          const featuredMedia = await resFeaturedMedia.json() as Media;
          const author = await resAuthor.json() as User;
          const tags = await resTags.json() as TagsResponse;
          const categories = await resCats.json() as CategoriesResponse;

          return {
            id: post.id,
            title: post.title.rendered,
            excerpt: post.excerpt.rendered,
            date: post.date,
            url: post.link,
            image: {
              original: featuredMedia.guid.rendered,
              sizes: Object.fromEntries(
                Object.entries(featuredMedia.media_details.sizes).map(([key, size]) => [
                  key,
                  {
                    width: size?.width || 0,
                    height: size?.height || 0,
                    url: size?.source_url || ''
                  }
                ])
              )
            },
            author: {
              name: author.name,
              avatar: author.avatar_urls['96']
            },
            tags: tags.map((tag) => ({
              name: tag.name
            })),
            categories: categories.map((cats) => ({
              name: cats.name
            }))
          };
        })
      );

      response.json({
        data,
        success: true,
        error: false,
        message: 'Posts fetched successfully',
      });
    } catch (error) {
      response.status(500).send({ error: error.message });
    }
  }
}
