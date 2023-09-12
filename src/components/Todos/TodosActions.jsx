import React from 'react'
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Button from '../UI/Button'
import style from './TodosActions.module.css'

const TodosActions = ({ resetTodos, clearCompletedTodos }) => {
  return (
    <div className={style.buttonBox}>
      <Button onClick={resetTodos}>
        <RiRefreshLine title="Reset Todos" />
      </Button>
      <Button onClick={clearCompletedTodos}>
        <RiDeleteBin2Line title="Clear Completed Todos" />
      </Button>
    </div>
  )
}

export default TodosActions
