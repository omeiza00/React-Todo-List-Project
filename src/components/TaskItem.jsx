import { TrashSimpleIcon, PencilSimpleIcon } from "@phosphor-icons/react";
import { useState } from "react";
import '../styles/TaskItem.css'


function TaskItem({task, onToggleComplete, deleteTask, onEditTask}) {

  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(task.text)

  return (
    <div className="task-container">
    <div className="checkbox-text">
      <input className="tickBox" type="checkbox" name="" id="" checked={task.completed} onChange={() => onToggleComplete(task.id)} />
      {isEditing ? (
        <input
      type="text"
      value={editText}
      onChange={(e) => setEditText(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          onEditTask(task.id, editText);
          setIsEditing(false)
        }
    }}
      name=""
      id=""
    />
      ) : (
      <p className={task.completed ? "task-text completed" : "task-text"}>{task.text}</p>
    )}

    </div>
    <div className="edit-delete-btns">
      <button className="edit-delete" onClick={() => deleteTask(task.id)}>
        <TrashSimpleIcon size={19} weight="fill" />
      </button>
      <button className="edit-delete" onClick={() => setIsEditing(true)}>
        <PencilSimpleIcon size={19} weight="fill" />
      </button>
    </div>
  </div>
  )
}

export default TaskItem 