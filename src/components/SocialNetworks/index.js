import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

const SocialNetworks = () => {

    return (
        <div className='networks'>
            {/* TODO: change divs to a like below */}

            {/*<a className='facebook' href="https://www.facebook.com/" target='_blank'>*/}
            {/*    <FaFacebookF size={28} color='white'/>*/}
            {/*</a>*/}
            <div
                className='facebook'
                onClick={() => window.open('https://www.facebook.com/', '_blank')}
             ><FaFacebookF size={28} color={'white'}/></div>
            <div
                className='instagram'
                onClick={() => window.open('https://www.instagram.com/', '_blank')}
            ><FaInstagram size={28} color={'white'}/></div>
            <div
                className='youtube'
                onClick={() => window.open('https://www.youtube.com/', '_blank')}
            ><FaYoutube size={28} color={'white'}/></div>
        </div>
    )
}

export default SocialNetworks
