import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import instance from "../../api/axios";
import { userSelector } from "../../redux/slices/userSlice";
//port { navigateToTicket } from "../../helpers";
import { addEventToUser } from "../../redux/slices/userSlice";
import { selectEvent } from "../../redux/slices/eventSlice";


const Cinema = (navigateTo) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { id, name, ewallet, selectedEvents } = useSelector(userSelector);

    const [movies, setMovies] = useState([]);


    useEffect(() => {
        instance.get("cinema")
            .then(res => setMovies(res.data))
            .catch(err => {
                console.log(err)
            })
    }, [])

    const navigateToTicket = (activEvent) => {
        if (id) {
            if (ewallet >= activEvent.price) {
                const body = { selectedEvents: [activEvent, ...selectedEvents] };
                instance.patch(`users/${id}/`, body);
                dispatch(selectEvent(activEvent));
                dispatch(addEventToUser(activEvent));
                navigate("/ticket");
            } else { alert(`Sorry${name} your Ewallet balance is, less than ticket's price`) }
        } else { navigate("/myaccount") }
    }

    return (
        <div className="cinema">
            <div className="cinema-container">
                <h1 className="upcoming-title">
                    MOVIES
                </h1>
                <div className="cinema-events">
                    {movies.map((item) => {
                        const { id, img, title, date, info, price } = item

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
                                    {price}
                                </div>
                                <button className={"theatre-schedule-btn"}
                                    onClick={() => navigateToTicket(item)}
                                >Buy now</button>
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