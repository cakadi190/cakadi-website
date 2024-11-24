import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Head } from "@inertiajs/react";
import Page from "~/layouts/page";
import { SeoType } from "~/types/seo-types";

export default function About({ title, description }: SeoType) {
  return (
    <Page header={title.split(' • ')[0]} desc={description} icon={<FontAwesomeIcon icon={faCode} />}>
      <Head title={title} />
    </Page>
  );
};
