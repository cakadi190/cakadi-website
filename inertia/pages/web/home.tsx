import { Head } from '@inertiajs/react';
import { PropsWithChildren } from 'react';
import { SeoType } from '~/types/seo-types';

export default function Home({ title }: PropsWithChildren<SeoType>) {
  return (
    <>
      <Head title={title} />
    </>
  )
}
