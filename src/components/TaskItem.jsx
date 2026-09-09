import { TrashSimpleIcon, PencilSimpleIcon } from "@phosphor-icons/react";


function TaskItem({task, onToggleComplete}) {
  return (
    <div className="task-container">
    <div className="checkbox-text">
      <input type="checkbox" name="" id="" checked={task.completed} onChange={() => onToggleComplete(task.id)} />
      <p className="task-text">{task.text}</p>

    </div>
    <div className="edit-delete-btns">
      <button className="edit-delete">
        <TrashSimpleIcon size={32} weight="fill" />
      </button>
      <button className="edit-delete">
        <PencilSimpleIcon size={32} weight="fill" />
      </button>
    </div>
  </div>
  )
}

export default TaskItem 