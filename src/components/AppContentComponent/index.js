import React from "react"
import { useNavigate } from "react-router-dom"

import { useLanguage } from "../../contexts/LanguageProvider"
import {AppContentItems} from "../../constants/index"


const AppContentComponent = () => {
    const navigate = useNavigate();

    const { t } = useLanguage();

  return (
    <content className="app-content-container">
        {
          AppContentItems.map(({id, backgroundImage, title, link}) => (
            <div key={id}
                 className="app-content-units"
                 style={{backgroundImage}}
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
