import { useSelector } from "react-redux";

import { userSelector } from "../../redux/slices/userSlice";


const Profile = ({ navigateTo }) => {

    const user = useSelector(userSelector);

    return (
        <div className={"upcoming"}>
            <h5>Hello {user.name} this is your profile
            </h5>
            <h2> Your E-wallet balance is <b>: </b>
                {user.ewallet}
            </h2>
        </div>




    )

}
export default Profile;
