import React from "react";
import styles from "../styles/Help.module.scss";

export function Help({ close }) {
  return (
    <div className={styles.help}>
      <div className={styles.top}>
        <h2>Help</h2>
        <div className={styles.minimizeBox} onClick={() => close(true)}>
          <img src="/images/navbar/minimize.svg" alt="Minimize icon" />
        </div>
      </div>
      <div className={styles.inputContainer}>
        <img src="/images/navbar/search.svg" alt="Search icon" />
        <input placeholder="How can we help you?" />
      </div>
    </div>
  );
}
