import { PropsWithChildren } from "react";
import NavigationBar from "./partials/navbar";

export default function Landing({ children }: PropsWithChildren) {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  )
};
