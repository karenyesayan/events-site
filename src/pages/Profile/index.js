import { useEffect, useMemo } from "react"

const Profile = ({navigateTo}) => {

    
    const discountCode = () => {
        return (Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(2))}

   console.log(discountCode())
    return (
        <div className={"upcoming"}>
            <h5>Hello {} this is your profile
            </h5>
            <h2> Your personal discount code is <b>: </b>
                {discountCode()}
           
            </h2>
            
        </div>

    )
}
export default Profile
