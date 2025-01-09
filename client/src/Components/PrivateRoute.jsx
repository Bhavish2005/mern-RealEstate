import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

export default function PrivateRoute() {
    const { currentUser } = useSelector(state => state.user)
  return (//this one Importantly uses Outlet to render the children of the PrivateRoute
    currentUser?<Outlet/>:<Navigate to={'/sign-in'}/>
  )
}
