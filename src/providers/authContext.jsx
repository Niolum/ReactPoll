import { createContext } from "react";
import AuthService from "../services/authService";
import { useNavigate } from "react-router";


const DefaultProps = {
    login: () => null,
    logout: () => null,
    user: null
}


export const AuthContext = createContext(DefaultProps)

export const AuthContextProvider = ({
    children,
}) => {
    let authService = new AuthService()
    const navigate = useNavigate()
    const login = (username, password) => {
        const result = authService.login(username, password)
            .then(({ data }) => {
                authService.setUserInLocalStorage(data)
                const accessToken = data.tokens.access
                const refreshToken = data.tokens.refresh
                authService = new AuthService(
                    accessToken,
                    refreshToken
                )
                navigate('/', {replace: true})
            })
        return result
    }

    const user = authService.getCurrentUser()

    const logout = () => {
        const refreshToken = user.tokens.refresh
        const accessToken = user.tokens.access

        authService = new AuthService(
            accessToken,
            refreshToken
        )

        const result = authService.logout()
        return result
    }



    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext