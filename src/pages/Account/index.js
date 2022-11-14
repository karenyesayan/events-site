import { useState } from "react";
import { useEffect } from "react";
import instance from "../../api/axios";
import Registration from "../Registration";
import { useNavigate } from "react-router-dom";


const Account = (navigateTo) => {
    const navigate = useNavigate()

    const[users,setUsers] = useState([]);
    (console.log(users))

   // useEffect(() => {
  
      //  instance.get("/users")
      //   .then(res => setUsers(res.data))
         
           
 //   }, [])

    return (
        
            <div className='auth-container'>
                <h3>LOGIN</h3>
                <input
                    type="text"
                  //  value={userName}
                    className='auth-input'
                    placeholder='username'
                   // onChange={e => setUserName(e.target.value)}
                />
                <input
                    type="E-mail"
                  //  value={userName}
                    className='auth-input'
                    placeholder='E-mail'
                   // onChange={e => setUserName(e.target.value)}
                />
                <input
                    type="password"
                  //  value={password}
                    className='auth-input'
                    placeholder='password'
                 //   onChange={e => setPassword(e.target.value)}
                />
                <button
                    className='auth-submit'
                //    onClick={handleLogin}
                >
                    Log in
                </button>
                 
                <div className='auth-navigate'>
                    <p className='auth-notification'>Don`t have an account?</p>
                    <button
                        className='auth-submit'
                       onClick={() => navigateTo("registration")}
                    >Sign up</button>
                </div>
            </div>
        )
    }
    
   
   

export default Account