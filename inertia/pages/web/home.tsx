import React from 'react';
import HeaderSection from '~/components/contents/home/header';
import OverviewSection from '~/components/contents/home/overview';
import { Head } from '@inertiajs/react';
import { SeoType } from '~/types/seo-types';
import FeaturedSection from '~/components/contents/home/featured';

export default function Home({ title }: React.PropsWithChildren<SeoType>) {
  return (
    <>
      <Head title={title} />

      <HeaderSection />
      <FeaturedSection />
      <OverviewSection />
    </>
  );
};
