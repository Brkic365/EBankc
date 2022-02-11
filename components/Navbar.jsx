import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

import { useRouter } from "next/router";

import { motion } from "framer-motion";

export function MobileMenu({ links, close }) {
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

  return (
    <div className={styles.mobileMenu}>
      <img
        className={styles.close}
        src="/images/navbar/close.svg"
        alt="Icon for closing"
        onClick={() => close(true)}
      />
      <ul>
        {links.map((link, i) => (
          <li key={i}>
            <Link href={link.href}>
              <a onClick={() => close(true)}>{link.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.social_media}>
        {socialMedia.map((media, i) => (
          <a target="_blank" rel="noreferrer" key={i} href={media.link}>
            <div className={styles.imageContainer}>
              <img src={media.img} alt="Icon of social media" />
            </div>
          </a>
        ))}
      </div>
      <Link href="https://ebankcapp.netlify.app/">
        <button onClick={() => close(true)}>Log In</button>
      </Link>
    </div>
  );
}

function Navbar() {
  const router = useRouter();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      name: "EBCT Presale",
      href: "https://ebctsale.com/",
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

  const linkVariants = {
    active: { opacity: 1, y: 0 },
    unactive: { opacity: 0, y: "100%" },
  };

  return (
    <div className={styles.nav}>
      <Link href="/">
        <div className={styles.help}>
          <img src="/images/footer/help.svg" alt="Icon of help" />
        </div>
      </Link>

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
          <MobileMenu close={() => setMobileMenuOpen(false)} links={links} />
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
          <Link href="https://ebankcapp.netlify.app/">
            <button>Log In</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
