import React, { useEffect } from "react";

import { useTranslation } from "react-i18next";

import LightRays from "../../Backgrounds/Light/Light";

import MasterDev from "../../assets/images/MasterDev.webp";

import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
    const [t, i18n] = useTranslation("global");

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return(
        <div style={{ width: "100%", height: "100dvh" }}>
            <div className="Center-Home">
                <h1>Hola a todos</h1>
                <h2>esto es un texto de prueba</h2>
                <span>hola span como estas</span>
            </div>
        </div>
    )
}

export default Home;