import React, { useState } from "react";
import styles from "../styles/Footer.module.scss";

import Link from "next/link";

import { motion } from "framer-motion";

function Footer() {
  const [helpOpen, setHelpOpen] = useState(false);

  const socialMedia = [
    {
      link: "www.twitter.com",
      img: "/images/footer/social_media/twitter.svg",
    },
    {
      link: "www.instagram.com",
      img: "/images/footer/social_media/instagram.svg",
    },
    {
      link: "www.reddit.com",
      img: "/images/footer/social_media/reddit.svg",
    },
    {
      link: "www.youtube.com",
      img: "/images/footer/social_media/youtube.svg",
    },
    {
      link: "www.discord.com",
      img: "/images/footer/social_media/discord.svg",
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
      link: "/corporate_clients",
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
      link: "/news",
      name: "News",
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
      <img
        className={styles.logo}
        src="/images/navbar/logo.svg"
        alt="Icon of logo"
      />
      <div className={styles.social_media}>
        {socialMedia.map((media, i) => (
          <Link key={i} href={media.link}>
            <img src={media.img} alt="Icon of social media" />
          </Link>
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
