export function Task({task, handleTaskChange}) {
  
  return (
    <>
			<input type="checkbox" onChange={()=>handleTaskChange(task.id)} checked={task.completed} />
      {task.title}
      {task.completed ? 'Completed' : 'Not Completed'}
		</>
  )
}