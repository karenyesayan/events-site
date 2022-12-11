import {useLocation} from "react-router-dom"

import GoBackButton from "../../../components/GoBackButton/index"
import Trailer from "../../../components/Trailer/index"

import useOnlineContentBuy from "../../../hooks/useOnlineContentBuy"

const SingleOnline = () => {

    const onlineContentBuy = useOnlineContentBuy()

    const {
        state: {
            title,
            genre,
            runtime,
            img,
            date,
            cinemas,
            price,
            about,
            trailer, 
            production,
        }
    } = useLocation()


    return (
        <>
            <div className='single-card-container'>
                <GoBackButton />
                <div className="content-container">
                    <Trailer src={trailer}/>
                     <h2>{title}</h2>
                     <section className="content-details">
                        <button
                            onClick={() => onlineContentBuy({title, genre, runtime, img, date, cinemas, price, about, trailer, production})}
                        >Buy {price} AMD</button>
                        <span className="card-date"> {date} |</span>
                        <span> {genre} |</span>
                        <span> {runtime} min.</span>
                     </section>
                     <article>{about}</article>
                </div>
            </div>
        </>
    )
}

export default SingleOnline