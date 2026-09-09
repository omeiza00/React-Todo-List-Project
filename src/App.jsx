import { useState } from 'react'
import './App.css'
import ThemeBtn from './components/ThemeBtn'
import Header from './components/Header'
import TaskList from './components/TaskList'
import TaskInput from './components/TaskInput'

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false)

  const [tasks, setTasks] = useState([
    {id: 1, text: "Wash the dishes", completed: false},
    {id: 2, text: "Take out the trash", completed: true},
    {id: 3, text: "Do the laundry", completed: false},
  ])

  function addTask(inputText) {
    const newTask = {id: Date.now(), text: inputText, completed: false}

    setTasks([...tasks, newTask]);
  }

  function deleteTask(delId) {
    
  }
  

  
  function onToggleComplete(id) {
    setTasks(
      tasks.map((task) => {
        if(task.id === id){
          return {...task, completed: !task.completed}
        }
        return task
      })
    )
  }

  return (
    <div className = {isDarkMode ? "dark-mode" : ""}>
      <Header>
        <ThemeBtn onToggle={() => setIsDarkMode(!isDarkMode)} isDarkMode={isDarkMode} />
      </Header>
      <TaskInput onAddTask={addTask}/>
      <TaskList tasks={tasks} onToggleComplete={onToggleComplete} />
    </div>
  )
}

export default App
