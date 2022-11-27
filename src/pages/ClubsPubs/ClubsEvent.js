import { useSelector } from "react-redux"
import { clubsEventSelector } from "../../redux/slices/clubsSlice"

const ClubsEvent = () => {
    const {id, name, img, info, date} = useSelector(clubsEventSelector)

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

export default ClubsEvent