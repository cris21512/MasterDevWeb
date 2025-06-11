import React from "react";
import "./ToolsAndFreamwork.css";
import { useTranslation } from 'react-i18next'
import FrameworkSection from "../../Components/Freamwork/FreamworkSection";

const ToolsAndFramework = () => {
  const [t, i18n] = useTranslation("global");

    return(
        <div className="ToolsAndFreamwork-style">
            <h1 className="Freamwork-title">{t("ToolsAndFreamworks.Title")} </h1>
            <FrameworkSection/>
        </div>
    )
}

export default ToolsAndFramework;