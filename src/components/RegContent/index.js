import {useNavigate} from "react-router-dom"

import { useLanguage } from "../../contexts/LanguageProvider"

const RegContent = () => {
  const navigate = useNavigate()

  const { t } = useLanguage()

  return (
      <div className="reg-container">
        <h1>{t("Order online")}</h1>
        <button onClick={() => navigate("/registration")}>{t("Register")}</button>
      </div>
  )
}

export default RegContent
