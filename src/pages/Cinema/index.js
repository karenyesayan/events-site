
import axios from "axios";
import { useEffect, useState } from "react"
import instance from "../../api/axios"



   const Cinema = () => {

    const[movies,setMovies] = useState([]);
   
       
   
   useEffect(() => {
  
       instance.get("/cinema")
        .then(res => setMovies(res.data))
          
   }, [])

      return (
      
        <div className="upcoming">
            <div className="upcoming-container">
                <div className="upcoming-title">
                    MOVIES
                </div>
                <div className="upcoming-events">
            {movies.map (item  => {
                return(
                    
                <div key = {item.id} className={"upcoming-event"}>
                    
                    
                    <div className="upcoming-event-img-div">
                        <img src={item.img} className="upcoming-event-img"/>
                    </div>
                    <div className="upcoming-event-title">
                        {item.title}
                    </div>
                    <div className="upcoming-event-date">
                        {item.day}
                    </div>
                    <div className="upcoming-event-info">
                        {item.about}
                    </div>
                    
                    <div className="upcoming-event-date">
                        {item.price}
                    </div>
                        <button className={"button-cinem"}>Buy now</button>
                        </div>
               
               
                )
            } ) }
            </div>
            </div >   
        </div>
            
            

                
                )
            }
        
    
    


export default Cinema