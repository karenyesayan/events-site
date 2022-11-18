import instance from "../../api/axios"
import { useState } from "react"
import { set } from "immer/dist/internal"
import { useNavigate } from "react-router-dom"


const Admin = (navigateTo) => {
    const navigate = useNavigate()

    const [title,setTitle] = useState("")
    const [cinemas,setCinemas] = useState("")

    const newEvent = {
        "title": title,
        "cinemas": cinemas,

    }

    const submit = () => {
        instance.post("/users", newEvent)

    }

    return (

        <div className={"upcoming"}>  
        <h3 className={"login-registration"}>ADD NEW CINEMA</h3>
           <p className="p"> title </p>
           <input  className = {"input"} type={"text"} onChange={e => setTitle(e.target.value)}></input>
           <p className="p">"img" </p>
           
           <p className="p">Password </p>
           <input className = {"input"} type={"password"} onChange={e => setCinemas(e.target.value)} ></input>
           <p className="p"></p>
           <button className = {"button"} onClick={submit}> SUBMIT</button>
           <p className="p">Already have an account?</p>
           <button className = {"button"}  onClick={() => {navigate('/myaccount')}}
                   >LOGIN</button>
           
        
       </div>

    )
 

}

export default Admin