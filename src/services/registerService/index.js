import axios from "axios"


const API_URL = (process.env.REACT_APP_API_URL) ? process.env.REACT_APP_API_URL : "/api"


class RegisterService {


    register = (email, username, password, password2) => {
        const data = {
            email: email,
            username: username,
            password: password,
            password2: password2
        }
        return axios.post(`${API_URL}/account/register/`, data, {headers: {"Content-Type": "application/json"}})
    }

}

export default RegisterService