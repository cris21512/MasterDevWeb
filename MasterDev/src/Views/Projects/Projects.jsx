import React, {useEffect} from "react";
import './Projects.css';

import { useTranslation } from "react-i18next";

import SpotlightCard from '../../Components/SpotlightCard/SpotlightCard';

import WYKHomes from '../../assets/images/house.webp';
import house from '../../assets/images/house-child.png';
import Crazydev from '../../assets/images/crazydev.webp';
import CD from '../../assets/images/logo_light.png';
import ViewAll from "../../Components/Buttons/ViewAll";

import GithubButton from "../../Components/Buttons/GithubButton";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
    const [t, i18n] = useTranslation("global");

    useEffect(() => {
        AOS.init({
        duration: 600,
        once: true,
        });
    }, []);

    return(
        <div className="Projects-style">
            <h1 className="title-project" data-aos="fade-up">{t("Projects.Title")} </h1>
            <section className="Center-projects" data-aos="zoom-in">
                <SpotlightCard className="box-style" spotlightColor="rgba(9, 180, 247, 0.62)">
                    <article>
                        <img src={WYKHomes} alt="WYKHomes" className="image-card" />
                        <img src={house} alt="House" />
                    </article>
                    <h1 className="title-card-project">WYK Homes</h1>
                    <p className="text-project">
                        <span>{t("Projects.Description")}</span> <br />
                        {t("Projects.Cardinfo1")}
                        <span>{t("Projects.spancard1")} </span>
                        {t("Projects.Cardinfo2")}
                        <span>{t("Projects.spancard2")}</span>
                        {t("Projects.Cardinfo3")}
                        <span>{t("Projects.spancard3")}</span>
                        {t("Projects.Cardinfo4")} <br />
                        <span>{t("Projects.Rol")} </span> <br />
                        {t("Projects.Roleinfo1")}
                        <span>{t("Projects.Spanrole1")}</span>
                        {t("Projects.Roleinfo2")}
                        <span>{t("Projects.Spanrole2")}</span>.
                    </p>
                    <div className="buttons-project">
                        <a href="https://wyk-homes.vercel.app/" target='_blank' rel='noopener noreferrer'><ViewAll/></a>
                        <a href="https://github.com/cris21512/WYK-Homes" target='_blank' rel='noopener noreferrer' ><GithubButton />
                    </a>
                    </div>
                </SpotlightCard>
                <SpotlightCard className="box-style" spotlightColor="rgba(255, 255, 255, 0.73)" >
                    <article>
                        <img src={Crazydev} alt="WYKHomes" className="image-card" />
                        <img src={CD} alt="House" />
                    </article>
                    <h1 className="title-card-project">Crazydev</h1>
                    <p className="text-project">
                        <span>{t("Projects.Description")}</span> <br />
                        <span>{t("Crazydev.span1")}</span>
                        {t("Crazydev.Info1")}
                        <span>{t("Crazydev.span2")}</span>
                        {t("Crazydev.and")}
                        <span>{t("Crazydev.span3")} </span>
                        {t("Crazydev.Info2")}
                        <span>{t("Crazydev.span4")}</span>
                        {t("Crazydev.Info3")}
                        <span>{t("Crazydev.span5")}</span>
                        {t("Crazydev.Info4")} 
                        <span>{t("Crazydev.span6")}</span>
                        <span>{t("Crazydev.span7")}</span>
                        {t("Crazydev.Info5")} 
                        <span>{t("Crazydev.span8")}</span>
                        {t("Crazydev.Info6")}
                    </p>
                    <div className="buttons-project">
                        <a href="https://crazydev-three.vercel.app/" target='_blank' rel='noopener noreferrer'> <ViewAll/></a>
                        <a href="https://github.com/cris21512/Crazydev" target='_blank' rel='noopener noreferrer' ><GithubButton />
                    </a>
                    </div>
                </SpotlightCard>
            </section>
        </div>
    )
}

export default Projects;