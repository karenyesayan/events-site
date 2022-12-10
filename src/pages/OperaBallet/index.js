import { useEffect, useState } from 'react';
import instance from '../../api/axios'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setOperaEvent } from '../../redux/slices/operaSlice';

const OperaBallet = () => {
    const[opera, setOpera] = useState([]);
   
    const dispatch = useDispatch()
    const navigate = useNavigate()
   
    useEffect(() => {
      instance.get('operaBallet')
          .then(res => {
              setOpera(res.data)
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
  
      dispatch(setOperaEvent(eventObj))
      navigate('/operaEvent')
    }
  
      return (
  
          <div className='theatre-back'>
              <div className='theatre-container'>
                  {opera.map (({id, title, img, info, date, time, ticket})  => {
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
                                 Tickets {ticket !== 'Free' ? `${ticket}dr.` : ticket} 
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


export default OperaBallet