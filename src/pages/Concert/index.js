import { useEffect, useState } from 'react';
import instance from '../../api/axios'
import { useDispatch } from 'react-redux'
import { setTheatreEvent } from '../../redux/slices/theatreSlice';
import { useNavigate } from 'react-router-dom'
import { setConcertEvent } from '../../redux/slices/concertSlice';

const ClubsPubs = () => {
    const[theater,setTheater] = useState  ([]);
   
    const dispatch = useDispatch()
    const navigate = useNavigate()
   
    useEffect(() => {
      instance.get('concert')
          .then(res => {
              setTheater(res.data)
          })
          .catch(err => {
              console.log(err)
          })
    }, [])
    
  
    const moreInfo = (id, name, img, info, date, ticket) => {
      const eventObj = {
          id,
          name,
          img,
          info,
          date,
          ticket,
      }
  
      dispatch(setConcertEvent(eventObj))
      navigate('/concertEvent')
    }
  
      return (
  
          <div className='theatre-back'>
              <div className='theatre-container'>
                  {theater.map (({id, name, img, info, date, time, ticket})  => {
                      return(
                          <div className="theatre"
                              key = {id}>
                              <div>
                                  <img className='theatre-img' src={img}/>
                              </div>
                              <div className="theatre-name">
                                  {name}
                              </div>
                              <div className="theatre-date">
                                  Since {date[0].date}
                              </div>
                              <div className="theatre-info" >
                                  {info}
                              </div>
                              <div >
                                 Tickets {ticket !== 'Free' ? `${ticket}dr.` : ticket} 
                              </div>
                              <button onClick={() => moreInfo(id, name, img, info, date, time, ticket)} className='theater-btn'>
                                  Buy now
                              </button>
                          </div>
                      )})
                  }
              </div>
          </div>
      )
}


export default ClubsPubs