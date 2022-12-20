import React from "react";

import styles from "./Header.module.css";
import stylesButton from "./Button.module.css";

type Props = {
  title: string;
};

export const Header: React.FC<Props> = ({ title }) => {
  return (
    <header>
      {/* <div>
        <h1 id="head" className={styles.title}>
          {title}
        </h1>
      </div> */}
      <div className={styles.firstRowHeader}>
        {/* <div className={styles.headerIndex}>
          <a
            href="https://thesoundstable.com"
            className={stylesButton.buttonIndex}
          >
            THE SOUNDS TABLE
          </a>
        </div> */}
        <div className={styles.headerTitle}>
          <h1 id="head" className={styles.title}>
            The Sounds Table
          </h1>
        </div>
        <div>
          {/* <img
            src="./elxokasimage.webp"
            className="mainLogoXks"
            alt="logo principal"
          /> */}
        </div>
      </div>
    </header>
  );
};
