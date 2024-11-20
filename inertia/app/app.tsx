/// <reference path="../../adonisrc.ts" />
/// <reference path="../../config/inertia.ts" />

import '../css/app.scss';
import './bootstrap';
import { hydrateRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from '@adonisjs/inertia/helpers'
import ErrorBoundary from '~/components/ErrorBoundary';

const appName = import.meta.env.VITE_APP_NAME || 'Catatan Cak Adi'

createInertiaApp({
  progress: { color: '#5468FF' },

  title: (title) => `${title} - ${appName}`,

  resolve: (name) => {
    return resolvePageComponent(
      `../pages/${name}.tsx`,
      import.meta.glob('../pages/**/*.tsx'),
    )
  },

  setup({ el, App, props }) {

    hydrateRoot(el, (
      <ErrorBoundary>
        <App {...props} />
      </ErrorBoundary>
    ))

  },
});
