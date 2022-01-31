import React from "react";
import styles from "../styles/Contact.module.scss";
import Head from "next/head";
import Link from "next/link";

function contact() {
  return (
    <div className={styles.contact}>
      <Head>
        <title>EBANKC - Contact</title>

        <meta
          name="description"
          content="Unlocking the power of Defi-Banking | Earn Interest, borrow, and exchange digital assets at competitive rates"
        />
      </Head>
      <main className={styles.main}>
        <h1>Contact</h1>
        <p>Get in touch with our team</p>
        <Link href="mailto:makifrane@gmail.com">
          <div className={styles.contactBox}>
            <img src="/images/navbar/logo.svg" alt="Logo icon" />
            <p>info@ebankc.app</p>
          </div>
        </Link>
      </main>
    </div>
  );
}

export default contact;
