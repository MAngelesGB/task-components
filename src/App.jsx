import './App.css'
import { ListTask } from './components/ListTask'

const tasks = [
  {title: 'Do laundry', completed: false},
  {title: 'Clean bathroom', completed: false},
  {title: 'Cook dinner', completed: false}
]

function App() {
  return (
    <>
      <ListTask tasks = {tasks}/>
    </>
  )
}

export default App
