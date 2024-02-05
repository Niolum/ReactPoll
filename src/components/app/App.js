import { useState} from 'react';
import { Route, Routes } from 'react-router';
import ProtectedRoute from '../protectedRoute/ProtectedRoute.jsx';
import Header from "../appHeader/Header";
import Home from "../appHome/Home";
import Login from "../appLogin/Login";
import getCookie from "../utils.js";
import { AuthContextProvider } from '../../providers/authContext.jsx';
import './styles'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const csrftoken = getCookie('csrftoken')
  
  return (
    <AuthContextProvider>
      <>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route element={<ProtectedRoute/>}>
          <Route
            path='/'
            element={<Home/>}
          />
        </Route>
        <Route
          path='/login'
          element={<Login/>}
        />

      </Routes>
      </>
    </AuthContextProvider>
  )
}

export default App;
