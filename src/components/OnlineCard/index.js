import {memo } from "react"

import useNavigateToDetails from "../../hooks/useNavigateToDetails"

const OnlineCard = ({id, title, genre, runtime, img, date, cinemas, price, about, trailer, production, lastItemRef}) => {
    const navigateToDetails = useNavigateToDetails()

    return (
                  <div className="online-cards-container" ref={lastItemRef}>
                    <div className="card-img" style={{ 
                      backgroundImage:`url(${img})`
                      }}>
                    </div>
                    <div className="card-title">{title}</div>
                    <div className="card-nav">
                      <div onClick={() => navigateToDetails({link: id, title, genre, runtime, date, cinemas, price, about, trailer, production})}>Details</div>
                      <div>Buy</div> 
                    </div>
                  </div>      
    )
}

export default memo(OnlineCard)
