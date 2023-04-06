import React from 'react'
import TopNavigation from './common/TopNavigation'
import NewTaskAdd from './components/homepage/NewTaskAdd'
import TodoList from './homepage/TodoList'

export default function Homepage() {
  return (
    <div>
        <TopNavigation />
        <div style={{ display: 'flex', justifyContent: 'center'}}>
        <div>
        <h2>ToDo List</h2>
        <NewTaskAdd />
        <div style={{ marginTop: '20px'}}>
        <TodoList />
        </div>
        </div>
        </div>
    </div>
  )
}
