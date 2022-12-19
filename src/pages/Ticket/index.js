import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { eventSelector } from "../../redux/slices/eventSlice";
import { ewalletBalance, userSelector } from "../../redux/slices/userSlice"
import instance from '../../api/axios'

const Ticket = (navigateTo) => {
    const navigate = useNavigate();
    const { id, name, ewallet } = useSelector(userSelector);
    const activEvent = useSelector(eventSelector);
    const dispatch = useDispatch();

    console.log('userId', id)

    useEffect(() => {
        setTimeout(() => {
            navigate("/profile")
        }, 3000);

        const balance = ewallet - activEvent.price;
        instance.patch(`users/${id}`, {ewallet: balance})
        dispatch(ewalletBalance(balance));
    }, [])


    return (

        <div className="label"> dear {name}
            <h1>e-ticket {activEvent.title}</h1>
            <img src={"https://media.istockphoto.com/id/1130968355/vector/cinema-ticket-on-white-background-movie-ticket-template-in-black-and-red-colors.jpg?s=612x612&w=is&k=20&c=xARjInKjIx4A1_z8wjltWtC_XXH9e5v0fQzQaSWdVPQ="} className="upcoming-event-img" />
            <span>Your ewallet balance is:</span>
            <span>{ewallet} </span>
        </div>
    )
}
export default Ticket;