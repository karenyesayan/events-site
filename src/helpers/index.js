import instance from "../api/axios";
import { addEventToUser, } from "../redux/slices/userSlice";
import { selectEvent } from "../redux/slices/eventSlice";

export const hash = () => Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(2);

export const navigateToTicket = ({id , selectedEvents, dispatch, navigate, activEvent}) => { 
        if (id) {
            const body = { selectedEvents: [activEvent, ...selectedEvents]};
            instance.patch(`users/${id}/`, body);
            dispatch(selectEvent(activEvent));
            dispatch(addEventToUser(activEvent));
            navigate("/ticket");
        } else { navigate("/myaccount") }
    };