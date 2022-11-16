import {NavLink, Outlet} from "react-router-dom";


import Search from "../Search";
import User from "../User";
import LanguageBar from "../LanguageBar";
import logo from "../../images/logo.png"

const navigation = [
    {
        id: '1',
        title: 'Home',
        to: 'home',
    },
    {
        id: '2',
        title: 'Cinema',
        to: 'cinema',
    },
    {
        id: '3',
        title: 'Concert',
        to: 'concert',
    },
    {
        id: '4',
        title: 'Theater',
        to: 'theater',
    },
    {
        id: '5',
        title: 'Opera & Ballet',
        to: 'operaBallet',
    },
    {
        id: '6',
        title: 'Clubs & Pubs',
        to: 'clubsPubs',
    },

    {
        id: '7',
        title: 'Other',
        to: 'other',
    },
]




const Header = () => {
    return (
        <>
        <header className='header'>
            <nav className='nav'>
                <div className="logo">
                    <img src={logo} className="Site-logo" alt="logo"></img>
                </div>
                    {
                        navigation.map(({id, title, to}) => (
                                <NavLink
                                    to={to}
                                    key={id}
                                    className={({isActive}) => isActive ? 'active-nav' : 'nav-item'}
                                >{title}
                                </NavLink>
                        ))
                    } 
                    <Search />
            </nav>
            <div className="rightBar">
                <LanguageBar />
                <User />
            </div>
        </header>
        
            <Outlet/>
        </>
    )
}


export default Header


