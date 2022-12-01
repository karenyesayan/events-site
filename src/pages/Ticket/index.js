import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { userSelector } from "../../redux/slices/userSlice"


const Ticket = (navigateTo) => {
    const navigate = useNavigate();
    const user = useSelector(userSelector);
    
    useEffect(() => {
        setTimeout(() => {
            navigate('/profile')
        },3000)
        
    },)


    return (

        <div> dear {user.name}
            <h1>This is your e-ticket</h1>
            <img src={"https://media.istockphoto.com/id/1130968355/vector/cinema-ticket-on-white-background-movie-ticket-template-in-black-and-red-colors.jpg?s=612x612&w=is&k=20&c=xARjInKjIx4A1_z8wjltWtC_XXH9e5v0fQzQaSWdVPQ="} className="upcoming-event-img" />
        </div>
       
    )

}
export default Ticket;