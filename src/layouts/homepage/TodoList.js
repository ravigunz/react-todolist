import React from 'react'
import SingleTodo from '../components/todoList/SingleTodo'

export default function TodoList({todoListData}) {
  return (
    <div>
        {todoListData.map((val, key) => {
            return (
                <div key={key} style={{ marginTop: '10px'}}>
                    <SingleTodo title={val}/>
                </div>
            )
        })}
    </div>
  )
}
