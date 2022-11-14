import { useCallback, useEffect, useState } from "react"

import instance from "../../api/axios"

const Schedule = () => {
    const [events, setEvents] = useState([])
    const [filtered, setFiltered] = useState([])
    const [date, setDate] = useState('')
    const [choosed, setChoosed] = useState(false)

    useEffect(() => {
        instance.get('events')
          .then(res => {
              setEvents(res.data)
          })
          .catch(err => {
              console.log(err)
          })
      }, [])

      useEffect(() => {
        if(date == false){
            setChoosed(false)
            console.log('choosed', choosed)
        } else {
            setChoosed(true)
        }
      })

    const getDate = e => {
        setDate(e.target.value)
    }

    useEffect(() => {
        const filteredEvents = events.filter(event => {
            return event.date.includes(date)
                
        })

        setFiltered(filteredEvents)
    }, [date])


    return(
        <div className="schedule">
            <div className="schedule-title">
                Schedule
            </div>
            <div className="scgedule-date-div">
                <input onChange={getDate} className="schedule-date" type='date'/>
            </div>
            <div className="schedule-events">
                {
                   filtered.length !== 0 ? filtered.map(({id, img, title, date, time, place}) => (
                        <div className="schedule-event">
                            <div className="event-img-div">
                                <img src="https://storage.googleapis.com/afs-prod/media/e53811360eed4b8ba26b5f635d703a7c/3000.jpeg" className="event-img"/>
                            </div>
                            <div className="event-info">
                                <div className="event-title">
                                    title
                                </div>
                                <div className="event-place">
                                    place
                                </div>
                            </div>
                            <div className="event-date">
                                {date}
                            </div>
                            <div className="event-ticket">
                                Get tickets
                            </div>
                        </div> 
                    )) : choosed ? <div className="event-error"> There are no events on this date</div> : <div className="choose">Choose the date</div>
                }
            </div>
        </div>
    )
}

export default Schedule