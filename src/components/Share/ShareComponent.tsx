import React from "react";

import { ShareLink } from "./ShareLink";

import logoTwitter from "../../images/logoTwitter.png";
import logoFacebook from "../../images/logoFacebook.png";
import logoTg from "../../images/logoTg.png";
import logoWhatsapp from "../../images/logoWhatsapp.png";

export enum ShareType {
  Twitter,
  Facebook,
  Whatsapp,
  Telegram,
}

type Props = {
  type: ShareType;
};

export const ShareComponent: React.FC<Props> = ({ type }) => {
  const getShareComponentByType = (type: ShareType): React.ReactElement => {
    switch (type) {
      case ShareType.Facebook:
        return (
          <ShareLink
            href="https://www.facebook.com/sharer/sharer.php?u=https://thesoundstable.com/"
            title="Facebook"
            src={logoFacebook}
          />
        );
      case ShareType.Twitter:
        return (
          <ShareLink
            href="https://twitter.com/intent/tweet?text=🎶%20The%20Sounds%20Table%20-%20La%20web%20app%20con%20los%20mejores%20sonidos:%0Dhttps://thesoundstable.com"
            title="Twitter"
            src={logoTwitter}
          />
        );
      case ShareType.Telegram:
        return (
          <ShareLink
            href="https://t.me/share/url?url=https://thesoundstable.com/"
            title="Telegram"
            src={logoTg}
          />
        );
      case ShareType.Whatsapp:
        return (
          <ShareLink
            href="whatsapp://send?text=https://thesoundstable.com/"
            title="Whatsapp"
            src={logoWhatsapp}
          />
        );
      default:
        throw new Error();
    }
  };

  return getShareComponentByType(type);
};
