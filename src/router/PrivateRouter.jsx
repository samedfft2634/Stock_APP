import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const PrivateRouter = () => {
  const {token} = useSelector(state=> state.auth)
  return true ? <Outlet /> : <Navigate to="/"  /> // token , true for nor
}

export default PrivateRouter
