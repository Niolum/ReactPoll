import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../../providers/authContext";

const ProtectedRoute = () => {
  const { user } = useContext(AuthContext)

  return (
    !!user?.tokens?.access ? <Outlet /> : <Navigate to="/login" replace />
  )
}

export default ProtectedRoute