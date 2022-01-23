import React from "react";
import styles from "../styles/Asset.module.scss";
function Asset({ asset }) {
  return (
    <div className={styles.asset} style={{ borderColor: asset.color }}>
      <img
        className={styles.token}
        src={`/images/home/assets/${asset.img}`}
        alt="Icon of asset"
      />
      <h3 style={{ color: asset.color }}>{asset.name}</h3>
      <p>Up to {asset.increase}% in 30 days</p>
    </div>
  );
}

export default Asset;
