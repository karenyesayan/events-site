import { FaPhoneAlt } from 'react-icons/fa';

const PhoneNumber = () => {
    return (
        <div className='phone'>
            <div className='phone-icon'><FaPhoneAlt size={23} color={'white'}/></div>
            <div className='number'>111</div>
        </div>
    )
} 

export default PhoneNumber