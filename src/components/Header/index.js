import {NavLink, Outlet} from "react-router-dom"

import { useLanguage } from "../../contexts/LanguageProvider"
import Search from "../Search"
import UserBar from "../UserBar"
import LanguageBar from "../LanguageBar"
import Logo from "../Logo"
import {HEADERNAVIGATION} from "../../constants/index"


const Header = () => {
    const { t } = useLanguage();

    return (
        <>
        <header className='header-container'>
            <nav className='nav'>
                <Logo />
                    {
                        HEADERNAVIGATION.map(({id, title, to}) => (
                                <NavLink
                                    to={to}
                                    key={id}
                                    className={({isActive}) => isActive ? 'active-nav' : 'inactive-nav'}
                                >{t(title)}
                                </NavLink>
                        ))
                    } 
                    <Search />
            </nav>
            <div className="right-bar">
                <LanguageBar />
                <UserBar />
            </div>
        </header>
        
            <Outlet/>
        </>
    )
}


export default Header


