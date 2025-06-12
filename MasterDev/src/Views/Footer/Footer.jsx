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
      alert('¡Correo copiado al portapapeles!');
    } catch (err) {
      console.error('Error al copiar: ', err);
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
                    colors={['#00eaff', '#fff', '#2196f3', '#FFDF00', '#FFDF00', '#D4AF37']}
                />
            </div>
            <div className="growl">
                <img src={logi} alt="devmaster" className="logo-footer" />
            </div>
            <div className="growl">
                <h1 className="title-footer">social networks</h1>
                <span className="h2">• Instagram</span>
                <span className="h2">• Linkedin</span>
                <span className="h2">• TikTok</span>
            </div>
            <div className="growl">
                <h1 className="title-footer">Contact</h1>
                <span className="h2" onClick={copiarAlPortapapeles}>cristopherfm21.5@gmail.com <br />Click para copiar</span>
                <span className="h2">+502 3955 9554</span>
                <span className="h2">• Facebook</span>
            </div>
            <div className="growl">
                <h1 className="title-footer">Quick links</h1>
                <span className="h2">About</span>
                <span className="h2">Projects</span>
                <span className="h2">Technologies</span>
            </div>
        </div>
    );
}

export default Footer;