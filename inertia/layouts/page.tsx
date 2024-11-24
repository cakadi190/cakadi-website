import { PropsWithChildren } from "react";
import Landing from "./landing";
import PageHeader, { PageType } from "./partials/page_header";

export default function Page({ children, ...props }: PropsWithChildren<PageType>) {
  return (
    <Landing>
      <PageHeader {...props} />
      {children}
    </Landing>
  )
};
