import React from 'react';
import { useTranslation } from 'react-i18next'
import CV from '../../assets/CristopherFu_CV.pdf';
import github from '../../assets/icons/github.svg'
import file from '../../assets/icons/file.svg';
import './CVButtons.css';




export default function CVButton() {
    const [t, i18n] = useTranslation("global");

    return(
        <div className="tooltip-container">
            <a href={CV} target="_blank" download="CristopherFu_CV.pdf">
                <button className="tooltip-trigger"><img src={file} alt="CV" /></button>
                <div className="tooltip">{t("Buttons.CV")} </div>
            </a>
        </div>
    )
}

