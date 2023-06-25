import { useEffect, useState } from "react"
import { logo } from "../constants"
import { Input } from "../ui"
import { useDispatch, useSelector } from "react-redux"
import { signUserFailure, signUserStart, signUserSuccess,  } from "../slice/auth"
import AuthService from "../service/auth"
import {ValidationError} from "./"
import { useNavigate } from "react-router-dom"


const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch=useDispatch()
  const {isLoading,loggedIn}=useSelector(state=>state.auth)
  const navigate=useNavigate()

  const loginHandler= async e=>{
    e.preventDefault()
    dispatch(signUserStart())
    const user ={username:name,email:email,password:password}
    try{
      const respons =await AuthService.userRegister(user)
      dispatch(signUserSuccess(respons.user))
      navigate('/')
    }catch(error){
      dispatch(signUserFailure(error.respons.data.errors))
    }
  }

  useEffect(()=>{
    if(loggedIn) {
      navigate('/')
    }
  },[loggedIn])

  return (
    <div className="text-center mt-5">
    <main className='form-singin w-25 m-auto'>
    <form>
      <img className="mb-2" src={logo} alt="" width="92"  />
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
      <ValidationError/>

      <Input label={"Username"} type={"text"} state={name} setState={setName}/>
      <Input label={"Email address"} type={"email"} state={email} setState={setEmail}/>
      <Input label={"Password"} type={"password"} state={password} setState={setPassword}/>

      <div className="form-check text-start my-3">
        <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
        <label className="form-check-label" for="flexCheckDefault">
          Remember me
        </label>
      </div>
      <button className="btn btn-primary w-100 py-2" type="submit" disabled={isLoading} onClick={loginHandler}>
        {isLoading ? "Loading.." : "Sign up"}
      </button>
      <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
    </form>
    </main>
    </div>
  )
}

export default Register