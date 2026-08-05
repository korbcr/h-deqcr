import React from "react";
import Script from "next/script";
import Head from "next/head";
import { useRouter } from "next/router";
import LoadingScreen from "../components/Loading-Screen/loading-screen";
import "../styles/globals.css";
import Cursor from "../components/Cursor";
import ScrollToTop from "../components/scrollToTop";

const ROUTE_BODY_CLASS_MAP = [
  { match: /^\/(home1|home2|home3)\/?$/, className: "homepage" },
  { match: /^\/home4\/?$/, className: "index4" },
  { match: /^\/home6\/?$/, className: "index2" },
  { match: /^\/(home5|home7|about|blog-details|blogs|contact|demos|project-details|proyectos|work1|work2|work3)(\/.*)?\/?$/, className: "index3" },
];

const BODY_THEME_CLASSES = ["homepage", "index2", "index3", "index4"];

function getBodyClassForPath(pathname) {
  const entry = ROUTE_BODY_CLASS_MAP.find(({ match }) => match.test(pathname));
  return entry?.className || "";
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  React.useEffect(() => {
    const applyBodyClass = () => {
      const body = document.body;

      BODY_THEME_CLASSES.forEach((className) => body.classList.remove(className));

      const themeClass = getBodyClassForPath(router.pathname);
      if (themeClass) {
        body.classList.add(themeClass);
      }
    };

    applyBodyClass();

    router.events.on("routeChangeComplete", applyBodyClass);

    return () => {
      router.events.off("routeChangeComplete", applyBodyClass);
    };
  }, [router]);

  return (
    <>
      <Head>
        <title>H-DEQ - Diseño & Equilibrio</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>

      <Cursor />
      <LoadingScreen />
      <Component {...pageProps} />
      <ScrollToTop />

      <Script id="wow" src="/assets/js/wow.min.js"></Script>
      <Script
        id="splitting"
        strategy="beforeInteractive"
        src="/assets/js/splitting.min.js"
      ></Script>

      <Script
        id="simpleParallax"
        src="/assets/js/simpleParallax.min.js"
      ></Script>
      <Script id="isotope" src="/assets/js/isotope.pkgd.min.js"></Script>

      <Script src="/assets/js/main.js" id="init" strategy="lazyOnload"></Script>
    </>
  );
}

export default MyApp;
