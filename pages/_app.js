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
          url: "https://www.url.ie/a",
          title: "EBankc",
          description:
            "Unlocking the power of Defi-Banking | Earn Interest, borrow, and exchange digital assets at competitive rates",
          images: [
            {
              url: "https://ebankc.netlify.app/images/meta_image.png",
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
