import React from "react";
import Head from "next/head";
import styles from "../styles/Token.module.scss";

function Token() {
  const earnStats = [
    {
      img: "boost.png",
      title: "Boost your reward",
      text: "Boost your karma with EBCT to increase your interest on assets. The higher your Karma level, the higher your interest",
    },
    {
      img: "earn.png",
      title: "Earn up to 4% monthly",
      text: "Hold EBCT tokens and earn up to 4% in 30 days on your tokens",
    },
    {
      img: "lamp.png",
      title: "Swap Easily",
      text: "You can easily swap your EBCT tokens to other assets on the EBank DApp",
    },
  ];

  const getRoadmap = [
    {
      title: "Exchange Asset",
      text: "Easily exchange your assets to EBCT on the EBankc App",
    },
    {
      title: "Purchase on Exchanges (coming soon)",
      text: "After the presale EBCT will be listed on several exchanges",
    },
    {
      title: "Refer a friend (coming soon)",
      text: "Refer your friend and family and earn $20 worth of EBCT on your account",
    },
  ];

  const tokenData = [
    {
      value: "0.005",
      label: "EBCT Price",
      dollarSign: true,
    },
    {
      value: "480,596,060",
      label: "Market Cap",
    },
    {
      value: "520,000,000",
      label: "Circulating Supply",
    },
    {
      value: "1,000,000,000",
      label: "Max Supply",
    },
  ];

  const tokenContract = "Oxf8688fD01B8e5ac811b0cA51Be1af08457aB602a";

  return (
    <div className={styles.token}>
      <Head>
        <title>EBANKC - Token</title>
        <meta
          name="description"
          content="Unlocking the power of Defi-Banking | Earn Interest, borrow, and exchange digital assets at competitive rates"
        />
      </Head>
      <main className={styles.main}>
        {/* Start Section */}

        <section className={styles.start}>
          <img src="/images/token/tokens.svg" alt="Icon of tokens" />
          <div className={styles.content}>
            <h1>The EBCT Utility Token</h1>
            <h2>Level up with EBCT tokens</h2>
            <p>
              EBCT is an Erc20-compliant utility token embedded in the Ethereum
              Chain as a smart contract.
            </p>
          </div>
        </section>

        {/* Earn More Section */}

        <section className={styles.earn}>
          <div className={styles.text}>
            <h2>EBCT Utility & Reward</h2>
            <p>
              By holding EBCT tokens users can receive up to 4% interest in 30
              days. Holding EBCT tokens also increases your karma level, which
              increases your reward on other tokens.
            </p>
            <button>Learn More</button>
          </div>
          <div className={styles.earnStats}>
            {earnStats.map((stat, i) => (
              <div className={styles.stat} key={i}>
                <img
                  src={`/images/token/earnStats/${stat.img}`}
                  alt="Icon of earn stat"
                />
                <h5>{stat.title}</h5>
                <p>{stat.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Membership Tiers Section */}

        <section className={styles.membership}>
          <h1>EBankc Karma Program</h1>
          <p>
            The EBankc Karma is a reward program, which extends interest
            depending on a {"user's"} verification level and the number of EBCT
            tokens the user holds in his EBankc wallet.
          </p>
          <h1 className={styles.development}>IN DEVELOPMENT</h1>
          <div className={styles.tableOne}></div>
          <p></p>
          <div className={styles.tableOne}></div>
          <p></p>
          <div className={styles.tableOne}></div>
          <p></p>
        </section>

        {/* How to Get Section */}

        <section className={styles.get}>
          <h1>How to get EBCT</h1>
          <p>210,000,000 EBCT will be distributed through our Reward program</p>
          <div className={styles.content}>
            <img src="/images/home/token.svg" alt="Icon of token" />
            <div className={styles.list}>
              {getRoadmap.map((item, i) => (
                <div className={styles.listItem} key={i}>
                  <div className={styles.number}>
                    <h3>{i + 1}</h3>
                  </div>
                  <div className={styles.text}>
                    <h5>{item.title}</h5>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}

        <section className={styles.stats}>
          <h1>EBCT Stats</h1>
          <div className={styles.content}>
            <div className={styles.data}>
              {tokenData.map((data, i) => (
                <div className={styles.dataCard} key={i}>
                  <h5>
                    {data.dollarSign && "$ "}
                    {data.value}
                  </h5>
                  <p>{data.label}</p>
                </div>
              ))}
            </div>
            <div className={styles.tokenContract}>
              <h5>{tokenContract}</h5>
              <p>Contract Address</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Token;
