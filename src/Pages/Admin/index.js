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
    const id = () => Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(2);
   

    const add = () => {
        instance.post(path, {id:id(),...newEvent});

    }

    const cencel = () => {
       navigate("/admin")

    }

    return (

        <div className={"upcoming"}>
        <title className={"login-registration"}>ADD NEW CINEMA</title>
            <div className={"form"}>  
      
        <div className={"group"}>
           <label className={"label"}> Event Type </label>
           <input  className = {"input"} type={"text"} onChange={e => setPath("/" + (e.target.value))}></input>
        </div>
        <div className={"group"}>
           <label className={"label"}> Title </label>
           <input  className = {"input"} type={"text"} onChange={e => setTitle(e.target.value)}></input>
        </div> 
        <div className={"group"}>
           <label className={"label"}>img </label>
           <input  className = {"input"} type={"ref"} onChange={e => setCinemas(e.target.ref)}></input>
        </div>
        <div className={"group"}>
           <label className={"label"}> Cinemas </label>
           <input  className = {"input"} type={"text"} onChange={e => setCinemas(e.target.value)}></input>
        </div>
        <div className={"group"}>
           <label className={"label"}> Date </label>
           <input  className = {"input"} type={"date"} onChange={e => setDate(e.target.date)}></input>
        </div>
        <div className={"group"}>
           <label className={"label"}> Price </label>
           <input  className = {"input"} type={"text"} onChange={e => setPrice(e.target.value)}></input>
        </div>
        <div className={"group"}>
           <label className={"label"}> Info </label>
           <input  className = {"input"} type={"text"} onChange={e => setInfo(e.target.value)}></input>
        </div>  
          <div className={"group"}>
           <center>
             <button className = {"button"} onClick={add}> Add</button> 
             <b> </b>
             <button className = {"button"}  onClick={cencel}>Cencel</button>
             </center>
<center>
             
             </center>           
           </div>   
        
       </div>
             
</div>
    )
 

}

export default Admin