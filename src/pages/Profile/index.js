import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";



import { user, userSelector } from "../../redux/slices/userSlice";
import instance from "../../api/axios"


const Profile = ({ navigateTo }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {id,name,email,pass,ewallet} = useSelector(userSelector);
    const[editName,setEditName] = useState(name);
    const[editEmail,setEditEmail] = useState(email);
    const[editPass,setEditPass] = useState(pass);
    const[editEwallet,setEditEwallet] = useState(ewallet);
    const[isEdit,setIsEdit] = useState(false);


    const handleLogOut = () => {
        dispatch(user({}));
        navigate('/')
    }
const userEdit ={
    name:editName,
    email:editEmail,
    pass:editPass,
    ewallet:editEwallet

}
    const handleEditProfile = () => {
        instance.patch(`user/${id}`, {userEdit})
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
            </div>
            <div >
                <button className="profile-edit-logout" onClick={handleLogOut}>
                    Log out
                </button>
                <button className="profile-edit-logout" >
                    Edit Profile
                    
                
                </button>
               
            </div>
        </div>
    )
}
export default Profile;
