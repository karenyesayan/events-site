import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

import instance from "../../api/axios";
import { clubsEventSelector } from "../../redux/slices/clubsSlice"
import { selectEvent } from "../../redux/slices/eventSlice";
import { userSelector } from "../../redux/slices/userSlice";

const ClubsEvent = () => {
    const mainEvent = useSelector(clubsEventSelector)

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const {id, name, selectedEvents} = useSelector(userSelector);

    const navigateToTicket = () => {
        if (name) {
           const body ={selectedEvents:[mainEvent,...selectedEvents]}
           instance.patch(`users/${id}/`, body)
            dispatch(selectEvent(mainEvent))
            navigate('/ticket');
           
        } else { navigate('/myaccount') }
    }

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
                        <button onClick={navigateToTicket} className="theatre-schedule-btn">
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