import Account from "../Account"
import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { userSelector } from "../../redux/slices/userSlice"
import { user } from "../../redux/slices/userSlice"

const Profile = ({navigateTo }) => {

    const user = useSelector(userSelector)

    const discountCode = () => {
        return (Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(2))}

    return (
        
        <div className={"upcoming"}>
            <h5>Hello {user.name} this is your profile
            </h5>
            <h2> Your personal discount code is <b>: </b>
                {discountCode()}
               
           
            </h2>
            
        </div>

    )
}
export default Profile
