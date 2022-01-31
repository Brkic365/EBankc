import React from "react";
import styles from "../../styles/Faq.module.scss";
import Head from "next/head";
import Link from "next/link";

function Faq() {
  const tags = [
    "General",
    "Account and Security",
    "Investing",
    "Borrowing",
    "Deposit, Withdrawals and Exchange",
  ];

  return (
    <div className={styles.faq}>
      <Head>
        <title>EBANKC - FAQ</title>
        <meta property="og:image" content="/images/navbar/logo.svg" />
        <meta
          name="description"
          content="Unlocking the power of Defi-Banking | Earn Interest, borrow, and exchange digital assets at competitive rates"
        />
      </Head>
      <main className={styles.main}>
        {/* Search Section */}

        <section className={styles.search}>
          <div className={styles.searchbarContainer}>
            <img src="/images/navbar/search.svg" alt="Search icon" />
            <input placeholder="Search" />
          </div>
        </section>

        {/* Tags Section */}

        <section className={styles.tags}>
          {tags.map((tag, i) => (
            <Link href={`/faq/section?id=${tag.toLowerCase()}`} key={i}>
              <div className={styles.tag}>
                <p>{tag}</p>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}

export default Faq;
