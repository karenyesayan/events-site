import { useEffect, useState } from 'react';
import instance from '../../api/axios'
import { useDispatch } from 'react-redux'
import { setTheatreEvent } from '../../redux/slices/theatreSlice';
import { useNavigate } from 'react-router-dom'
import { setConcertEvent } from '../../redux/slices/concertSlice';

const ClubsPubs = () => {
    const[concert, setConcert] = useState  ([]);
   
    const dispatch = useDispatch()
    const navigate = useNavigate()
   
    useEffect(() => {
      instance.get('concert')
          .then(res => {
              setConcert(res.data)
          })
          .catch(err => {
              console.log(err)
          })
    }, [])
    
  
    const moreInfo = (id, title, img, info, date, price) => {
      const eventObj = {
          id,
          title,
          img,
          info,
          date,
          price,
      }
  
      dispatch(setConcertEvent(eventObj))
      navigate('/concertEvent')
    }
  
      return (
  
          <div className='theatre-back'>
              <div className='theatre-container'>
                  {concert.map (({id, title, img, info, date, price})  => {
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
                                  Since {date}
                              </div>
                              <div className="theatre-info" >
                                  {info}
                              </div>
                              <div >
                                 Tickets {price} dr.
                              </div>
                              <button onClick={() => moreInfo(id, title, img, info, date, price)} className='theater-btn'>
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