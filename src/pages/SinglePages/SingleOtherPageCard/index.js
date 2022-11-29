import {useLocation} from "react-router-dom"

import GoBackButton from "../../../components/GoBackButton/index"

const SingleOtherPageCard = () => {

    const {
        state: {
            title,
            genre,
            runtime,
            day,
            cinemas,
            price,
            about,
        }
    } = useLocation()


    return (
        <>
            <div className='single-card-container'>
                <GoBackButton />
                <div className="event-details">
                    <h2>{title}</h2>
                    <div className="event-details-props">
                        <div>
                            <span className="details-props-p">genre:</span>
                            <span className="details-props-h">{genre}</span>
                        </div>
                        <div>
                            <span className="details-props-p">runtime:</span>
                            <span className="details-props-h">{runtime} minutes</span>
                        </div>
                    </div>
                    <article>{about}</article>
                </div>
                <section className="ticket-details">
                    <span>{day}</span>
                    <div>
                        <span className="details-props-p">cinema:</span>
                        <span className="details-props-h">{cinemas}</span>
                    </div>
                    <div>
                        <span className="details-props-p">price:</span>
                        <span className="details-props-h">{price} AMD</span>
                    </div>
                    <button>Order tickets</button>
                </section>
            </div>
        </>
    )
}

export default SingleOtherPageCard