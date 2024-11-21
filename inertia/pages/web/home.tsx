import { Head } from '@inertiajs/react';
import React from 'react';
import Header from '~/components/contents/home/header';
import { SeoType } from '~/types/seo-types';

export default function Home({ title }: React.PropsWithChildren<SeoType>) {
  return (
    <>
      <Head title={title} />

      <Header />
    </>
  );
};
