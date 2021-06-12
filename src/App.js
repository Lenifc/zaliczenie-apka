import React, { useState, useEffect } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'


const App = ({addTodo, deleteTodo}) => {
  const [todos, setTodos] = useState([
    {id: 1, content: 'First todo. Add another one below'}
  ])

  deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  
  addTodo = (todo) => {
    setTodos([...todos, todo])
  }

  useEffect(() => {
    if(localStorage.getItem('savedTodos')) setTodos(JSON.parse(localStorage.getItem('savedTodos')))
  }, []) // onMounted
  useEffect(() => {
    console.log('check');
    localStorage.setItem('savedTodos', JSON.stringify(todos))
  }, [todos]) // on value change
  

  return (
    <div className="todo-app container">
      <h1 className="center blue-text">Todo App</h1>
      <Todos todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </div>
  )
}
 
export default App;
