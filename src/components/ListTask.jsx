
import {Task} from './Task'; 
export function ListTask({tasks, handleTaskChange}) {
	return (
		<>
			<ul>
				{tasks.map((task, index) => (
					<li key = {index}>
						<Task task={task} handleTaskChange={handleTaskChange}/>
					</li>
				))}
			</ul>
		</>
	)
}