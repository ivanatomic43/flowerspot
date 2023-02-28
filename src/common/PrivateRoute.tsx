import { Navigate, Outlet } from "react-router";
import { useAuthStatus } from "../hooks/useAuthStatus";

function PrivateRoute() : JSX.Element {

  const { loggedIn, checkingStatus } = useAuthStatus();
  
  return (
    <div>
      { loggedIn ? <Outlet /> : <Navigate to="/" /> }
    </div>
  )
}

export default PrivateRoute
