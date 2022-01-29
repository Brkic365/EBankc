import React from "react";
import styles from "../styles/About.module.scss";
import Head from "next/head";

function About() {
  const backedCompanies = [
    "bitgo.jpeg",
    "onramper.png",
    "compound.png",
    "ledger.png",

    "google.png",
  ];

  const partnerCompanies = [
    "whitestar.png",
    "genblock.png",
    "distributedcompute.jpg",
    "stone.png",
  ];

  const trustReasons = [
    {
      text: "Swift Automatic Transactions",
      img: "transaction.svg",
    },
    {
      text: "No Hidden Fees",
      img: "nofees.svg",
    },
    {
      text: "Licensed and Regulated",
      img: "license.svg",
    },
    {
      text: "Top-tier Security and insurance on assets",
      img: "security.svg",
    },
    {
      text: "EBCT Utility Token",
      img: "token.svg",
    },
    {
      text: "24/7 Customer Support",
      img: "customerSupport.svg",
    },
  ];

  const team = [
    {
      img: "qin.webp",
      name: "Mr. Qin Hauzheng",
      role: "CEO (Founder)",
    },
    {
      img: "barrette.webp",
      name: "Barrette David",
      role: "CFO",
    },
    {
      img: "reid.webp",
      name: "Reid Adrian",
      role: "Director of client service",
    },
    {
      img: "tesha.webp",
      name: "Tesha Denos",
      role: "Head of Institutional Lending",
    },
  ];

  return (
    <div className={styles.about}>
      <Head>
        <title>EBANKC - About</title>
        <meta
          name="description"
          content="Unlocking the power of Defi-Banking | Earn Interest, borrow, and exchange digital assets at competitive rates"
        />
      </Head>
      <main className={styles.main}>
        {/* Start Section */}

        <section className={styles.start}>
          <h2>Commercializing DeFi Banking</h2>
          <p>
            EBankc is the most rewarding and secured institution in the DeFi
            industry.
          </p>
          <img
            src="/images/about/tablet_city.webp"
            alt="Image of technology and city"
          />
          <p>
            Mr. Qin Huazheng founded EBankc on the 9th of March 2020 to solve
            inefficiency within the DeFi industry. So far, {"we've"} endeavored
            to provide executive financial services to our satisfied customers.
          </p>
          <p>Our services include, but are not limited to:</p>
          <ul>
            <li>Instant Online Consumer Loans</li>
            <li>Passive interest for assets</li>
            <li>E-commerce Financing</li>
          </ul>
          <p>
            EBC Financial Group LTD powers EBankc. EBankc is {"EBC's"} answer to
            solving the scarcity of Crypto lending, trading, and asset
            management services within the DeFi industry. This is achieved by
            creating innovative and convenient financial solutions. EBC has
            gradually evolved into a global market leader in the online consumer
            lending and crypto investment segment.
          </p>
          <p>
            Our competitive advantage prevails because of our efficient business
            model, which utilizes cutting-edge technology solutions, service
            diversification, and the best business professionals to ensure our
            longstanding success in the Fintech Market.
          </p>
        </section>

        {/* Backed By Section */}
        <section className={styles.backed}>
          <h2>Backed By</h2>
          <div className={styles.companies}>
            {backedCompanies.map((company, i) => (
              <div className={styles.company} key={i}>
                <img
                  src={`/images/about/companies/${company}`}
                  alt="Logo of company"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Partners Section */}
        <section className={styles.partners}>
          <h2>Partners</h2>
          <div className={styles.companies}>
            {partnerCompanies.map((company, i) => (
              <div className={styles.company} key={i}>
                <img
                  src={`/images/about/companies/${company}`}
                  alt="Logo of company"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className={styles.whyChoose}>
          <h2>Why Choose Us</h2>
          <div className={styles.chooseReasons}>
            {trustReasons.map((reason, i) => (
              <div className={styles.reason} key={i}>
                <img src={`/images/about/trust/${reason.img}`} alt="Icon" />
                <p>{reason.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className={styles.team}>
          <h2>The Team</h2>
          <p>Meet our team of highly experienced and talented professionals</p>
          <div className={styles.teamMembers}>
            {team.map((member, i) => (
              <div className={styles.member} key={i}>
                <img
                  src={`/images/about/team/${member.img}`}
                  alt="Icon of team member"
                />
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
