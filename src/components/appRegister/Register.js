import './Register.css'
import { useContext, useState } from 'react';
import { RegisterContext } from '../../providers/registerContext';
import errorHandler from '../errorHandler/ErrorHandler';

  
const Register = (props) => {
  const {register} = useContext(RegisterContext)
  const [formEmail, setFormEmail] = useState()
  const [formUsername, setFormUsername] = useState()
  const [formPassword, setFormPassword] = useState()
  const [formPassword2, setFormPassword2] = useState()
  const [errorMessage, setErrorMessage] = useState('')
  const registerHandler = (e) => {
    e.preventDefault()
    register(formEmail, formUsername, formPassword, formPassword2)
    .catch(err => {
      const error = errorHandler(err)
      setErrorMessage(error)
    })
  };

  return (
    <div className="container register">
      <form onSubmit={registerHandler} className="register__form">
        <label htmlFor="exampleEmail"> Email </label>
        <input
            className="input"
            type="text"
            name="email"
            id="exampleEmail"
            onChange={(ev) => setFormEmail(ev.currentTarget.value)}
        />
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
        <label htmlFor="examplePassword2"> Repeat Password </label>
        <input
          className="input"
          type="password"
          name="password2"
          id="examplePassword2"
          onChange={(ev) => setFormPassword2(ev.currentTarget.value)}
        />
        {errorMessage !== '' && <span className='error'>{errorMessage}</span>}
        <button 
          className="button"
          type="submit">
              Sign In
        </button>
      </form>
    </div>
  )
};

export default Register;