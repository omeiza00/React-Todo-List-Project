import { useState } from 'react'
import './App.css'
import ThemeBtn from './components/ThemeBtn'
import Header from './components/Header'
import TaskList from './components/TaskList'
import TaskInput from './components/TaskInput'
import FilterBar from './components/FilterBar'

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false)
  const [filter, setFilter] = useState('all');
  

  const [tasks, setTasks] = useState(() => {
    const allTasks = localStorage.getItem('tasks')
    if (allTasks === null) {
      return [];
    }
    return JSON.parse(allTasks);
  })

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') {
      return true;
    } else if (filter === 'pending') {
      return task.completed === false
    } else {
      return task.completed === true
    }
  })

  const tasksLeft = tasks.filter((task) => {
    return task.completed === false
  }).length;

  function addTask(inputText) {
    const newTask = {id: Date.now(), text: inputText, completed: false}
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks)
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
  }

  function deleteTask(id) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
  }

  function onToggleComplete(id) {
    const updatedTasks = tasks.map((task) => {
        if(task.id === id){
          return {...task, completed: !task.completed}
        }
        return task
      });
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
  }

  function editTask(id, newText) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return{...task, text: newText}
      }
      return task
    })
    setTasks(updatedTasks)
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
  }

  return (
    <div className = {isDarkMode ? "body dark-mode" : "body light-mode"}>
      <Header>
        <ThemeBtn onToggle={() => setIsDarkMode(!isDarkMode)} isDarkMode={isDarkMode} />
      </Header>
      <h2 className='heading'>MY TASKS</h2>
      <div className='main-task-div'>
      <TaskInput onAddTask={addTask}/>
    <FilterBar onFilterChange={setFilter} activeFilter={filter} tasksLeft={tasksLeft} totTasks={tasks}/>
      <TaskList tasks={filteredTasks} onToggleComplete={onToggleComplete} deleteTask={deleteTask} editTask={editTask} />
      </div>
    </div>
  )
}

export default App
