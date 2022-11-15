import { useState } from "react"
import instance from "../../api/axios"

const Registration = ({navigateTo}) => {

    const[userName,setUserName] = useState();
    const[userEmail,setUserEmail] = useState();
    const[userPass,setUserPass] = useState();

    let obj ={
      
        "userName": userName,
        "Email": userEmail,
        "pass": userPass
    }
    const submit = () => {
        instance.post("/users", obj )
       


    }

    return (

        <div className={"auth-container"}>    Registration
            <p> Name
                <input type={"text"} onChange={e => setUserName(e.target.value)}></input>
            </p>
            <p>Email
            <input type={"email"} onChange={e => setUserEmail(e.target.value)}></input>
            </p>
            <p>Password
            <input type={"password"} onChange={e => setUserPass(e.target.value)} ></input>
            </p>
            <button onClick={submit}> SUBMIT</button>
            
         
        </div>
    )
}
    
    export default Registration;