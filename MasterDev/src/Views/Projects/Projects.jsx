import React, {useEffect} from "react";
import './Projects.css';
import { useTranslation } from "react-i18next";
import SpotlightCard from '../../Components/SpotlightCard/SpotlightCard';
import WYKHomes from '../../assets/images/house.png';
import house from '../../assets/images/house-child.png';
import ChitoyCris from '../../assets/images/chitoycris.png';
import CC from '../../assets/images/CC.png';
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
                        <img src={ChitoyCris} alt="WYKHomes" className="image-card" />
                        <img src={CC} alt="House" />
                    </article>
                    <h1 className="title-card-project">Chito & Cris</h1>
                    <p className="text-project">
                        <span>{t("Projects.Description")}</span> <br />
                        {t("Cardinfo.Cardinfo1")}
                        <span>{t("Cardinfo.spancard1")} </span>
                        {t("Cardinfo.Cardinfo2")}
                        <span>{t("Cardinfo.spancard2")}</span>
                        {t("Cardinfo.Cardinfo3")} <br />
                        <span>{t("Projects.Rol")} </span> <br />
                        {t("Roleinfo.Roleinfo1")}
                        <span>{t("Roleinfo.Spanrole1")}</span>
                        {t("Roleinfo.Roleinfo2")}
                        <span>{t("Roleinfo.Spanrole2")}</span>.
                    </p>
                    <div className="buttons-project">
                        <a href="https://chito-y-cris.vercel.app/" target='_blank' rel='noopener noreferrer'> <ViewAll/></a>
                        <a href="https://github.com/cris21512/Chito-Y-Cris" target='_blank' rel='noopener noreferrer' ><GithubButton />
                    </a>
                    </div>
                </SpotlightCard>
            </section>
        </div>
    )
}

export default Projects;