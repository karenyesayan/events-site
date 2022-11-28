import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const SocialNetworks = () => {
    return (
        <div className='networks-container'>
            <a className='facebook' href="https://www.facebook.com/" target='_blank'> 
               <FaFacebookF size={28} color='white'/>
            </a>
            <a className='instagram' href="https://www.instagram.com/" target='_blank'> 
                <FaInstagram size={28} color='white'/>
            </a>
            <a className='youtube' href="https://www.youtube.com/" target='_blank'> 
                <FaYoutube size={28} color='white'/>
            </a>
        </div>
    )
} 

export default SocialNetworks