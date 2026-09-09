import TaskItem from "./TaskItem"

function TaskList({tasks, onToggleComplete}) {
  return (
    <div>
        {
            tasks.map((task) => {
                return <TaskItem task = {task} onToggleComplete={onToggleComplete} key = {task.id}/>
            })
        }
    </div>
  )
}

export default TaskList

