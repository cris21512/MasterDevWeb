import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.css";
import Ballpit from '../../Backgrounds/Ballpit/Ballpit';
import logi from '../../assets/images/logo.png';

const Footer = () => {
    const [t, i18n] = useTranslation("global");
  const copiarAlPortapapeles = async () => {
    try {
      await navigator.clipboard.writeText('cristopherfm21.5@gmail.com');
      alert(t("Copy.Copy"));
    } catch (err) {
      console.error(t("Copy.Error"), err);
    }
  };

    return (
        <div className="Footer-style">
            <div
                style={{
                    width: '100%',
                    height: '100vh',
                    position: 'absolute',
                    overflow: 'hidden',
                    zIndex: -1,
                    backgroundColor: '#020202',
                }}
            >
                <Ballpit
                    count={110}
                    gravity={0.5}
                    friction={1}
                    wallBounce={0.95}
                    followCursor={false}
                    colors={['#373737', '#020202', '#00eaff', '#19191a', '#c9b977']}
                />
            </div>
            <div className="growl">
                <img src={logi} alt="devmaster" className="logo-footer" />
            </div>
            <div className="growl">
                <h1 className="title-footer">{t("Footer.Social")} </h1>
                <span className="h2">• Instagram</span>
                <span className="h2">• Linkedin</span>
                <span className="h2">• TikTok</span>
            </div>
            <div className="growl">
                <h1 className="title-footer">{t("Footer.Contact")} </h1>
                <span className="h2" onClick={copiarAlPortapapeles}>cristopherfm21.5@gmail.com <br />{t("Copy.Title")} </span>
                <span className="h2">+502 3955 9554</span>
                <span className="h2">• Facebook</span>
            </div>
        </div>
    );
}

export default Footer;