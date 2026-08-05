import React from "react";
import Script from "next/script";
import Head from "next/head";
import { useRouter } from "next/router";
import LoadingScreen from "../components/Loading-Screen/loading-screen";
import "../styles/globals.css";
import Cursor from "../components/Cursor";
import ScrollToTop from "../components/scrollToTop";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  React.useEffect(() => {
    const body = document.body;
    const bodyClasses = ["homepage", "index2", "index3", "index4"];

    const routeBodyClassMap = {
      "/": "index3",
      "/about": "index3",
      "/blog-details": "index3",
      "/blogs": "index3",
      "/contact": "index3",
      "/demos": "index3",
      "/home1": "homepage",
      "/home2": "homepage",
      "/home3": "homepage",
      "/home4": "index4",
      "/home5": "index3",
      "/home6": "index2",
      "/home7": "index3",
      "/project-details": "index3",
      "/project-details/[slug]": "index3",
      "/proyectos": "index3",
      "/proyectos/[slug]": "index3",
      "/work1": "index3",
      "/work2": "index3",
      "/work3": "index3",
    };

    const applyBodyClass = (pathname) => {
      bodyClasses.forEach((className) => body.classList.remove(className));
      const nextClass = routeBodyClassMap[pathname];
      if (nextClass) {
        body.classList.add(nextClass);
      }
    };

    applyBodyClass(router.pathname);

    const handleRouteChange = (url) => {
      const pathname = url.split("?")[0];
      const routeKey = pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;
      applyBodyClass(routeKey);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.pathname, router.events]);

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
