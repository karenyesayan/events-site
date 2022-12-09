import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import instance from "../../api/axios";

import {eventSelector } from "../../redux/slices/eventSlice";
import { user, userSelector } from "../../redux/slices/userSlice";


const Profile = ({ navigateTo }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { name, email, ewallet, selectedEvents } = useSelector(userSelector);
    const { id, title, img, date } = useSelector(eventSelector);

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
                    title && (
                        <div key={id} className="selectedEvents">
                            <div className="selectedEvents-title" >
                                <p >{title}</p>
                            </div>
                            <div>
                                <img src={img} className="selectedEvents-img" />
                                <span className="selectedEvents-title"> {date}</span>
                            </div>
                        </div>)
                }
                    {selectedEvents.map(item  => (
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
            <div className="profil-user">
                <center>
                    <span className="profile-ticket-title">Your Online Movies</span>
                </center>
                </div>
                <button className="profile-edit-logout" onClick={handleLogOut}>
                    Log out
                </button>
            </div>
        </div>
    )
}
export default Profile;
