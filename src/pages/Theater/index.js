import { useEffect, useState } from 'react';
import instance from '../../api/axios'
import { useDispatch } from 'react-redux'
import { setTheatreEvent } from '../../redux/slices/theatreSlice';
import { useNavigate } from 'react-router-dom'

const Theater = () => {
  const[theater, setTheater] = useState([]);
   
  const dispatch = useDispatch()
  const navigate = useNavigate()
 
  useEffect(() => {
    instance.get('theater')
        .then(res => {
            setTheater(res.data)
        })
        .catch(err => {
            console.log(err)
        })
  }, [])
  

  const moreInfo = (id, title, img, info, date, ticket) => {
    const eventObj = {
        id,
        title,
        img,
        info,
        date,
        ticket,
    }

    dispatch(setTheatreEvent(eventObj))
    navigate('/singleEvent')
  }

    return (

        <div className='theatre-back'>
            <div className='theatre-container'>
                {theater.map (({id, title, img, info, date, time, ticket})  => {
                    return(
                        <div className="theatre"
                            key = {id}>
                            <div>
                                <img className='theatre-img' src={img}/>
                            </div>
                            <div className="theatre-name">
                                {title}
                            </div>
                            <div className="theatre-date">
                              Since {date[0].date}
                            </div>
                            <div className="theatre-info" >
                                {info}
                            </div>
                            <div >
                                Tickets {ticket}dr. 
                            </div>
                            <button onClick={() => moreInfo(id, title, img, info, date, time, ticket)} className='theater-btn'>
                                Buy now
                            </button>
                        </div>
                    )})
                }
            </div>
        </div>
    )
  }
  
  export default Theater