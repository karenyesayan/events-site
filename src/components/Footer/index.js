import Logo from "../Logo"
import SocialNetworks from "../SocialNetworks"
import PhoneNumber from "../PhoneNumber"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
              <div className="footer-logo">
                <Logo />
              </div>
              <div className="social-networks">
                <SocialNetworks />
              </div>
              <div className="phone-number">
                <PhoneNumber />
              </div>
            </div>
            <div className="ifno">
              <div className="info-items">About</div>
              <div className="info-items">Information</div>
              <div className="info-items">Help</div>
            </div>
      </footer> 
    )
}


export default Footer
