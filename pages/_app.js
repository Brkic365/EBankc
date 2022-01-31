import "../styles/globals.css";

import Head from "next/head";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const noFooter = ["/login", "/signup"];

  return (
    <>
      <Head>
        <meta
          property="og:image"
          content="https://ebankc.netlify.app/images/meta_image.png"
        />
        <meta
          property="twitter:image"
          content="https://ebankc.netlify.app/images/meta_image.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      {!noFooter.includes(router.pathname) && <Footer />}
    </>
  );
}

export default MyApp;
