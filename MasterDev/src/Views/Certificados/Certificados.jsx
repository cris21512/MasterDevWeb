import React, {useEffect} from "react";
import { useTranslation } from "react-i18next";
import "./Certificados.css";
import CertiJS from '../../assets/images/certif_1.png';
import CertiPY from '../../assets/images/certif_2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Certificados = () => {
    const [t, i18n] = useTranslation("global");

    useEffect(() => {
        AOS.init({
        duration: 500,
        once: true,
        });
    }, []);

    return(
        <div className="Certificados-style">
            <section className="Center-certificados">
                <h1 className="title-certificados" data-aos="fade-down">{t("Certificados.Title")}</h1>
                <div className="box-certificados">
                    <img src={CertiJS} alt="CertiJS" className="imagenes-certificados" data-aos="zoom-out" />
                    <img src={CertiPY} alt="CertiPY" className="imagenes-certificados" data-aos="zoom-out" />
                </div>
            </section>
        </div>
    )
}

export default Certificados;
