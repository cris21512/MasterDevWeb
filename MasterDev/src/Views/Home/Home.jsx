import React, { useEffect } from "react";

import "./Home.css";

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
        <div className="Home-style">
            
        </div>
    )
}