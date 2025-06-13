import React, {useEffect} from "react";
import "./ToolsAndFreamwork.css";
import { useTranslation } from 'react-i18next'
import FrameworkSection from "../../Components/Freamwork/FreamworkSection";
import AOS from 'aos';


const ToolsAndFramework = () => {
  const [t, i18n] = useTranslation("global");

    useEffect(() => {
        AOS.init({
        duration: 500,
        once: true,
        });
    }, []);

    return(
        <div className="ToolsAndFreamwork-style">
            <h1 className="Freamwork-title" data-aos="fade-up">{t("ToolsAndFreamworks.Title")} </h1>
            <section  data-aos="fade-up">
            <FrameworkSection/>
            </section>
        </div>
    )
}

export default ToolsAndFramework;