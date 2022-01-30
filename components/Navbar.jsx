import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

import { useRouter } from "next/router";

import { Help } from "./Help";

import { motion } from "framer-motion";

export function MobileMenu({ close }) {
  const socialMedia = [
    {
      link: "https://twitter.com/home",
      img: "/images/footer/social_media/twitter.svg",
    },
    {
      link: "https://www.instagram.com/",
      img: "/images/footer/social_media/instagram.svg",
    },
    {
      link: "https://www.reddit.com/",
      img: "/images/footer/social_media/reddit.svg",
    },
    {
      link: "https://www.youtube.com/",
      img: "/images/footer/social_media/youtube.svg",
    },
    {
      link: "https://discord.com/",
      img: "/images/footer/social_media/discord.svg",
    },
  ];

  return (
    <div className={styles.mobileMenu}>
      <img
        className={styles.close}
        src="/images/navbar/close.svg"
        alt="Icon for closing"
        onClick={() => close(true)}
      />
      <ul>
        <li>
          <Link href="/about">
            <a onClick={() => close(true)}>About</a>
          </Link>
        </li>
        <li>
          <Link href="/token">
            <a onClick={() => close(true)}>Token</a>
          </Link>
        </li>
        <li>
          <Link href="/corporates">
            <a onClick={() => close(true)}>Corporates</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a onClick={() => close(true)}>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/stats">
            <a onClick={() => close(true)}>Stats</a>
          </Link>
        </li>
        <li>
          <Link href="/faq">
            <a onClick={() => close(true)}>FAQ</a>
          </Link>
        </li>
      </ul>
      <div className={styles.social_media}>
        {socialMedia.map((media, i) => (
          <Link key={i} href={media.link}>
            <img
              onClick={() => close(true)}
              src={media.img}
              alt="Icon of social media"
            />
          </Link>
        ))}
      </div>
      <Link href="/login">
        <button onClick={() => close(true)}>Log In</button>
      </Link>
    </div>
  );
}

function Navbar() {
  const router = useRouter();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [hoveringLink, setHoveringLink] = useState(null);

  const links = [
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Token",
      href: "/token",
    },
    {
      name: "Corporates",
      href: "/corporates",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "Stats",
      href: "/stats",
    },
    {
      name: "FAQ",
      href: "/faq",
    },
  ];

  const mobileMenuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  const helpVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "100%" },
  };

  const linkVariants = {
    active: { opacity: 1, y: 0 },
    unactive: { opacity: 0, y: "100%" },
  };

  return (
    <div className={styles.nav}>
      <motion.div
        className={styles.helpContainer}
        animate={helpOpen ? "open" : "closed"}
        transition={{ duration: 0.5, type: "tween" }}
        variants={helpVariants}
      >
        <Help close={() => setHelpOpen(false)} />
      </motion.div>
      <div
        className={styles.help}
        onClick={() => setHelpOpen(true)}
        style={{ opacity: helpOpen ? 0 : 1 }}
      >
        <img src="/images/footer/help.svg" alt="Icon of help" />
        <p>Help</p>
      </div>

      <div className={styles.left}>
        <Link href="/">
          <div className={styles.logo_w_text}>
            <img
              className={styles.logo}
              src="/images/navbar/logo.svg"
              alt="Website logo"
            />
            <h1>EBankc</h1>
          </div>
        </Link>
      </div>
      <div className={styles.right}>
        <img
          className={styles.menu}
          src="/images/navbar/menu.svg"
          alt="Mobile Menu Icon"
          onClick={() => setMobileMenuOpen(true)}
        />
        <motion.div
          className={styles.mobileMenuContainer}
          animate={mobileMenuOpen ? "open" : "closed"}
          transition={{ duration: 0.3, type: "tween" }}
          variants={mobileMenuVariants}
        >
          <MobileMenu close={() => setMobileMenuOpen(false)} />
        </motion.div>

        <div className={styles.links}>
          {links.map((link, i) => (
            <Link href={link.href} key={i}>
              <div
                className={styles.link}
                onMouseEnter={() => setHoveringLink(link.href)}
                onMouseLeave={() => setHoveringLink(null)}
              >
                <a
                  className={
                    router.pathname.includes(link.href) ||
                    hoveringLink === link.href
                      ? styles.open
                      : undefined
                  }
                >
                  {link.name}
                </a>
                <motion.div
                  className={styles.linkUnderline}
                  animate={
                    router.pathname.includes(link.href) ||
                    hoveringLink === link.href
                      ? "active"
                      : "unactive"
                  }
                  transition={{ duration: 0.3, type: "tween" }}
                  variants={linkVariants}
                />
              </div>
            </Link>
          ))}
          <Link href="/login">
            <button>Log In</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
