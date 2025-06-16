import React from "react";
import { useTranslation } from "react-i18next";
import "./AboutPage.css";

const AboutPage = () => {
    const [t, i18n] = useTranslation("global");

    return(
        <section className="AboutPage-style">
            <h1>hola</h1>
        </section>
    )
}

export default AboutPage;