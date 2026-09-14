import TaskItem from "./TaskItem"
import emptyImg from '../assets/emptyImg.svg'

function TaskList({tasks, onToggleComplete, deleteTask, editTask}) {
  return (
    <div>
        {
          tasks.length === 0 ? 
          (
          <div>
            <img src={emptyImg} alt="No Tasks"/>
            <p>No tasks yet. Add one to get started!!..</p>
          </div>
          ) :
            tasks.map((task) => {
                return <TaskItem task = {task} onToggleComplete={onToggleComplete} deleteTask={deleteTask} onEditTask={editTask} key = {task.id}/>
            })
        }
    </div>
  )
}

export default TaskList

