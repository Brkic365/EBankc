import React, { useState } from "react";
import styles from "../styles/Login.module.scss";

import Link from "next/link";
import Head from "next/head";

function signup() {
  const [isVisible, setIsVisible] = useState(false);

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  return (
    <div className={styles.login}>
      <Head>
        <title>EBANKC - Sign Up</title>
        <meta name="description" content="Create your EBankc account" />
      </Head>
      <div className={styles.box}>
        <h2>SIGN UP</h2>
        <p>Create your EBankc account</p>
        <div className={styles.inputContainer}>
          <div className={styles.top}>
            <label htmlFor="email">Email</label>
          </div>
          <div className={styles.inputBox}>
            <img src="/images/login/email.svg" alt="Email icon" />
            <input
              id="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.top}>
            <label htmlFor="password">Password</label>
          </div>
          <div className={styles.inputBox}>
            <img src="/images/login/lock.svg" alt="Lock icon" />
            <input
              id="password"
              type={isVisible ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
            />
            <img
              className={styles.eye}
              src={`/images/login/${
                isVisible ? "eyeVisible" : "eyeInvisible"
              }.svg`}
              alt="Eye icon"
              onClick={() => setIsVisible(!isVisible)}
            />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.top}>
            <label htmlFor="password">Confirm password</label>
          </div>
          <div className={styles.inputBox}>
            <img src="/images/login/lock.svg" alt="Lock icon" />
            <input
              id="password"
              type={isVisible ? "text" : "password"}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <img
              className={styles.eye}
              src={`/images/login/${
                isVisible ? "eyeVisible" : "eyeInvisible"
              }.svg`}
              alt="Eye icon"
              onClick={() => setIsVisible(!isVisible)}
            />
          </div>
        </div>
        <div className={styles.buttons}>
          <button>SIGN UP</button>
          <Link href="/login">
            <button className={styles.signupButton}>LOG IN</button>
          </Link>
        </div>
        <div className={styles.bottom}>
          <p>
            By continuing, you agree to Yield {"App's"}
            <span>
              {" "}
              <Link href="/terms">
                <a>Terms of Use</a>
              </Link>{" "}
            </span>
            and
            <span>
              {" "}
              <Link href="/privacy_policy">
                <a>Privacy Policy</a>
              </Link>
            </span>
          </p>
          <p>
            Already have an account?
            <span>
              {" "}
              <Link href="/login">
                <a>Log in</a>
              </Link>
            </span>
          </p>
        </div>
      </div>
      <p>© 2022. All rights reserved.</p>
    </div>
  );
}

export default signup;
