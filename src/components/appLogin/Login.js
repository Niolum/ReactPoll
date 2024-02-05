import './Login.css'
import { useContext, useState } from 'react';
import AuthContext from '../../providers/authContext';
import errorHandler from '../errorHandler/ErrorHandler';

  
const Login = (props) => {
  const {login} = useContext(AuthContext)
  const [formUsername, setFormUsername] = useState()
  const [formPassword, setFormPassword] = useState()
  const [errorMessage, setErrorMessage] = useState('')
  const loginHandler = (e) => {
    e.preventDefault()
    login(formUsername, formPassword)
    .catch(err => {
      const error = errorHandler(err)
      setErrorMessage(error)
    })
  };

  return (
    <div className="container login">
      <form onSubmit={loginHandler} className="login__form">
        <label htmlFor="exampleUsername"> Username </label>
        <input 
          className="input"
          type="text"
          name="username"
          id="exampleUsername"
          onChange={(ev) => setFormUsername(ev.currentTarget.value)}
        />
        <label htmlFor="examplePassword"> Password </label>
        <input
          className="input"
          type="password"
          name="password"
          id="examplePassword"
          onChange={(ev) => setFormPassword(ev.currentTarget.value)}
        />
        {errorMessage !== '' && <span className='error'>{errorMessage}</span>}
        <button 
          className="button"
          type="submit">
              Login
        </button>
      </form>
    </div>
  )
};

export default Login;