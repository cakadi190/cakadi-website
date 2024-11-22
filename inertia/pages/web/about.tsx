import { Head } from "@inertiajs/react";
import Landing from "~/layouts/landing";
import { SeoType } from "~/types/seo-types";

export default function About({ title }: SeoType) {
  return (
    <Landing>
      <Head title={title} />
    </Landing>
  )
};
