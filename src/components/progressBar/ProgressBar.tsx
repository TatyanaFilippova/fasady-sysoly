"use client";

import { ProgressProvider } from "@bprogress/next/app";
import { ReactNode } from "react";

const ProgressBar = ({ children }: { children: ReactNode }) => {
  return (
    <ProgressProvider
      height="4px"
      color="#d30000"
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  );
};

export default ProgressBar;
