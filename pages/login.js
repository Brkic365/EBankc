import React, { useState } from "react";
import styles from "../styles/Login.module.scss";

import Link from "next/link";
import Head from "next/head";

function Login() {
  const [isVisible, setIsVisible] = useState(false);

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <div className={styles.login}>
      <Head>
        <title>EBANKC - Login</title>
        <meta property="og:image" content="/images/navbar/logo.svg" />
        <meta name="description" content="Login to your EBankc account" />
      </Head>
      <div className={styles.box}>
        <h2>LOG IN</h2>
        <p>Log in with your credentials</p>
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
            <Link href="/forgot_password">
              <a>Forgot password?</a>
            </Link>
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
        <div className={styles.buttons}>
          <button>LOG IN</button>
          <Link href="/signup">
            <button className={styles.signupButton}>SIGN UP</button>
          </Link>
        </div>
        <div className={styles.bottom}>
          <p>
            New to EBankc?
            <span>
              {" "}
              <Link href="/signup">
                <a>Create an account</a>
              </Link>
            </span>
          </p>
        </div>
      </div>
      <p>© 2022. All rights reserved.</p>
    </div>
  );
}

export default Login;
