import { useState} from 'react';
import { Route, Routes } from 'react-router';
import ProtectedRoute from '../protectedRoute/ProtectedRoute.jsx';
import Header from "../appHeader/Header";
import Home from "../appHome/Home";
import Profile from '../appProfile/Profile.js';
import Login from "../appLogin/Login";
import Register from '../appRegister/Register';
import getCookie from "../utils.js";
import { AuthContextProvider } from '../../providers/authContext.jsx';
import { RegisterContextProvider } from '../../providers/registerContext.jsx';
import './styles'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const csrftoken = getCookie('csrftoken')
  
  return (
    <AuthContextProvider>
      <RegisterContextProvider>
        <>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <Routes>
          <Route element={<ProtectedRoute/>}>
            <Route
              path='/'
              element={<Home/>}
            />
            <Route
              path='/profile'
              element={<Profile/>}
            />
          </Route>
          <Route
            path='/login'
            element={<Login/>}
          />
          <Route
            path='/register'
            element={<Register/>}
          />

        </Routes>
        </>
      </RegisterContextProvider>
    </AuthContextProvider>
  )
}

export default App;
