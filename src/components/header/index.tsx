import * as React from "react";
import styles from "./style.module.scss";

export const Header = () => {
  return (
    <div className={styles.header}>
      右の検索リストをクリックしたら、マップの方の詳細ダイアログが開くようにする。
      <div className={styles.signIn}>
        <div
          className={styles.signInText}
          onClick={() => {
            window.location.href = "/sign-in";
          }}
        >
          サインイン
        </div>
      </div>
    </div>
  );
};
