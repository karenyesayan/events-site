import { useSelector } from "react-redux";

import { userSelector } from "../../redux/slices/userSlice";


const Profile = ({navigateTo }) => {

    const user = useSelector(userSelector);

    const discountCode = () => {
        return (Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(2)
        )
    }

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
