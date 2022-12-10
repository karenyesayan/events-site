import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { useLanguage } from "../../contexts/LanguageProvider"
import {App_Content_Items} from "../../constants/index"

const AppContentComponent = () => {
    const navigate = useNavigate();
    const [isUnitActive, setIsUnitActive] = useState({
      CINEMA: false,
      CONCERT: false,
      THEATER: false,
      "OPERA&BALLET": false,
    })


    const handleActiveUnits = (item) => {
      setIsUnitActive(prev => {
        prev[item] = !prev[item]
        return {...prev}
      })
    }

    const { t } = useLanguage()

  return (
    <content className="app-content-container">
        {
          App_Content_Items.map(({id, backgroundImage, backgroundImageOpacity, title, link}) => (
            <div key={id}
                 className="app-content-units"
                 style={isUnitActive[title] ? {backgroundImage} : {backgroundImage: backgroundImageOpacity}}
                 onMouseEnter={() => handleActiveUnits(title)}
                 onMouseLeave={() => handleActiveUnits(title)}
            >
              <span>{t(title)}</span>
              <span 
                className="units-links"
                onClick={() => navigate(link)}
              >{t("View more")}</span>
            </div>
          ))
        }
      </content>
  )
}

export default AppContentComponent
