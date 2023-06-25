import {Route,Routes} from 'react-router-dom';
import './App.css';
import { Main, Login, Register, Navbar,ArticleDetail,CreatArticle} from './components'
import { useEffect } from 'react';
import AuthService from './service/auth';
import { useDispatch } from 'react-redux';
import { signUserFailure, signUserSuccess } from './slice/auth';
import { getItem } from './helpers/help-storage';




const App=()=> {
  const dispatch=useDispatch()

  const getUser=async ()=>{
    try {
      const respons =await AuthService.getUser()
      dispatch(signUserSuccess(respons.user))
    } catch (error) {
      dispatch(signUserFailure)
    }
  }



  useEffect(()=>{
    const token=getItem('token')
    if(token){
      getUser()
    }
  },[])

  return (
   <div>
    <Navbar/>
    <div className="container">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/article/:slug' element={<ArticleDetail/>}/>
        <Route path='/creat-article' element={<CreatArticle/>}/>
      </Routes>
    </div>
   </div>
  );
}

export default App;
