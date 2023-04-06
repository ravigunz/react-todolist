import React from 'react'

export default function SingleTodo({title}) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', border: '1px solid grey', padding: '10px'}}>
        <input type={'checkbox'} />
        <p>{title}</p>
        <button>Delete</button>
    </div>
  )
}
