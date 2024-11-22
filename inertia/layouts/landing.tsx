import { PropsWithChildren } from "react";
import NavigationBar from "./partials/navbar";
import FooterSection from "./partials/footer";

export default function Landing({ children }: PropsWithChildren) {
  return (
    <>
      <NavigationBar />
      {children}
      <FooterSection />
    </>
  )
};
