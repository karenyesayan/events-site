import { FaRegUser } from 'react-icons/fa';
import {NavLink} from "react-router-dom";

const User = () => {
    return (
        <div className='user'>
            <NavLink
                to={"myaccount"}
                key={"5"}
                className={({isActive}) => isActive ? 'active-account' : 'account'}
            ><FaRegUser />   Personal account  
            </NavLink>
        </div>
    )
} 

export default User
