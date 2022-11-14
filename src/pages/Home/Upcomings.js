import { useEffect, useState } from "react"
import instance from "../../api/axios"

const Upcomings = () => {
    const [upcomingEvents, setUpcomingEvents] = useState([])

    useEffect(() => {
        instance.get('upcomingEvents')
        .then(res => {
            setUpcomingEvents(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div className="upcoming">
            <div className="upcoming-container">
                <div className="upcoming-title">
                    Upcoming events
                </div>
                <div className="upcoming-events">
                {
                    upcomingEvents.map(({id, img, title, date, info}) => (
                        <div key={id} className="upcoming-event">
                            <div className="upcoming-event-img-div">
                                <img src={img} className="upcoming-event-img"/>
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
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default Upcomings