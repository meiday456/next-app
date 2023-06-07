import type {AppProps} from "next/app";
import React from "react";
import Navigation from "@/components/organisms/Navigation";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {RecoilRoot} from "recoil";
import {ThemeProvider} from "@emotion/react";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

import "./_app.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/a11y";
import GlobalStyle from "@/styles/sty/GlobalStyle";
import Theme from "@/styles/Theme";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      useErrorBoundary: true,
      staleTime: 10000,
      cacheTime: 300000,
    },
    mutations: {
      useErrorBoundary: true,
    },
  },
});

export default function MyApp({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          {process.env.NODE_ENV !== "production" ? <ReactQueryDevtools initialIsOpen={false} /> : null}
          <Navigation></Navigation>
          <Component {...pageProps} />
        </RecoilRoot>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

/*
  페이지 전환시 레이아웃을 유지할 수 있음
  페이지 전환시 상태값을 유지할 수 있음 <-- 중요
  componentDidCatch 를 이용해서 커스텀 에러 핸들링을 할 수 있음
  추가적인 데이터를 페이지로 주입시키는것이 가능 <--중요
  글로벌 CSS 같은 것을 여기에 명시
 */
