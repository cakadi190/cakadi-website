import { defineConfig } from '@adonisjs/inertia';
import type { InferSharedProps } from '@adonisjs/inertia/types';

const inertiaConfig = defineConfig({
  /**
   * Path to the Edge view that will be used as the root view for Inertia responses
   */
  rootView: 'inertia_layout',

  assetsVersion: 'v4.0.0',

  /**
   * Data that should be shared with all rendered pages
   */
  sharedData: {
    user: ({ auth }) => auth.user,
    router: ({ request }) => ({
      url: request.url(),
      completeUrl: request.completeUrl(true),
    }),
    serverInfo: {
      devPath: process.cwd(),
      developmentMode: process.env.NODE_ENV,
      platform: process.platform,
      arch: process.arch,
      nodejsVersion: process.version,
    },
    errors: (ctx) => ctx.session?.flashMessages.get('errors'),
  },

  /**
   * Options for the server-side rendering
   */
  ssr: {
    enabled: true,
    entrypoint: 'inertia/app/ssr.tsx'
  }
})

export default inertiaConfig

declare module '@adonisjs/inertia/types' {
  export interface SharedProps extends InferSharedProps<typeof inertiaConfig> {}
}
