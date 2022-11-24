import { FaRegUser } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const User = () => {
    const navigate = useNavigate();

    return (
        <div className='user' onClick={() => navigate("/myaccount")}>
            <div className='user-icon'>
                <FaRegUser />
            </div>
            <div className='nav-ref'>
                Personal account
            </div>
        </div>
    )
} 

export default User


