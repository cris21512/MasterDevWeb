import React from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.css";
import logo from '../../assets/images/logo.png';
import ShinyText from '../../TextAnimations/ShinyText/ShinyText'

function Navbar() {
    const [t, i18n] = useTranslation("global");

    return(
        <div className="nav">
            <section className="content-nav">
                <div className="space-nav">
                    <button  onClick={() => i18n.changeLanguage("es")}><span>ES</span></button>
                    <button  onClick={() => i18n.changeLanguage("en")}><span>EN</span></button>
                </div>
                <img src={logo} alt="logoM" className="master-logo" />
                <div className="links-nav">
                    <ShinyText text={t("Navbar.About")} disabled={false} speed={3} className='custom-class' />
                    <ShinyText text={t("Navbar.Projects")} disabled={false} speed={3} className='custom-class' />
                    <ShinyText text={t("Navbar.Contact")} disabled={false} speed={3} className='custom-class' />
                </div>
            </section>
        </div>
    )
}

export default Navbar;
