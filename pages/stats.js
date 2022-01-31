import React from "react";
import styles from "../styles/Stats.module.scss";
import Head from "next/head";

function Stats() {
  const cards = [
    {
      name: "BTC",
      value: 25,
      img: "btc.webp",
    },
    {
      name: "EBCT",
      value: 310000000,
      img: "ebct.webp",
    },
    {
      name: "ETH",
      value: 1369,
      img: "eth.webp",
    },
    {
      name: "BNB",
      value: 2690,
      img: "bnb.webp",
    },
    {
      name: "BTC",
      value: 25,
      img: "btc.webp",
    },
    {
      name: "USDC, USDT",
      value: 2730290,
      img: "three.webp",
    },
  ];

  const mainStats = [
    {
      label: "Percentage staked",
      value: "63.12%",
    },
    {
      label: "EBCT Locked",
      value: "520M",
    },
  ];

  const miniStats = [
    {
      value: "$0.0005",
      label: "EBCT Price",
    },
    {
      value: "$6,907,376",
      label: "Market Cap",
    },
    {
      value: "310,650,624 EBCT",
      label: "Circulating Supply",
    },
    {
      value: "1,000,000,000 EBCT",
      label: "Max Supply",
    },
  ];

  const community = [
    {
      value: "23,075",
      label: "Register Holders",
    },
    {
      value: "$1,289,040",
      label: "Withdrawals Paid out",
    },
  ];

  const tokenContract = "Oxf8688fD01B8e5ac811b0cA51Be1af08457aB602a";

  return (
    <div className={styles.stats}>
      <Head>
        <title>EBANKC - Stats</title>

        <meta
          name="description"
          content="Unlocking the power of Defi-Banking | Earn Interest, borrow, and exchange digital assets at competitive rates"
        />
      </Head>
      <main className={styles.main}>
        {/* Start Section */}

        <section className={styles.start}>
          <div className={styles.text}>
            <h1>Ebankc Stats</h1>
            <p>
              Here is a detailed breakdown of all the assets currently managed
              on EBankc App. Updated monthly.
            </p>
          </div>
          <div className={styles.cards}>
            <div className={styles.firstCol}>
              {cards.slice(0, 3).map((card, i) => (
                <div className={styles.card} key={i}>
                  <img
                    src={`/images/home/assets/${card.img}`}
                    alt="Icon of token"
                  />
                  <h3>{card.value.toLocaleString("en-US")}</h3>
                  <p>{card.name}</p>
                </div>
              ))}
            </div>
            <div className={styles.secondCol}>
              {cards.slice(3, 6).map((card, i) => (
                <div className={styles.card} key={i}>
                  <img
                    src={`/images/home/assets/${card.img}`}
                    alt="Icon of token"
                  />
                  <h3>{card.value.toLocaleString("en-US")}</h3>
                  <p>{card.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}

        <section className={styles.ebctStats}>
          <h2>EBCT Stats</h2>
          <div className={styles.mainStats}>
            {mainStats.map((stat, i) => (
              <div className={styles.mainStat} key={i}>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
          <div className={styles.miniStats}>
            {miniStats.map((stat, i) => (
              <div className={styles.miniStat} key={i}>
                <h4>{stat.value}</h4>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
          <div className={styles.contractStat}>
            <h4>{tokenContract}</h4>
            <p>EBCT token contract</p>
          </div>
        </section>

        {/* Community Section */}

        <section className={styles.community}>
          <h2>Yield App Community</h2>
          <div className={styles.communityCircles}>
            {community.map((data, i) => (
              <div className={styles.communityCircle} key={i}>
                <h3>{data.value}</h3>
                <p>{data.label}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Stats;
