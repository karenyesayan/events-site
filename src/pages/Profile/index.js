import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


import { userSelector } from "../../redux/slices/userSlice";

const Profile = ({ navigateTo }) => {

    const navigate = useNavigate();

    const {name,email,ewallet} = useSelector(userSelector);

    return (

        <div className="profile">
            <img src={"http://tse3.mm.bing.net/th/id/OIP.vpU_KUELPRjvDl4PvY0xIAHaHa?w=179&h=180&c=7&r=0&o=5&pid=1.7"} className="profile-img" />
            <p className="profile-title">
                {name}
            </p>
            <p className="profile-title">
                {email}
            </p>
            <p className="profile-title">
                Your E-wallet balance is <b>: </b> {ewallet} dr
            </p>
            <div className="profil-user">
                <center>
                    <span className="profile-ticket-title">Your tickets </span>
                </center>
            </div>
        </div>
    )
}
export default Profile;
