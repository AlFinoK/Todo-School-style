import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import style from './Todo.module.css'

const Todo = ({ todo, deleteTodo }) => {
  return (
    <div className={style.box}>
      <RiTodoFill className={style.todoIcon} />
      <div className={style.item} onDoubleClick={() => deleteTodo(todo.id)}>
        {todo.text}
      </div>
      <div className={style.icons}>
        <RiDeleteBin2Line className={style.deleteIcon} />
        <FaCheck className={style.checkIcon} />
      </div>
    </div>
  )
}

export default Todo
