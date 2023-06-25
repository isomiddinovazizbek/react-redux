import { useSelector } from 'react-redux'
import {TextArea,Input} from '../ui'
import { useState } from 'react'

const CreatForm = ({formSubmit}) => {
    const {isLoading}=useSelector(state=>state.article)
    const [title,setTitle] =useState('')
    const [description,setDescription] =useState('')
    const [body,setBody] =useState('')
    
    
  return (
    <div>
        <form  onSubmit={formSubmit}>
                <Input label={'Title'} state={title} setState={setTitle}/>
                <TextArea label={'Desvription'} state={description} setState={setDescription}/>
                <TextArea label={'Body'} state={body} setState={setBody} height='300px'/>

                <button className="btn btn-primary w-100 py-2" disabled={isLoading} type="submit">
                    {isLoading ? "Loading..." : "Creat"}
                </button>
            </form>
    </div>
  )
}

export default CreatForm