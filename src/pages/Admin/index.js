import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { userSelector } from "../../redux/slices/userSlice"
import instance from "../../api/axios"


const Admin = (navigateTo) => {
   const navigate = useNavigate();
   const user = useSelector(userSelector);

   const [path, setPath] = useState("")
   const [title, setTitle] = useState("")
   const [image, setImage] = useState(null)
   const [cinemas, setCinemas] = useState("")
   const [date, setDate] = useState(null)
   const [price, setPrice] = useState(null)
   const [info, setInfo] = useState("")

   const newEvent = {
      "title": title,
      "img": image,
      "cinemas": cinemas,
      "date": date,
      "price": price,
      "info": info
   }

   const id = () => Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(2);


   const addNewEvent = () => {
      instance.post(path, { id: id(), ...newEvent })
         }

   const cencel = () => {
      navigate("/admin")
   }

   return (
      <div className={"upcoming"}>
         <h1> {user.name} </h1>
         <title className={"login-registration"}>ADD NEW CINEMA</title>
         <div className={"form"}>
            <div className={"group"}>
               <label className={"label"}> Event Type </label>
               <input className={"input"} type={"text"} onChange={e => setPath((e.target.value))}></input>
            </div>
            <div className={"group"}>
               <label className={"label"}> Title </label>
               <input className={"input"} type={"text"} onChange={e => setTitle(e.target.value)}></input>
            </div>
            <div className={"group"}>
               <label className={"label"}>img </label>
               <input className={"input"} type={"text"} onChange={e => setImage(e.target.value)}></input>
            </div>
            <div className={"group"}>
               <label className={"label"}> Cinemas </label>
               <input className={"input"} type={"text"} onChange={e => setCinemas(e.target.value)}></input>
            </div>
            <div className={"group"}>
               <label className={"label"}> Date </label>
               <input className={"input"} type={"date"} onChange={e => setDate(e.target.date)}></input>
            </div>
            <div className={"group"}>
               <label className={"label"}> Price </label>
               <input className={"input"} type={"text"} onChange={e => setPrice(e.target.value)}></input>
            </div>
            <div className={"group"}>
               <label className={"label"}> Info </label>
               <input className={"input"} type={"text"} onChange={e => setInfo(e.target.value)}></input>
            </div>
            <div className={"group"}>
               <center>
                  <button className={"button"} onClick={addNewEvent}> Add</button>
                  <b> </b>
                  <button className={"button"} onClick={cencel}>Cencel</button>
               </center>
               <center>
               </center>
            </div>
         </div>
      </div>
   )
}

export default Admin;