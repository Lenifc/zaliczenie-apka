import React, { useState } from 'react'

const AddTodo = ({addTodo}) => {
  const [content, setContent] = useState('')

  const handleChange = (e) => {
    setContent(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if(content.trim().length>0){
    addTodo({
      id: Math.floor((Math.random()*10000)+2),
      content: content
    }) //props to parent
    setContent('')
  }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add a new todo:</label>
        <input type="text" onChange={handleChange} value={content} placeholder="Add new todo by pressing Enter key"/>
      </form>
    </div>
  )
}

export default AddTodo
