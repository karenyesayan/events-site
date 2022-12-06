import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";

import instance from "../../api/axios"
import { useNavigate } from "react-router-dom";
import { userSelector } from "../../redux/slices/userSlice";
import { movie } from "../../redux/slices/moviesSlice";



const Cinema = ({ navigateTo }) => {

    const navigate = useNavigate();

    const user = useSelector(userSelector);

    const [movies, setMovies] = useState([]);
    const [activMovie, setActivMovie] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        instance.get("cinema")
            .then(res => setMovies(res.data))
            .catch(err => {
                console.log(err)
            })
    }, [])


    const navigateToTicket = () => {
        if (user.name) {
            navigate('/ticket');
        } else { navigate('/myaccount') }
    }


    return (

        <div className="upcoming">
            <div className="upcoming-container">
                <div className="upcoming-title">
                    MOVIES
                </div>
                <div className="upcoming-events">
                    {movies.map(item => {
                        return (
                            <div key={item.id} className={"upcoming-event"}>
                                <div className="upcoming-event-img-div">
                                    <img src={item.img} className="upcoming-event-img" />
                                </div>
                                <div className="upcoming-event-title">
                                    {item.title}
                                </div>
                                <div className="upcoming-event-date">
                                    {item.date}
                                </div>
                                <div className="upcoming-event-info">
                                    {item.info}
                                </div>
                                <div className="upcoming-event-date">
                                    {item.price}
                                </div>
                                <button className={"button-cinem"} onClick={navigateToTicket    } >Buy now</button>
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