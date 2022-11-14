
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
      
        <div>
            {movies.map (item  => {
                return(
                    
                <div key = {item.id} style={{backgroundImage: `url(	)`}}>
                    
                    <img className="event-types-img"  src={item.img}/>
                    <div className={"cin"} >
                    <h2 className={""}>{item.day}</h2>
                        <h1 className={""}>"{item.title}"</h1>
                        <h5 className={""}>{item.cinemas}</h5>
                        <h2 className={""}>{item.price}dr. </h2>
                        <button>Buy now</button>
                    </div>

                </div>
                
                )})
            }
        </div>
    )
    
}


export default Cinema