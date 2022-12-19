import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

import instance from "../../api/axios";
import { clubsEventSelector } from "../../redux/slices/clubsSlice"
import { selectEvent } from "../../redux/slices/eventSlice";
import { userSelector } from "../../redux/slices/userSlice";
import { addEventToUser } from "../../redux/slices/userSlice";

const ClubsEvent = () => {
    const mainEvent = useSelector(clubsEventSelector)

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const {id, name, ewallet, selectedEvents} = useSelector(userSelector);

    const navigateToTicket = (activEvent) => { 
        if (id) {
            if (ewallet >= activEvent.price) {
                const body = { selectedEvents: [activEvent, ...selectedEvents]};
                instance.patch(`users/${id}/`, body);
                dispatch(selectEvent(activEvent));
                dispatch(addEventToUser(activEvent));
                navigate("/ticket");
            } else { alert(`Sorry${name} your Ewallet balance is, less than ticket's price`) }
        } else { navigate("/myaccount") }
    };


    return (
        <div className="theatre-schedule">
            <div className="theatre-schedule-container">
                <div className="theatre-schedule-img-div">
                    <img src={mainEvent.img} className="theatre-schedule-img"/>
                </div>
                <div className="theatre-schedule-title">
                    {mainEvent.name}
                </div>
                <div className="theatre-schedule-info">
                    {mainEvent.info}
                </div>
                <div >
                <div >
                    <div className="theatre-schedule-btn-div">
                        <button onClick={() => navigateToTicket(mainEvent)} className="theatre-schedule-btn">
                            Buy ticket
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ClubsEvent