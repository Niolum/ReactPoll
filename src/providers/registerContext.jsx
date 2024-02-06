import { createContext } from "react";
import RegisterService from "../services/registerService";
import { useNavigate } from "react-router";


const DefaultProps = {
    register: () => null
}


export const RegisterContext = createContext(DefaultProps)

export const RegisterContextProvider = ({
    children,
}) => {
    let registerService = new RegisterService()
    const navigate = useNavigate()
    const register = (email, username, password, password2) => {
        const result = registerService.register(email, username, password, password2)
            .then(() => {
                navigate('/login', {replace: true})
            })
        return result
    }

    return (
        <RegisterContext.Provider
            value={{
                register
            }}
        >
            {children}
        </RegisterContext.Provider>
    )
}

export default RegisterContext