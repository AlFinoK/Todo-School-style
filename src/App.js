import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'

const App = () => {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <>
      <div className="wrapper">
        <h1 className="title">Todo App</h1>
        <TodoForm addTodo={addTodoHandler} />
        <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
      </div>
      <a className="signature" href="https://github.com/AlFinoK" target="_blank">
        Nikita Rudenko's projects
      </a>
    </>
  )
}

export default App
