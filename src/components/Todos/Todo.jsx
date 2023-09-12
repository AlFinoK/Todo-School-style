import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import style from './Todo.module.css'

const Todo = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <div className={`${style.todo} ${todo.isCompleted ? style.completedTodo : ''}`}>
      <RiTodoFill className={style.todoIcon} />
      <div className={style.item}>{todo.text}</div>
      <div className={style.icons}>
        <RiDeleteBin2Line onClick={() => deleteTodo(todo.id)} className={style.deleteIcon} />
        <FaCheck className={style.checkIcon} onClick={() => toggleTodo(todo.id)} />
      </div>
    </div>
  )
}

export default Todo
