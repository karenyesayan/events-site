import {memo } from "react"
import {useNavigate} from "react-router-dom"


const OtherPageCard = ({id, title, genre, runtime, img, day, cinemas, price, about, lastItemRef}) => {
    const navigate = useNavigate()

    const navigateToDetails = () => {
      navigate(id, {
          state: {
              title,
              genre,
              runtime,
              day,
              cinemas,
              price,
              about,
          }
      })
    }


    return (
                  <div className="page-cards-container" ref={lastItemRef}>
                    <div className="card-img" style={{ 
                      backgroundImage:`url(${img})`
                      }}>
                    </div>
                    <div className="card-title">{title}</div>
                    <div className="card-nav">
                      <div onClick={navigateToDetails}>Details</div>
                      <div>Buy</div> 
                    </div>
                  </div>      
    )
}


export default memo(OtherPageCard)
