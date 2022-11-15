
import axios from "axios";
import { useEffect, useState } from "react"
import instance from "../../api/axios"



   const Cinema = () => {

    const[movies,setMovies] = useState([]);
   
       
   
   useEffect(() => {
    axios.
        get("http://localhost:3000/cinema")
        .then(res => setMovies(res.data))
          
   }, [])

    

    return (

        <div>
            {movies.map (item  => {
                return(
                    
                <div className={"cin"}  
                    key = {item.id}>
                    <p className="cinemaCinemas">{item.cinemas}</p>
                    <p className="cinemaTitle" >"{item.title}"</p>
                    <p className="cinemaDay">{item.day}</p>
                    <p>{item.price}dr. </p>
                    <button>Buy now</button>

                </div>
                
                )})
            }
        </div>
    )
    
}


export default Cinema