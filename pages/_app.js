import "../styles/globals.css";

import Head from "next/head";
import { NextSeo } from "next-seo";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const noFooter = ["/login", "/signup"];

  return (
    <>
      <NextSeo
        defaultTitle="EBANKC"
        description="Unlocking the power of Defi-Banking | Earn Interest, borrow, and exchange digital assets at competitive rates"
        openGraph={{
          url: "https://ebankc.netlify.app/",
          description="Unlocking the power of Defi-Banking | Earn Interest, borrow, and exchange digital assets at competitive rates",
          title: "EBankc",
          images: [
            {
              url: "https://ebankc.netlify.app/images/meta_image.png",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
          ],
          site_name: "EBankc",
        }}
        twitter={{
          cardType: "https://ebankc.netlify.app/images/meta_image.png",
        }}
      />
      <Navbar />
      <Component {...pageProps} />
      {!noFooter.includes(router.pathname) && <Footer />}
    </>
  );
}

export default MyApp;
