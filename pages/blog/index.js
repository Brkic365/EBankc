import React from "react";
import styles from "../../styles/Blog.module.scss";
import Head from "next/head";
import Link from "next/link";

import BlogPost from "../../components/BlogPost";

function Blog() {
  const tags = [
    "EBankc Update",
    "EBCT News",
    "DeFi News",
    "Crypto New",
    "EBankc University",
    "EBankc Business",
  ];

  const mainPost = {
    title: "How stablecoins can help you increase ebtc in a bear market",
    text: "Traditional and digital assets are in a bear market due to rising inflation and threat of interest rate hikes from the US Federal Reserve",
    link: "stablecoins increase ebtc in bear market",
    img: "money.jpg",
  };

  const subPosts = [
    {
      title:
        "Why stablecoins are making the news: PayPal and the future of money",
      text: "PayPal has been in the news with plans to issue its own stablecoin",
      link: "stablecoins are making the news",
      img: "money.jpg",
    },
    {
      title: "Yield App celebrates V2 launch with 20% YLD lock-up promotion!",
      text: "Today marks a momentous occasion in the history of Yield App as we launch what many of us have been excitedly anticipating",
      link: "yield app celebrates v2 launch",
      img: "money.jpg",
    },
  ];

  const allPosts = [
    {
      title:
        "Why stablecoins are making the news: PayPal and the future of money",
      text: "PayPal has been in the news with plans to issue its own stablecoin",
      link: "stablecoins are making the news",
      img: "money.jpg",
    },
    {
      title: "Yield App celebrates V2 launch with 20% YLD lock-up promotion!",
      text: "Today marks a momentous occasion in the history of Yield App as we launch what many of us have been excitedly anticipating",
      link: "stablecoins are making the news",
      img: "money.jpg",
    },
    {
      title:
        "Why stablecoins are making the news: PayPal and the future of money",
      text: "PayPal has been in the news with plans to issue its own stablecoin",
      link: "stablecoins are making the news",
      img: "money.jpg",
    },
    {
      title: "Yield App celebrates V2 launch with 20% YLD lock-up promotion!",
      text: "Today marks a momentous occasion in the history of Yield App as we launch what many of us have been excitedly anticipating",
      link: "stablecoins are making the news",
      img: "money.jpg",
    },
    {
      title:
        "Why stablecoins are making the news: PayPal and the future of money",
      text: "PayPal has been in the news with plans to issue its own stablecoin",
      link: "stablecoins are making the news",
      img: "money.jpg",
    },
    {
      title: "Yield App celebrates V2 launch with 20% YLD lock-up promotion!",
      text: "Today marks a momentous occasion in the history of Yield App as we launch what many of us have been excitedly anticipating",
      link: "stablecoins are making the news",
      img: "money.jpg",
    },
  ];

  return (
    <div className={styles.blog}>
      <Head>
        <title>EBANKC - Blog</title>

        <meta
          name="description"
          content="Unlocking the power of Defi-Banking | Earn Interest, borrow, and exchange digital assets at competitive rates"
        />
      </Head>
      <main className={styles.main}>
        {/* Start Section */}

        <section className={styles.start}>
          <h1>Blog</h1>
          <p>Stay Updated with EBankc</p>
        </section>

        {/* Tags Section */}

        <section className={styles.tags}>
          <h2>Tags</h2>
          <div className={styles.tagGrid}>
            {tags.map((tag, i) => (
              <Link href={`/blog/tag?q=${tag}`} key={i}>
                <div className={styles.tag}>
                  <p>{tag}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Posts Section */}

        <section className={styles.posts}>
          <div className={styles.mainPost}>
            <BlogPost post={mainPost} />
          </div>
          <div className={styles.subPosts}>
            {subPosts.map((post, i) => (
              <BlogPost post={post} key={i} />
            ))}
          </div>
          <div className={styles.allPosts}>
            {allPosts.map((post, i) => (
              <BlogPost post={post} mini={true} key={i} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Blog;
