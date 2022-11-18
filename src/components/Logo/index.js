import {Link} from "react-router-dom";

import logo from "../../images/logo.png"

const Logo = () => {
    return (
    <Link to={"/"}>
      <div className="logo">
        <img src={logo} className="Site-logo" alt="logo"></img>
      </div>
    </Link>
    );
  }

export default  Logo;