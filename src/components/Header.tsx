import React from "react";

import styles from "./Header.module.css";
import stylesButton from "./Button.module.css";

import { useGlobalContext } from "src/hooks/useGlobalContext";

export const Header: React.FC = () => {
  const { title } = useGlobalContext();

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
            {title}
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
