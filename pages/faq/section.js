import React, { useEffect, useState } from "react";
import styles from "../../styles/FaqSection.module.scss";
import Head from "next/head";
import Link from "next/link";

import { useRouter } from "next/router";

function FaqSection() {
  const router = useRouter();

  const [id, setId] = useState(null);
  const [openQuestion, setOpenQuestion] = useState(null);

  useEffect(() => {
    setId(router.query.id);
  }, []);

  console.log(router.query);

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const questions = [
    {
      q: "Why was EBankc Created?",
      a: "The company was created to provide credit services within the Defi markets, which has limited access to simple products like crypto lending and interest on assets. We deliver this through our well-organized Defi Banking platform.",
    },
    {
      q: "Why EBankc?",
      a: "Whether you are interested in Defi or just looking for an alternative investment that yields high returns, EBankc is perfect for you. We have a consumer-centric structure; offer the best rates plus the highest degree of security in the Defi ecosystem. Additionally, we provide our services in full compliance with regulatory standards.",
    },
    {
      q: "Who can use EBankc?",
      a: "The platform is open to everyone legally permitted to buy, sell, exchange, and invest within their jurisdiction.",
    },
    {
      q: "How do I open an account and start earning interest?",
      a: "1) Visit www.EBankc.app to register using your email address. After registration, 2) Complete verification. This process is automatic and takes just a few seconds. 3)Deposit and start earning Enable 2FA.",
    },
  ];

  return (
    id && (
      <div className={styles.faqSection}>
        <Head>
          <title>EBANKC - {id.toUpperCase()}</title>
          <meta property="og:image" content="/images/navbar/logo.svg" />
          <meta
            name="description"
            content="Unlocking the power of Defi-Banking | Earn Interest, borrow, and exchange digital assets at competitive rates"
          />
        </Head>
        <main className={styles.main}>
          <div className={styles.links}>
            <Link href="/faq">EBankc App</Link>
            <p>{">"}</p>
            <Link href={`/faq/section?id=${id}`}>{capitalize(id)}</Link>
          </div>
          <h1>{capitalize(id)}</h1>
          <div className={styles.questions}>
            {questions.map((question, i) => (
              <div
                className={styles.question}
                key={i}
                onClick={() => setOpenQuestion(openQuestion === i ? null : i)}
              >
                <div className={styles.title}>
                  <h3>{question.q}</h3>
                  <img
                    src="/images/faq/arrow.svg"
                    alt="Arrow Icon"
                    style={{
                      transform: `rotate(${
                        openQuestion === i ? "180deg" : "0"
                      })`,
                    }}
                  />
                </div>
                <p style={{ display: openQuestion === i ? "block" : "none" }}>
                  {question.a}
                </p>
              </div>
            ))}
          </div>
        </main>
      </div>
    )
  );
}

export default FaqSection;
