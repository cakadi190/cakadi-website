import React from 'react';
import HeaderSection from '~/components/contents/home/header';
import OverviewSection from '~/components/contents/home/overview';
import { Head } from '@inertiajs/react';
import { SeoType } from '~/types/seo-types';
import FeaturedSection from '~/components/contents/home/featured';
import Landing from '~/layouts/landing';
import PortfolioSection from '~/components/contents/home/portfolio';

export default function Home({ title }: React.PropsWithChildren<SeoType>) {
  return (
    <Landing>
      <Head title={title} />

      <HeaderSection />
      <FeaturedSection />
      <OverviewSection />
      <PortfolioSection />
    </Landing>
  );
};
