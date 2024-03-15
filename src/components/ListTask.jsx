
import {Task} from './Task';
import './ListTask.css';

export function ListTask({tasks, handleTaskChange}) {
	return (
		<>
			<div className='task-list'>
				<h1>Task List</h1>
				<hr/>
				<ul>
						{tasks.map((task, index) => (
							<li key = {index}>
									<Task task={task} handleTaskChange={handleTaskChange}/>
							</li>
						))}
					</ul>
					<hr/>
					<p>
						{/*	array --> recibe cada tarea --> condición --->*/}

						{tasks.filter(tasks => tasks.completed).length} task(s) completed
					</p>
			</div>
		</>
	)
}