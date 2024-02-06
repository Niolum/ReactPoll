import { useNavigate } from 'react-router'
import './Header.css'
import { useContext } from 'react'
import AuthContext from '../../providers/authContext'



const Header = () => {

    const navigate = useNavigate()
    const {user, logout} = useContext(AuthContext)
    return (
        <div className="container header">
            <h1>ReactPoll</h1>
            <div className='container header__btn'>
                {user ? 
                    <>
                        <button
                            className="button profile__button"
                            type="button"
                            onClick={() => {
                                navigate("/profile", {replace: true})
                            }}
                        >
                            Profile
                        </button>
                        <button
                            className="button signout__button"
                            type="button"
                            onClick={() => {
                                logout()
                                navigate("/login", {replace: true})
                            }}
                        >
                            Sign Out
                        </button>
                    </>
                :
                    <button
                        className="button signin__button"
                        type="button"
                        onClick={() => navigate("/register", {replace: true})}
                    >
                        Sign In
                    </button>
                }
                
            </div>
        </div>
    )
}

export default Header