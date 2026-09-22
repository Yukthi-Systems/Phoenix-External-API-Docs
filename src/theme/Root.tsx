import React, { type ReactNode } from "react";
import { ApiConfigProvider } from "@site/src/context/ApiConfigContext";

export default function Root({ children }: { children: ReactNode }): ReactNode {
  return <ApiConfigProvider>{children}</ApiConfigProvider>;
}
