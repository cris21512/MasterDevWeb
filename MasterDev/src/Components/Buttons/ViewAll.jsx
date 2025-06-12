import React from 'react'
import './ViewAll.css'
import { useTranslation } from "react-i18next";

function ViewAll(){
    const [t, i18n] = useTranslation("global");

    return(
        <div>
            <button className='boton'>{t("Buttons.View")} </button>
        </div>
    )
}

export default ViewAll;