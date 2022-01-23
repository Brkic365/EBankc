import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Asset from "../components/Asset";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const assets = [
    {
      img: "btc.png",
      name: "BTC",
      increase: 8,
      color: "#f7931a",
    },
    {
      img: "eth.png",
      name: "ETH",
      increase: 8,
      color: "#627ee9",
    },
    {
      img: "bnb.png",
      name: "BNB",
      increase: 6,
      color: "#f0b90b",
    },
    {
      img: "usdc.png",
      name: "USDC",
      increase: 9,
      color: "#2775ca",
    },
    {
      img: "usdt.png",
      name: "USDT",
      increase: 9,
      color: "#26a17a",
    },
    {
      img: "ebct.png",
      name: "EBCT",
      increase: 4,
      color: "#3263cc",
    },
  ];

  const pros = [
    {
      title: "Accessible and easy to use",
      text: "Our Web App is very accessible and simple to use.",
    },
    {
      title: "Top-Tier Protection",
      text: "Your assets and privacy are secured. We've built a premium compliance program to safeguard your assets.",
    },
    {
      title: "Global Reach",
      text: "Easily manage your account from anywhere in the world.",
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>EBANKC - Home</title>
        <meta
          name="description"
          content="Unlocking the power of Defi-Banking | Earn Interest, borrow, and exchange digital assets at competitive rates"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* Start Section */}

        <section className={styles.start}>
          <img
            src="/images/home/laptop_and_phone.png"
            alt="Graphic of laptop and phone"
          />
          <div className={styles.content}>
            <h1>Unlocking the power of Defi-Banking</h1>
            <p>
              Earn Interest, borrow, and exchange digital assets at competitive
              rates
            </p>
            <Link href="/signup">
              <button>Create Account</button>
            </Link>
          </div>
        </section>

        {/* Available Assets Section */}

        <section className={styles.assets}>
          <h2>Available Assets</h2>
          <div className={styles.asset_grid}>
            {assets.map((asset, i) => (
              <Asset key={i} asset={asset} />
            ))}
          </div>
        </section>

        {/* Pros Section */}

        <section className={styles.pros}>
          <img src="/images/home/phone.png" alt="Graphic of phone" />
          <div className={styles.advantages}>
            {pros.map((pro, i) => (
              <div className={styles.advantage} key={i}>
                <img src="/images/home/checkmark.svg" alt="Icon of checkmark" />
                <div className={styles.content}>
                  <h4>{pro.title}</h4>
                  <p>{pro.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Earn Section */}

        <section className={styles.earn}>
          <img src="/images/home/earn.png" alt="Earn icon" />
          <div className={styles.text}>
            <h2>Earn short term Interest</h2>
            <h4>Increase your reward level by holding more EBCT token</h4>
            <p>
              We offer the {"market's"} leading returns on your crypto assets.
              Rewards gets paid out after 30 days.
            </p>
          </div>
        </section>

        {/* Utility Section */}

        <section className={styles.utility}>
          <img src="/images/home/safe.png" alt="Safe icon" />
          <div className={styles.text}>
            <h2>Integrated Utility Card</h2>
            <h4>EBankc Card (coming soon)</h4>
            <p>Get a pocket size gateway integrated with your EBankc account</p>
            <h5>Key Features</h5>
            <ul>
              <li>Make purchase directly from your account</li>
              <li>Supported by several merchants globally</li>
              <li>2% discount on each transaction</li>
            </ul>
          </div>
        </section>

        {/* Token Section */}

        <section className={styles.token}>
          <img src="/images/home/token.png" alt="Icon of token" />
          <div className={styles.text}>
            <h2>The EBankc Utility Token (EBCT)</h2>
            <h4>The EBCT token powers the EBankc ecosystem</h4>
            <ul>
              <li>Boost your rewards</li>
              <li>Earn interest on your EBCT</li>
            </ul>
            <button>Learn More</button>
          </div>
        </section>
      </main>
    </div>
  );
}
