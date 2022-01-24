import React from "react";
import styles from "../styles/notFound.module.scss";

import { useRouter } from "next/router";

function NotFoundPage() {
  const router = useRouter();

  return (
    <div className={styles.notFound}>
      <img src="/images/404/server_down.svg" alt="Icon of server error" />
      <div className={styles.content}>
        <h1>{"Something's"} wrong</h1>
        <p>We {"can't"} seem to find the page you are looking for..</p>
        <button onClick={() => router.back()}>Go back</button>
      </div>
    </div>
  );
}

export default NotFoundPage;
