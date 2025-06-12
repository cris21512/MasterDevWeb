import React from "react";
import { useTranslation } from "react-i18next";
import "./Certificados.css";
import CertiJS from '../../assets/images/certif_1.png';
import CertiPY from '../../assets/images/certif_2.png';

const Certificados = () => {
    const [t, i18n] = useTranslation("global");

    return(
        <div className="Certificados-style">
            <section className="Center-certificados">
                <h1 className="title-certificados">{t("Certificados.Title")}</h1>
                <div className="box-certificados">
                    <img src={CertiJS} alt="CertiJS" className="imagenes-certificados" />
                    <img src={CertiPY} alt="CertiPY" className="imagenes-certificados" />
                </div>
            </section>
        </div>
    )
}

export default Certificados;
