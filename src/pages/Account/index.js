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

                   


               const handleLogin  = () => {
                users.map(item => {
                    if(item.userName === userName && item.email === userEmail && item.pass === userPass)  {
                        console.log(item.userName,item.Email,item.pass)
                        navigate('/profile') 
                    } else {
                        navigate('/registration') 
                                               
                    }
                 } 
                )
                }
                        

    return (
        
            <div className="upcoming">
                <div >
                <h3 className={"login-registration"}>Personal details</h3>
                <p className="p">Name </p>
                <input
                    type="text"
                    value={userName}
                    className = {"input"}
                    placeholder='username'
                   onChange={e => setUserName(e.target.value)}
             
                />
                <p className="p">Email </p>
                <input
                    type="E-mail"
                    value={userEmail}
                    className = {"input"}
                    placeholder='E-mail'
                    onChange={e => setUserEmail(e.target.value)}
                />
                <p className="p">Password</p>
                <input
                    type="password"
                    value={userPass}
                    className = {"input"}
                    placeholder='password'
                  onChange={e => setUserPass(e.target.value)}
                />
                <p className="p"></p>
                <button
                    className = {"button"}
                   onClick={handleLogin}
                >
                    Log in
                </button>
                                 
                <div className='auth-navigate'>
                    <p className="p">Don`t have an account?</p>
                    <button
                        className = {"button"}
                       onClick={() => {navigate('/registration')}}
                    >Sign up</button>
                </div>
                </div>
            </div>
        
        )
     }

   
   

export default Account