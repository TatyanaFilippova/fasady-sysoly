"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="2000px"
        color="#00FF00"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default Providers;
