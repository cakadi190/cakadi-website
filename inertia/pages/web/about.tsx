import { Head } from "@inertiajs/react";
import Page from "~/layouts/page";
import { SeoType } from "~/types/seo-types";

export default function About({ title, description }: SeoType) {
  return (
    <Page header={title.split(' • CATATAN CAK ADI')[0]} desc={description}>
      <Head title={title} />
    </Page>
  );
};
