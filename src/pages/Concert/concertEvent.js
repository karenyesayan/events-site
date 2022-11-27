import { useSelector } from "react-redux"
import { concertEventSelector } from "../../redux/slices/concertSlice"

const ConcertEvent = () => {
    const {id, name, img, info, date} = useSelector(concertEventSelector)

    return (
        <div className="theatre-schedule">
            <div className="theatre-schedule-container">
                <div className="theatre-schedule-img-div">
                    <img src={img} className="theatre-schedule-img"/>
                </div>
                <div className="theatre-schedule-title">
                    {name}
                </div>
                <div className="theatre-schedule-info">
                    {info}
                </div>
                <div >
                    {
                        date.map((event) => (
                            <div key={event.id} className="theatre-schedule-card">
                                <div className="theatre-schedule-title">
                                    {name}
                                </div>
                                <div className="theatre-schedule-date ">
                                    {event.date}
                                </div>
                                <div className="theatre-schedule-btn-div">
                                    <button className="theatre-schedule-btn">
                                        Buy ticket
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ConcertEvent