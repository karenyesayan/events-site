import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { userSelector } from "../../redux/slices/userSlice"


const Ticket = (navigateTo) => {
    const navigate = useNavigate();
    const user = useSelector(userSelector);
    const movie = useSelector(state => state.movie.movie);

    return (

        <div> hello {user.name}
            <h1>this is your ticket for movie "{movie.title}"</h1>
            <img src={"https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/5fe02b5de8d23_json_image_1608526685.webp"} className="upcoming-event-img" />
        </div>

    )

}
export default Ticket;