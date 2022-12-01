import { useNavigate } from "react-router-dom"
import { FaRegUser } from 'react-icons/fa'

import { useLanguage } from "../../contexts/LanguageProvider"

const UserBar = () => {
    const navigate = useNavigate();

    const { t } = useLanguage();

    return (
        <div className='user-bar' onClick={() => navigate("/myaccount")}>
            <div className='user-bar-icon'>
                <FaRegUser />
            </div>
            <div className='user-bar-ref'>
                {t("Personal account")}
            </div>
        </div>
    )
} 

export default UserBar


