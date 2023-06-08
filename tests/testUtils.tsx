import React, {ReactElement} from "react";
import {render, RenderOptions, RenderResult} from "@testing-library/react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Theme from "@/styles/Theme";
import {ThemeProvider} from "@emotion/react";

const AllTheProviders = ({children}: {children: React.ReactNode}): JSX.Element => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  return (
    <ThemeProvider theme={Theme}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
};

const customRender = (ui: ReactElement, options?: RenderOptions): RenderResult =>
  render(ui, {wrapper: AllTheProviders, ...options});

export {customRender as renderWithProvider, AllTheProviders as wrapper};
