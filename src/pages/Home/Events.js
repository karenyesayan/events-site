import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import instance from "../../api/axios"

const Events = () => {
  const [eventTypes, setEventTypes] = useState([])

  useEffect(() => {
      instance.get('eventTypes')
        .then(res => {
        setEventTypes(res.data)
        })
        .catch(err => {
            console.log(err)
        })
  }, [])

  const navigate = useNavigate()

    return (
        <div className="event-types-cards">
            <div className="event-types-card">
                {
                    eventTypes.map(({id, src, title, navigateTo}) => (
                        
                        <div onClick={() => navigate(`/${navigateTo}`)} key={id} className='event-types-card'>
                            <div className="event-types-img-div">
                                <img className="event-types-img" src={src}/>
                                <div className="event-types-title">
                                    {title}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Events