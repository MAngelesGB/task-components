
import {Task} from './Task'; 
export function ListTask({tasks}) {
	return (
		<>
			<ul>
				{tasks.map((task, index) => (
					<li key = {index}>
						<Task/>
						{task.title}
					</li>
				))}
			</ul>
		</>
	)
}