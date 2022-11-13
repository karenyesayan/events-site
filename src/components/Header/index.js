import {NavLink, Outlet} from "react-router-dom";


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
        title: 'Other',
        to: 'other',
    },
]

const Header = () => {


    return (
        <>
        <header className='header'>
            <div>Logo</div>
            <nav>
                <ul className='nav'>
                    {
                        navigation.map(({id, title, to}) => (
                            <NavLink
                                to={to}
                                key={id}
                                className={({isActive}) => isActive ? 'active-nav' : 'nav'}
                            >{title}
                            </NavLink>
                        ))
                    }
                </ul>
                <input 
                    type="search" 
                    className="site-search"  
                    placeholder="search">
                </input>
                <div>
                    <NavLink
                        to={"myaccount"}
                        key={"5"}
                        className={({isActive}) => isActive ? 'active-account' : 'account'}
                    >Personal account
                    </NavLink>
                </div>
            </nav>
        </header>
            <Outlet/>
        </>
    )
}


export default Header


