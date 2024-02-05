import axios from "axios"


const API_URL = (process.env.REACT_APP_API_URL) ? process.env.REACT_APP_API_URL : "/api"


class AuthService {
    accessToken
    refreshToken
    headers

    constructor(
        accessToken,
        refreshToken,
    ) {
        this.accessToken = accessToken
        this.refreshToken = refreshToken

        if (accessToken) {
            this.headers = {
                Authorization: `Bearer ${this.accessToken}`
            }
        } else {
            this.headers = {}
        }
    }

    login = (username, password) => {
        const data = {
            username: username,
            password: password
        }
        return axios.post(`${API_URL}/account/login/`, data, { headers: this.headers })
    }

    logout = () => {
        localStorage.removeItem("user");
    }

    getCurrentUser = () => {
        const user = localStorage.getItem("user");
        return JSON.parse(user);
    }

    setUserInLocalStorage(data) {
        localStorage.setItem("user", JSON.stringify(data));
    }

}

export default AuthService