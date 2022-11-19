import { useState, useEffect } from "react";
import instance from "../../api/axios";
import Registration from "../Registration";
import { useNavigate } from "react-router-dom";
import Profile from "../Profile";


const Account = (navigateTo) => {
    const navigate = useNavigate()

    const [userName,setUserName] = useState("");
    const [userEmail,setUserEmail] = useState("");
    const [userPass,setUserPass] = useState("");
    const [users,setUsers]= useState([]);
   
  
    
    useEffect(() => {
        instance.get("/users")
            .then(res => {setUsers(res.data)} )
    }, [])

        const admin = {
            id: 0,
            userName: "ADMIN",
            email: "ADMIN@gmail.com",
            pass: "ADMIN"
        }
                  const handleLogin = () => {
                    users.map(item => {

                    if(item.name === userName && item.email === userEmail   && item.pass === userPass )  {
                   
                    navigate('/profile') 
                               
                     } else if (admin.userName === userName && admin.email === userEmail && admin.pass === userPass)  {
                        navigate('/admin')                 
                      } else {
                        navigate('/registration') 
                                               
                      }
                    }
                )
                }
        
                        

    return (
        <div className={"upcoming"}>
<title className={"login-registration"}>Personal details</title>
    <form className={"form"}>  
            <div className={"group"}>
            <label className={"label"}> Name </label>
                <input
                    type="text"
                    value={userName} 
                    className = {"input"}
                    placeholder='username'
                   onChange={e => setUserName(e.target.value)}
             
                />
            </div>
            <div className={"group"}>
            <label className={"label"}> Email </label>
                <input
                    type="E-mail"
                    value={userEmail}
                    className = {"input"}
                    placeholder='E-mail'
                    onChange={e => setUserEmail(e.target.value)}
                />
                </div>
                <div className={"group"}>
            <label className={"label"}> Password </label>
                <input
                    type="password"
                    value={userPass}
                    className = {"input"}
                    placeholder='password'
                  onChange={e => setUserPass(e.target.value)}
                />
                </div>
                <div className={"group"}>
            <center>
                <button
                    className = {"button"}
                   onClick={handleLogin}
                >
                    Login
                </button>
                </center>
                                 
                <div className='auth-navigate'>
                    <p className="p">Don`t have an account?</p>
                    <center>
                        <button
                        className = {"button"}
                       onClick={() => {navigate('/registration')}}
                    >Sign up
                    </button>
                    </center>
                </div>
                </div>
            
        </form>  
        </div>
       
        )
     }

   
   

export default Account