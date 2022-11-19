import { useState } from "react"
import instance from "../../api/axios"
import { useNavigate } from "react-router-dom";


const Registration = ({navigateTo}) => {
    const navigate = useNavigate()

    const [userName,setUserName] = useState("");
    const [userEmail,setUserEmail] = useState("");
    const [userPass,setUserPass] = useState("");

    const hash = () => Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(2);

    let obj ={
        "id": hash,   
        "userName": userName,
        "email": userEmail,
        "pass": userPass
    }
    const submit = () => {
        instance.post("/users", obj )
        navigate('/myaccount')
       
    }

    return (

        <div className={"upcoming"}>  
         <h3 className={"login-registration"}>registration</h3>
            <p className="p"> Name </p>
            <input  className = {"input"} type={"text"} onChange={e => setUserName(e.target.value)}></input>
            <p className="p">Email </p>
            <input className = {"input"} type={"email"} onChange={e => setUserEmail(e.target.value)}></input>
            <p className="p">Password </p>
            <input className = {"input"} type={"password"} onChange={e => setUserPass(e.target.value)} ></input>
            <p className="p"></p>
            <button className = {"button"} onClick={submit}> SUBMIT</button>
            <p className="p">Already have an account?</p>
            <button className = {"button"}  onClick={() => {navigate('/myaccount')}}
                    >LOGIN</button>
            
         
        </div>
    )
}
    
    export default Registration;