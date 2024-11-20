import { Head } from '@inertiajs/react';
import React from 'react';
import { SeoType } from '~/types/seo-types';

export default function Home({ title }: React.PropsWithChildren<SeoType>) {
  return (
    <>
      <Head title={title} />
    </>
  );
};
