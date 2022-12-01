import { useLanguage } from "../../contexts/LanguageProvider"

import Logo from "../Logo"
import SocialNetworks from "../SocialNetworks"
import PhoneNumber from "../PhoneNumber"

const Footer = () => {
  const { t } = useLanguage()

    return (
        <footer className="footer">
            <div className="footer-container">
              <div className="footer-logo">
                <Logo />
              </div>
              <div className="footer-social-networks">
                <SocialNetworks />
              </div>
              <div className="footer-phone-number">
                <PhoneNumber />
              </div>
            </div>
            <div className="footer-ifno-container">
              <div className="info-items">{t("About")}</div>
              <div className="info-items">{t("Information")}</div>
              <div className="info-items">{t("Help")}</div>
            </div>
      </footer> 
    )
}


export default Footer
