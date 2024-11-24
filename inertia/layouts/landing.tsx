import { PropsWithChildren } from "react";
import NavigationBar from "./partials/navbar";
import FooterSection from "./partials/footer";

export default function Landing({ children }: PropsWithChildren) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavigationBar />
      {children}
      <FooterSection />
    </div>
  )
};
