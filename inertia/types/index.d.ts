import { PageProps } from "@adonisjs/inertia/types";
import { SeoType } from "./seo-types";

export type MainPageProps = PageProps<{
  router: {
    url: string;
    completeUrl: string;
  };
}> & SeoType & {}
