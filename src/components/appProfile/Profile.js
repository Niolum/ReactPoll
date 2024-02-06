import { useContext } from "react"
import AuthContext from "../../providers/authContext"


const Profile = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
    return(
        <div className="container">
            <span>{user.username}</span>
            <span>{user.email}</span>
        </div>
    )
}

export default Profile