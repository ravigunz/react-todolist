import React from 'react'
import TopNavigation from './common/TopNavigation'
import NewTaskAdd from './components/homepage/NewTaskAdd'
import TodoList from './homepage/TodoList'

const todoListData1 = ['First Item', 'Second Item', 'Third Item'];
const todoListData2 = ['First Item', 'Second Item', 'Third Item', 'Fourth Item'];
const todoListData3 = ['Ravi', 'Luxman', 'Mahesh']

export default function Homepage() {
  return (
    <div>
        <TopNavigation />
        <div style={{ display: 'flex', justifyContent: 'center'}}>
        <div>
        <h2>ToDo List</h2>
        <NewTaskAdd />
        <div style={{ marginTop: '20px'}}>
        <TodoList todoListData={todoListData1}/>
        </div>
        <br />
        <hr />
        <div style={{ marginTop: '20px'}}>
        <TodoList todoListData={todoListData2}/>
        </div>
        <br />
        <hr />
        <div style={{ marginTop: '20px'}}>
        <TodoList todoListData={todoListData3}/>
        </div>
        </div>
        </div>
    </div>
  )
}
