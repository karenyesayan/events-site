import { useState, useEffect } from "react";
import instance from "../../api/axios";
import Registration from "../Registration";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { user } from "../../redux/slices/userSlice";



const Account = (navigateTo) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
   


   
    

    const [userName,setUserName] = useState("");
    const [userEmail,setUserEmail] = useState("");
    const [userPass,setUserPass] = useState("");
    const [users,setUsers]= useState([]);
   
  
    
    useEffect(() => {
        instance.get("/users")
            .then(res => {setUsers(res.data)
               } 
            )
    }, [])

    const admin = {
        id: 0,
        name: "ADMIN",
        email: "ADMIN@gmail.com",
        pass: "ADMIN"
    }


                  const handleLogin = () => {
                  
                   
                    users.map(item => {

                    if(item.name === userName && 
                       item.email === userEmail && 
                       item.pass === userPass )  {
                        
                        dispatch((user(item)));
                    navigate('/profile') 
                   
                     
                                  

                     } else if (admin.name === userName && admin.email === userEmail && admin.pass === userPass)  {
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
    <form className={"form"} onSubmit={handleLogin}>  
            <div className={"group"}>
            <label className={"label"}> Name 
                <input
                    type="text"
                    value={userName} 
                    className = {"input"}
                    placeholder='username'
                    onChange={e => setUserName(e.target.value)} 
                />
            </label>
            
            </div>
            <div className={"group"}>
            <label className={"label"}> Email 
                <input
                    type="E-mail"
                    value={userEmail}
                    className = {"input"}
                    placeholder='E-mail'
                    onChange={e => setUserEmail(e.target.value)} 
                />
                </label>
               
                </div>
                <div className={"group"}>
            <label className={"label"}> Password 
                <input
                    type="password"
                    value={userPass}
                    className = {"input"}
                    placeholder='password'
                    onChange={e => setUserPass(e.target.value)} 
                />
                </label>
               
                </div>
                <div className={"group"}>
            <center>
                <button className = {"button"}  type={"submit"}> login</button>
                 
            
               
                                 
                <div className='auth-navigate'>
                    <p className="p">Don`t have an account?</p>
                   
                        <button
                        className = {"button"}
                       onClick={() => {navigate('/registration')}}
                    >Sign up
                    </button>
                    
                   
                </div>
                </center>
                </div>
            
        </form>
    
        </div>
       
       
        )
     }

   
   

export default Account