import { useDispatch,  } from 'react-redux'
import ArticleServis from '../service/articel'
import CreatForm from '../ui/creat-form'
import { useState } from 'react'
import {  postArticleFailure, postArticleStart, postArticleSuccess } from '../slice/article'
import { useNavigate } from 'react-router-dom'


const CreatArticle = () => {
   
    const [title,setTitle] =useState('')
    const [description,setDescription] =useState('')
    const [body,setBody] =useState('')
    const dispatch=useDispatch()
    const naviget=useNavigate()
   
   
    const formSubmit=async(e)=>{
        e.preventDefault()
        const article={title,description,body}
        dispatch(postArticleStart())
        try {
            await ArticleServis.postArticle(article)
         
            dispatch(postArticleSuccess())
           
            naviget('/')
        } catch (error) {
            dispatch(postArticleFailure())
            
        }
    }

    

  return (
    <div className='text-center'>
        <h1 className='fs-2'>Creat artcle</h1>
        <div className='w-75 mx-auto'>
            <CreatForm formSubmit={formSubmit}/>
        </div>
    </div>
  )
}

export default CreatArticle