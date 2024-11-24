import { PageProps } from "@adonisjs/inertia/types";
import { SeoType } from "./seo-types";

export type MainPageProps = {
  router: {
    url: string;
    completeUrl: string;
  };
} & SeoType & {}
