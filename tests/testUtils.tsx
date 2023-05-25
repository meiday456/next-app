import React, {ReactElement} from "react";
import {render, RenderOptions, RenderResult} from "@testing-library/react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const AllTheProviders = ({children}: {children: React.ReactNode}): JSX.Element => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

const customRender = (ui: ReactElement, options?: RenderOptions): RenderResult =>
  render(ui, {wrapper: AllTheProviders, ...options});

export {customRender as queryRender, AllTheProviders as wrapper};
