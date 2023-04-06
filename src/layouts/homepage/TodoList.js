import React from 'react'
import SingleTodo from '../components/todoList/SingleTodo'

const todoListData = ['First Item', 'Second Item', 'Third Item'];

export default function TodoList() {
  return (
    <div>
        {todoListData.map((val, key) => {
            return <SingleTodo key={key} title={val}/>
        })}
    </div>
  )
}
