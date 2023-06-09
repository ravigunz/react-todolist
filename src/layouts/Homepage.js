import React from 'react'
import TopNavigation from './common/TopNavigation'
import NewTaskAdd from './components/homepage/NewTaskAdd'
import TodoList from './homepage/TodoList'

const todoListData1 = [
  {title: 'First Item', isCompleted: true}, 
  {title: 'Second Item', isCompleted: false}, 
  {title: 'Third Item', isCompleted: false},
];
const todoListData2 = [
  {title: 'First Item', isCompleted: false}, 
  {title: 'Second Item', isCompleted: false}, 
  {title: 'Third Item', isCompleted: true},
];
const todoListData3 = [
  {title: 'A', isCompleted: true}, 
  {title: 'B', isCompleted: true}, 
  {title: 'C', isCompleted: false},
];
// const todoListData1 = ['First Item', 'Second Item', 'Third Item'];
// const todoListData2 = ['First Item', 'Second Item', 'Third Item', 'Fourth Item'];
// const todoListData3 = ['Ravi', 'Luxman', 'Mahesh']

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
