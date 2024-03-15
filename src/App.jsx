import {useState} from 'react'
import './App.css'
import { ListTask } from './components/ListTask'

const arr = [
  {id: 1, title: 'Do laundry', completed: false},
  {id : 2, title: 'Clean bathroom', completed: true},
  {id: 3, title: 'Cook dinner', completed: false}
]



function App() {
  const [tasks, setTasks] = useState(arr)
  const handleTaskChange = (id) => {
    //[...tasks] is a shallow copy of the tasks array
    setTasks(tasks.map(task => task.id === id ? {...task, completed:!task.completed} : task))
  }
  return (
    <>
      <ListTask tasks = {tasks} handleTaskChange={handleTaskChange}/>
    </>
  )
}

export default App
