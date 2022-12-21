import React from "react";

import { useGlobalContext } from "src/hooks/useGlobalContext";
import { getImageFromType } from "src/logic/utils";

import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import stylesButton from "./Button.module.css";

export const Header: React.FC = () => {
  const { title } = useGlobalContext();

  const image = getImageFromType(title);

  return (
    <header>
      <div className={styles.firstRowHeader}>
        {image && (
          <div className={styles.headerIndex}>
            <Link to="/" className={stylesButton.buttonIndex}>
              THE SOUNDS TABLE
            </Link>
          </div>
        )}
        <div className={styles.headerTitle}>
          <h1 className={styles.title}>{title}</h1>
        </div>
        <div>
          {image && (
            <img
              src={image}
              className={styles.peopleLogo}
              alt={`Logo principal ${title}`}
            />
          )}
        </div>
      </div>
    </header>
  );
};
