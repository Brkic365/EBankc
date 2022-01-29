import React from "react";
import styles from "../styles/Faq.module.scss";
import Head from "next/head";

function Faq() {
  return (
    <div className={styles.faq}>
      <Head>
        <title>EBANKC - FAQ</title>
        <meta name="description" content="Login to your EBankc account" />
      </Head>
      <main className={styles.main}>
        {/* Start Section */}

        <section className={styles.start}>
          <h1>IN DEVELOPMENT</h1>
        </section>
      </main>
    </div>
  );
}

export default Faq;
