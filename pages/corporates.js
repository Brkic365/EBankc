import React from "react";
import styles from "../styles/Corporates.module.scss";
import Head from "next/head";

function Corporates() {
  const steps = [
    "Complete the EBank Corporate Account application form, providing all the necessary documents",
    "The EBankc approves your application, providing the application form is fully completed",
    "You will receive a welcome letter from the support team with your account logins which you can change after login",
    "You will then be able to access and fund your EBank Corporate Account to enjoy high returns on your assets",
  ];

  return (
    <div className={styles.corporates}>
      <Head>
        <title>EBANKC - Corporates</title>
        <meta
          name="description"
          content="Unlocking the power of Defi-Banking | Earn Interest, borrow, and exchange digital assets at competitive rates"
        />
      </Head>
      <main className={styles.main}>
        {/* Start Section */}

        <section className={styles.start}>
          <h1>DeFi Banking Solution for Corporate Digital Assets</h1>
          <p>
            The EBankc Platform has created a unique platform for institutional
            investors. Our mission is to provide credit services in the DeFi
            space, for both individual and cooperate investors.
          </p>
          <p>
            Corporate Institutions can now store their assets and earn passive
            interest on them. They also get access to instant loans in Stable
            coins.
          </p>
          <button>Sign Up Now</button>
        </section>

        {/* UX Section */}

        <section className={styles.userExp}>
          <img src="/images/corporates/laptop.webp" alt="Icon of laptop" />
          <div className={styles.content}>
            <h5>Leading User Experience</h5>
            <h2>Fast and Accessible</h2>
            <p>
              EBankc is designed with {"client's"} experience in mind. The
              Cooperate interface is fast and easy to use.
            </p>
          </div>
        </section>

        {/* Security Section */}

        <section className={styles.security}>
          <img
            src="/images/corporates/laptop_and_phone.webp"
            alt="Icon of laptop"
          />
          <div className={styles.content}>
            <h5>Safety First</h5>
            <h2>Maximum Security and Insurance on Custodial Assets</h2>
            <p>
              {"We've"} equipped the platform with top-quality security
              infrastructure designed to ensure maximum protection of assets at
              all times. Assets are backed by funds from both private and
              institutional partners and token sales. This fund ensures a better
              collateral ratio when needed, acting as a safety cushion during a
              shortfall.
            </p>
          </div>
        </section>

        {/* License Section */}

        <section className={styles.license}>
          <img src="/images/corporates/shield.webp" alt="Icon of shield" />
          <div className={styles.content}>
            <h5>Know Your Business</h5>
            <h2>Licensed and Regulated Defi System</h2>
            <p>
              EBC Financial Group Ltd, pioneers of EBank, hold all required
              licenses and registrations and constantly bring their operations
              in line with newly adopted legislative regulations.
            </p>
          </div>
        </section>

        {/* Process Section */}

        <section className={styles.process}>
          <h2>EBank Corporate Account Process</h2>
          <p>
            To get started with EBankc cooperate services, applicants will need
            to follow the steps below:
          </p>
          <div className={styles.steps}>
            {steps.map((step, i) => (
              <div className={styles.step} key={i}>
                <div className={styles.number}>
                  <h3>{i + 1}.</h3>
                </div>
                <p>{step}</p>
              </div>
            ))}
            <div className={styles.getStartedStep}>
              <h4>Get Started</h4>
              <button>Sign Up</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Corporates;
