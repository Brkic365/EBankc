import React from "react";
import styles from "../../../styles/Blog.module.scss";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import BlogPost from "../../../components/BlogPost";

function Tag() {
  const router = useRouter();

  const tag = router.query.q;

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
        <meta name="description" content="Login to your EBankc account" />
      </Head>
      <main className={styles.main}>
        {/* Start Section */}

        <section className={styles.start}>
          <h1>{tag}</h1>
        </section>

        {/* Posts Section */}

        <section className={styles.posts}>
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

export default Tag;
