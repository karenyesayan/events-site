import {Link} from "react-router-dom"

import logo from "../../images/logo.png"

const Logo = () => {
    return (
    <Link to={"/"}>
      <div className="logo">
        <img src={logo} className="site-logo" alt="logo" />
      </div>
    </Link>
    );
  }

export default  Logo