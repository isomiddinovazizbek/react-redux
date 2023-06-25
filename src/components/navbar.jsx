import { Link, useNavigate } from "react-router-dom"
import {logo} from '../constants/index'
import { useDispatch, useSelector } from "react-redux"
import { removeItem } from "../helpers/help-storage"
import { logoutUser } from "../slice/auth"


const Navbar = () => {
  const {loggedIn,user}=useSelector(state=>state.auth)
  const naviget=useNavigate()
  const dispatch=useDispatch()

  const logoutHandler=()=>{
    dispatch(logoutUser())
    removeItem('token')
    naviget('/login')
  }
  
  return (
    <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-3">
      <Link to={'/'} className="text-decoration-none">
        <img src={logo} width="80" alt="" />
        <span className="fs-4 text-dark">News</span>
      </Link>

      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        {loggedIn ?(
          <>
            <p className="me-3 py-2 m-0 link-body-emphasis text-decoration-none">{user.username}</p>
            <Link className="me-3 py-2 link-body-emphasis text-decoration-none" to={'/creat-article'}>Creat</Link>
            <button className="btn btn-outline-danger" onClick={logoutHandler}>Logout</button>
          </>
          
        ):(
          <>
            <Link className="me-3 py-2 link-body-emphasis text-decoration-none" to={'/login'}>Login</Link>
            <Link className="me-3 py-2 link-body-emphasis text-decoration-none" to={'/register'}>Register</Link> 
          </>
        )}
        
      </nav>
    </div>
  )
}

export default Navbar