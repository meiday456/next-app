import "../styles/globals.css";
import type {AppProps} from "next/app";
import React from "react";
import Navigation from "@/component/organisms/Navigation";


import emotionReset from 'emotion-reset';
import {Global, css} from '@emotion/react';


export default function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Global styles={css`
              ${emotionReset}
              *, *::after, *::before {
                box-sizing: border-box;
                -moz-osx-font-smoothing: grayscale;
                -webkit-font-smoothing: antialiased;
                font-smoothing: antialiased;
              }
            `}/>
            <Navigation></Navigation>
            <Component {...pageProps} />;
        </>

    )


}

/*
  페이지 전환시 레이아웃을 유지할 수 있음
  페이지 전환시 상태값을 유지할 수 있음 <-- 중요
  componentDidCatch 를 이용해서 커스텀 에러 핸들링을 할 수 있음
  추가적인 데이터를 페이지로 주입시키는것이 가능 <--중요
  글로벌 CSS 같은 것을 여기에 명시
 */
