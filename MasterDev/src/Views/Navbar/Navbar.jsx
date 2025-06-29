import React from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.css";
import logo from '../../assets/images/logo.webp';
import ShinyText from '../../TextAnimations/ShinyText/ShinyText'

function Navbar() {
    const [t, i18n] = useTranslation("global");

    return(
        <div className="nav">
            <section className="content-nav">
                <div className="space-nav">
                    <button  onClick={() => i18n.changeLanguage("es")} className="cursor-none"><span>ES</span></button>
                    <span>|</span>
                    <button  onClick={() => i18n.changeLanguage("en")} className="cursor-none"><span>EN</span></button>
                </div>
                <img src={logo} alt="logoM" className="master-logo" />
            </section>
        </div>
    )
}

export default Navbar;
