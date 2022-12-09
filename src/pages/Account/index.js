import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import instance from "../../api/axios";
import { user, userSelector } from "../../redux/slices/userSlice";

const Account = (navigateTo) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { name } = useSelector(userSelector);

    useEffect(() => {
        if (name) {
            navigate('/profile')
        }
    }, [name])

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPass, setUserPass] = useState("");

    const admin = {
        id: 0,
        name: "ADMIN",
        email: "ADMIN@gmail.com",
        pass: "ADMIN"
    }

    const handleLogin = () => {
        instance.get("users")
            .then(res => {
                const activUser = res.data.find(({ name, email, pass }) => name === userName && email === userEmail && pass === userPass)
                if (!activUser) {
                    navigate('/registration')
                } else if (admin.name === userName && admin.email === userEmail && admin.pass === userPass) {
                    navigate('/admin')
                }
                else {
                    dispatch(user(activUser));
                    navigate('/profile')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className={"upcoming"}>
            <title className={"login-registration"}>Personal details</title>
            <div className={"form"} >
                <div className={"group"}>
                    <label className={"label"}> Name
                        <input
                            type="text"
                            value={userName}
                            className={"input"}
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
                            className={"input"}
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
                            className={"input"}
                            placeholder='password'
                            onChange={e => setUserPass(e.target.value)}
                        />
                    </label>
                </div>
                <div className={"group"}>
                    <center>
                        <button className={"button"} onClick={handleLogin}> login</button>
                        <div className='auth-navigate'>
                            <p className="p">Don`t have an account?</p>
                            <button
                                className={"button"}
                                onClick={() => { navigate('/registration') }}
                            >Sign up
                            </button>
                        </div>
                    </center>
                </div>
            </div>
        </div>
    )
}

export default Account;