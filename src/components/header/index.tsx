import * as React from "react";
import styles from "./style.module.scss";
import logo from "../../logo.png";
import title from "../../connpass-map-logo.png";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logoBox}>
        <img className={styles.img} src={logo} alt="" />
      </div>
      <div className={styles.titleBox}>
        <img className={styles.img} src={title} alt="" />
      </div>
      {/* <div className={styles.signIn}>
        <div
          className={styles.signInText}
          onClick={() => {
            window.location.href = "/sign-in";
          }}
        >
          サインイン
        </div>
      </div> */}
    </div>
  );
};
