import "../styles/globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const noFooter = ["/login", "/signup"];

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      {!noFooter.includes(router.pathname) && <Footer />}
    </>
  );
}

export default MyApp;
