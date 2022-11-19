import instance from "../../api/axios"
import { useState } from "react"

import { useNavigate } from "react-router-dom"
import { defaultEqualityCheck } from "reselect"


const Admin = (navigateTo) => {
    const navigate = useNavigate()

    const [path,setPath] = useState("")
    const [title,setTitle] = useState("")
    const [image,setImage] = useState(null)
    const [cinemas,setCinemas] = useState("")
    const [date,setDate] = useState(null)
    const [price,setPrice] = useState(null)
    const [info,setInfo] = useState("")

    const newEvent = {
        "title": title,
        "image" : image,
        "cinemas": cinemas,
        "date": date,
        "price": price,
        "info": info

    }

    const add = () => {
        instance.post(path, newEvent)

    }

    const cencel = () => {
       navigate("/admin")

    }

    return (

        <div className={"upcoming"}>  
         <h3 className={"login-registration"}>ADD NEW CINEMA</h3>
           <p className="p"> Event Type </p>
           <input  className = {"input"} type={"text"} onChange={e => setPath("/"+(e.target.value))}></input>
           <p className="p"> Title </p>
           <input  className = {"input"} type={"text"} onChange={e => setTitle(e.target.value)}></input>
           <p className="p">img </p>
           <input  className = {"input"} type={"image"} onChange={e => setCinemas(e.target.image)}></input>
           <p className="p"> Cinemas </p>
           <input  className = {"input"} type={"text"} onChange={e => setCinemas(e.target.value)}></input>
           <p className="p"> Date </p>
           <input  className = {"input"} type={"date"} onChange={e => setDate(e.target.date)}></input>
           <p className="p"> Price </p>
           <input  className = {"input"} type={"text"} onChange={e => setPrice(e.target.value)}></input>
           <p className="p"> Info </p>
           <input  className = {"input"} type={"text"} onChange={e => setInfo(e.target.value)}></input>
          <div>
             <button className = {"button"} onClick={add}> Add</button>
             <button className = {"button"}  onClick={{cencel}}>Cencel</button>
           </div>   
        
       </div>
             

    )
 

}

export default Admin