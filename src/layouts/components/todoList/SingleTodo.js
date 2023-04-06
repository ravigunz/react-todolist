import React from 'react'

export default function SingleTodo({title, isCompleted}) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', border: '1px solid grey', padding: '10px', borderRadius: '10px'}}>
        <input type={'checkbox'} checked={isCompleted}/>
        <p>{title}</p>
        <button>Delete</button>
    </div>
  )
}
