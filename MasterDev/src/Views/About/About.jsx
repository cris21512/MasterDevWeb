import React,{ useEffect} from "react";
import './About.css';

import { useTranslation } from "react-i18next";

import ProfileCard from '../../Components/ProfileCard/ProfileCard';
import Copy from "../../Components/Copy/Copy";
import master from '../../assets/images/master.webp';

import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    const [t, i18n] = useTranslation("global");

    useEffect(() => {
        AOS.init({
        duration: 600,
        once: true,
        });
    }, []);

    return(
        <section className="About-style">
            <section className="Center-about">
                <div className="info-style">
                    <h1 className="about-title" data-aos="fade-up">{t("About.Title")} </h1>
                    <Copy>
                    <p>
                        {t("About.Hi")}
                        <span>{t("About.span1")} </span>
                        {t("About.menext")}
                        {t("About.menext2")}
                        <span>{t("About.span2")}</span>
                        {t("About.includ")}
                        <ul>
                            <span><li>• {t("About.ul1")}</li></span>
                            <span><li>• {t("About.ul2")}</li></span>
                            <span><li>• {t("About.ul3")}</li></span>
                        </ul>
                        {t("About.menext3")}
                        <span>💻{t("About.span3")}</span>
                    </p>
                    </Copy>
                </div>
                <ProfileCard
                name="Cristopher Fuentes"
                title="Frontend Developer"
                handle="MasterDev"
                status="Online"
                contactText="Contact Me"
                avatarUrl={master}
                grainUrl=''
                showUserInfo={false}
                enableTilt={true}
                showBehindGradient={true}
                className='text-card'
                />
            </section>
        </section>
    )
}


export default About;
