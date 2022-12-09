import {useNavigate} from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

const GoBackButton = () => {
    const navigate = useNavigate()

    return (
        <div 
            className='go-back-button'
            onClick={() => navigate(-1)}
            >
            <IoMdArrowBack size={30} color="white"/>
        </div>
    )
} 

export default GoBackButton