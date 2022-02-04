import React from "react";
import styles from "../styles/Footer.module.scss";

import Link from "next/link";

import { useRouter } from "next/router";

function Footer() {
  const router = useRouter();

  const socialMedia = [
    {
      link: "https://t.me/+34KPqqtdgA5hMzEx",
      img: "/images/footer/social_media/telegram.svg",
    },
    {
      link: "https://twitter.com/EBankc_DeFi",
      img: "/images/footer/social_media/twitter.svg",
    },
    {
      link: "https://www.linkedin.com/company/ebankcdefi",
      img: "/images/footer/social_media/linked_in.svg",
    },
    {
      link: "https://discord.gg/2aarRRgGTt",
      img: "/images/footer/social_media/discord.svg",
    },
    {
      link: "https://youtube.com/channel/UCHT0_rPmWU7GVgH29X65o9g",
      img: "/images/footer/social_media/youtube.svg",
    },
    {
      link: "https://medium.com/@ebankcdefi",
      img: "/images/footer/social_media/medium.svg",
    },
  ];

  const companyLinks = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/about",
      name: "About",
    },
    {
      link: "/token",
      name: "Token",
    },
    {
      link: "/corporates",
      name: "Corporate Clients",
    },
    {
      link: "/contact",
      name: "Contact",
    },
  ];

  const resourceLinks = [
    {
      link: "/stats",
      name: "Stats",
    },
    {
      link: "/blog",
      name: "Blog",
    },
    {
      link: "/faq",
      name: "FAQ",
    },
  ];

  const legalLinks = [
    {
      link: "/terms_and_conditions",
      name: "Terms & Conditions",
    },
    {
      link: "/privacy_policy",
      name: "Privacy Policy",
    },
    {
      link: "/cookie_policy",
      name: "Cookie Policy",
    },
  ];

  return (
    <footer className={styles.footer}>
      {!router.pathname.includes("/corporates") && (
        <div className={styles.topText}>
          <h2>Start Earning on your holdings</h2>
          <p>Unlock daily interest on your cryptos with as little as $500.</p>
          <p>Withdraw your assets whenever you want.</p>
          <Link href="/signup">
            <button>Sign Up</button>
          </Link>
        </div>
      )}

      <img
        className={styles.logo}
        src="/images/navbar/logo.svg"
        alt="Icon of logo"
      />
      <div className={styles.social_media}>
        {socialMedia.map((media, i) => (
          <a key={i} target="_blank" rel="noreferrer" href={media.link}>
            <div className={styles.imageContainer}>
              <img src={media.img} alt="Icon of social media" />
            </div>
          </a>
        ))}
      </div>
      <div className={styles.lists}>
        <div className={styles.list}>
          <p>Company</p>
          <ul>
            {companyLinks.map((link, i) => (
              <li key={i}>
                <Link href={link.link}>
                  <a>{link.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.list}>
          <p>Resources</p>
          <ul>
            {resourceLinks.map((link, i) => (
              <li key={i}>
                <Link href={link.link}>
                  <a>{link.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.list}>
          <p>Legal</p>
          <ul>
            {legalLinks.map((link, i) => (
              <li key={i}>
                <Link href={link.link}>
                  <a>{link.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>© 2022. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
