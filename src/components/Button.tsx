import styles from "./Button.module.css";

import { useGlobalContext } from "src/hooks/useGlobalContext";

import { getIdFromUrl } from "src/logic/utils";

type ButtonProps = {
  id: string;
  text: string;
  urlSound: string;
};

export const Button: React.FC<ButtonProps> = ({ text, id, urlSound }) => {
  const { title: copy, hashAudiosHowl } = useGlobalContext();

  const onClick = (evt: any) => {
    evt.preventDefault();
    var target = evt.target || evt.srcElement; // Fix for Firefox
    console.log(text);
    hashAudiosHowl[target.id].play();
  };

  console.log("Button", copy);

  return (
    <div className={styles.divButton}>
      <a
        href={urlSound}
        className={styles.button}
        id={getIdFromUrl(urlSound)}
        onClick={onClick}
      >
        {text}
      </a>
    </div>
  );
};
