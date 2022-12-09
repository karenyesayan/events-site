import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";

import instance from "../../api/axios"
import { useNavigate } from "react-router-dom";
import { userSelector } from "../../redux/slices/userSlice";
import { selectEvent } from "../../redux/slices/eventSlice";

const Cinema = ({ navigateTo }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id, name, selectedEvents} = useSelector(userSelector);

    const [movies, setMovies] = useState([]);


    useEffect(() => {
        instance.get("cinema")
            .then(res => setMovies(res.data))
            .catch(err => {
                console.log(err)
            })
    }, [])


    const navigateToTicket = (event) => {
        if (name) {
            const body = { selectedEvents: [event, ...selectedEvents]}
            instance.patch(`users/${id}/`, body)
            dispatch(selectEvent(event))
            navigate('/ticket');
        } else { navigate('/myaccount') }
    }


    return (

        <div className="cinema">
            <div className="cinema-container">
                <div className="cinema-events">
                    {movies.map(({ id, img, title, date, info, price }) => {
                        return (
                            <div key={id} className={"movie-events"}>
                                <div className="upcoming-event-img-div">
                                    <img src={img} className="upcoming-event-img" />
                                </div>
                                <div className="upcoming-event-title">
                                    {title}
                                </div>
                                <div className="upcoming-event-date">
                                    {date}
                                </div>
                                <div className="upcoming-event-info">
                                    {info}
                                </div>
                                <div className="upcoming-event-date">
                                    {price} dram
                                </div>
                                <button className={"theatre-schedule-btn"} onClick={() => navigateToTicket({id, title, img, price, date })} >Buy now</button>
                            </div>
                        )
                    }
                    )
                    }
                </div>
            </div >
        </div>
    )
}

export default Cinema;