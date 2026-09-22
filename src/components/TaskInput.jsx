import { PlusIcon } from "@phosphor-icons/react";
import { useState } from "react";
import '../styles/TaskInput.css'

function TaskInput({ onAddTask }) {
  const [inputValue, setInputValue] = useState("");

  const handleAddClick = () => {
    if (inputValue.trim() === '') {
      return
    }
      onAddTask(inputValue.trim());
        setInputValue('');
    }
  return (      
    <div className="input-container">
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      name=""
      id=""
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleAddClick();
        }
    }}
    placeholder="Add task here..."
    />

    <button onClick={handleAddClick} className="add-btn" disabled={inputValue.trim() === ''}><PlusIcon size={20}/> Add</button>
    </div>
  );
}

export default TaskInput;
