

const TextArea = ({label,state,setState,height='100px'}) => {
  return (
    <div className="form-floating">
        <textarea  
        id="floatingTextarea2" 
        value={state}
        onChange={e=>setState(e.target.value)}
        className="form-control" 
        placeholder={label} 
        style={{height:height}}>

        </textarea>

        <label htmlFor="floatingTextarea2">{label}</label>
    </div>
  )
}

export default TextArea