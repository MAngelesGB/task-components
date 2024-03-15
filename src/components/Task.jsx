import './Task.css';
export function Task({task, handleTaskChange}) {
  
  return (
    <>
			<input type="checkbox" onChange={()=>handleTaskChange(task.id)} checked={task.completed} />
      <label className="text">{task.title}</label>
		</>
  )
}