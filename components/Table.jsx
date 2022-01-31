import React from "react";
import styles from "../styles/Table.module.scss";

function Table({ title, data }) {
  return (
    <div className={styles.tableContainer}>
      <h4>{title}</h4>
      <div className={styles.table}>
        <div className={`${styles.row} ${styles.headerRow}`}>
          <div className={styles.block}>
            <h3>Asset</h3>
          </div>
          <div className={styles.block}>
            <h3>Karma level 1</h3>
            <p>(0 - 4,999EBTC)</p>
          </div>
          <div className={styles.block}>
            <h3>Karma level 2</h3>
            <p>(5,000 - 19,000EBTC)</p>
          </div>
          <div className={styles.block}>
            <h3>Karma level 3</h3>
            <p>(20,000 - 100,000EBTC)</p>
          </div>
          <div className={styles.block}>
            <h3>Karma level 4</h3>
            <p>(100,000+ EBTC)</p>
          </div>
        </div>
        {data.map((row, i) => (
          <div className={`${styles.row} ${styles.assetRow}`} key={i}>
            <div className={`${styles.block} ${styles.titleBlock}`}>
              <img src={`/images/home/assets/${row.img}`} alt="Token icon" />
              <h3>{row.name}</h3>
            </div>
            {row.levels.map((level, j) => (
              <div className={styles.block} key={j}>
                <p>{level}%</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Table;
