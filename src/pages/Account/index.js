import { useState } from "react";
import { useEffect } from "react";
import instance from "../../api/axios";
import Registration from "../Registration";
import { useNavigate } from "react-router-dom";
import Profile from "../Profile";


const Account = (navigateTo) => {
    const navigate = useNavigate()

    const[userName,setUserName] = useState([]);
    const[userEmail,setUserEmail] = useState([]);
    const[userPass,setUserPass] = useState([]);
    const [user,setUser]= useState([]);
    
    
        useEffect(() => {
            instance.get("/users")
            .then(res => {setUser(res.data)} )
        }, []) 

                   


               const handleLogin  = () => {
                user.map(item => {
                    if(item.userName === userName && item.Email === userEmail && item.pass === userPass)  {
                        console.log(item.userName,item.Email,item.pass)
                        navigate('/profile') 
                    } else {
                        navigate('/registration') 
                        console.log('Wrong username or password!')
                        
                    }
                 } 
                )
                }
                        
<Profile userName/>
    return (
        
            <div className='auth-container'>
                <h3>LOGIN</h3>
                <input
                    type="text"
                    value={userName}
                    className='auth-input'
                    placeholder='username'
                   onChange={e => setUserName(e.target.value)}
             
                />
                <input
                    type="E-mail"
                    value={userEmail}
                    className='auth-input'
                    placeholder='E-mail'
                    onChange={e => setUserEmail(e.target.value)}
                />
                <input
                    type="password"
                    value={userPass}
                    className='auth-input'
                    placeholder='password'
                  onChange={e => setUserPass(e.target.value)}
                />
                <button
                    className='auth-submit'
                   onClick={handleLogin}
                >
                    Log in
                </button>
                 
                <div className='auth-navigate'>
                    <p className='auth-notification'>Don`t have an account?</p>
                    <button
                        className='auth-submit'
                       onClick={() => {navigate('/registration')}}
                    >Sign up</button>
                </div>
            </div>
        )
     }

   
   

export default Account