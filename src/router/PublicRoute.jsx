import { Navigate, Outlet } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import { PRIVATE } from "../config/routes/paths";
import useAuthContext from "../hook/useAuthContext";

const PublicRoute = () => {
  const { userAuth, user } = useAuthContext()

  if(userAuth && !user)
  {
      return <Loading/>
  }
  if(userAuth && user)
  {
      return <Navigate to={PRIVATE}/>
  }
  return  <Outlet/>  
}
export default PublicRoute;
