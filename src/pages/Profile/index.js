import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

import { user, userSelector } from "../../redux/slices/userSlice";
import instance from "../../api/axios"
import { movieSelector } from "../../redux/slices/moviesSlice";
import { useEffect } from "react";


const Profile = ({ navigateTo }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { name, email, pass, ewallet, selectedEvents } = useSelector(userSelector);
    const activMovie = useSelector(movieSelector);

    const handleLogOut = () => {
        dispatch(user({}));
        navigate('/')
    }

    return (

        <div className="profile">
            <img src={"http://tse3.mm.bing.net/th/id/OIP.vpU_KUELPRjvDl4PvY0xIAHaHa?w=179&h=180&c=7&r=0&o=5&pid=1.7"} className="profile-img" />
            <p className="label">
                {name}
            </p>
            <p className="label">
                {email}
            </p>
            <p className="label">
                Your E-wallet balance is <b>: </b> {ewallet} dr
            </p>
            <div className="profil-user">
                <center>
                    <span className="profile-ticket-title">Your tickets </span>
                </center>
                <div >{
                    activMovie.title && (
                        <div key={activMovie.id} className="selectedEvents">
                            <div className="selectedEvents-title" >
                                <p >{activMovie.title}</p>
                            </div>
                            <div>
                                <img src={activMovie.img} className="selectedEvents-img" />
                                <span className="selectedEvents-title"> {activMovie.date}</span>
                            </div>
                        </div>)
                }
                    {selectedEvents.map(item => (
                        <div key={item.id} className="selectedEvents">
                            <div className="selectedEvents-title" >
                                <p >{item.title}</p>
                            </div>
                            <div>
                                <img src={item.img} className="selectedEvents-img" />
                                <span className="selectedEvents-title"> {item.date}</span>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
            <div >
                <button className="profile-edit-logout" onClick={handleLogOut}>
                    Log out
                </button>
            </div>
        </div>
    )
}
export default Profile;
