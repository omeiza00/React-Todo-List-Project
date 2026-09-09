import { PlusIcon } from "@phosphor-icons/react";
import { useState } from "react";

function TaskInput({ onAddTask }) {
  const [inputValue, setInputValue] = useState("");

  const handleAddClick = () => {
        onAddTask(inputValue);
        setInputValue('');
    }
  return (      
    <div>
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      name=""
      id=""
    />

    <button onClick={handleAddClick}> <PlusIcon size={32} /> Add</button>
    </div>
  );
}

export default TaskInput;
